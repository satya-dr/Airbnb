
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/index", { 
      registeredHomes: registeredHomes,
      pageTitle: "Home Page",
    });
  });
};
exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/home-list", { 
      registeredHomes: registeredHomes,
      pageTitle: "Home List",
    });
  });
};
exports.getBookings = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/bookings", { 
      registeredHomes: registeredHomes,
      pageTitle: "My Bookings",
    });
  });
};
exports.getFavourite = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/favourite-list", { 
      registeredHomes: registeredHomes,
      pageTitle: "Favourite List",
    });
  });
};

