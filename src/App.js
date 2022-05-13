import Costitem from "./components/Costitem";

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
      date: new Date(2022, 5, 13),
      description: 'Джинсы',
      amount: 19.99
    },
  ];



  return (
    <div>
      <h1>Начнем изучение React.</h1>

        <Costitem date={costs[0].date} description = {costs[0].description} amount ={costs[0].amount}></Costitem>
        <Costitem date={costs[1].date} description = {costs[1].description} amount ={costs[1].amount}></Costitem>
        <Costitem date={costs[2].date} description = {costs[2].description} amount ={costs[2].amount}></Costitem>

    </div>

  );
}

export default App;
