import React from 'react';
import './Meal.css'
import { Card, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Meal = (props) => {
    const {strMeal, strMealThumb, strInstructions, idMeal} = props.meal;
    const history = useHistory()
    const handleLocation = () => {
         history.push(`/meal/${idMeal}`)
    }
    return (
        
        <div  className='meal'>
            <Card className='meal-card' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={strMealThumb} />
  <Card.Body>
    <Card.Title>{strMeal}</Card.Title>
    <Card.Text>
      {strInstructions.slice(0,100)}
    </Card.Text>
   {/* <Link  to={`/meal/${idMeal}`}> */}
   <Button variant="primary" onClick={handleLocation} >Go somewhere</Button>
   {/* </Link> */}
  </Card.Body>
</Card>
        </div>
    );
};

export default Meal;