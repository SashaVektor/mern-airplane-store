const express = require('express');
const router = express.Router();
const path = require('path');
const { getPlanes, createPlane, getOnePlane } = require('../controlers/planes');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: './assets/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage});

router.get('/',  getPlanes)
router.get('/:id', getOnePlane)
router.post('/', upload.single('planeImage'), createPlane)

module.exports = router;