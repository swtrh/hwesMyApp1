var express = require('express');
var router = express.Router();

/* GET STORE subpage */

router.get('/', function(req,res, next){
  res.render('store', { title: 'Store'})
})

module.exports = router;
