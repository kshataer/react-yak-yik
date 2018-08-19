var Comment = require("../models/Comment");

module.exports = {
  findByZoneId: function(id, callback) {
    Comment.find({ zoneId: id }, function(err, comments) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, comments);
    });
  }
};
