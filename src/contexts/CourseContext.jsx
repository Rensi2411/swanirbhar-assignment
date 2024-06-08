import React, { createContext, useState } from 'react';

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState([
        {
            id: 1,
            title: 'Course 1',
            description: 'Description of course 1',
            lessons: ['Lesson 1.1', 'Lesson 1.2'],
            progress: 0,
        },
        {
            id: 2,
            title: 'Course 2',
            description: 'Description of course 2',
            lessons: ['Lesson 2.1', 'Lesson 2.2'],
            progress: 0,
        },
    ]);

    const addCourse = (course) => {
        setCourses([...courses, { ...course, id: courses.length + 1, progress: 0 }]);
    };

    return (
        <CourseContext.Provider value={{ courses, addCourse }}>
            {children}
        </CourseContext.Provider>
    );
};

export { CourseContext, CourseProvider };
