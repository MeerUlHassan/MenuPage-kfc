import React from 'react'
import '../App.css'

const Navbar = ({cartCounter}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Hunger Zila</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Menu
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Burgers</a></li>
                            <li><a className="dropdown-item" href="#">Pratha-Rools</a></li>
                            <li><a className="dropdown-item" href="#">Pizza's</a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Support</a></li>
                            <li><a className="dropdown-item" href="#">Tip!</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
                <div className="mx-2 nav--icon">
                    <div className=' bcket-icon'/>
                    <button className="fly-cart-btn btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">{cartCounter}</button>
                    </div>
                    <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#signupModal">SignUp</button>
                </div>
            </div>
    </nav>
  )
}

export default Navbar
