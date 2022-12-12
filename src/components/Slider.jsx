import Slide from "./Slide";
const Slider = () => {
  return (
    <div>
      <section className='slider'>
        <h2 className='px-4 fw-semibold'>Educational </h2>
        <div className='slider-container'>
          <Slide
            name='Eduhub'
            imgSrc='http://res.cloudinary.com/dzfblisi4/image/upload/v1666537949/bkg9zhz1zblvujiesmps.png'
          />
          <Slide
            name='Eduwell'
            imgSrc='http://res.cloudinary.com/dzfblisi4/image/upload/v1666538119/f2nnls9pyfd2bjlunos5.png'
          />
          <Slide
            name='PerfectLern'
            imgSrc='http://res.cloudinary.com/dzfblisi4/image/upload/v1666546225/mghakbhtwzljozsrx7mp.png'
          />
          <Slide
            name='Eduhub'
            imgSrc='http://res.cloudinary.com/dzfblisi4/image/upload/v1666537949/bkg9zhz1zblvujiesmps.png'
          />
          <Slide
            name='Eduwell'
            imgSrc='http://res.cloudinary.com/dzfblisi4/image/upload/v1666538119/f2nnls9pyfd2bjlunos5.png'
          />
          <Slide
            name='PerfectLern'
            imgSrc='http://res.cloudinary.com/dzfblisi4/image/upload/v1666546225/mghakbhtwzljozsrx7mp.png'
          />
        </div>
      </section>
    </div>
  );
};

export default Slider;
