import './CostItem.css';
function Costitem(props){



    return (<div className='cost-item'>
                <div>{props.date.toLocaleDateString()}</div>
            <div className='cost-item__description'>
                <h2>{props.description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
            </div>

            </div>
    );
}

export default Costitem;
