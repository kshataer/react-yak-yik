var express = require("express");
var router = express.Router();
var controllers = require("../controllers");

router.get("/:resource", function(req, res, next) {
  var resource = req.params.resource;
  var controller = controllers[resource];
  if (controller == null) {
    res.json({
      confirmation: "fail",
      message: "Invalid Resource Request " + resource
    });
    return;
  }

  controller.find(req.query, function(err, results) {
    if (err) {
      res.json({
        confirmation: "fail",
        message: err
      });
      return;
    } else {
      res.json({
        confirmation: "success",
        results: results
      });
    }
  });
});

router.get("/:resource/:id", function(req, res, next) {
  var resource = req.params.resource;
  var id = req.params.id;
  var controller = controllers[resource];
  if (controller == null) {
    res.json({
      confirmation: "fail",
      message: "Invalid Resource Request " + resource
    });
    return;
  }

  if (resource == "zonecomments") {
    controller.findByZoneId(id, function(err, result) {
      if (err) {
        res.json({
          confirmation: "fail",
          message: "Data not found by zone id " + id
        });
        return;
      } else {
        res.json({
          confirmation: "success",
          results: result
        });
      }
    });
  } else {
    controller.findById(id, function(err, result) {
      if (err) {
        res.json({
          confirmation: "fail",
          message: "Data not found by id " + id
        });
        return;
      } else {
        res.json({
          confirmation: "success",
          result: result
        });
      }
    });
  }
});

router.post("/:resource", function(req, res, next) {
  var resource = req.params.resource;
  var controller = controllers[resource];
  if (controller == null) {
    res.json({
      confirmation: "fail",
      message: "Invalid Resource Request " + resource
    });
    return;
  }

  console.log("POST BODY " + req.body);

  controller.create(req.body, function(err, result) {
    if (err) {
      res.json({
        confirmation: "fail",
        message: err
      });
    }
    res.json({
      confirmation: "success",
      result: result
    });
  });
});

module.exports = router;
