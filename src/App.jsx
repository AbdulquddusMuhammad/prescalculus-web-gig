import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import MyCoursesPage from './components/MyCoursesPage';
import CoursePage from './components/CoursePage';

export default function App() {
  const [view, setView] = useState('home');
  const [search, setSearch] = useState('');
  const [activeCourse, setActiveCourse] = useState(null);

  if (activeCourse) {
    return <CoursePage course={activeCourse} onBack={() => setActiveCourse(null)} />;
  }

  return (
    <div className="min-h-screen relative">
      {/* Full-page background image — library */}
      <div className="page-bg" />

      {/* Navbar */}
      <Navbar view={view} setView={setView} search={search} setSearch={setSearch} />

      {/* Page content */}
      <div className="relative z-10" style={{ maxWidth: 1100, margin: '0 auto', padding: '30px 28px' }}>
        {view === 'home' && (
          <HomePage search={search} onSelectCourse={setActiveCourse} />
        )}
        {view === 'my courses' && (
          <MyCoursesPage onSelectCourse={setActiveCourse} />
        )}
      </div>
    </div>
  );
}
