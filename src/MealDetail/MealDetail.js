
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router';

const MealDetail = () => {
    const {id} = useParams();
    const [mealDetail, setMealDetail] = useState({});
    const {strMeal, strMealThumb, strInstructions} = mealDetail;
    console.log(mealDetail)
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(  res => res.json())
      .then(data => setMealDetail(data.meals[0]))
    },[]);
    const history = useHistory()
    const handleLocation = () => {
         history.push('/meals')
    }
     return (
        <div>
 <Card>
    <Card.Img variant="top" src={strMealThumb} />
    <Card.Body>
      <Card.Title>{strMeal}</Card.Title>
      <Card.Text>
      {strInstructions}
      </Card.Text>
    </Card.Body>
  <Button onClick={handleLocation} variant="primary" >Go Back</Button>

  </Card>
        </div>
    );
};

    export default MealDetail;   