const router = require("express").Router();
const db = require("../models");

router.post("/api/transaction", ({ body }, res) => {
  // Transaction.create(body)
  //   .then(dbTransaction => {
  //     res.json(dbTransaction);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

router.post("/api/workouts", ({ body }, res) => {
  // Transaction.insertMany(body)
  //   .then(dbTransaction => {
  //     res.json(dbTransaction);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

router.put("api/workouts/:id", ({ body }, res) => {


})

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ day: -1 })
    .limit(1)
    .then(dbTransaction => {
      const data = JSON.parse(JSON.stringify(dbTransaction));
      let totalDuration = 0;
      data[0].exercises.forEach(exercise => totalDuration = totalDuration +  exercise.duration);
      data[0].totalDuration = totalDuration;
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  // Transaction.find({})
  //   .sort({ date: -1 })
  //   .then(dbTransaction => {
  //     res.json(dbTransaction);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

module.exports = router;
