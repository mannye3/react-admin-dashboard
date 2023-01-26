

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./components/pages/home/Home";
import UserList from './components/pages/userList/UserList';
import User from "./components/pages/user/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewUser from './components/pages/newUser/NewUser';
import ProductList from './components/pages/productList/ProductList';
import Product from './components/pages/product/Product';
import NewProduct from "./components/pages/newProduct/NewProduct";



function App() {
  return (
    <Router>
        <Topbar />
        <div className="container">
        <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/newUser" element={<NewUser />} />
        <Route path="/user/:id" element={<User />} /> 
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/newProduct" element={<NewProduct />} />

        {/* <Route path="/user/:userId">
            <User />
          </Route> */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;


// function App() {
//   return (
//     <Router>
       
//       <Topbar />
//       <div className="container">
//         <Sidebar />
       
//           <Route exact path="/">
//             <Home />
//           </Route>
         
         
          
       
//       </div>
      
//     </Router>
//   );
// }

// export default App;


