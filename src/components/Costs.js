import Costitem from "./Costitem";
import './Costs.css'

const Costs=(props)=> {
    return (
        <div className='costs'>

            <Costitem date={props.costs[0].date} description = {props.costs[0].description} amount ={props.costs[0].amount}/>
            <Costitem date={props.costs[1].date} description = {props.costs[1].description} amount ={props.costs[1].amount}/>
            <Costitem date={props.costs[2].date} description = {props.costs[2].description} amount ={props.costs[2].amount}/>

        </div>
    );
}
export default Costs
