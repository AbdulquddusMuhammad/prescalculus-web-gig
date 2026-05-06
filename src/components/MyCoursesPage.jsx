import React from 'react';
import { COURSES } from '../data/courses';

export default function MyCoursesPage({ onSelectCourse }) {
  return (
    <div className="fade-up">
      <h2 className="text-[16px] font-bold text-[#f0ecff] mb-5 tracking-tight">My Courses</h2>
      <div className="flex flex-col gap-2.5">
        {COURSES.map((c) => (
          <div
            key={c.id}
            onClick={() => onSelectCourse(c)}
            className="glass-card rounded-[13px] p-4 flex items-center gap-4 cursor-pointer transition-all duration-200"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(155,114,240,0.35)';
              e.currentTarget.style.transform = 'translateX(4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(150,120,255,0.15)';
              e.currentTarget.style.transform = '';
            }}
          >
            {/* Thumbnail */}
            <div
              className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0"
              style={{ border: `1.5px solid ${c.color}44` }}
            >
              <img src={c.thumb} alt={c.title} className="w-full h-full object-cover" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-bold text-[#f0ecff] mb-0.5 tracking-tight">{c.title}</p>
              <p className="text-[12px]" style={{ color: 'rgba(180,170,220,0.5)' }}>
                {c.instructor} · {c.lessons.length} lessons
              </p>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-3.5 flex-shrink-0">
              <div className="text-right">
                <p className="text-[13px] font-bold text-[#c4b5f7] mb-1">{c.progress}%</p>
                <div className="h-1.5 w-24 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <div
                    className="progress-fill"
                    style={{
                      width: `${c.progress}%`,
                      background: `linear-gradient(90deg,${c.color},${c.color}88)`,
                    }}
                  />
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(155,114,240,0.5)">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
