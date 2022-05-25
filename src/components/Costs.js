import Costitem from "./Costitem";
import './Costs.css'
import CostsFilter from "./Costs/CostsFilter";
import React, {useState} from "react";

const Costs=(props)=> {
    const [selectedYear, setSelectedYear] = useState('2021');
    const yearChangeHandler = (year) => {
        setSelectedYear(year);
    }
    const filteredCosts = props.costs.filter(cost =>{
        return cost.date.getFullYear().toString() === selectedYear;
    });

    let costsContent = <p>В Этом Году Расходов Нет</p>;
    if (filteredCosts.length > 0){
       costsContent = filteredCosts.map((cost) =>(
        <Costitem
            key={cost.id}
            date={cost.date}
            description = {cost.description}
            amount ={cost.amount}/>

        ))
    }
    return (
        <div>

        <div className='costs'>
            <CostsFilter year={selectedYear} onChangeYear={ yearChangeHandler}/>
            {costsContent}
        </div>
        </div>
    );
}
export default Costs
