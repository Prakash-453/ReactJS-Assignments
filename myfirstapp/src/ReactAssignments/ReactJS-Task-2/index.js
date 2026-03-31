import React from "react";
import "./index.css";

function Timetable() {
  return (
    <center>
      <table>
        <tr>
          <th>Timings</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
        <tr className="color1">
          <td><b>10.00AM to 11.30AM</b></td>
          <td>Problem Solving</td>
          <td>Problem Solving</td>
          <td>Problem Solving</td>
          <td>Problem Solving</td>
          <td>Problem Solving</td>
          <td>Problem Solving</td>
          <td>Problem Solving</td>
        </tr>
        <tr className="color2">
          <td><b>11.30AM to 12.00PM</b></td>
          <td>Practice Time</td>
          <td>Practice Time</td>
          <td>Practice Time</td>
          <td>Practice Time</td>
          <td>Practice Time</td>
          <td>Practice Time</td>
          <td>Practice Time</td>
        </tr>
        <tr className="color1">
          <td><b>12.00PM to 1.00PM</b></td>
          <td>Communication</td>
          <td>Communication</td>
          <td>Communication</td>
          <td>Communication</td>
          <td>Communication</td>
          <td>Communication</td>
          <td>Communication</td>
        </tr>
        <tr className="color2">
          <td><b>1.00PM to 2.30PM</b></td>
          <td>Lunch Break</td>
          <td>Lunch Break</td>
          <td>Lunch Break</td>
          <td>Lunch Break</td>
          <td>Lunch Break</td>
          <td>Lunch Break</td>
          <td>Lunch Break</td>
        </tr>
        <tr className="color1">
          <td><b>2.30PM to 4.00PM</b></td>
          <td>Technical Class</td>
          <td>Technical Class</td>
          <td>Technical Class</td>
          <td>Technical Class</td>
          <td>Technical Class</td>
          <td>Technical Class</td>
          <td>Technical Class</td>
        </tr>
        <tr className="color2">
          <td><b>4.00PM to 6.00PM</b></td>
          <td>Aptitude</td>
          <td>Aptitude</td>
          <td>Aptitude</td>
          <td>Aptitude</td>
          <td>Aptitude</td>
          <td>Aptitude</td>
          <td>Aptitude</td>
        </tr>
      </table>
    </center>
  );
}

export default Timetable;
