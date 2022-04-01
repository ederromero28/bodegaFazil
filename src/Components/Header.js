import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header class="c-header">
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <div class="container">
                        <Link to={"/"} class="navbar-brand">
                            <img src="/images/logo.png" alt="Logo" class="img-fluid me-2" width="50" />
                            BodegaFazil
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse d-lg-inline-flex flex-sm-row-reverse" id="navbarSupportedContent">
                            <partial name="_LoginPartial" />
                            <ul class="navbar-nav  mb-2 mb-lg-0 flex-grow-1">
                                <li class="nav-item">
                                    <Link to={"/"} class="nav-link">Inicio</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={"/productos"} class="nav-link">Catalogo</Link>
                                </li>
                                <li>
                                    <button type="button" class="btn  rounded-circle position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                        <i class="bi bi-cart4"></i>
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
