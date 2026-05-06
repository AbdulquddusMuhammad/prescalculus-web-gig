import React, { useState, useEffect } from 'react';
import { FILE_ICONS, FILE_BG, FILE_BORDER } from '../data/courses';

export default function MaterialsPanel({ lesson }) {
  const [tab, setTab] = useState('materials');
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [quizAnswer, setQuizAnswer] = useState(null);

  useEffect(() => {
    setQuizAnswer(null);
    setNote('');
  }, [lesson.id]);

  const addNote = () => {
    if (note.trim()) {
      setNotes((n) => [
        { text: note, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
        ...n,
      ]);
      setNote('');
    }
  };

  const q = lesson.quiz[0];

  const tabStyle = (t) => ({
    padding: '7px 14px',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 500,
    transition: 'all 0.15s',
    border: '1px solid',
    fontFamily: "'Sora', sans-serif",
    background: tab === t ? 'rgba(124,92,191,0.2)' : 'transparent',
    borderColor: tab === t ? 'rgba(124,92,191,0.5)' : 'transparent',
    color: tab === t ? '#c4b5f7' : 'rgba(200,190,230,0.5)',
  });

  return (
    <div className="flex flex-col h-full">
      {/* Tabs */}
      <div
        className="flex gap-1 pb-3 mb-3 flex-wrap"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        {['materials', 'quiz', 'notes'].map((t) => (
          <button key={t} style={tabStyle(t)} onClick={() => setTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
            {t === 'materials' && ` (${lesson.materials.length})`}
            {t === 'notes' && notes.length > 0 && ` (${notes.length})`}
          </button>
        ))}
      </div>

      {/* ── Materials ── */}
      {tab === 'materials' && (
        <div className="fade-up overflow-y-auto flex-1">
          <p
            className="text-[11px] mb-2.5 uppercase tracking-widest font-semibold"
            style={{ color: 'rgba(180,170,220,0.5)' }}
          >
            Lesson Files
          </p>
          {lesson.materials.map((m, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-[10px] p-3 mb-2 cursor-pointer transition-all duration-200"
              style={{
                background: 'rgba(15,12,28,0.6)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(124,92,191,0.45)';
                e.currentTarget.style.background = 'rgba(124,92,191,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.background = 'rgba(15,12,28,0.6)';
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-lg"
                style={{
                  background: FILE_BG[m.type] || 'rgba(30,20,50,0.5)',
                  border: `1px solid ${FILE_BORDER[m.type] || 'rgba(100,80,180,0.3)'}`,
                }}
              >
                {FILE_ICONS[m.type]}
              </div>
              <div className="flex-1">
                <p className="text-[13px] font-medium text-[#f0ecff] mb-0.5">{m.label}</p>
                <p className="text-[11px]" style={{ color: 'rgba(180,170,220,0.5)' }}>
                  {m.pages ? `${m.pages} pages` : ''}
                  {m.items ? `${m.items} exercises` : ''}
                  {m.type === 'video' && !m.pages && !m.items ? 'Video resource' : ''}
                </p>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(155,114,240,0.7)">
                <path d="M5 20h14v-2H5v2zm7-18l-7 7h4v6h6v-6h4l-7-7z" />
              </svg>
            </div>
          ))}
          {/* External resources */}
          <div
            className="flex items-start gap-3 rounded-[10px] p-3 cursor-pointer"
            style={{
              background: 'rgba(15,12,28,0.4)',
              border: '1px dashed rgba(100,80,180,0.3)',
            }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
              style={{ background: 'rgba(20,15,40,0.5)', border: '1px dashed rgba(100,80,180,0.3)' }}
            >
              🔗
            </div>
            <div>
              <p className="text-[13px] font-medium" style={{ color: 'rgba(180,170,220,0.5)' }}>
                External Resources
              </p>
              <p className="text-[11px]" style={{ color: 'rgba(130,120,170,0.4)' }}>
                Links from instructor
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Quiz ── */}
      {tab === 'quiz' && (
        <div className="fade-up flex-1 overflow-y-auto">
          <div
            className="rounded-xl p-4"
            style={{
              background: 'rgba(15,10,30,0.6)',
              border: '1px solid rgba(155,114,240,0.18)',
            }}
          >
            <p
              className="text-[11px] mb-3 uppercase tracking-widest font-semibold"
              style={{ color: 'rgba(180,170,220,0.5)' }}
            >
              Knowledge Check
            </p>
            <p className="text-[14px] font-medium text-[#f0ecff] mb-4 leading-relaxed">{q.q}</p>
            {q.opts.map((opt, i) => {
              let cls = 'quiz-opt';
              if (quizAnswer !== null) {
                if (i === q.ans) cls += ' correct';
                else if (i === quizAnswer && quizAnswer !== q.ans) cls += ' wrong';
              }
              return (
                <button
                  key={i}
                  className={cls}
                  onClick={() => quizAnswer === null && setQuizAnswer(i)}
                >
                  <span className="font-bold mr-2 opacity-60">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                </button>
              );
            })}
            {quizAnswer !== null && (
              <div
                className="fade-up mt-1 p-3 rounded-[9px]"
                style={{
                  background: quizAnswer === q.ans ? 'rgba(74,222,128,0.1)' : 'rgba(248,113,113,0.1)',
                  border: `1px solid ${quizAnswer === q.ans ? 'rgba(74,222,128,0.4)' : 'rgba(248,113,113,0.4)'}`,
                }}
              >
                <p
                  className="text-[13px] font-semibold"
                  style={{ color: quizAnswer === q.ans ? '#4ade80' : '#f87171' }}
                >
                  {quizAnswer === q.ans ? '✓ Correct! Great job.' : `✗ Not quite — answer: ${q.opts[q.ans]}`}
                </p>
              </div>
            )}
            {quizAnswer !== null && (
              <button
                onClick={() => setQuizAnswer(null)}
                className="mt-3 w-full py-2 rounded-[9px] text-[13px] font-medium transition-all"
                style={{
                  background: 'rgba(124,92,191,0.08)',
                  border: '1px solid rgba(124,92,191,0.4)',
                  color: '#c4b5f7',
                  fontFamily: "'Sora', sans-serif",
                }}
              >
                Try Again
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── Notes ── */}
      {tab === 'notes' && (
        <div className="fade-up flex-1 flex flex-col gap-2.5 overflow-y-auto">
          <div>
            <textarea
              className="note-input"
              placeholder="Your notes for this lesson… (Ctrl+Enter to save)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              onKeyDown={(e) => e.ctrlKey && e.key === 'Enter' && addNote()}
              style={{ width: '100%', minHeight: 80 }}
            />
            <button
              onClick={addNote}
              className="mt-2 w-full py-2 rounded-[9px] text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg,#7c5cbf,#5a3fa0)',
                border: 'none',
                fontFamily: "'Sora', sans-serif",
                cursor: 'pointer',
              }}
            >
              Save Note
            </button>
          </div>
          {notes.length === 0 && (
            <p className="text-[12px] text-center pt-4" style={{ color: 'rgba(155,140,200,0.4)' }}>
              No notes yet — start typing above
            </p>
          )}
          {notes.map((n, i) => (
            <div
              key={i}
              className="p-3 rounded-[9px]"
              style={{
                background: 'rgba(15,10,30,0.55)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <p className="text-[11px] mb-1.5" style={{ color: 'rgba(155,114,240,0.7)' }}>
                🕐 {n.time}
              </p>
              <p className="text-[13px] text-[#e8e4f0] leading-relaxed">{n.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
