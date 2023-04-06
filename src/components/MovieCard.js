import {Link} from "react-router-dom";
import Summary from "./Summary";
const MovieCard = (props) => {
    const {id,image,name,type,language}=props;
    return (
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-100">
            <img alt="img" src={!image?.original?"https://hippy.in/wp-content/uploads/2012/11/custom-made-hollywood-movie-posters-2.jpg":image?.original}/>
            <h2 className="font-bold text-xl">{name}</h2>
            <h4>ID:{id}</h4>
            <h4>{type}</h4>
            <h5>{language}</h5>
            <Link to="/summary" state={props}><button className="p-2 bg-purple-900 text-white rounded-md hover:bg-gray-500">Summary</button></Link>
      </div>
    );

}
export default MovieCard;