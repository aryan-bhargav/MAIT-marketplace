
import browseData from './data/browsedata'
import ProductCard from "../Components/ProductCart"

const Browse = () => {
  return (
    <div className="bg-black min-h-screen py-10 px-6">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">Browse Items</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {browseData.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
