import React from "react";
import "./Todos.css";
const Todos = (props) => {
  return (
    <>
      <div className="box">
        <div className="todos">
          <div className="header">{props.title}</div>
          <div className="content">
            <div className="date">
              <div className="dates">
                <div className="day">{props.date}</div>
                <div className="name" style={{ color: "white" }}>
                  {props.day}
                </div>
              </div>
              <div className="time">{props.time}</div>
            </div>
            <div className="details">
              <div className="description">{props.msg}</div>

              {props.title === "Today's Appointment" && (
                <div className="user">
                  <div className="icon">👤</div>
                  <div className="name">Aayush</div>
                </div>
              )}
              {props.amount && <div className="amount">{props.amount}</div>}
              {props.amount && <button className="button">Pay now</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
