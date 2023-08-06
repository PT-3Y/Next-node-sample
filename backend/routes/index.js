var express = require('express');
var router = express.Router();
var apiClient = require('../requestfunction/retryfunction')
var axios = require('axios')

/* GET home page. */
router.get('/catfact', async function (req, res, next) {
  try {
    var data
    await axios.get('https://caeact.ninja/fact')
      .then(res => {
        res.json({data:res.data})
      })
  } catch {
    res.json({
      data: 'https://catfact.ninja/fact'
    })
  }
});

router.get('/bitcoin', async function (req, res, next) {
  try {
    await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => {
        res.json({data:res.data})
      })
  } catch {
    res.json({
      data: 'https://api.coindesk.com/v1/bpi/currentprice.json'
    })
  }
});

router.get('/activity', async function (req, res, next) {
  try {
    await axios.get('https://www.boredapi.com/api/activity')
      .then(res => {
        res.json({data:res.data})
      })
  } catch {
    res.json({
      data: 'https://www.boredapi.com/api/activity'
    })
  }
});

router.get('/random', async function (req, res, next) {
  try {
    var data
    await axios.get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        res.json({data:res.data})
      })
  } catch {
    res.json({
      data: 'https://dog.ceo/api/breeds/image/random'
    })
  }

});

module.exports = router;