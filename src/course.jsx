import React, { Component } from "react";

class Course extends Component {
  state = {};

  calculateNumTotal(course) {
    let numTotal = 0;
    course.parts.forEach((part) => {
      numTotal += part.exercises;
    });
    return numTotal;
  }

  render() {
    return (
      <div>
        <div>
          {this.props.course.map((course) => (
            <div key={course.id}>
              <b>
                <h2>{course.name}</h2>
              </b>
              {course.parts.map((part) => (
                <p key={part.id}>
                  {part.name} {part.exercises}
                </p>
              ))}
              {
                <b>
                  <p>total of {this.calculateNumTotal(course)} exercises</p>
                </b>
              }
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Course;
