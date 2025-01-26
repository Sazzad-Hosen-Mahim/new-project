import CommonWrapper from "../components/CommonWrapper";
import Description from "../components/Description/Description";
import { Hero } from "../components/Hero/Hero";
import Product from "../components/Product/Product";
import Review from "../components/Review/Review";

const Home = () => {
  return (
    <>
      <CommonWrapper>
        <Hero />
        <Product />
        <Description />
        <Review />
      </CommonWrapper>
    </>
  );
};

export default Home;
