import React from 'react';

function CourseDetails({ course }) {
    return (
        <div>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <ul>
                {course.lessons.map((lesson, index) => (
                    <li key={index}>{lesson}</li>
                ))}
            </ul>
        </div>
    );
}

export default CourseDetails;
