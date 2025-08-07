import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';
const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            {/* Section for describing the purpose or overview of the app */ }
            <section className="description">
                <p>
                    Plan and organize your events effortlessly with Event Planner. From
                    birthdays to corporate meetings, we`ve got you covered.
                </p>
                <button className="get-started-button">Get Started</button>
            </section>
            
            {/* Section to list or categorize different types of events */}
            <section className="event_catagories">
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birthday parties</li>
                    <li>Anniversery celebrations</li>
                    <li>Wedding receptions</li>
                    <li>Baby showers</li>
                    <li>Graduation parties</li>
                    <li>Family reunions</li>
                </ul>
                <ul>
                    <h2>Entertainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music festivals</li>
                    <li>Film screenings</li>
                    <li>Comedy shows</li>
                    <li>Art exibitions</li>
                    <li>Cultural events</li>
                </ul>
                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraising events</li>
                    <li>Charity galas</li>
                    <li>Volunteer drives</li>
                    <li>Neighborhood block parties</li>
                    <li>Community festivals</li>
                    <li>Cultural celebrations</li>
                </ul>
            </section>
            {/* Section to highlight app features or functionalities */}
            <section className="features">
                <h2>Features</h2>
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and notifications</li>
                </ul>
            </section>
            {/* Section to showcase user reviews or testimonials */}
            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                    <p className="author">- Emily Johnson</p>
                </div>
                <div className="testimonial">
                    <p>I’ve never seen a corporate gala run so smoothly. Every detail was on point, from
                    décor to timing, and the team’s professionalism let us focus on our guests instead of
                    logistics. Can’t recommend them enough! 
                    </p>
                    <p className="author">- Marcus K., VP of Marketing, TechNova Inc.</p>
                </div>
                <div className="testimonial">
                    <p>As a busy mom planning my daughter’s quinceañera, I was overwhelmed—until Event
                       Planner stepped in. They turned my Pinterest board into reality and kept me calm
                       throughout. Truly magical! 
                    </p>
                    <p className="author">- Isabel R., Proud Parent</p>
                </div>
            </section>
            {/* Section to provide contact information or a contact form */}
            <section className="contact">
                <h2>Contact us</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="message"></textarea>
                    <button className="submit-button">Send</button>
                </form>
            </section>
            <Footer/>
        </div>
    );
};

export default EventPlanner;
