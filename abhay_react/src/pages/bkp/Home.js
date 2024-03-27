//import ReactDOM from 'react-dom/client'
import React, { useState } from 'react';
import Header from '../components/Headertab.js'; 
import './css/Home.css';
import Slideshow from '../components/SliderShow';

function Home() {

	//const [selectedValues, setSelectedValues] = useState<string[]>([]);
	const [selectedValues, setSelectedValues] = useState([]);
      	
	const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (!selectedValues.includes(selectedValue)) {
      setSelectedValues([...selectedValues, selectedValue]);
    }
      };

     
	const handleSubmit = async () => {
    try {
      console.log('selectValues ====== ' + selectedValues)
      const response = await fetch('http://172.22.62.105:5001/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ values: selectedValues })
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error('Failed to submit values');
      }
    } catch (error) {
      console.error('Error submitting values:', error);
    }
  };		  

	return (
	<>
	 <div>
	  <Header />
	  <Slideshow />
        
	<div className="menu">
	  <div className="menuIntro">
            <img src="https://i.ibb.co/QCxY7FT/michael-discenza-Mxfcoxyc-H-Y-unsplash.jpg" alt="Dish Item" />
            <img src="https://i.ibb.co/cNrYC6S/izabela-rutkowski-Nme6-Tb-Wu-Vp-A-unsplash.jpg" alt="Dish Item2" />
          </div>
 
        <section id="home-menu">
            <h2>DRINK MENU</h2>
			<h3> Sprits, wine, and beer</h3>
	<ul>
		<li>
			<span className="dish">Red Bull 125ml</span>
                        <span className="Price">Rs130
		        <select className="order" onChange={handleDropdownChange}>
                            <option value="0"></option>
		            <option value="1">1</option>
		            <option value="2">2</option>
		            <option value="3">3</option>
			</select></span>
                        <span className="Description">choiceeee of soft drinks.</span>
		</li>
		<li>
			<span className="dish">Tropicana.</span>
			<span className="Price">Rs120
		        <select className="order" onChange={handleDropdownChange}>
                            <option value="4"></option>
                            <option value="5">1</option>
                            <option value="6">2</option>
                            <option value="7">3</option>
                        </select></span>
			<span className="Description"> choice of Juice or Soda.</span>
		</li>
		<li>
			<span className="dish">Whisky 1oz.</span>
			<span className="Price">Rs1600
		        <select className="order" onChange={handleDropdownChange}>
                            <option value="8"></option>
                            <option value="9">1</option>
                            <option value="10">2</option>
                            <option value="11">3</option>
                        </select></span>
			<span className="Description">Whisky and choice of juice or soda.</span>
		</li>
	</ul>
    </section>

	</div>

    
		
      <div className="menu">   
        <div className="menuIntro">    
            <img  id="caption_img"src="https://i.ibb.co/9g9yg5G/chad-montano-l-P5-MCM6n-Z5-A-unsplash.jpg" alt="Menu Item"  />  
            <img id="caption_img" src="https://i.ibb.co/q1HKkyL/ella-olsson-4d-Qia-WKi-L-Y-unsplash.jpg" alt="Dish Item2" />
        </div>
 
     <section id="home-menu">
            <h2>FOOD MENU</h2>
			<h3> Entrees, mains, and handhelds</h3>
	<ul>
		<li>
			<span className="dish">Nachos</span>
			<span className="Price">Rs200
		        <select className="order" onChange={handleDropdownChange}>
                            <option value="12"></option>
                            <option value="13">1</option>
                            <option value="14">2</option>
                            <option value="15">3</option>
                        </select></span>
			<span className="Description">cheese, onions, tomotoes. 
			</span>
		</li>
		<li>
			<span className="dish">Tacos.</span>
			<span className="Price">Rs1452
		        <select className="order" onChange={handleDropdownChange}>
                            <option value="16"></option>
                            <option value="17">1</option>
                            <option value="18">2</option>
                            <option value="19">3</option>
                        </select></span>
			<span className="Description">chicken or beef with your choice of side.</span>
		</li>
		<li>
			<span className="dish">Tacos.</span>
                        <span className="Price">Rs145
		        <select className="order" onChange={handleDropdownChange}>
                            <option value="20"></option>
                            <option value="21">1</option>
                            <option value="22">2</option>
                            <option value="23">3</option>
                        </select></span>
			<span className="Description">Your choice of Laziz Paneer.</span>
		</li>
		
	</ul></section></div>
     </div>
       <form onSubmit={handleSubmit}>
                <button type="submit">Submit</button>
       </form>
        </>	
	);
}
// Remember NavLink, Navbar helps to make Navbar in UI, How it will look
// like above if u hit Register(Headertab) option in UI it will open /register url
// But "Route path" will help you decide what action you do when you open /register url

export default Home;
