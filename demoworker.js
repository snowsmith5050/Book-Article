let seconds = 0;

function formatTime(sec) {
  let hrs = Math.floor(sec / 3600);
  let mins = Math.floor((sec % 3600) / 60);
  let secs = sec % 60;

  return (
    String(hrs).padStart(2, '0') + ":" +
    String(mins).padStart(2, '0') + ":" +
    String(secs).padStart(2, '0')
  );
}

function tick() {
  seconds++;
  postMessage(formatTime(seconds));
}

setInterval(tick, 1000);
