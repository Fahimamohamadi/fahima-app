import Navbar from "../../components/Navbar/Navbar";
import styled from "./AboutUs.module.css";
import js from "./../../assets/images/js.jpeg"
import Footer from "../../components/Footer/Footer";

function AboutUS() {
    return (
        <div>
            <Navbar title=" Fahima Blog" />
            <div className={styled.aboutPage}>
            <div className="container" >
                <h1>About Us</h1>
                 <p>
                    React can change how you think about the designs you look at and the apps you build.
                    When you build a user interface with React, you will first break it apart into pieces called components.
                    Then, you will describe the different visual states for each of your components. Finally, you will connect
                    your components together so that the data flows through them. In this tutorial, we’ll guide you through the
                    thought process of building a searchable product data table with React.
                 </p>
                <h3>We are active in</h3>
                <img src={js} alt="eagle" />
            </div>
            <Footer />
            </div>
        </div>
    )
}

export default AboutUS