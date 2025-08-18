// Home.js
import React, { useState } from 'react';
import { formatText } from './api';

function Home() {
  const [text, setText] = useState('');
  const [platform, setPlatform] = useState('Whatsapp');
  const [tone, setTone] = useState('Casual');
  const [withe, setWithe] = useState('With');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFormat = async () => {
    setLoading(true);
    try {
      const result = await formatText(text, platform, tone, withe);
      setOutput(result);
    } catch (err) {
      setOutput('❌ Error formatting text.');
      console.error(err);
    }
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Dark theme styles
  const containerStyle = {
    maxWidth: 700,
    margin: '40px auto',
    padding: 20,
    backgroundColor: '#1f2937',
    borderRadius: 10,
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    fontFamily: 'Arial, sans-serif',
    color: '#f3f4f6',
    transition: 'all 0.3s ease'
  };

  const textareaStyle = {
    width: '96%',
    padding: 12,
    fontSize: 16,
    borderRadius: 8,
    border: '1px solid #4b5563',
    resize: 'vertical',
    outline: 'none',
    backgroundColor: '#374151',
    color: '#f3f4f6'
  };

  const selectStyle = {
    padding: '8px 12px',
    borderRadius: 6,
    border: '1px solid #4b5563',
    fontSize: 14,
    outline: 'none',
    backgroundColor: '#374151',
    color: '#f3f4f6'
  };

  const buttonStyle = {
    padding: '10px 18px',
    marginTop: 15,
    marginRight: 10,
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: 16
  };

  const copyButtonStyle = {
    ...buttonStyle,
    backgroundColor: copied ? '#16a34a' : '#6b7280'
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ textAlign: 'center', marginBottom: 20 }}>✨ Textify your Social Media content</h3>

      <textarea
        rows={6}
        style={textareaStyle}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
      />

      <div style={{ marginTop: 15, display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <label>
          <strong>Platform:</strong><br />
          <select style={selectStyle} value={platform} onChange={(e) => setPlatform(e.target.value)}>
            <option value="Whatsapp">Whatsapp</option>
            <option value="Discord">Discord</option>
            <option value="Instagram">Instagram</option>
            <option value="Twitter">Twitter</option>
          </select>
        </label>

        <label>
          <strong>Tone:</strong><br />
          <select style={selectStyle} value={tone} onChange={(e) => setTone(e.target.value)}>
            <option value="Casual">Casual</option>
            <option value="Formal">Formal</option>
            <option value="Cool">Cool</option>
          </select>
        </label>

        <label>
          <strong>Include Emojis:</strong><br />
          <select style={selectStyle} value={withe} onChange={(e) => setWithe(e.target.value)}>
            <option value="With">Yes</option>
            <option value="Without">No</option>
          </select>
        </label>
      </div>

      <div>
        <button onClick={handleFormat} style={buttonStyle} disabled={loading}>
          {loading ? 'Formatting...' : 'Format'}
        </button>
        {output && (
          <button onClick={handleCopy} style={copyButtonStyle}>
            {copied ? '✅ Copied!' : '📋 Copy'}
          </button>
        )}
      </div>

      {output && (
        <div
          style={{
            marginTop: 20,
            padding: 15,
            backgroundColor: '#374151',
            borderRadius: 8,
            border: '1px solid #4b5563'
          }}
        >
          <h3 style={{ marginTop: 0 }}>Formatted Text:</h3>
          <p style={{ whiteSpace: 'pre-wrap' }}>{output}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
