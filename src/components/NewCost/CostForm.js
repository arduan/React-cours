import React, {useState} from "react";
import './NewCost.css';

const CostForm = (props) => {
    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    // const [userInput, setUserInput]= useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // });

    const nameChangeHandler = (event) => {
       setInputName(event.target.value);
       //  setUserInput({
       //      ...userInput,
       //      name: event.target.value
       //  })
       //  setUserInput(prevState => {
       //      return{
       //      ...prevState,
       //          name: event.target.value}
       // })
    };
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value})
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value})
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate)

        };
        props.onSaveCostData(costData);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input type="text" value={inputName} onChange={nameChangeHandler}/>
                </div>
                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input onChange={amountChangeHandler} type="number" min='0.01' step='0.01' value={inputAmount}/>
                </div>
                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input onChange={dateChangeHandler} type="date" min='2019-01-01' step='2022-09-01' value={inputDate} />

                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Добавить расход</button>
                    <button type='button' onClick={props.onCancel} >Отмена</button>

                </div>

            </div>

        </form>
    )


}

export default CostForm;
