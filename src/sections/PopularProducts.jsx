import { products } from "../constants";
import  PopularProductCard  from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" classsName="max-container
    max-sm:mt-12">
      <div className="flex flex-col justify-start
      gap-5">
        <h2 className="text-4xl text-coral-red font-palanquin
        font-bold">Our 
        <span classsName="text-coral-red"> Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 
        font-monserrat text-white-400">Experience top-notch quality and style 
          with our sought-after selections.
        </p>
      </div>

      <div className="mt-60 grid lg:grid-cols-4 md:grid-cols-3
      sm:grid-cols-2 grid-cols-1
      sm:gap-6 gap-14 text-white-400">
        {products.map((product) =>(
          <PopularProductCard key= 
          {product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts