import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';


class App extends React.Component {
   render() {
      return (
         <div>
            <Navbar dark color="primary">
               <div className="container">
                  <NavbarBrand href="/">Demo</NavbarBrand>
               </div>
            </Navbar>
         </div>
      );
   }
}
export default App;