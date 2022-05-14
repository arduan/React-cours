import './CostItem.css';
import CostDate from "./CostDate";


const Costitem=(props)=>{
    const  changeDescriptionHendler = () =>{
        console.log('Привет еще раз')
    }


    return (<div className='cost-item'>
            <CostDate date={props.date}/>
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>
            <button onClick={changeDescriptionHendler}>Изменить описание</button>
            </div>
    );
}

export default Costitem;
