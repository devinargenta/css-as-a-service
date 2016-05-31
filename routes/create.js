var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:property/:value', function(req, res, next) {
  var property = req.params.property.split(',');
  var value = req.params.value.split(',');
  var style = {};

  if ( property.length === value.length ) {

    for (var i = 0; i < property.length; i++ ){
        style[property[i]] = value[i].replace(/#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g, '#$1$2$3');
      }

    } else {

      res.send(400, `yo shit don't match`);

    }

    res.send(style);

});

module.exports = router;
