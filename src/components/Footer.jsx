import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className='footer bg-black text-white'>
      <div className='footer-container d-flex justify-content-around p-4 '>
        <div>
          <h2>Company</h2>
          <ul>
            <li>About Us</li>
            <li>Our offering</li>
            <li>Gift cards</li>
            <li>Newsroom</li>
            <li>Blog</li>
            <li>Investors</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h2>Products</h2>
          <ul>
            <li>fashion</li>
            <li>Sports</li>
            <li>Electronics</li>
            <li>Home Applicance</li>
            <li>Kitchen</li>
          </ul>
        </div>
        <div>
          <h2>Contact Us</h2>
          <ul className='d-flex flex-wrap '>
            <li className='me-2'>
              <img
                style={{ backgroundColor: "white" }}
                src='https://img.icons8.com/material/24/null/instagram-new--v1.png'
              />
            </li>
            <li className='me-2'>
              <img
                style={{ backgroundColor: "white" }}
                src='https://img.icons8.com/material/24/null/facebook-new.png'
              />
            </li>
            <li className='me-2'>
              <img
                style={{ backgroundColor: "white" }}
                src='https://img.icons8.com/material/24/null/linkedin--v1.png'
              />
            </li>
            <li className='me-2'>
              <img
                style={{ backgroundColor: "white" }}
                src='https://img.icons8.com/material/24/null/twitter-squared.png'
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
