import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

// The 10 existing community members — pick one as "you"
const MEMBERS = [
  'Chaitanya Mahendra Chouhan',
  'Abhishek Chauhan',
  'Manish Kumar Yadav',
  'Soham Rastogi',
  'Himanshu Prajapati',
  'Parth Badgire',
  'Sahil Bhaskarwar',
  'Sankshitha Bhukya',
  'Srikruthi Amballa',
  'Prakhar Gupta',
]

const API_URL = 'http://localhost:8080/api/messages'

export default function Chat() {
  const [messages, setMessages]   = useState([])
  const [myName, setMyName]       = useState(MEMBERS[0])
  const [input, setInput]         = useState('')
  const [sending, setSending]     = useState(false)
  const [error, setError]         = useState(null)
  const [online, setOnline]       = useState(false)
  const messagesAreaRef = useRef(null)

  // ── Fetch messages from Spring Boot every 3 seconds ──────────────────────
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(API_URL)
        if (!res.ok) throw new Error('Server error')
        const data = await res.json()
        setMessages(data)
        setOnline(true)
        setError(null)
      } catch {
        setOnline(false)
        setError('Cannot reach the chat server. Make sure Spring Boot is running on port 8080.')
      }
    }

    fetchMessages()                          // fetch immediately on mount
    const interval = setInterval(fetchMessages, 3000)  // then every 3 seconds
    return () => clearInterval(interval)               // clean up on unmount
  }, [])

  // ── Auto-scroll to latest message (within the chat box only) ───────────
  useEffect(() => {
    if (messagesAreaRef.current) {
      messagesAreaRef.current.scrollTop = messagesAreaRef.current.scrollHeight
    }
  }, [messages])

  // ── Send a new message via POST ───────────────────────────────────────────
  async function handleSend(e) {
    e.preventDefault()
    if (!input.trim()) return
    setSending(true)
    try {
      const res = await fetch(API_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ sender: myName, content: input.trim() }),
      })
      if (!res.ok) throw new Error('Send failed')
      setInput('')         // clear the input box
    } catch {
      setError('Failed to send message. Is the backend running?')
    } finally {
      setSending(false)
    }
  }

  // ── Format timestamp for display ─────────────────────────────────────────
  function formatTime(ts) {
    if (!ts) return ''
    const d = new Date(ts)
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  // ── Assign a color to each sender (consistent across messages) ───────────
  const senderColors = {}
  const palette = ['#36D1DC', '#5B86E5', '#f7971e', '#11998e', '#ee0979', '#c471f5']
  messages.forEach(m => {
    if (!senderColors[m.sender]) {
      senderColors[m.sender] = palette[Object.keys(senderColors).length % palette.length]
    }
  })

  return (
    <>
      <Navbar />

      <div className="chat-page">
        {/* ── Header ───────────────────────────────────── */}
        <div className="chat-header">
          <div className="container">
            <div className="chat-header-inner">
              <div>
                <h2 className="chat-title">
                  <i className="fas fa-comments me-2" />Community Chat
                </h2>
                <p className="chat-sub">Real-time messaging powered by Spring Boot + H2</p>
              </div>
              <div className="chat-status">
                <span className={`status-dot ${online ? 'online' : 'offline'}`} />
                <span>{online ? 'Server Connected' : 'Server Offline'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container chat-layout">
          {/* ── Sidebar ──────────────────────────────────── */}
          <aside className="chat-sidebar">
            <div className="sidebar-card">
              <h5 className="sidebar-heading">
                <i className="fas fa-user-circle me-2" />You are chatting as
              </h5>
              <select
                className="name-select"
                value={myName}
                onChange={e => setMyName(e.target.value)}
              >
                {MEMBERS.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <p className="sidebar-hint">Change name to simulate a different user</p>
            </div>

            <div className="sidebar-card">
              <h5 className="sidebar-heading">
                <i className="fas fa-users me-2" />Active Members
              </h5>
              <ul className="member-list">
                {MEMBERS.map(m => (
                  <li key={m} className={`member-item ${m === myName ? 'me' : ''}`}>
                    <span
                      className="member-dot"
                      style={{ background: senderColors[m] || '#888' }}
                    />
                    {m}
                    {m === myName && <span className="you-badge">you</span>}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-card api-info">
              <h5 className="sidebar-heading">
                <i className="fas fa-server me-2" />API Endpoints
              </h5>
              <code className="api-code">GET  /api/messages</code>
              <code className="api-code">POST /api/messages</code>
              <a
                href="http://localhost:8080/h2-console"
                target="_blank"
                rel="noopener noreferrer"
                className="h2-link"
              >
                <i className="fas fa-database me-1" />Open H2 Console
              </a>
            </div>
          </aside>

          {/* ── Chat Panel ───────────────────────────────── */}
          <div className="chat-panel">
            {error && (
              <div className="chat-error">
                <i className="fas fa-exclamation-triangle me-2" />{error}
              </div>
            )}

            {/* Message Bubbles */}
            <div className="messages-area" ref={messagesAreaRef}>
              {messages.length === 0 && !error && (
                <div className="no-messages">
                  <i className="fas fa-comment-dots" />
                  <p>No messages yet. Be the first to say something!</p>
                </div>
              )}

              {messages.map(msg => {
                const isMe = msg.sender === myName
                return (
                  <div key={msg.id} className={`bubble-row ${isMe ? 'mine' : 'theirs'}`}>
                    {!isMe && (
                      <div
                        className="avatar"
                        style={{ background: senderColors[msg.sender] || '#888' }}
                      >
                        {msg.sender.charAt(0)}
                      </div>
                    )}
                    <div className="bubble-group">
                      {!isMe && (
                        <span
                          className="bubble-sender"
                          style={{ color: senderColors[msg.sender] || '#888' }}
                        >
                          {msg.sender}
                        </span>
                      )}
                      <div className={`bubble ${isMe ? 'bubble-me' : 'bubble-other'}`}>
                        {msg.content}
                      </div>
                      <span className="bubble-time">{formatTime(msg.timestamp)}</span>
                    </div>
                    {isMe && (
                      <div className="avatar avatar-me">
                        {msg.sender.charAt(0)}
                      </div>
                    )}
                  </div>
                )
              })}

            </div>

            {/* Input Bar */}
            <form className="chat-input-bar" onSubmit={handleSend}>
              <input
                type="text"
                className="chat-input"
                placeholder={`Message as ${myName.split(' ')[0]}…`}
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={!online}
                maxLength={500}
              />
              <button
                type="submit"
                className="send-btn"
                disabled={!online || sending || !input.trim()}
              >
                {sending
                  ? <i className="fas fa-spinner fa-spin" />
                  : <i className="fas fa-paper-plane" />
                }
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        /* ── Page Layout ─────────────────────────────────────────────── */
        .chat-page {
          min-height: 100vh;
          background: var(--light-color, #0f0f1a);
          padding-bottom: 40px;
        }

        /* ── Header ─────────────────────────────────────────────────── */
        .chat-header {
          background: linear-gradient(135deg, rgba(54,209,220,0.15), rgba(91,134,229,0.15));
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 28px 0 20px;
          margin-bottom: 28px;
        }
        .chat-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .chat-title {
          color: #fff;
          font-size: 1.9rem;
          font-weight: 700;
          margin: 0;
        }
        .chat-sub {
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
          margin: 4px 0 0;
        }
        .chat-status {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
        }
        .status-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          display: inline-block;
        }
        .status-dot.online  { background: #4cff91; box-shadow: 0 0 6px #4cff91; }
        .status-dot.offline { background: #ff4c4c; box-shadow: 0 0 6px #ff4c4c; }

        /* ── Two-column layout ───────────────────────────────────────── */
        .chat-layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }

        /* ── Sidebar ─────────────────────────────────────────────────── */
        .chat-sidebar {
          flex: 0 0 280px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .sidebar-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 18px;
        }
        .sidebar-heading {
          color: #36D1DC;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }
        .name-select {
          width: 100%;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          color: #fff;
          padding: 10px 12px;
          font-size: 0.9rem;
          outline: none;
          cursor: pointer;
        }
        .name-select option { background: #1a1a2e; }
        .sidebar-hint {
          color: rgba(255,255,255,0.35);
          font-size: 0.75rem;
          margin-top: 8px;
          margin-bottom: 0;
        }
        .member-list {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .member-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.7);
          font-size: 0.85rem;
        }
        .member-item.me { color: #fff; font-weight: 600; }
        .member-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .you-badge {
          margin-left: auto;
          background: rgba(54,209,220,0.2);
          color: #36D1DC;
          font-size: 0.7rem;
          padding: 1px 7px;
          border-radius: 20px;
        }
        .api-info { font-family: monospace; }
        .api-code {
          display: block;
          color: #4cff91;
          font-size: 0.8rem;
          margin-bottom: 4px;
        }
        .h2-link {
          display: inline-block;
          margin-top: 10px;
          color: #36D1DC;
          font-size: 0.82rem;
          text-decoration: none;
          font-family: sans-serif;
        }
        .h2-link:hover { text-decoration: underline; }

        /* ── Chat Panel ──────────────────────────────────────────────── */
        .chat-panel {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          overflow: hidden;
          min-height: 560px;
        }
        .chat-error {
          background: rgba(255,76,76,0.15);
          color: #ff9999;
          padding: 14px 20px;
          font-size: 0.88rem;
          border-bottom: 1px solid rgba(255,76,76,0.2);
        }

        /* ── Messages Area ───────────────────────────────────────────── */
        .messages-area {
          flex: 1;
          overflow-y: auto;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-height: 460px;
          max-height: 460px;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.1) transparent;
        }
        .no-messages {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          color: rgba(255,255,255,0.25);
          gap: 12px;
          height: 100%;
          padding: 60px 0;
        }
        .no-messages i { font-size: 3rem; }

        /* ── Chat Bubbles ────────────────────────────────────────────── */
        .bubble-row {
          display: flex;
          align-items: flex-end;
          gap: 10px;
        }
        .bubble-row.mine   { flex-direction: row-reverse; }
        .bubble-row.theirs { flex-direction: row; }

        .avatar {
          width: 36px; height: 36px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
          flex-shrink: 0;
        }
        .avatar-me {
          background: linear-gradient(135deg, #36D1DC, #5B86E5) !important;
        }

        .bubble-group {
          display: flex;
          flex-direction: column;
          max-width: 65%;
        }
        .bubble-row.mine .bubble-group { align-items: flex-end; }

        .bubble-sender {
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .bubble {
          padding: 12px 16px;
          border-radius: 18px;
          font-size: 0.92rem;
          line-height: 1.45;
          word-break: break-word;
        }
        .bubble-me {
          background: linear-gradient(135deg, #36D1DC, #5B86E5);
          color: #fff;
          border-bottom-right-radius: 4px;
        }
        .bubble-other {
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.9);
          border-bottom-left-radius: 4px;
        }
        .bubble-time {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.35);
          margin-top: 4px;
        }

        /* ── Input Bar ───────────────────────────────────────────────── */
        .chat-input-bar {
          display: flex;
          gap: 10px;
          padding: 16px 18px;
          border-top: 1px solid rgba(255,255,255,0.08);
          background: rgba(0,0,0,0.2);
        }
        .chat-input {
          flex: 1;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 12px;
          color: #fff;
          padding: 12px 16px;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .chat-input::placeholder { color: rgba(255,255,255,0.3); }
        .chat-input:focus { border-color: #36D1DC; }
        .chat-input:disabled { opacity: 0.4; cursor: not-allowed; }

        .send-btn {
          width: 48px; height: 48px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #36D1DC, #5B86E5);
          color: #fff;
          font-size: 1.1rem;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: transform 0.15s, opacity 0.15s;
          flex-shrink: 0;
        }
        .send-btn:hover:not(:disabled) { transform: scale(1.07); }
        .send-btn:disabled { opacity: 0.4; cursor: not-allowed; }

        /* ── Responsive ──────────────────────────────────────────────── */
        @media (max-width: 768px) {
          .chat-layout { flex-direction: column; }
          .chat-sidebar { flex: unset; width: 100%; }
        }
      `}</style>
    </>
  )
}
