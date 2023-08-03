import React, { useState } from 'react';

export default function AppCount() {
  const [total, setTotalCount] = useState(0);
  const handleTotalCount = () => setTotalCount(prev => prev +1);
  return (
    <div>
      <p>{total}</p>
      <Count handleTotalCount={handleTotalCount} />
      <Count handleTotalCount={handleTotalCount} />
    </div>
  );
}

function Count({ handleTotalCount }) {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount((prev) => prev + 1);

  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          handleCount();
          handleTotalCount();
        }}
      >
        Count
      </button>
    </>
  );
}