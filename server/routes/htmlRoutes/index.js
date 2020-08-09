var path = require("path");

module.exports = function(app) {

  
    app.get("/form-habits", function(req, res) {
      res.sendFile(path.join(__dirname, "../src/pages/form.js"));
    });
  
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../src/pages/Home"));
    });

    app.get("/habits", function(req, res) {
        res.sendFile(path.join(__dirname, "../src/pages/habits.js"));
      });

      app.get("/account", function(req, res) {
        res.sendFile(path.join(__dirname, "../src/pages/Account"));
      });

      app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../src/pages/Account/login.js"));
      });
    
      app.get("/register", function(req, res) {
        res.sendFile(path.join(__dirname, "../src/pages/Account/register.js"));
      });
  
  };