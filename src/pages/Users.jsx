import { useEffect, useState } from "react";
import { fetchWithCache } from "../services/api";

export default function Users(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadUsers = async () => {
        setLoading(true);
        const data = await fetchWithCache("https://jsonplaceholder.typicode.com/users");        
        setUsers(data);
        setLoading(false);        
    };

    return(
        <div>
        <h2>Users</h2>

        <button onClick={loadUsers}>
            Load Users
        </button>

        {loading && <p>Loading...</p>}
        <url>
            {users.map(u => (
                <li key={u.id}>{u.name}</li>
            ))}
        </url>
        </div>
    );
};