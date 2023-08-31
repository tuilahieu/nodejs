function formatMilliseconds(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  let result = [];

  if (days > 0) {
    result.push(days + " day" + (days !== 1 ? "s" : ""));
    hours %= 24;
  }

  if (hours > 0) {
    result.push(hours + " hour" + (hours !== 1 ? "s" : ""));
    minutes %= 60;
  }

  if (minutes > 0) {
    result.push(minutes + " minute" + (minutes !== 1 ? "s" : ""));
    seconds %= 60;
  }

  if (seconds > 0) {
    result.push(seconds + " second" + (seconds !== 1 ? "s" : ""));
  }

  milliseconds %= 1000;
  if (milliseconds > 0) {
    result.push(
      milliseconds + " millisecond" + (milliseconds !== 1 ? "s" : "")
    );
  }

  return result.join(", ");
}

console.log(formatMilliseconds(1001));

// ex02

const startDate = "2023-01-18";
const endDate = "2023-01-22";

const startTimestamp = new Date(startDate).getTime();
const endTimestamp = new Date(endDate).getTime();

const millisecondsADay = 24 * 60 * 60 * 1000;

const distance = (endTimestamp - startTimestamp) / millisecondsADay;

console.log("distance =>", distance);
