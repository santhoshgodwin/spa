import { useState, useMemo } from "react";
 
export default function Memo() {
  const [data, setData] = useState(0);

  const result = useMemo( () => {
    console.log('inside usememo');
    var calcValue = data + 5;
    return calcValue;
  }, [data])

 
  return (
    <div className="app-container">
      <h2>useMemo Optimization Demo</h2>      
      <p>Original value: {data}</p>
      <p>Updated value: {result}</p>
      <button className="btn" onClick={() => setData(1)}>
        stable
      </button> 
      <div>VS</div>
      <button className="btn" onClick={() => setData(data + 1)}>
        non-stable
      </button> 
    </div>
  );
}