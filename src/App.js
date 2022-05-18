import Costs from "./components/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {

  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      date: new Date(2021, 11, 2),
      description: 'Телевизор',
      amount: 456.99
    },
    {
      date: new Date(20212, 5, 13),
      description: 'Джинсы',
      amount: 19.99
    },
  ];



  return (
      <div>
        <NewCost/>
        <Costs costs={costs}/>
      </div>


  );
}

export default App;
