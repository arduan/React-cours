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
    })


    return (
        <div>

        <div className='costs'>
            <CostsFilter year={selectedYear} onChangeYear={ yearChangeHandler}/>
            {filteredCosts.length === 0 && <p>В Этом Году Расходов Нет</p>}
            {filteredCosts.length > 0 &&
            filteredCosts.map((cost) =>(
                    <Costitem key={cost.id}
                              date={cost.date}
                              description = {cost.description}
                              amount ={cost.amount}/>
                ))}


        </div>
        </div>
    );
}
export default Costs
