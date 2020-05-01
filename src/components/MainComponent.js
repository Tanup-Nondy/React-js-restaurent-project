import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './menuComponent.js';
import DishDetailComponent from './DishDetailComponent.js';
import {DISHES} from '../shared/dishes.js'

class Main extends React.Component {
   constructor(props){
      super(props);
      this.state={
         dishes:DISHES,
         selectedDish:null
      }
   }
   selectDish(dishId){
      this.setState({
         selectedDish:dishId,
      })
   }
   render() {
      return (
         <div>
            <Navbar dark color="primary">
               <div className="container">
                  <NavbarBrand href="/">Demo</NavbarBrand>
               </div>
            </Navbar>
            <Menu dishes={this.state.dishes} onClick={(dishId)=>this.selectDish(dishId)}/>
            <DishDetailComponent dishes={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/>
         </div>
      );
   }
}
export default Main;