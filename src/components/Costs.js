import Costitem from "./Costitem";
import './Costs.css'
import CostsFilter from "./Costs/CostsFilter";
import React, {useState} from "react";

const Costs=(props)=> {
    const [selectedYear, setSelectedYear] = useState('2021');
    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }
    return (
        <div>

        <div className='costs'>
            <CostsFilter year={selectedYear} onChangeYear={ yearChangeHandler}/>

            <Costitem date={props.costs[0].date} description = {props.costs[0].description} amount ={props.costs[0].amount}/>
            <Costitem date={props.costs[1].date} description = {props.costs[1].description} amount ={props.costs[1].amount}/>
            <Costitem date={props.costs[2].date} description = {props.costs[2].description} amount ={props.costs[2].amount}/>

        </div>
        </div>
    );
}
export default Costs
