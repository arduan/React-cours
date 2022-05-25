import Costitem from "./Costitem";
import './Costs.css'
import CostsFilter from "./Costs/CostsFilter";
import React, {useState} from "react";
import CostList from "./Costs/CostList";

const Costs=(props)=> {
    const [selectedYear, setSelectedYear] = useState('2021');
    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }
    const filteredCosts = props.costs.filter(cost =>{
        return cost.date.getFullYear().toString() === selectedYear;
    });


    return (
        <div>

        <div className='costs'>
            <CostsFilter year={selectedYear} onChangeYear={ yearChangeHandler}/>
            <CostList costs={ filteredCosts}/>
        </div>
        </div>
    );
}
export default Costs
