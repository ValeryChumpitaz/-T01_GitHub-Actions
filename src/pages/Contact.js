import React from "react";
import "../styles/Home.css"; // Reutilizamos los estilos de Home.css

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
