import Costs from "./components/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {

  const costs = [
    {
      id: 'c1',
      date: new Date(2021, 2, 12),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      id: 'c2',
      date: new Date(2021, 11, 2),
      description: 'Телевизор',
      amount: 456.99
    },
    {
      id: 'c3',
      date: new Date(20212, 5, 13),
      description: 'Джинсы',
      amount: 19.99
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log('App Component');
  }

  return (
      <div>
        <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs}/>
      </div>


  );
}

export default App;
