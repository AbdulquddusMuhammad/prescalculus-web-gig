import React from 'react';
import { COURSES } from '../data/courses';
import CourseCard from './CourseCard';

export default function HomePage({ search, onSelectCourse }) {
  const filtered = COURSES.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.instructor.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalLessons = COURSES.reduce((a, c) => a + c.lessons.length, 0);
  const completedLessons = COURSES.reduce((a, c) => a + c.lessons.filter((l) => l.done).length, 0);
  const avgProgress = Math.round(COURSES.reduce((a, c) => a + c.progress, 0) / COURSES.length);
  const inProgress = COURSES.filter((c) => c.progress > 0 && c.progress < 100).length;

  return (
    <div className="fade-up">
      {/* Hero Banner */}
      <div className="hero-bg relative overflow-hidden rounded-[18px] mb-7" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="hero-bg-img" />
        <div className="relative z-10 p-9">
          {/* Pill badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
            style={{
              background: 'rgba(155,114,240,0.18)',
              border: '1px solid rgba(155,114,240,0.35)',
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#9b72f0', boxShadow: '0 0 8px #9b72f0' }}
            />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-[#c4b5f7]">
              Welcome back, Kolade
            </span>
          </div>

          <h1 className="text-[28px] font-bold text-[#f0ecff] mb-2.5 tracking-tight leading-tight">
            Ready to keep learning?
          </h1>
          <p className="text-[14px] mb-7 leading-relaxed max-w-lg" style={{ color: 'rgba(200,185,240,0.65)' }}>
            You have <strong style={{ color: '#c4b5f7' }}>{inProgress}</strong> courses in progress.
            Your average completion is <strong style={{ color: '#c4b5f7' }}>{avgProgress}%</strong> — keep pushing!
          </p>

          {/* Stats */}
          <div className="flex gap-3 flex-wrap">
            {[
              { label: 'Courses Enrolled',    val: COURSES.length,                icon: '📚' },
              { label: 'Lessons Completed',   val: `${completedLessons}/${totalLessons}`, icon: '✅' },
              { label: 'Average Progress',    val: `${avgProgress}%`,             icon: '📈' },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl p-3.5 min-w-[120px]"
                style={{
                  background: 'rgba(10,7,25,0.7)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(155,114,240,0.2)',
                }}
              >
                <p className="text-[22px] mb-1">{s.icon}</p>
                <p className="text-[22px] font-bold text-[#c4b5f7] mb-0.5 tracking-tight">{s.val}</p>
                <p className="text-[11px] font-medium" style={{ color: 'rgba(180,170,220,0.5)' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Grid header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[15px] font-bold text-[#f0ecff] tracking-tight">All Courses</h2>
        <span className="text-[12px]" style={{ color: 'rgba(180,170,220,0.45)' }}>
          {filtered.length} course{filtered.length !== 1 ? 's' : ''}
          {search && ` matching "${search}"`}
        </span>
      </div>

      {/* Course grid */}
      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(245px, 1fr))' }}>
        {filtered.map((c) => (
          <CourseCard key={c.id} course={c} onClick={() => onSelectCourse(c)} />
        ))}
        {filtered.length === 0 && (
          <div
            className="col-span-full text-center py-16"
            style={{ color: 'rgba(155,140,200,0.4)' }}
          >
            <p className="text-[36px] mb-3">🔍</p>
            <p className="text-[14px]">No courses found for "{search}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
