import React from 'react';

export default function Navbar({ view, setView, search, setSearch }) {
  return (
    <nav
      style={{
        background: 'rgba(8,5,20,0.82)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(124,92,191,0.18)',
      }}
      className="relative z-10 h-14 flex items-center gap-3 px-7"
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 mr-3">
        <div
          className="w-8 h-8 rounded-[10px] flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg,#7c5cbf,#b18af0)',
            boxShadow: '0 4px 14px rgba(124,92,191,0.5)',
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="white">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
          </svg>
        </div>
        <span className="text-[18px] font-bold tracking-tight text-[#f0ecff]">
          EduVerse
        </span>
      </div>

      {/* Nav tabs */}
      <div className="flex gap-1">
        {['home', 'my courses'].map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className="px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 border"
            style={{
              background: view === v ? 'rgba(124,92,191,0.2)' : 'transparent',
              borderColor: view === v ? 'rgba(124,92,191,0.5)' : 'transparent',
              color: view === v ? '#c4b5f7' : 'rgba(200,190,230,0.55)',
            }}
          >
            {v === 'home' ? '🏠 Home' : '📚 My Courses'}
          </button>
        ))}
      </div>

      {/* Right: search + avatar */}
      <div className="ml-auto flex items-center gap-3">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
            width="13" height="13" viewBox="0 0 24 24"
            fill="rgba(180,170,220,0.5)"
          >
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="pl-8 pr-4 py-2 rounded-[9px] text-[13px] w-52 focus:outline-none"
            style={{
              background: 'rgba(15,12,28,0.65)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#f0ecff',
              fontFamily: "'Sora', sans-serif",
            }}
          />
        </div>

        {/* Avatar */}
        <div
          className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-xs font-bold text-white cursor-pointer select-none"
          style={{
            background: 'linear-gradient(135deg,#7c5cbf,#b18af0)',
            border: '2px solid rgba(177,138,240,0.4)',
          }}
        >
          KO
        </div>
      </div>
    </nav>
  );
}
