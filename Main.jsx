import React, { useState } from 'react';

export default function PhysicsApp() {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const data = await generatePhysicsTheory(topic);
    setResult(data);
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Physics Theories Generator 🌌</h1>
      <input 
        type="text" 
        value={topic} 
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Ex: Teoria das Cordas"
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Gerando...' : 'Gerar Teoria'}
      </button>
      <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>
        {result}
      </div>
    </div>
  );
}
