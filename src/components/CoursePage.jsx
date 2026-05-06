import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import MaterialsPanel from './MaterialsPanel';

export default function CoursePage({ course, onBack }) {
  const [activeLesson, setActiveLesson] = useState(course.lessons[0]);
  const done = course.lessons.filter((l) => l.done).length;

  return (
    <div className="min-h-screen flex flex-col" style={{ position: 'relative' }}>
      {/* Full-bleed background */}
      <div className="player-page-bg" />

      {/* Top bar */}
      <div
        className="relative z-10 h-14 flex items-center gap-4 px-6 flex-shrink-0"
        style={{
          background: 'rgba(8,5,20,0.82)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(124,92,191,0.18)',
        }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-[13px] font-medium px-3 py-1.5 rounded-lg transition-all"
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(200,190,230,0.65)',
            cursor: 'pointer',
            fontFamily: "'Sora', sans-serif",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#f0ecff';
            e.currentTarget.style.background = 'rgba(124,92,191,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(200,190,230,0.65)';
            e.currentTarget.style.background = 'none';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          Back
        </button>

        <div className="w-px h-5" style={{ background: 'rgba(255,255,255,0.1)' }} />

        <div className="flex-1">
          <p className="text-[14px] font-bold text-[#f0ecff] tracking-tight">{course.title}</p>
          <p className="text-[11px]" style={{ color: 'rgba(200,185,240,0.55)' }}>{course.instructor}</p>
        </div>

        <div className="flex items-center gap-2.5">
          <span className="text-[12px]" style={{ color: 'rgba(200,185,240,0.55)' }}>
            {done}/{course.lessons.length}
          </span>
          <div className="h-1.5 w-20 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div
              className="progress-fill"
              style={{
                width: `${course.progress}%`,
                background: `linear-gradient(90deg,${course.color},${course.color}99)`,
              }}
            />
          </div>
          <span className="text-[12px] font-bold text-[#c4b5f7]">{course.progress}%</span>
        </div>
      </div>

      {/* Body — 3 columns */}
      <div className="flex flex-1 overflow-hidden relative z-10" style={{ minHeight: 0 }}>

        {/* Lesson sidebar */}
        <div
          className="flex-shrink-0 overflow-y-auto p-4"
          style={{
            width: 265,
            background: 'rgba(8,5,20,0.75)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRight: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <p
            className="text-[11px] uppercase tracking-widest font-bold mb-3.5"
            style={{ color: 'rgba(180,170,220,0.5)' }}
          >
            Course Lessons
          </p>
          {course.lessons.map((l, i) => (
            <div
              key={l.id}
              onClick={() => setActiveLesson(l)}
              className="flex items-center gap-2.5 p-2.5 rounded-[9px] mb-1 cursor-pointer transition-all duration-150"
              style={{
                background: activeLesson.id === l.id ? 'rgba(124,92,191,0.18)' : 'transparent',
                border: `1px solid ${
                  activeLesson.id === l.id ? 'rgba(124,92,191,0.55)' : 'transparent'
                }`,
              }}
              onMouseEnter={(e) => {
                if (activeLesson.id !== l.id) {
                  e.currentTarget.style.background = 'rgba(124,92,191,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(124,92,191,0.25)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeLesson.id !== l.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
            >
              {/* Step indicator */}
              <div
                className="w-[26px] h-[26px] rounded-[7px] flex-shrink-0 flex items-center justify-center"
                style={{
                  background: l.done
                    ? 'rgba(74,222,128,0.1)'
                    : activeLesson.id === l.id
                    ? 'rgba(155,114,240,0.15)'
                    : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${
                    l.done
                      ? 'rgba(74,222,128,0.4)'
                      : activeLesson.id === l.id
                      ? 'rgba(155,114,240,0.5)'
                      : 'rgba(255,255,255,0.1)'
                  }`,
                }}
              >
                {l.done ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#4ade80">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                ) : (
                  <span
                    className="text-[10px] font-bold"
                    style={{ color: activeLesson.id === l.id ? '#c4b5f7' : 'rgba(200,185,240,0.4)' }}
                  >
                    {i + 1}
                  </span>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p
                  className="text-[12px] font-semibold truncate"
                  style={{ color: activeLesson.id === l.id ? '#c4b5f7' : 'rgba(220,210,250,0.8)' }}
                >
                  {l.title}
                </p>
                <p className="text-[11px]" style={{ color: 'rgba(155,140,200,0.45)' }}>
                  {l.duration} · {l.materials.length} files
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Centre — video + info */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
          <VideoPlayer lesson={activeLesson} courseColor={course.color} />

          <div className="glass-card rounded-2xl p-5">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <h2 className="text-[18px] font-bold text-[#f0ecff] mb-1.5 tracking-tight">
                  {activeLesson.title}
                </h2>
                <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(200,185,240,0.6)' }}>
                  {activeLesson.desc}
                </p>
              </div>
              <div className="flex-shrink-0">
                {activeLesson.done ? (
                  <span
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(74,222,128,0.12)',
                      border: '1px solid rgba(74,222,128,0.35)',
                      color: '#4ade80',
                    }}
                  >
                    ✓ Complete
                  </span>
                ) : (
                  <span
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(124,92,191,0.15)',
                      border: '1px solid rgba(124,92,191,0.5)',
                      color: '#c4b5f7',
                    }}
                  >
                    ● In Progress
                  </span>
                )}
              </div>
            </div>

            <div
              className="flex items-center gap-2.5 pt-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div
                className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-[12px] font-bold text-white flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg,#7c5cbf,#b18af0)',
                  border: '2px solid rgba(177,138,240,0.4)',
                }}
              >
                {course.instructor.split(' ').map((w) => w[0]).join('').slice(0, 2)}
              </div>
              <div>
                <p className="text-[13px] font-semibold text-[#f0ecff]">{course.instructor}</p>
                <p className="text-[11px]" style={{ color: 'rgba(200,185,240,0.5)' }}>
                  {course.category} Department
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — materials panel */}
        <div
          className="flex-shrink-0 overflow-y-auto p-4 flex flex-col"
          style={{
            width: 295,
            background: 'rgba(8,5,20,0.75)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <MaterialsPanel lesson={activeLesson} />
        </div>
      </div>
    </div>
  );
}
