const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

// you can use the '.param' function to define parameter middleware in your own applications
// router.param('id', tourController)

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

router.route('/search/:name').get(tourController.getTourByName);

module.exports = router;
