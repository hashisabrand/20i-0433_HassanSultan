import DownPayment from "./DownPayment";
import { useLocation } from "react-router-dom";


export default function  PaymentHolder(props){
    const location = useLocation();
    const Price = location.state.Price;
  return(    <DownPayment price={Price}/>
  )







}