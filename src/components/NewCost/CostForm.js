
import './NewCost.css';

const CostForm = () => {
    const nameChangeHendler = (event) => {
        console.log(event.target.value);

    };
    return <div>
        <form>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input type="text" onChange={nameChangeHendler}/>
                </div>
                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input type="number" min='0.01' step='0.01'/>
                </div>
                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input type="date" min='2019-01-01' step='2022-09-01' />

                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Добавить расход</button>

                </div>

            </div>

        </form>
    </div>


}

export default CostForm;
