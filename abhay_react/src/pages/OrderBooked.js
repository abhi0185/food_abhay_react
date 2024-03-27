import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './css/OrderBooked.css';

const OrderBooked = () => {
  const { state } = useLocation();

  let orderSelected = [];

  if (state && state.order_selected) {
    try {
      orderSelected = JSON.parse(state.order_selected);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }

  return (
    <div>
      <h1>Receiving Page</h1>
      {orderSelected.length > 0 && (
        <table className="order-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Item Detail</th>
            </tr>
          </thead>
          <tbody>
            {orderSelected.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
		<td><Link to={`/item_detail/${item.name}`}>Item Detail</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderBooked;

