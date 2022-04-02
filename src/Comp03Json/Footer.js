import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row g-5 pb-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-col">
                                <div className="d-flex align-items-center">
                                    <img src="/images/logo.png" alt="Logo" className="img-fluid me-2" width="60"/>
                                        <span className="h5 text-white">Bodega Fazil</span>
                                </div>
                                <p className="mt-3">
                                    Cumplimos con la sociedad al responder a los requerimientos que nos demande

                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-col">
                                <h3 className="text-uppercase">company</h3>
                                <ul>
                                    <li><a href="#">privacy Policy</a></li>
                                    <li><a href="#">terms & Condition</a></li>
                                    <li><a href="#">latest Blogs</a></li>
                                    <li><a href="#">app Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-col">
                                <h3 className="text-uppercase">quick links</h3>
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
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-col">
                                <h3 className="text-uppercase">Contacto</h3>
                                <ul>
                                    <li className="d-flex align-items-center"><i className="bi bi-geo-alt"></i> <span>Av. Los Rosales</span> </li>
                                    <li className="d-flex align-items-center"><i className="bi bi-telephone"></i> <span>(+51) 999 999 999</span> </li>
                                    <li className="d-flex align-items-center"><i className="bi bi-envelope"></i> <span>bodegaFazil@gmail</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row border-top py-3">
                        <div className="d-lg-flex justify-content-lg-between align-items-lg-center text-center  text-lg-start ">
                            <span className="copyright-text">
                                &copy;Todos los derechos reservados 2022 - BodegaFazil
                            </span>
                            <nav className="nav justify-content-center justify-content-lg-start ">
                                <Link to={"/#"} className="nav-link"><img src="/images/payment/paypal.svg" alt="Paypal" /> </Link>
                                <Link to={"/#"} className="nav-link"><img src="/images/payment/mastercard.svg" alt="Mastercard" /> </Link>
                                <Link to={"/#"} className="nav-link"><img src="/images/payment/visa.svg" alt="Visa" /> </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
