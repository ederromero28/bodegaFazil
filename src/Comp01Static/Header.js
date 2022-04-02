import React from 'react';

const Header = () => {
    return (
        <>
            <header className="c-header">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <a href='#' className="navbar-brand">
                            <img src="/images/logo.png" alt="Logo" className="img-fluid me-2" width="50" />
                            BodegaFazil
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-lg-inline-flex flex-sm-row-reverse" id="navbarSupportedContent">
                            <partial name="_LoginPartial" />
                            <ul className="navbar-nav  mb-2 mb-lg-0 flex-grow-1">
                                <li className="nav-item">
                                    <a href='#' className="nav-link">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a href='#' className="nav-link">Catalogo</a>
                                </li>
                                <li>
                                    <button type="button" className="btn  rounded-circle position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                        <i className="bi bi-cart4"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
