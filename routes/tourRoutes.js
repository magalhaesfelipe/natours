const express = require('express');
const tourController = require('../controllers/tourController');

const router = express.Router();

// you can use the '.param' function to define parameter middleware in your own applications
// router.param('id', tourController)

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
