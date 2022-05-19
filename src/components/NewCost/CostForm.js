import React, {useState} from "react";
import './NewCost.css';

const CostForm = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');



    const nameChangeHandler = (event) => {
       setName(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value)

    };


    return <div>
        <form>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input type="text" onChange={nameChangeHandler}/>
                </div>
                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input onChange={amountChangeHandler} type="number" min='0.01' step='0.01'/>
                </div>
                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input onChange={dateChangeHandler} type="date" min='2019-01-01' step='2022-09-01' />

                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Добавить расход</button>

                </div>

            </div>

        </form>
    </div>


}

export default CostForm;
