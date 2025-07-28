import React, { useState } from 'react';

const Sell = () => {
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    image: '',
    description: '',
    sellerName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Product submitted successfully!");
    // Reset form
    setFormData({
      productName: '',
      price: '',
      image: '',
      description: '',
      sellerName: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">Sell an Item</h2>
      
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6 bg-gray-900 p-8 rounded-lg shadow-md border border-gray-700">
        
        {/* Product Info */}
        <div>
          <label className="block mb-1 text-sm">Product Name</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Price (in ₹)</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>

        {/* Seller Info */}
        <div>
          <label className="block mb-1 text-sm">Your Name</label>
          <input
            type="text"
            name="sellerName"
            value={formData.sellerName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
          >
            Submit Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sell;
