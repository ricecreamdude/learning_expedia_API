const express = require('express');
const request = require('request');

var reviewRouter = module.exports = exports = express.Router();

reviewRouter.route('/review')
  .get( (req , res) => {

    var reviewRequest;

    //Create viable API request using req


    res.status(200).json("Hello from Review Routes.");

  });


//
// GET http://terminal2.expedia.com/x/reviews/hotels?hotelId={hotelid}
//
// Get Hotel Review data by Hotel ID
//
// hotelId
// summary (Boolean)
// sortBy
//   DATEDESCWITHLANGBUCKETS
//   DATEASC
//   DATEDESC
//   RATINGASC
//   RATINGDESC
// start (Pagination functionality);
// items #
// categoryFilter
//   BussinessTravelers
//   Families
//   Couples
//   Students
//   Everyone
//   Other
//   GetawayWithFriends
//   Golf
//   OvernightStayBeforeDestination
//   PersonalEvent
//   Shopping
//   Spa
