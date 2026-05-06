import React from 'react';

export default function CourseCard({ course, onClick }) {
  const doneLessons = course.lessons.filter((l) => l.done).length;

  return (
    <div
      onClick={onClick}
      className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'rgba(14,11,26,0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.09)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(124,92,191,0.5)';
        e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,.55), 0 0 0 1px rgba(124,92,191,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Thumbnail */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={course.thumb}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(6,3,18,0.2), rgba(6,3,18,0.75))' }}
        />
        {/* Category badge */}
        <div className="absolute bottom-2.5 left-3">
          <span
            className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
            style={{
              background: 'rgba(124,92,191,0.18)',
              border: '1px solid rgba(124,92,191,0.35)',
              color: '#c4b5f7',
            }}
          >
            {course.emoji} {course.category}
          </span>
        </div>
        {/* Lesson count */}
        <div
          className="absolute top-2.5 right-3 px-2 py-1 rounded-md"
          style={{
            background: 'rgba(6,3,18,0.75)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <span className="text-[10px] font-medium" style={{ color: 'rgba(200,185,240,0.7)' }}>
            {course.lessons.length} lessons
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-[13px] font-bold text-[#f0ecff] mb-1.5 leading-snug tracking-tight">
          {course.title}
        </h3>
        <p className="text-[12px] mb-4" style={{ color: 'rgba(180,170,220,0.55)' }}>
          {course.instructor}
        </p>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between mb-1.5">
            <span className="text-[11px]" style={{ color: 'rgba(155,140,200,0.5)' }}>Progress</span>
            <span className="text-[11px] font-bold text-[#c4b5f7]">{course.progress}%</span>
          </div>
          <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div
              className="progress-fill"
              style={{
                width: `${course.progress}%`,
                background: `linear-gradient(90deg, ${course.color}, ${course.color}99)`,
                boxShadow: `0 0 8px ${course.color}60`,
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-[11px]" style={{ color: 'rgba(130,120,170,0.5)' }}>
            {doneLessons}/{course.lessons.length} done
          </span>
          <button
            onClick={(e) => { e.stopPropagation(); onClick(); }}
            className="text-[12px] font-semibold px-3.5 py-1.5 rounded-[9px] text-white transition-all hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg,#7c5cbf,#5a3fa0)',
              boxShadow: '0 2px 10px rgba(124,92,191,0.35)',
            }}
          >
            {course.progress === 0 ? 'Start →' : course.progress === 100 ? 'Review →' : 'Continue →'}
          </button>
        </div>
      </div>
    </div>
  );
}
