import React, { useState, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';
import './Contact.css'; // Подключаем стили для Contact
import AOS from 'aos';
import 'aos/dist/aos.css'; // Подключаем стили AOS

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику для обработки отправки формы, например, отправку на сервер
    console.log('Form submitted:', formData);
    // Сброс формы
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container contact-container">
      <h1 data-aos="fade-up">Contact Us</h1>
      <p data-aos="fade-up">If you have any questions, feel free to write to us!</p>
      <div className="contact-content" data-aos="fade-up" data-aos-delay="200">
        <img src={`${process.env.PUBLIC_URL}/images/comanda.jpg`} alt="Team" className="contact-image" />
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button" data-aos="fade-up" data-aos-delay="400">Submit</button>
        </form>
      </div>
      <a href="https://www.instagram.com/sweet.story.short" target="_blank" rel="noopener noreferrer" className="instagram-link" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
        <FaInstagram className="instagram-icon" /> Follow us on Instagram
      </a>
    </div>
  );
}

export default Contact;
