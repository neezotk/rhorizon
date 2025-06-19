import React, { useState } from 'react';

function App() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch('http://localhost:3001/api/candidate', {
      method: 'POST',
      body: data
    });

    if (res.ok) setStatus('Candidature envoyée !');
    else setStatus('Erreur lors de l'envoi.');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Candidature RHorizon</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nom" required /><br />
        <input name="email" type="email" placeholder="Email" required /><br />
        <input name="cv" type="file" required /><br />
        <button type="submit">Envoyer</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

export default App;
