const express = require('express');
const tourControllers = require('./../controllers/tourController');
const router = express.Router();

router
  .route('/')
  .get(tourControllers.getAllTours)
  .post(tourControllers.addTour);
router
  .route('/:id')
  .get(tourControllers.getSingleTour)
  .patch(tourControllers.updateTour)
  .delete(tourControllers.deleteTour);

module.exports = router;
