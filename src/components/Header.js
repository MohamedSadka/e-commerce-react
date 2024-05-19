import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { CartSVG, SearchIconSVG, UserSVG, WishListSVG } from "./Svgs";
import { Container, Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useState } from "react";

const Header = () => {
  const { cartItems } = useCart();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownClose = () => {
    setShowDropdown(false);
  };

  const showIcon = !["/", "/signup", "/login"].includes(location.pathname);

  return (
    <div className="header">
      <Link to="/" className="logo">
        Exclusive
      </Link>

      <ul className="header-links d-flex gap-3 list-unstyled m-0">
        <li className="header-link">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="header-link">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>

        <li className="header-link">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>

        <li className="header-link">
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
        </li>
      </ul>

      <div className="search-component">
        <input type="text" placeholder="What are you looking for?" />
        <div className="search-icon">
          <SearchIconSVG />
        </div>
      </div>
      <div className="wishlist-cart d-flex align-center gap-3">
        <Link to="/wishlist" className="wishlist">
          <WishListSVG />
        </Link>
        <Link to="/cart" className="cart">
          <CartSVG />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
        </Link>
        {showIcon && (
          <div style={{ position: "relative" }}>
            <UserSVG onClick={handleDropdownToggle} />
            <Dropdown
              style={{
                position: "absolute",
                left: "-130px",
                top: "40px",
                zIndex: "999",
                backgroundColor: "#0000000A",
              }}
              show={showDropdown}
              onClose={handleDropdownClose}
            >
              <Dropdown.Menu className="dropdown-menu">
                <Dropdown.Item>
                  <div className="d-flex gap-3">
                    <img width="30px" src="/images/user.webp" alt="user-pic" />
                    <Link className="dropdown-item" to="/forgot-password">Manage My Account</Link>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item >
                  <div className="d-flex gap-3 ml-2 align-items-center">
                    <img width="30px" height="20px" src="/images/order.png" alt="order-pic" />
                    <Link className="dropdown-item" to="/forgot-password">My Order</Link>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item >
                  {" "}
                  <div className="d-flex gap-3">
                    <img width="30px" src="/images/cancelation.jpeg" alt="cancellation-pic" />
                    <Link className="dropdown-item" to="/forgot-password">My Cancellations</Link>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item >
                  {" "}
                  <div className="d-flex gap-3">
                    <img width="30px" src="/images/star-img.jpeg" alt="review-pic" />
                    <Link className="dropdown-item" to="/reviews">My Reviews</Link>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item >
                  {" "}
                  <div className="d-flex gap-3">
                    <img width="30px" src="/images/logout-img.jpg" alt="logout-pic" />
                    <Link className="dropdown-item" to="/logout">Log Out</Link>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        )}
      </div>
      {window.innerWidth <= 900 && (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            {/* <Navbar.Brand href="#home">Pages</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/signup">signup</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default Header;
