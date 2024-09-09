import React, { useState } from "react";
import axios from "axios";

function AxiosDemo() {
  // State to handle form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    try {
      // Make the POST request using axios
      const response = await axios.post("http://localhost:5000/api/user/signup", formData);

      // Handle the response from the server
      console.log(response.data); // You can access the response data here
      alert("Signup successful!");
    } catch (error) {
      // Handle any errors from the request
      console.error("There was an error submitting the form:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default AxiosDemo;
