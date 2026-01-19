const cache = new Map();

export async function fetchWithCache(url){

    if(cache.has(url)){
        console.log("From Cache");
        return cache.get(url);
    }

    console.log("API call");
    const response = await fetch(url);
    const data = await response.json();

    cache.set(url,data);
    return data;
}