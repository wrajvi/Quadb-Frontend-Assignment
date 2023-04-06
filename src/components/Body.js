import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MovieCard from "./MovieCard";

const Body=() =>{
    const [alldata,setAllData] =  useState(null);

    useEffect(()=>{
      getmovie();
    },[])

    async function getmovie() {
        const data=await fetch("https://api.tvmaze.com/search/shows?q=all");
        const json=await data.json();
        console.log(json);
        setAllData(json);
    }

    return !alldata?<Shimmer/>:(
        <div className="flex flex-wrap">
        {alldata.map((movie)=><MovieCard  {...movie.show} key={movie.show.id}/>)}
        </div>
    );
}
export default Body;
