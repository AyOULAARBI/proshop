import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../consts/product';
import { Product } from '../types/types';
import { Star, StarHalf } from 'lucide-react';

const ProductPage = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const { productId } = useParams<{ productId: string }>();

    useEffect(() => {
        const foundProduct = products.find(item => item.id === productId);
        setProduct(foundProduct || null);
    }, [productId]);
    
    if (!product) return <div>Product Not Found</div>;
    // let stars = <p></p>;
    // const getRatingLogic = ()=><div className="flex items-center gap-1">

    //    {
    //     if(product?.rating % 1 === 0.5){

    //         stars = <div>
    //             {Array.from({length:(product.rating - 0.5)-1}).map((_,i)=><Star  className='text-yellow-300 ' key={i} />)}
    //             <StarHalf />
    //             {Array.from({length:5-(product.rating - 0.5)-1}).map((_,i)=><Star  className='text-gray-300 ' key={i} />)}
    //         </div>
    //     }else{

    //             {Array.from({length:( Math.round(product.rating))-1}).map((_,i)=><Star className='text-yellow-300 ' key={i} />)}
    //             {Array.from({length:5-( Math.round(product.rating))-1}).map((_,i)=><Star className='text-gray-400' key={i} />)}
    //     }}
        // </div>
    
    
    return (
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
            <div className="grid md:grid-cols-5 gap-3 items-start">
                <div className="md:col-span-4">
                    <img
                        src={product.image as string}
                        alt="Product Image"
                        className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                    />
                </div>
            </div>
            <div className="grid gap-4 md:gap-10 items-start">
                <div className="md:flex items-start">
                    <div className="grid gap-4">
                        <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
                        <div>
                            <p>{product.shortDescription}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-4xl font-bold ">${product.price}</div>
                        </div>
                        <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-slate-700">
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className="grid gap-4 text-sm leading-loose">
                    <h2 className="font-bold text-2xl">Customer Reviews</h2>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                                <svg className="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 1.105-.895 2-2 2s-2-.895-2-2m4 0c0 1.105.895 2 2 2s2-.895 2-2M12 8.5a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3zm.879 8.282a4.992 4.992 0 002.121.695 5 5 0 10-7.878 0 4.992 4.992 0 002.121-.695M12 14a5 5 0 00-3.75 1.938 4.992 4.992 0 002.25.562c1.13 0 2.14-.372 3-1.066a4.992 4.992 0 002.25.562c1.13 0 2.14-.372 3-1.066m0 0a4.992 4.992 0 00-3 .001m0 0c1.33.888 2.54 1.397 3.77 1.397s2.44-.509 3.77-1.397M12 21v1m-9 1h1.751c.268-.637.763-1.2 1.423-1.595a4.992 4.992 0 001.599-.694l1.252.001c1.23-.002 2.44-.511 3.77-1.398m-2.43 1.595a4.992 4.992 0 001.424-1.595H21V21m-9 1h-3m0-1.22c1.228-.888 2.438-1.396 3.769-1.396 1.332 0 2.542.507 3.771 1.396M21 21h1M3 21H2"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">User Name</h3>
                                <div className="flex items-center gap-1">
                                    {product?.rating % 1 !== 0 ? <>
                {Array.from({length:(Math.floor(product.rating))}).map((_,i)=><Star  className='text-yellow-300 ' key={i} />)}
                <StarHalf className='text-yellow-300' />
                {Array.from({length:5-(Math.floor(product.rating))-1}).map((_,i)=><Star  className='text-gray-300 ' key={i} />)}
            </> : <> {Array.from({length:( product.rating)}).map((_,i)=><Star className='text-yellow-300 ' key={i} />)}
            {Array.from({length:5-product.rating}).map((_,i)=><Star className='text-gray-400' key={i} />)}</>}
                                   
                                </div>
                                {product.rating}
                            </div>
                        </div>
                        <p className="mt-4">Review comment</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
