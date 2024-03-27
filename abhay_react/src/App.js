//import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import Login from './pages/Login.js';
import ItemDetail from './pages/ItemDetail.js';
import OrderBooked from './pages/OrderBooked.js';

function App() {
	return (
          <BrowserRouter>
        	<Routes>
			<Route path="/" element={<Home />} />
			<Route path="register" element={<Register />} />
			<Route path="login" element={<Login />} />
                        <Route path="orderbooked" element={<OrderBooked />} />
		        <Route path="item_detail/:itemName" element={<ItemDetail />} />
	        </Routes>
          </BrowserRouter>
	);
}
// Remember NavLink, Navbar helps to make Navbar in UI, How it will look
// like above if u hit Register(Headertab) option in UI it will open /register url
// But "Route path" will help you decide what action you do when you open /register url

export default App;

// imp. :- In React, when you navigate between different pages or components within a single-page application (SPA), React does not create a new page in the traditional sense. Instead, it updates the DOM to reflect the changes associated with the new component or route.
// How we can check, Look I import './pages/Home.js'; which also imported import './css/Home.css'; from Home.js page and put background-image for all pages. Why all pages, as React doesn't create new page(SPA) so if u set background-image for one default it is coming on others. If we want different back-image for other pages we may manually set on their css.
