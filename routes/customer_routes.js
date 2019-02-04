var express = require('express');
var router = express.Router();
var customer_controller = require('../src/controller/customer_controller');


/* GET users listing. */
router.get('/getallcustomers', function(req,res, next) {
    customer_controller.getallcustomers(req,function (err, data) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      })
});

router.post('/postcustomerdata', function(req, res, next) {
  customer_controller.postcustomerdata(req.body,function (err, data) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      if (err) {
        res.send(err);
      } else {
        res.send({status:'success',data:data});
      }
    })
});

module.exports = router;
