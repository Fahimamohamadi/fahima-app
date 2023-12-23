import styled from "./Navbar.module.css";

function Navbar(props) {
  
  
  return (
    <div className={styled.headerWrapper}>
      <div className="container"> 
        <div className={styled.header}>
         <h3>{props.title}</h3>
        <ul>
          <li>Article Lists</li>
          <li>Aticle</li>
          <li>About Us</li>
          </ul>  
        </div>
      </div>
    </div>
    );
}
  
export default Navbar