document.addEventListener('DOMContentLoaded', function() {
  const db = new DB();
  db.createScheme();

  db.insert({
    title: 'Shoulders',
    exercises: [
      {
        name: 'Dumbbell shoulders press',
        repetitions: '10',
        weight: '25kg',
      },
      {
        name: 'Seated Bent-Over Rear Delt Raise',
        repetitions: '8/8/8',
        weight: '10kg/8kg/6kg'
      }
    ]
  });

  db.insert({
    title: 'Back',
    exercises: [
      {
        name: 'Wide-Grip Pull-Up',
        repetitions: '8',
        weight: null
      },
      {
        name: 'Close-Grip Pull-Down',
        repetitions: '10',
        weight: '65kg'
      }
    ]
  });

  db.find(1, (obj) => {
    console.log(obj);
  });

  db.findAll((obj) => {
    console.log(obj);
  });

}, false);
