import React, { useState, useEffect } from "react";
import SingleTimer from "./SingleTimer";

export default function Timer() {
  //// How much time left (in milliseconds)
  const countDownDate = new Date("Jun 01, 2021 00:00:00").getTime();
  const currentDate = new Date().getTime();
  let timeLeft = countDownDate - currentDate;
  // How many days / hours / minutes / seconds left
  let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
  const [seconds, setSeconds] = useState(secondsLeft);
  const [minutes, setMinutes] = useState(minutesLeft);
  const [hours, setHours] = useState(hoursLeft);
  const [days, setDays] = useState(daysLeft);
  //// Countdown
  useEffect(() => {
    if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
      alert("We have launched!!!");
    } else if (seconds >= 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else if (seconds < 0) {
      setSeconds(59);
      if (minutes > 0) {
        setMinutes(minutes - 1);
      } else if (minutes === 0) {
        setMinutes(59);
        if (hours > 0) {
          setHours(hours - 1);
        } else if (hours === 0) {
          if (days > 0) {
            setHours(23);
            setDays(days - 1);
          }
        }
      }
    }
  }, [days, hours, minutes, seconds]);

  return (
    <div className="timer-wrapper">
      <SingleTimer type={"days"} number={days} />
      <SingleTimer type={"hours"} number={hours} />
      <SingleTimer type={"minutes"} number={minutes} />
      <SingleTimer type={"seconds"} number={seconds} />
    </div>
  );
}
