import './App.css';
import foods from './foods.json';
//import useState from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  // const [foodsArr, setFoodsArr] = useState(foods);

  return (
    <div className="App">
      <AddFoodForm />
      <h1>Food List</h1>
      <div className="foodList">
        {foods.map((food) => {
          return <FoodBox food={food} />;
        })}
      </div>
    </div>
  );
}

export default App;
