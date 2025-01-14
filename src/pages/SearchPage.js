import React, { useState } from 'react';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        // Implement search logic here
        // For now, we'll just simulate search results
        const simulatedResults = [
            { title: 'Getting Started with Electronics', link: '/docs/getting-started/introduction' },
            { title: 'Advanced Circuit Design', link: '/docs/advanced/circuit-design' },
            { title: 'Microcontroller Programming', link: '/docs/advanced/microcontrollers' }
        ];
        setResults(simulatedResults);
    };

    return (
        <main style={{ padding: '20px' }}>
            <h1>Search</h1>
            <div>
                <input 
                    type="text" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder="Search for articles or topics..." 
                    style={{ padding: '10px', width: '300px' }}
                />
                <button onClick={handleSearch} style={{ padding: '10px', marginLeft: '10px' }}>Search</button>
            </div>
            <div style={{ marginTop: '20px' }}>
                {results.length > 0 ? (
                    <ul>
                        {results.map((result, index) => (
                            <li key={index}>
                                <a href={result.link}>{result.title}</a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found</p>
                )}
            </div>
            <div style={{ marginTop: '40px' }}>
                <h2>Popular Searches</h2>
                <ul>
                    <li><a href="/docs/popular/getting-started">Getting Started</a></li>
                    <li><a href="/docs/popular/advanced-circuits">Advanced Circuits</a></li>
                    <li><a href="/docs/popular/microcontrollers">Microcontrollers</a></li>
                </ul>
            </div>
        </main>
    );
};

export default SearchPage;