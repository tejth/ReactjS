# Intro  
<a  href ="https//tejth-currencyconvertor.netlify.app"                                                                                                                                                                                                                                                                                                                                                                                                                                    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   >Open Site</a>  
<p> Converts Currency of one country to another</p>
<img width="959" alt="asfas" src="https://github.com/tejth/ReactjS/assets/110801292/38d69b3b-ed85-461c-9d10-c7d76b95f4fd">



# Major Learning
Custom hooks in React are JavaScript functions that allow you to reuse stateful logic across multiple components. They leverage React's built-in hooks (like useState, useEffect, useContext, etc.) and enable you to encapsulate and reuse complex logic in a clean and modular way.

``` import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
  ```
You can use this custom hook in a component like this:

```
import React from 'react';                    
  
import useFetch from './useFetch';

function App() {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
 ```
  
