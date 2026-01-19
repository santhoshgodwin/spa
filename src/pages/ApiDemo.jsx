import { useState } from "react";
import { fetchWithCache } from "../services/apiService";
 
export default function ApiDemo() {
  const [data, setData] = useState(null);
 
  const loadData = async () => {
    const result = await fetchWithCache(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    setData(result);
  };
 
  return (
    <div className="app-container">
      <h2>API + Caching Demo</h2>
      <button className="btn" onClick={loadData}>
        Fetch Data
      </button>
 
      {data && (
        <pre className="api-box">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}