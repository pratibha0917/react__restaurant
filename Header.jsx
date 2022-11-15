import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Order Now</Nav.Link>
              <Nav.Link href="#home">Reservation</Nav.Link>
              <Nav.Link>
                <a data-toggle="modal" data-target="#demo-1" href={() => false}>
                  Login
                </a>
              </Nav.Link>

              <NavDropdown title="Templates" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Templates 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Templates 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Templates 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Mainhome">
                  Templates 4
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <a data-toggle="modal" data-target="#demo-2" href={() => false}>
                  Register
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div class="modal fade" id="demo-1" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal">
              <i class="icon-xs-o-md"></i>
            </button>
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="container">
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Telephone"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <center>
                  <button
                    type="button"
                    id="button"
                    class="btn btn-default"
                    data-toggle="modal"
                    data-target="#demo-1"
                    data-dismiss="modal"
                  >
                    Register
                  </button>
                </center>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <center>
                  <button
                    type="button"
                    id="login"
                    class="btn btn-info"
                    data-toggle="modal"
                    data-target="#demo-2"
                    data-dismiss="modal"
                  >
                    Login
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="demo-2" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal">
              <i class="icon-xs-o-md"></i>
            </button>
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="container">
                <div className="row no-gutters">
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="User Name"
                    />
                  </div>
                </div>

                <div className="row ">
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="row no-gutters">
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <button
                  type="button"
                  id="login"
                  class="btn btn-default"
                  data-toggle="modal"
                  data-target="#demo-1"
                  data-dismiss="modal"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
