const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  console.log("Hoter page get", req.url, req.method);
  res.render("host/addHome", { pageTitle: "Add home" });
  // res.sendFile(path.join(rootPath,'views','addHome.html'));
};
exports.postAddHome = (req, res, next) => {
  const { houseName, number, price, location, rating, imageUrl } = req.body;
  const home = new Home(houseName, number, price, location, rating, imageUrl);
  home.save();

  res.render("host/homeAdded", { pageTitle: "Home Added Success full" });
  // res.sendFile(path.join(rootPath,'views','homeAdded.html'));
};