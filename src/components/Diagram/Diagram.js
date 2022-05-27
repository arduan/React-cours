import DiagramBar from "./DiagramBar";
import './Diagram.css'


const Diagram = (props) => {
    const dataSetsValue = props.dataSets.map
    (dataSet => dataSet.value)

    const maxMothCosts = Math.max(...dataSetsValue);

    return(
        <div className='diagram'>
        {props.dataSets.map((dataSet) => (
            <DiagramBar
            key={dataSet.id}
            value={dataSet.value}
            maxValue={maxMothCosts}
            label={dataSet.label}
            />
            ))}
    </div>
    );
};
export default Diagram;

