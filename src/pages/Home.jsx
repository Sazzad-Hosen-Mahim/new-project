import { Button, Pagination } from "@nextui-org/react";
import CommonWrapper from "../components/CommonWrapper";
import { useState } from "react";
import useFetchQuery from "../hooks/shared/useFetch";


const Home = () => {
  const [seeMore, setSeeMore] = useState( true )
 
const [page, setPage] = useState(1)
const { data, isSuccess } = useFetchQuery('/products', {limit: 10, skip: (page-1 )*10 });


if(isSuccess){
  console.log(data)
}
  return(
   <>
  
<CommonWrapper>
  
<Button onClick={()=> setPage(page+1)}>Page {page}</Button>
<Button onClick={()=> setSeeMore(true)}>See More</Button>
<Pagination radius="none" initialPage={1} onChange={setPage} page={page} size="lg" total={10} />
</CommonWrapper>
    </>
  );
};

export default Home;
