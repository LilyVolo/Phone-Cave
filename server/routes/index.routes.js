const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone.model");

router.get("/phones", async (req, res, next) => {
  try {
  const allphones = await Phone.find()
  res.json(allphones)
} catch (error) {
  console.log(error)
}
});

router.get("/phones/:id", async (req, res, next) => {
  const phoneId = req.params.id;
Phone.findById(phoneId)
  .then((targetPhone) => {
    console.log(targetPhone);
    res.status(200).json(targetPhone);
  })
  .catch((error) => {
    next(error)
  });
});


module.exports = router;
