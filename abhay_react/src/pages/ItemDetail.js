import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function ItemDetail() {
  // Accessing the URL parameter
  const { itemName } = useParams();

  const [data, setData] = useState(null);

    useEffect(() => {
        // Define the URL with query parameter
	let url = 'http://172.28.206.173:5001'
        url = url + `/item_detail/data?param=${itemName}`;

	console.log('item name : ' + itemName);
	console.log(url);

        // Make GET request to Flask backend using fetch
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [itemName]); // Include itemName in the dependency array 

    return (
        <div>
            {/* Display data retrieved from Flask */}
            <h1>
	    {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
	    </h1>
        </div>
    );

}

export default ItemDetail;

