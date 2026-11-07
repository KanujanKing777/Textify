import React from 'react';
import { Clock3, MessageSquare, Plus, X } from 'lucide-react';
import './ChatHistory.css';

const formatCreatedAt = (timestamp) => {
  if (!timestamp?.toDate) return 'Just now';

  return new Intl.DateTimeFormat(undefined, {
    month: 'short',
    day: 'numeric',
  }).format(timestamp.toDate());
};

function ChatHistoryPanel({
  entries,
  error,
  isLoading,
  isOpen,
  onClose,
  onNewChat,
  onSelect,
  selectedId,
  userLabel,
}) {
  return (
    <>
      <button
        className={`chat-history-backdrop${isOpen ? ' is-visible' : ''}`}
        type="button"
        aria-label="Close chat history"
        tabIndex={isOpen ? 0 : -1}
        onClick={onClose}
      />
      <aside className={`chat-history${isOpen ? ' is-open' : ''}`} aria-label="Chat history">
        <div className="chat-history-top">
          <a className="chat-history-brand" href="#top" onClick={onClose}>
            <span className="chat-history-mark">T</span>
            <span>textify</span>
          </a>
          <button
            className="chat-history-close"
            type="button"
            aria-label="Close chat history"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        <button className="chat-new-button" type="button" onClick={onNewChat}>
          <Plus size={17} />
          <span>New chat</span>
        </button>

        <div className="chat-history-section">
          <div className="chat-history-label">Recent</div>
          {error && <p className="chat-history-message is-error" role="alert">{error}</p>}
          {isLoading && <p className="chat-history-message">Loading history…</p>}
          {!isLoading && !error && entries.length === 0 && (
            <div className="chat-history-empty">
              <Clock3 size={17} />
              <p>Your generated content will appear here.</p>
            </div>
          )}
          <nav className="chat-history-list" aria-label="Saved chats">
            {entries.map((entry) => (
              <button
                className={`chat-history-item${entry.id === selectedId ? ' is-selected' : ''}`}
                key={entry.id}
                type="button"
                aria-current={entry.id === selectedId ? 'true' : undefined}
                onClick={() => onSelect(entry)}
              >
                <MessageSquare size={16} aria-hidden="true" />
                <span className="chat-history-item-copy">
                  <span className="chat-history-item-title">{entry.title || 'Untitled generation'}</span>
                  <span className="chat-history-item-meta">
                    <span>{entry.mode || 'Generation'}</span>
                    <time>{formatCreatedAt(entry.createdAt)}</time>
                  </span>
                </span>
              </button>
            ))}
          </nav>
        </div>

        <div className="chat-history-account">
          <span className="chat-account-avatar" aria-hidden="true">
            {(userLabel || 'T').trim().charAt(0).toUpperCase()}
          </span>
          <span className="chat-account-copy">
            <strong>{userLabel || 'Your account'}</strong>
            <span>Private history</span>
          </span>
        </div>
      </aside>
    </>
  );
}

export default ChatHistoryPanel;
