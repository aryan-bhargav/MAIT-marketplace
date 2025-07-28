import React from 'react';

const ProductCard = ({ name, price, image, description }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300">
      <img src={image} alt={name} className="w-full h-48 object-contain bg-gray-800 p-2" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-orange-400">{name}</h3>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
        <p className="mt-3 font-bold text-blue-400">{price}</p>
        <button className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-white">
          Contact Seller
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
