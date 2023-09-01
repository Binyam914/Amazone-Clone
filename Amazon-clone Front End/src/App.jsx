import './App.css';
import Header from './Header';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import React, { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  "pk_test_51Ncsq1EavZ5BHabOUGCN6jR9rWcXvJcVzy2OjlGxkaWtu4pGANdlISwYchSbMcgKX8pVojtpHkbckL6I9MpZjO7U00Sbf5MrSv"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (

      <div className="App">
        <Routes>
          <Route
          path="/orders"
          element={<>
           <Header />
            <Orders />
          </>}
           />
          <Route path="/login"
          element={<>
           <Login />
        
          </>}
          /> 
          <Route path="/payment"
          element={<> <Header/>
          <Elements stripe={promise}> <Payment /> 
          </Elements>
          </>

          }
           
          />
          <Route path="/checkout"
          element={<>
          <Header />
            <Checkout /></>}
            />
            
          <Route path="/"
          element={<>
            <Header />
            <Home />
            </>}
            />
            
        </Routes>
      </div>
    );
}

export default App;


 /* <Elements stripe={promise}>
              
            </Elements> */

// import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./Home";
// import CheckOut from "./Pages/CheckOut/CheckOut";
// import SharedLayOut from "./SharedLayOut";
// import Login from "./Login";
// import { useEffect } from "react";
// import { useStateValue } from "./StateProvider";
// import { auth } from "./Login/Firebase";
// import Payment from "./Payment";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import Orders from "./Orders";

// const promise = loadStripe(
//   "pk_test_51Ncsq1EavZ5BHabOUGCN6jR9rWcXvJcVzy2OjlGxkaWtu4pGANdlISwYchSbMcgKX8pVojtpHkbckL6I9MpZjO7U00Sbf5MrSv");

// function App() {
//   const [{ user }, dispatch] = useStateValue();

//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         dispatch({
//           type: "SET_USER",
//           user: authUser,
//         });
//       } else {
//         dispatch({
//           // user logged out
//           type: "SET_USER",
//           user: null,
//         });
//       }
//     });
//   }, []);

//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<SharedLayOut />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/checkout" element={<CheckOut />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route
//             path="/payment"
//             element={
//               <>
//                 <Elements stripe={promise}>
//                   <Payment />
//                 </Elements>
//               </>
//             }
//           />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;