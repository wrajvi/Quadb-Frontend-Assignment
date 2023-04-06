import {useLocation,Link} from "react-router-dom";
const Summary=() =>{
    const data=useLocation();

    return(
        <div className="bg-amber-200">
        <h1 className="text-3xl text-blue-500">Summary</h1>
        <h1>{(data.state.summary).slice(3,300)}</h1>
        <Link to="/form" state={data.state.name}><button className="p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-gray-500">Book {data.state.name} Ticket</button></Link>
        </div>
    );
}
export default Summary;