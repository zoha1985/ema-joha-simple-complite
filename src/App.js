import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Header/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/inventory/Inventory';
import Notfound from './components/notfound/Notfound';
import ProductDetail from './components/productDetail/ProductDetail';
function App() {
  return (
    <div >
      <Header></Header>
     <Router>
       <Switch>
         <Route path="/shop">
         <Shop key='{name.id}'></Shop>
        </Route>
        <Route path="/review"> 
          <Review></Review>
        </Route>
        <Route path="/inventory">
          <Inventory></Inventory>
          
        </Route>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path="/product/:productkey">
          <ProductDetail></ProductDetail>
        </Route>
        <Route path="*">
          <Notfound></Notfound>
        </Route>
       </Switch>
     </Router>

      
      
    
    </div>
  );
}



export default App;
