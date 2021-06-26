
import ButtonComponent from './pages/Button/ButtonComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TableComponent from './pages/Table/TableComponent';
import ModalComponent from './pages/Modal/ModalComponent';
import Product from './pages/Product/Index';
import Dashboard from './pages/Dashboard/Index';

function App() {
  return (
    // <div>
    //   <Sidebar />
    //   <Content />
    // </div>
    <Router>
    <Switch>
    <Route exact path="/button" component={ButtonComponent} />
    <Route exact path="/table" component={TableComponent} />
    <Route exact path="/modal" component={ModalComponent} />
    <Route exact path="/product" component={Product} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/" component={Dashboard} />



      {/* {
        routes.map((route, index) =>{
          return <Route  
              key={index} 
              path={route.path} 
              // // component={withTracker(props => {
              // //   return (
              // //     <route.layout {...props}>
              // //       <route.component {...props} />
              // //     </route.layout>
              // //   );
              // // })}
            />
        })
      } */}
    </Switch>
    </Router>
    
  );
}

export default App;
