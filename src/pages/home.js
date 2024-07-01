import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from '../components/ItemList';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('/api/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the items!', error);
            });
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <ItemList items={items} />
        </div>
    );
}

export default Home;
