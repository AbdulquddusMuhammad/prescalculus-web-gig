import React, { useState, useEffect, useRef } from 'react';

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

export default function VideoPlayer({ lesson, courseColor }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);
  const intRef = useRef(null);

  useEffect(() => {
    setPlaying(false);
    setProgress(0);
    if (intRef.current) clearInterval(intRef.current);
    return () => clearInterval(intRef.current);
  }, [lesson.id]);

  const toggle = () => {
    if (!playing) {
      setPlaying(true);
      intRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) { clearInterval(intRef.current); setPlaying(false); return 100; }
          return p + 0.22;
        });
      }, 100);
    } else {
      setPlaying(false);
      clearInterval(intRef.current);
    }
  };

  const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setProgress(Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
  };

  const parts = lesson.duration.split(':');
  const total = parseInt(parts[0]) * 60 + parseInt(parts[1]);
  const elapsed = Math.round((progress / 100) * total);
  const em = String(Math.floor(elapsed / 60)).padStart(2, '0');
  const es = String(elapsed % 60).padStart(2, '0');

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 8px 32px rgba(0,0,0,.6)' }}>
      {/* Video area */}
      <div
        className="relative cursor-pointer"
        style={{ paddingBottom: '56.25%' }}
        onClick={toggle}
      >
        {/* Background photo */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1554941829-202a0b2403b8?w=900&q=70&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0" style={{ background: 'rgba(6,4,18,0.72)' }} />
        </div>

        {/* Glow ring */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(${hexToRgb(courseColor)},0.1), transparent 60%)`,
          }}
        />

        {/* Center controls */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
          <div
            className="w-[76px] h-[76px] rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: playing ? `rgba(${hexToRgb(courseColor)},0.22)` : `rgba(${hexToRgb(courseColor)},0.14)`,
              border: `2px solid ${courseColor}`,
              boxShadow: playing ? `0 0 32px rgba(${hexToRgb(courseColor)},0.5)` : 'none',
            }}
          >
            {playing ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill={courseColor}>
                <rect x="6" y="4" width="4" height="16" rx="1.5" />
                <rect x="14" y="4" width="4" height="16" rx="1.5" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill={courseColor} style={{ marginLeft: 4 }}>
                <polygon points="5,3 19,12 5,21" />
              </svg>
            )}
          </div>
          <div className="text-center">
            <p className="text-[#f0ecff] font-bold text-[17px] mb-1" style={{ textShadow: '0 2px 8px rgba(0,0,0,.8)' }}>
              {lesson.title}
            </p>
            <p className="text-[12px]" style={{ color: 'rgba(220,210,255,0.65)' }}>
              {lesson.duration} · {playing ? '▶ Playing...' : 'Click to play'}
            </p>
          </div>
        </div>
      </div>

      {/* Controls bar */}
      <div
        className="flex items-center gap-3 px-4 py-2.5"
        style={{ background: 'rgba(8,5,18,0.9)', backdropFilter: 'blur(12px)' }}
      >
        {/* Play/pause */}
        <button onClick={toggle} className="flex p-0 border-none bg-transparent cursor-pointer" style={{ color: courseColor }}>
          {playing ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 1 }}>
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
        </button>

        {/* Elapsed */}
        <span className="font-mono text-[11px] min-w-[38px]" style={{ color: 'rgba(200,190,230,0.6)' }}>
          {em}:{es}
        </span>

        {/* Scrubber */}
        <div
          className="flex-1 rounded h-1 cursor-pointer relative"
          style={{ background: 'rgba(255,255,255,0.1)' }}
          onClick={seek}
        >
          <div
            className="absolute top-0 left-0 h-1 rounded transition-[width] duration-100"
            style={{
              width: `${progress}%`,
              background: courseColor,
              boxShadow: `0 0 8px ${courseColor}80`,
            }}
          />
        </div>

        {/* Duration */}
        <span className="font-mono text-[11px] min-w-[38px]" style={{ color: 'rgba(200,190,230,0.6)' }}>
          {lesson.duration}
        </span>

        {/* Mute */}
        <button
          onClick={() => setMuted(!muted)}
          className="flex p-0 border-none bg-transparent cursor-pointer"
          style={{ color: muted ? 'rgba(200,190,230,0.35)' : courseColor }}
        >
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18V20.77c1.38-.32 2.63-.95 3.68-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
