/* eslint-disable @next/next/no-img-element */
import { ProductCardModel } from '@/module/home/models/product_card_model';
import React from 'react';

interface ProductCardProps {
  product: ProductCardModel
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className='lg:col-span-1 sm:col-span-2 max-sm:col-span-4 h-full' key={product.id}>
      <div className="flex flex-col h-full items-start justify-center shadow-[rgba(17,_17,_26,_0.08)_0px_0px_20px] p-4 rounded-2xl">
        <img src={product.image} alt={product.productName} className="w-full h-48 rounded-[18px] shadow-[rgba(17,_17,_26,_0.05)_0px_0px_10px] object-cover object-top" />
        <div className='mt-5 grow'>
          <h2 className='text-black text-2xl font-bold mb-3'>{product.productName}</h2>
          <p className='text-lg text-gray-500 text-justify grow'>{product.description}</p>
        </div>
        <div className='mt-3 flex flex-wrap'>
          {product.tags.map((tag, index) => (
            <span key={index} className='text-sm text-black font-semibold bg-gray-100 px-[10px] py-[6px] rounded-full mr-2 mt-2'>{tag}</span>
          ))}
        </div>
        <div className='flex w-full justify-between mt-7'>
          <div className='items-start justify-start gap-1'>
            <p className='text-md font-semibold text-gray-500'>Price</p>
            <p className='text-black text-lg font-bold'>Free to play</p>
          </div>
          <div>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-6 py-2.5 text-center shadow-md shadow-purple-300">
              Play now
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 5c-.28 0-.5.22-.5.5v4.67l3.47 1.98c.26.15.53-.18.32-.38L10.32 10 6.5 7.67c-.26-.15-.53.18-.32.38L9.68 10 6.18 11.85c-.26.15-.53-.18-.32-.38L9.5 9.5V5.5c0-.28.22-.5.5-.5z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;