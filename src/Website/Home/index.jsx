import React from "react";

export default function Home() {
  return (
    <div>
      <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
        <div classNameNameName="container-fluid">
          <a classNameNameName="navbar-brand" href="#">
            Routing App
          </a>
          <button
            classNameNameName="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameNameName="navbar-toggler-icon"></span>
          </button>
          <div
            classNameName="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
              <li classNameName="nav-item">
                <a classNameName="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="#">
                  Messages
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
