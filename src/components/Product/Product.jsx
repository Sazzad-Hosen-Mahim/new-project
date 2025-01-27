import { imageCard, productItem } from "../../lib/Data/ProductCardItem";
import ProductCard from "./ProductCard";
import ProductImageCard from "./ProductImageCard";

const Product = () => {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-3xl text-center font-bold mt-12">
          Welcome to Our 24/7 E-Pharmacy
        </h1>
        <p className="mt-12 text-center">
          Our online pharmacy has been helping people beat insomnia one night at
          a time since 2013, and we are widely regarded as the best sleeping
          pills supplier in the industry; stocking a complete range of safe and
          effective licensed medications for the treatment of insomnia. We also
          supply a variety of medications for the treatment of anxiety and pain
          relief. Our customers can buy sleeping pills online 24/7 without a
          doctor&apos;s prescription and at the lowest possible prices. <br />
          <span className="mt-4 block ">
            Our website provides extensive information regarding each and every
            medication we sell, including usage instructions, to ensure that
            customers can choose medications best suited to their needs and are
            able to use them in a safe and effective manner. We understand the
            importance of an efficient customer support team and prompt delivery
            service and endeavour to dispatch all orders within 24 hours.{" "}
          </span>{" "}
          <br />
          If you already know which product you need, you can simply select the
          quantity you desire from the menu below and add it to your shopping
          cart!
        </p>
      </div>
      <div className="grid lg:grid-cols-4 gap-2 rounded-md ">
        {productItem.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <div className="grid lg:grid-cols-4 gap-2 mt-10 ">
        {imageCard.map((item) => (
          <div key={item.id}>
            <ProductImageCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
