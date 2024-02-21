import React from 'react';
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { useDispatch } from 'react-redux';
import { add } from '../Store/CartSlice';
export default function Products() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(result => {
                setData(result)
                setTimeout(() => {
                    setLoading(false)

                }, 1000)
            })
            .catch(error => {
                setLoading(false)
                console.error('Error fetching data:', error)
            });

    }, []);

    const addToCart = (Product) => {
        // Dispatch a product
        dispatch(add(Product))
    }

    const cards = data.map(product => (
        <React.Fragment>

            {/* condition ? exprIfTrue : exprIfFalse */}

            {loading ? <Loader /> : <div key={product.id} style={{ width: '22rem', margin: '0.8rem 0.3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '2px solid black' }}>
                <div className="flex-none w-48 relative" >
                    <img src={product.image} alt={product.title} className="inset-0 w-full h-full object-cover" style={{ height: '300px', width: '300px' }} />
                </div>
                <form className="flex-auto p-6" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="flex flex-wrap">
                        <h1 className="flex-auto text-lg font-semibold text-slate-900" style={{ width: '100%' }}>
                            {product.title.slice(0, 20)}
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                            ${product.price}
                        </div>

                        <div className="w-full flex-none text-sm font-medium text-slate-700 mt-5" style={{ display: 'flex', flexDirection: 'column' }}>
                            In stock
                            <hr
                                style={{
                                    background: 'transparent',
                                    color: 'transparent',
                                    borderColor: 'transparent',
                                    height: '10px',
                                    width: ' 100%',
                                }}
                            />

                            <button type="button" onClick={() => addToCart(product)} class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Buy Now</button>
                        </div>

                    </div>
                </form>
            </div>}
        </React.Fragment>
    ));

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {cards}
        </div>
    );
}
