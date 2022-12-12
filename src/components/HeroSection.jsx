import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faStar } from "@fortawesome/free-solid-svg-icons";
const HeroSection = () => {
  return (
    <>
      <section className='hero-section'>
        <img
          className='hero-img'
          src='https://cdn.pixabay.com/photo/2015/03/13/17/39/road-672036_960_720.jpg'
          alt='hero-image'
        />
        <div className='hero-text'>
          <div className='fs-7 fw-bold lh-sm'>
            Your dream websites <br /> and instant apps awaits !
          </div>
          <div className='fs-sm fw-semibold font-monospace my-4'>
            Welcome to our fresh collection of themes. Hope you find your dream
            website and instant apps here. Start your journey with our themes.
          </div>
          <button className='btn btn-primary'>View Collection</button>
        </div>
      </section>
      <section className='container p-4'>
        <h3 className='text-center'>Our Categories</h3>
        <div className='d-flex flex-wrap justify-content-center my-4'>
          <div className='card shadow text-center'>
            <div className='card-body'>
              <div className='product'>
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className='product-text'>Education</div>
            </div>
          </div>
          <div className='card shadow text-center'>
            <div className='card-body'>
              <div className='product'>
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className='product-text'>Education</div>
            </div>
          </div>
          <div className='card shadow text-center'>
            <div className='card-body'>
              <div className='product'>
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className='product-text'>Education</div>
            </div>
          </div>
          <div className='card shadow text-center'>
            <div className='card-body'>
              <div className='product'>
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className='product-text'>Education</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
