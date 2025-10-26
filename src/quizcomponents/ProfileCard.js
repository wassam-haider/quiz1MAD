import React from 'react';

export default function ProfileCard({ name, age, profession }) {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Profession: {profession}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
    margin: '20px auto',
    backgroundColor: 'rgb(249 247 247)',
    boxShadow: 'rgb(229 229 229)',
    
    
  },
};
