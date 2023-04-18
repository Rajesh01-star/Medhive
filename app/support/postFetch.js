import { postformUrl } from "./url";

const submitHandler = (event) => {
    event.preventDefault();
  
    // Create a new FormData object to capture form data
    const formData = new FormData(event.target);
    // console.log(`formData from postFetch ${formData} `);
  
    // Serialize form data into URL-encoded format
    const params = new URLSearchParams();
    for (const pair of formData) {
      params.append(pair[0], pair[1]);
    }
  
    // Send form data to the server using Fetch API
    fetch(postformUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded' // Update Content-Type header
      },
      body: params.toString() // Send serialized form data
    })
    .then(response => {
      if (response.ok) {
        console.log('Form data submitted successfully');
        // You can perform further actions with the response data as needed
      } else {
        console.error('Error submitting form data:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error submitting form data:', error);
    });
  };

  export default submitHandler;