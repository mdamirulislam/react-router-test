import React from 'react';
import Meals from '../Meals/Meals';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HeaderNav from '../HeaderNav/HeaderNav';
import MealDetail from '../../MealDetail/MealDetail';
import NotFound from '../../NotFound/NotFound';
import About from '../About/About';

const Home = () => {
    return (
        <div className='container'>
         <h1>Hellow</h1>
      
            <Router>
                <HeaderNav/>
                <Switch>
                    <Route path='/meals'>
                        <Meals/>
                    </Route>
                    <Route path='/about'>
                        <About/>
                    </Route>
                    <Route path='/meal/:id'>
                        <MealDetail/>
                    </Route>
                    <Route exact path = '/'>
                       <Meals/>
                    </Route>
                    <Route path='*'>
                     <NotFound/>
                    </Route>
                </Switch>
            </Router>
            
        </div>
    );
};

export default Home;