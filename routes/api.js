const router = require("express").Router();
const db = require("../models");

router.post("/api/transaction", ({ body }, res) => {
  // Transaction.create(body)
  //   .then(dbWorkout => {
  //     res.json(dbWorkout);
  //   })
  //   .catch(err => {
  //     res.status(400).json(err);
  //   });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then((dbWorkout) => {
        const data = JSON.parse(JSON.stringify(dbWorkout));
        res.json({"data": "hi"});
      })
      .catch(err => {
        res.json(err);
      });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ day: -1 })
    .limit(1)
    .then(dbWorkout => {
      const data = JSON.parse(JSON.stringify(dbWorkout));
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
  db.Workout
    .aggregate([{
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" }
      }
    }])
    .sort({day: 1})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
