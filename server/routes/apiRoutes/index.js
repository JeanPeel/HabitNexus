// import axios from 'axios';

var timeOfDay =require("../../../src/data/timeOfDay");
var categories = require("../../../src/data/categories");
var hours = require("../../../src/data/hours");
var weekdays = require("../../../src/data/weekdays");
var formData = require("../../../src/data/formData");

module.exports = function (app) {


    app.get("/api/timeOfDay", function (req, res) {
        res.json(timeOfDay);
    });

    app.get("/api/categories", function (req, res) {
        res.json(categories);
    });

    app.get("/api/hours", function (req, res) {
        res.json(hours);
    });

    app.get("/api/weekdays", function (req, res) {
        res.json(weekdays);
    });

    app.get("/api/formData", function (req, res) {
        res.json(formData);
    });



    app.post("/api/timeOfDay", function (req, res) {

        res.json(timeOfDay);
    });

    app.post("/api/categories", function (req, res) { 

        res.json(categories);

    });

    app.post("/api/hours", function (req, res) {

        res.json(hours);
    });

    app.post("/api/weekdays", function (req, res) { 

        res.json(weekdays);

    });
    
    app.post("/api/formData", function (req, res) {

            
        let dataArray = []

        for (var i = 0; i < formData.length; i++) {

            const dataObject = {
            id: "info"+[i],
            info: res.data[i]
            }
            dataArray.push(dataObject);
        }

        console.log("data Array: ", dataArray)

        res.json(dataArray);
    });


};