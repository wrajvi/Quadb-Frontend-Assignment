import { useLocation } from "react-router-dom";
const Form = () =>{
    const data=useLocation();
      return(
    <form >
      <center>
      <div className='border-gray-700 px-2 py-2 '>
       <label className='font-bold py-2 px-2'>Movie Name : </label>
       <input className="py-2 px-2 border border-gray-600" type="text"   placeholder={data.state}/>
      </div>
     <div className="form-group px-2 py-2">
       <label className='font-bold py-2 px-2'>Ticket Price:</label>
       <input className="py-2 px-2 border border-gray-600" type="number" placeholder="Price"/>
     </div>
     <button className="bg-gray-500 rounded-lg px-2 py-2 m-2" >Submit</button>
     </center>
    </form>
    
      );

}
export default Form;