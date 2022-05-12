import './CostItem.css';
function Costitem(){
    const costDate = new Date(2022, 5, 12);
    const costDescription = 'Холодильник';
    const costAmout = 999.98;


    return (<div className='cost-item'>
                <div>{costDate.toLocaleDateString()}</div>
            <div className='cost-item__description'>
                <h2>{costDescription}</h2>
                <div className='cost-item__price'>${costAmout}</div>
            </div>

            </div>
    );
}

export default Costitem;
