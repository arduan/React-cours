import Costitem from "./Costitem";
import './Costs.css'
import CostsFilter from "./Costs/CostsFilter";

const Costs=(props)=> {
    const yearChangeHandler = (year) => {
        console.log(year);
        console.log('Cost Component');
    }
    return (
        <div>
            <CostsFilter onChangeYear={ yearChangeHandler}/>
        <div className='costs'>

            <Costitem date={props.costs[0].date} description = {props.costs[0].description} amount ={props.costs[0].amount}/>
            <Costitem date={props.costs[1].date} description = {props.costs[1].description} amount ={props.costs[1].amount}/>
            <Costitem date={props.costs[2].date} description = {props.costs[2].description} amount ={props.costs[2].amount}/>

        </div>
        </div>
    );
}
export default Costs
