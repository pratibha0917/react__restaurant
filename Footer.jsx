function Footer() {
  return (
    <div className="">
      <div className="d-flex flex-column h-100">
        <footer className="w-100 py-4 flex-shrink-0">
          <div className="container py-4">
            <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6">
                {/* <h5 className="h1 text-white">Logo</h5> */}
                <p className="small text-muted">
                  <ul className="foot_link list-unstyled text-muted">
                    <li>
                      <a href={() => false}>Order Now</a>
                    </li>
                    <li>
                      <a href={() => false}>Reservation</a>
                    </li>
                    <li>
                      <a href={() => false}>Our Locations</a>
                    </li>
                  </ul>
                </p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h4 className="text-white mb-3">Information</h4>
                <ul className="foot_link list-unstyled text-muted">
                  <li>
                    <a href={() => false}>Contact Us</a>
                  </li>
                  <li>
                    <a href={() => false}>Administrator</a>
                  </li>
                  <li>
                    <a href={() => false}>About Us</a>
                  </li>
                  <li>
                    <a href={() => false}>Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6">
                <h4 className="text-white mb-3">Folow us on</h4>
                <ul className="list-unstyled text-muted">
                  <li>
                    <i class="fab fa-facebook-f"></i>&nbsp;&nbsp;&nbsp;
                    <i class="fab fa-instagram"></i>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <h5 className="text-white mb-3">Subscribe to Our Newsletter</h5>
                {/* <p className="small text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p> */}
                <br />
                <form href={() => false}>
                  <div className="input-group mb-3 ">
                    <input
                      className="form-control"
                      type="text"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      style={{ background: "white" }}
                    />
                    <button
                      className="btn btn-primary"
                      id="button-addon2"
                      type="button"
                    >
                      <i class="fas fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;
