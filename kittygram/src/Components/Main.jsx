import { useEffect, useState } from "react";
import Post from "./Post";

 function Main(){
    const [result,setResult] = useState(null);
    const [loading,setLoading] = useState(false);
    const url = "https://api.giphy.com/v1/gifs/search?api_key=yRm1q063egYSWQbScwqcEL5iF8Y9BHNH&q=cat&limit=12&offset=27&rating=g&lang=en&bundle=messaging_non_clips";
    
    useEffect(()=>{
        setLoading(true);
        async function fetchData(){
            
            const response = await fetch(url);
            const data = await response.json();
            setResult(data);
           console.log(data);
           
            setLoading(false);
            
        }
        fetchData()
        
    },[])
   
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = event => {
      setScrollTop(event.currentTarget.scrollTop);
    };
 
    

    return  <div id="Main" onScroll={handleScroll}>
         <h2>Scroll Top: {scrollTop}</h2>
        {result ? result.data.map((cat) => <Post key={cat.id} title={cat.id} pic={cat.images.original.url}></Post>) : <h1>loading</h1>}

    
        
  
    </div>
}

export default Main;