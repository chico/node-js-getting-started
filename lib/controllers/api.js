'use strict';

var _config;

exports.init= function(config, cb) {
  _config = config;

  cb();
};

exports.ping = function(req, res) {
  res.json({ok:true});
};
