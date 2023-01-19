

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./components/pages/home/Home";
import UserList from './components/pages/userList/UserList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
        <Topbar />
        <div className="container">
        <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
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


