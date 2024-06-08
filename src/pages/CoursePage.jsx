import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CourseContext } from '../contexts/CourseContext';
import CourseDetails from '../components/CourseDetails';

function CoursePage() {
    const { id } = useParams();
    const { courses } = useContext(CourseContext);
    const course = courses.find(course => course.id === parseInt(id));

    return (
        <div>
            {course ? <CourseDetails course={course} /> : <p>Course not found</p>}
        </div>
    );
}

export default CoursePage;
