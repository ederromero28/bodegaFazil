import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="row g-5 pb-4">
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-col">
                                <div class="d-flex align-items-center">
                                    <img src="/images/logo.png" alt="Logo" class="img-fluid me-2" width="60"/>
                                        <span class="h5 text-white">Bodega Fazil</span>
                                </div>
                                <p class="mt-3">
                                    Cumplimos con la sociedad al responder a los requerimientos que nos demande

                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-col">
                                <h3 class="text-uppercase">company</h3>
                                <ul>
                                    <li><a href="#">privacy Policy</a></li>
                                    <li><a href="#">terms & Condition</a></li>
                                    <li><a href="#">latest Blogs</a></li>
                                    <li><a href="#">app Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-col">
                                <h3 class="text-uppercase">quick links</h3>
                                <ul>
                                    <li><a data-scroll-nav="0" href="#">home</a></li>
                                    <li><a data-scroll-nav="1" href="#">Top Products</a></li>
                                    <li><a data-scroll-nav="2" href="#">Productos</a></li>
                                    <li>
                                        <a data-scroll-nav="3" href="#">Consultas Frecuentes</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-col">
                                <h3 class="text-uppercase">Contacto</h3>
                                <ul>
                                    <li class="d-flex align-items-center"><i class="bi bi-geo-alt"></i> <span>Av. Los Rosales</span> </li>
                                    <li class="d-flex align-items-center"><i class="bi bi-telephone"></i> <span>(+51) 999 999 999</span> </li>
                                    <li class="d-flex align-items-center"><i class="bi bi-envelope"></i> <span>bodegaFazil@gmail</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row border-top py-3">
                        <div class="d-lg-flex justify-content-lg-between align-items-lg-center text-center  text-lg-start ">
                            <span class="copyright-text">
                                &copy;Todos los derechos reservados 2022 - BodegaFazil
                            </span>
                            <nav class="nav justify-content-center justify-content-lg-start ">
                                <Link to={"/#"} class="nav-link"><img src="/images/payment/paypal.svg" alt="Paypal" /> </Link>
                                <Link to={"/#"} class="nav-link"><img src="/images/payment/mastercard.svg" alt="Mastercard" /> </Link>
                                <Link to={"/#"} class="nav-link"><img src="/images/payment/visa.svg" alt="Visa" /> </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
