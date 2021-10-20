import React, { useEffect, useState } from 'react';
import './Meals.css'
import Meal from '../Meal/Meal';
const Meals = () => {
    const [meals, selMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=f')
        .then(res => res.json())
        .then(data => selMeals(data.meals))
    },[])
    return (
        <div className="meals-field ">
            {
              meals.map(meal => <Meal key={meal.idMeal} meal={meal}/>)
            }
        </div>
    );
};

export default Meals;