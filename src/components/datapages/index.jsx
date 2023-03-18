import { useState, useEffect } from 'react';

export default function DataPage() {
  const [data, setData] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/data');
      const newData = await res.json();
      setData(newData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dados:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <h3>{item.subtitle}</h3>
            <p>{item.subText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

