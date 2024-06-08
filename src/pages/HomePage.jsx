import React, { useContext } from 'react';
import CourseList from '../components/CourseList';
import { CourseContext } from '../contexts/CourseContext';

function HomePage() {
    const { courses } = useContext(CourseContext);
    return (
        <div>
            <h1>Courses</h1>
            <CourseList courses={courses} />
        </div>
    );
}

export default HomePage;
