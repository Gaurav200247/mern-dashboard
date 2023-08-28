const DataModel = require("../Model/Model");
const createObjectFromArrayPairs = require("../Utils/CreateObjectFromArrayPairs");

// //-------get filtered data-------
const getAllDataPaginated = async (req, res) => {
  const {
    sector,
    topic,
    source,
    pestle,

    region,
    country,

    end_year,
  } = req.query;

  let queryObj = {};

  //--------------Range type filters --------------

  if (end_year) {
    queryObj.end_year = { $lte: parseInt(end_year) };
  }

  //--------------category type filters --------------
  if (sector) {
    queryObj.sector = sector;
  }

  if (country) {
    queryObj.country = country;
  }

  if (region) {
    queryObj.region = { $regex: region };
  }

  if (topic) {
    queryObj.topic = topic;
  }

  if (source) {
    queryObj.source = source;
  }

  if (pestle) {
    queryObj.pestle = pestle;
  }

  // --------------page logic--------------
  console.log(queryObj);

  let result = DataModel.find(queryObj);

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 50;
  const skip = (page - 1) * limit;

  let paginatedResult = result.skip(skip).limit(limit);

  // --------------getting data--------------

  const data = await paginatedResult; // all filtered data but with pagination
  const allData = await DataModel.find(queryObj); // all filtered data values

  // --------------response--------------
  res.status(200).json({
    success: true,
    TotalHits: allData.length,
    nbHits: data.length,
    data,
  });
};

//-------get all data analysis-------
const getAllData = async (req, res) => {
  // --------------for data visulaizaion--------------
  // [note : Visualize data in pages with certain entities or with filters]

  // Intensity
  // Likelihood
  // Relevance
  // Year
  // Country
  // Topics
  // Region
  // City

  const allData = await DataModel.find({}); // all filtered data values

  // for data visualization
  const allSectors = await DataModel.distinct("sector");
  const allTopics = await DataModel.distinct("topic");
  const allSources = await DataModel.distinct("source");
  const allPestles = await DataModel.distinct("pestle");
  const allCountry = await DataModel.distinct("country");
  const allRegions = await DataModel.distinct("region");

  // gives apperances of each sources in whole data
  const SourcesAppearances = allSources.map((element) => {
    let count = 0;

    for (let index = 0; index < allData.length; index++) {
      if (element === allData[index].source) {
        count++;
      }
    }

    return count;
  });

  const TopicsAppearances = allTopics.map((element) => {
    let count = 0;

    for (let index = 0; index < allData.length; index++) {
      if (element === allData[index].topic) {
        count++;
      }
    }

    return count;
  });

  const countryCodes = allCountry.map((item) => {
    return item.substring(0, 2).toUpperCase();
  });

  const CountryLikelihoods = allCountry.map((element) => {
    let likelihood = 0;

    for (let index = 0; index < allData.length; index++) {
      if (element === allData[index].country) {
        likelihood += allData[index].likelihood;
      }
    }

    return likelihood;
  });

  const RegionLikelihoods = allRegions.map((element) => {
    let likelihood = 0;

    for (let index = 0; index < allData.length; index++) {
      if (element === allData[index].region) {
        likelihood += allData[index].likelihood;
      }
    }

    return likelihood;
  });

  const MapObj = createObjectFromArrayPairs(countryCodes, CountryLikelihoods);

  //------------------- for data filtering -------------------

  const allEndYears = await DataModel.distinct("end_year");

  const endYearFilterOptions = allEndYears.map((item) => {
    return {
      label: `${item}`,
    };
  });

  res.status(200).json({
    success: true,
    TotalHits: allData.length,
    endYearFilterOptions,
    RegionData: { allRegions, RegionLikelihoods },
    CountryData: { allCountry, MapObj },
    allPestles,
    allSectors,
    sourceData: {
      allSources,
      SourcesAppearances,
    },
    TopicsData: {
      allTopics,
      TopicsAppearances,
    },
  });
};

//-------get single video-------
const getSingleData = async (req, res) => {
  const singleData = await DataModel.findById(req.params.id);

  if (!singleData) {
    return res.status(404).json({
      success: false,
      msg: `Data with id : ${req.params.id} not Found`,
    });
  }

  res.status(200).json({ success: true, data: singleData });
};

module.exports = { getAllDataPaginated, getAllData, getSingleData };
