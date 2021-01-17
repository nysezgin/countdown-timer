import React from "react";

export default function SingleTimer({ type, number }) {
  return (
    <div className="timer">
      <div className="timer__counter">{number < 10 ? "0" + number : number}</div>
      <p className="timer__type">{type}</p>
    </div>
  );
}
