const express = require('express');
const router = express.Router();
const bp = require('body-parser');
router.use(bp.urlencoded({ extended:true }))
router.use(bp.json());




router.get('/all', (req, res) => {
    // console.log(req.body, req.query);    
    res.send('all')
})

module.exports = router