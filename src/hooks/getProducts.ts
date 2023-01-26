import { useEffect, useState } from 'react';
import axios from 'axios';

import { Product } from '../typings';

export function getProducts() {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        
        const fetchData = async () => {
            await axios
                    .get('https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC')
                    .then((response) => setData(response.data.products))
                    .finally(() => setLoading(false));
        }

        fetchData();
    }, [])
    
    return { data, loading };
}