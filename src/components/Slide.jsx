import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faStar } from "@fortawesome/free-solid-svg-icons";
const Slide = ({ imgSrc, name }) => {
  return (
    <div className='our-product border rounded shadow-md'>
      <div className='our-product-img'>
        <img src={imgSrc} alt='...' />
      </div>
      <div className='img-overlay'>
        <h5 className='card-title fw-bold text-center'>{name}</h5>
        <p className='card-text text-center'>
          <small>
            {[1, 2, 3, 4].map(() => (
              <FontAwesomeIcon icon={faStar} />
            ))}
          </small>
        </p>
        <div className='card-body'>
          <div class='d-grid gap-2 col-6 mx-auto'>
            <button class='btn btn-outline-success' type='button'>
              Live Preview
            </button>
            <button class='btn btn-outline-dark' type='button'>
              Buy At
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
