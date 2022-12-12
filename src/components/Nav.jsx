const Nav = () => {
  return (
    <nav class='navbar navbar-expand-lg sticky-top bg-light-50'>
      <div class='container-fluid'>
        <a class='navbar-brand text-gray fw-bolder' href='#'>
          MYKNOT
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarScroll'
          aria-controls='navbarScroll'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarScroll'>
          <ul class='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll'>
            <li class='nav-item'>
              <a class='nav-link  fw-semibold' aria-current='page' href='#'>
                Home
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link fw-semibold' aria-current='page' href='#'>
                About Us
              </a>
            </li>
            <li className='nav-item fw-semibold'>
              <a class='nav-link' href='#'>
                Contact Us
              </a>
            </li>
          </ul>
          <div>
            <button class='btn btn-outline-success mx-3 ' type='submit'>
              Login
            </button>
            <button class='btn btn-outline-success ' type='submit'>
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
