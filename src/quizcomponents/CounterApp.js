import React, { useState } from 'react';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h2>Counter App</h2>
      <h3>{count}</h3>
      <div>
        <button style={styles.btn} onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button
          style={styles.btn}
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    bbackgroundColor: 'rgb(51 47 47)',
    padding: '20px',
    borderRadius: '10px',
    width: '250px',
    margin: 'auto',
  },
  btn: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
