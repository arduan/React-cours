import Costitem from "./Costitem";

function Costs(props) {
    return (
        <div>

            <Costitem date={props.costs[0].date} description = {props.costs[0].description} amount ={props.costs[0].amount}></Costitem>
            <Costitem date={props.costs[1].date} description = {props.costs[1].description} amount ={props.costs[1].amount}></Costitem>
            <Costitem date={props.costs[2].date} description = {props.costs[2].description} amount ={props.costs[2].amount}></Costitem>

        </div>
    );
}
export default Costs
