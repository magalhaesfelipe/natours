const Tour = require('./../models/tourModel');

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAT: req.requestTime,
    results: 'here you put the length',
    data: {
      tours: 'Just a test..',
    },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  /* const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  }); */
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour placeholder',
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
