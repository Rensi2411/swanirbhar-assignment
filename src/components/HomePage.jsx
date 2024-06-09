import React, { useEffect, useState } from "react";
import CourseList from "../components/CourseList";
import "../assets/styles/homepage.css";

const HomePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Retrieve courses data from local storage
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    
    if (storedCourses.length === 0) {
      // Set default values if there are no stored courses
      const defaultCourses = [
        {
          id: 1,
          title: "Course 1",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nemo magnam. Natus ab inventore repellendus.",
          progress: 50,
          instruction:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam voluptatibus dolores inventore rem nam voluptate amet consequatur velit reiciendis!",
            hint:"orem ipsum dolor sit amet consectetur adipisicing elit."
        },
        {
          id: 2,
          title: "Course 2",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, nemo magnam. Natus ab inventore repellendus.",
          progress: 75,
          instruction:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem totam voluptatibus dolores inventore rem nam voluptate amet consequatur velit reiciendis!",
            hint:"orem ipsum dolor sit amet consectetur adipisicing elit."
        }
      ];
      localStorage.setItem('courses', JSON.stringify(defaultCourses));
      setCourses(defaultCourses);
    } else {
      setCourses(storedCourses);
    }
  }, []);
  

  return (
    <div>
      <div className="container">
        <CourseList courses={courses} />
      </div>
    </div>
  );
};

export default HomePage;
