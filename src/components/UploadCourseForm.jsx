import React, { useState, useContext } from 'react';
import { CourseContext } from '../contexts/CourseContext';

function UploadCourseForm() {
    const { addCourse } = useContext(CourseContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [lessons, setLessons] = useState(['']);

    const handleLessonChange = (index, value) => {
        const newLessons = [...lessons];
        newLessons[index] = value;
        setLessons(newLessons);
    };

    const handleAddLesson = () => {
        setLessons([...lessons, '']);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCourse({ title, description, lessons });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label>Lessons</label>
                {lessons.map((lesson, index) => (
                    <input
                        key={index}
                        type="text"
                        value={lesson}
                        onChange={(e) => handleLessonChange(index, e.target.value)}
                    />
                ))}
                <button type="button" onClick={handleAddLesson}>Add Lesson</button>
            </div>
            <button type="submit">Upload Course</button>
        </form>
    );
}

export default UploadCourseForm;
