import { Button } from "@nextui-org/react";
import usePostMutate from "../hooks/shared/usePostMutate";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CommonWrapper from "../components/CommonWrapper";
import CommonHeader from "../components/CommonHeader";


const Home = () => {
 
  const navigate = useNavigate();
  const onSuccess= (data) =>{
    console.log(data.data.id)
    toast.success("product is added")
    navigate(`/product/${data.data.id}`);

  } 
  const OnError= (err) =>{
console.log(err)
toast.error("Something went wrong")
  } 
 const { isPending, mutate } =usePostMutate('/products/add', onSuccess, OnError)



  return(
   <>
  

      <CommonWrapper>
      <Button  isLoading={isPending}  isDisabled={true} onClick={()=> mutate({
        title: 'BMW Pencil'
    })}>Add Product</Button>
      </CommonWrapper>
    <div className="w-full h-[400px] bg-sky-950"></div>
      <CommonWrapper>
        <CommonHeader Class="text-red-500 text-center text-large">
        HOT DEALS OF THE DAY

        </CommonHeader>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, hic rerum neque sunt, vitae expedita, laboriosam ipsa ipsam quam error mollitia maxime incidunt quasi repellat voluptatibus perferendis officiis delectus ad.
      
      <CommonHeader>
      Trending Products


        </CommonHeader>
      </CommonWrapper>
    </>
  );
};

export default Home;
