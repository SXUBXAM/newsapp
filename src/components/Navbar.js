import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-secondary" >
        <div className="container-fluid">
          <a className="navbar-brand" href="/navbar">
            {this.props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/navbar">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.instagram.com/p/Cb4sWpLPMa_/">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/navbar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <ul className="dropdown-menu">
                <li>
                    <a className="dropdown-item" href="https://gifdb.com/images/high/dog-smiles-yes-b8ioe7hpt62ua0to.webp">
                      CXINU
                    </a>
                  </li>
                  
                  <li>
                    <a className="dropdown-item" href="https://www.instagram.com/p/ChMI0Eigpmy/">
                      Instagram
                    </a>
                  </li>
                 
                    <hr className="dropdown-divider" />
                  
                  <li>
                    <a className="dropdown-item" href="https://c.tenor.com/HzrVc5amF9oAAAAC/bang-bang-joe-biden.gif">
                      Mail us
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/cxinu">CXINU</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
