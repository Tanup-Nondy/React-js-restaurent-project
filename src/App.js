import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/menuComponent.js';
import {DISHES} from './shared/dishes.js'

class App extends React.Component {
   constructor(props){
      super(props);
      this.state={
         dishes:DISHES,
      }
   }
   render() {
      return (
         <div>
            <Navbar dark color="primary">
               <div className="container">
                  <NavbarBrand href="/">Demo</NavbarBrand>
               </div>
            </Navbar>
            <Menu dishes={this.state.dishes}/>
         </div>
      );
   }
}
export default App;