const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    // BUILD THE QUERY
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    console.log(
      'THIS IS THE REQUEST QUERY: ',
      req.query,
      'AND THIS IS THE REQUEST QUERY WITH FIELDS EXCLUDED: ',
      queryObj,
    );

    const test = Tour.find(queryObj).where('duration').equals(3);
    console.log(
      '********************THIS IS THE TEST QUERY********************** ',
      test,
    );

    const query = Tour.find(queryObj);

    // EXECUTE THE QUERY
    const tours = await query;

    // filtering
    /* const query = Tour.find({
      difficulty: queryObj.difficulty,
      price: queryObj.price,
    });
 */
    // const tours = await Tour.find(req.query);

    // Query filtering using mongoose methods
    /* const query = Tour.find()
      .where('duration')
      .equals(7)
      .where('price')
      .equals(497);
 */

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours: tours,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    if (!tour) {
      return res.status(404).json({
        status: 'fail',
        message: 'Tour not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.getTourByName = async (req, res) => {
  try {
    // Assuming the name is passed in the URL parameters
    const tour = await Tour.findOne({ name: req.params.name });

    if (!tour) {
      return res.status(404).json({
        status: 'fail',
        message: 'Tour not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    //const newTour = new Tour({});
    //newTour.save();

    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    // Since we're using Mongoose, we are using findByIdAndUpdate
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the modified document rather than the original
      runValidators: true, // Run validators (like required, min, max, etc.)
    });

    if (!tour) {
      return res.status(404).json({
        status: 'fail',
        message: 'Tour not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: tour,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);

    if (!tour) {
      return res.status(404).json({
        status: 'fail',
        message: 'Tour not found',
      });
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      data: null,
    });
  }
};
