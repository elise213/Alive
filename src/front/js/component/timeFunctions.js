//////To order the schedule by days ///////////////////
const orderByDay = (schedule) => {
  const map = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
  };
  schedule.sort((a, b) => {
    return map[a.day] - map[b.day];
  });
  // console.log(schedule);
};

///////// to convert military date to AM/PM format ///////////////
const formatTime = (time) => {
  time = time.split(":"); // convert to array

  // to get the time
  var hours = Number(time[0]);
  var minutes = Number(time[1]);
  // var seconds = Number(time[2]);

  // calculate
  let timeValue;

  if (hours > 0 && hours <= 12) {
    timeValue = "" + hours;
  } else if (hours > 12) {
    timeValue = "" + (hours - 12);
  } else if (hours == 0) {
    timeValue = "12";
  }

  timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes; // to get the minutes
  // timeValue += seconds < 10 ? ":0" + seconds : ":" + seconds; // to get the seconds
  timeValue += hours >= 12 ? " P.M." : " A.M."; // to get AM/PM
  return timeValue;
};
