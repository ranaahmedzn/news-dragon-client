import React from 'react';
import './LeftNav.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='mb-3'>
            <h4 className='mb-3'>All Categories</h4>
            <div>
                {
                    categories.map(category => <p
                        key={category.id}
                        className='category'
                    >
                        <Link className='text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;