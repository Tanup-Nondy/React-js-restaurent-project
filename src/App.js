import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/menuComponent.js';

class App extends React.Component {
   render() {
      return (
         <div>
            <Navbar dark color="primary">
               <div className="container">
                  <NavbarBrand href="/">Demo</NavbarBrand>
               </div>
            </Navbar>
            <Menu />
         </div>
      );
   }
}
export default App;