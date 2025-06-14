import { useState } from 'react';

export default function Home() {
  const messages = [
    'Bạn rất tuyệt vời!',
    'Chúc bạn một ngày tốt lành!',
    'Next.js thật thú vị!',
    'Bất ngờ chưa?'
  ];

  const [message, setMessage] = useState('');

  function showMessage() {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    setMessage(msg);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Trang Web Bất Ngờ</h1>
      <button onClick={showMessage}>Nhấn để xem điều bất ngờ</button>
      <p>{message}</p>
    </div>
  );
}
