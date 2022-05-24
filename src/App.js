import Costs from "./components/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";


const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2022, 2, 12),
    description: 'Холодильник',
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 2),
    description: 'Телевизор',
    amount: 456.99,
  },
  {
    id: 'c3',
    date: new Date(2021, 5, 13),
    description: 'Джинсы',
    amount: 19.99,
  },
    {id: 'c4',
    date: new Date(2021, 2, 12),
    description: 'Телефон',
    amount: 99.99,
},
];


function App() {
 const [costs, setCosts] = useState(INITIAL_COSTS);


  const addCostHandler = (costs) => {
   setCosts(prevCosts => {
       return [costs, ...prevCosts]
   });
  }

  return (
      <div>
        <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs}/>
      </div>


  );
}

export default App;
