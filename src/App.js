import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);
  const [searchedTerm, setSearchedTerm] = useState('');

  const handleDelete = (index) => {
    const newFoodsArr = [...foodsArr];
    console.log(newFoodsArr[index]);
    console.log(foodsArr.length);
    newFoodsArr.splice(index, 1);
    console.log(newFoodsArr.length);
    setFoodsArr(newFoodsArr);
  };

  // let searchedFood = null;
  // searchedTerm !== ''
  //   ? (searchedFood = foodsArr.filter((food) => {
  //       return food.name.toLowerCase().includes(searchedTerm.toLowerCase());
  //     }))
  //   : (searchedFood = foods);

  // const addNewFood = (newFood) => {
  //   const updatedFoods = [...foodsArr, newFood];

  //   setFoodsArr(updatedFoods);
  // };

  return (
    <div className="App">
      {/* <AddFoodForm addFood={addNewFood} /> */}
      <Search
        searchedString={searchedTerm}
        setSearchedString={setSearchedTerm}
      />
      <h1>Food List</h1>
      <div className="foodList">
        {foods.map((food) => {
          return (
            <FoodBox
              food={food}
              handleDelete={handleDelete}
              index={foods.indexOf(food)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
