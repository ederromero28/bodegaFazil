import React from 'react';

const Productos = () => {
    return (
        <div>
            <div className="container">
                <div className="section">
                    <div className="row">
                        <h1 className='text-center'>Nuestros Productos</h1>
                        <span className='text-center mb-5'>Te ofrecemos lo mas selecto de nuestros productos cercanos a tu hogar</span>
                        <div className="col-lg-12 col-md-12 article">
                            <div className="shopcontainer row">
                                <div className="shop col-lg-4 ol-md-6 col-sm-6">
                                    <div className="border-product">
                                        <div className="shopBack">
                                            <p>Producto 1</p>
                                            <img src="https://plazavea.vteximg.com.br/arquivos/ids/561147-450-450/20130998.jpg" alt='' />
                                        </div>

                                        <div className="shoptext">
                                            <p>Precio</p>
                                            <h3>S/. 20.00</h3>
                                        </div>
                                    </div>
                                    <div className="border-product">
                                        <div className="shopBack">
                                            <p>Producto 2</p>
                                            <img src="https://plazavea.vteximg.com.br/arquivos/ids/561147-450-450/20130998.jpg" alt='' />
                                        </div>

                                        <div className="shoptext">
                                            <p>Precio</p>
                                            <h3>S/. 15.00</h3>
                                        </div>
                                    </div>
                                    <div className="border-product">
                                        <div className="shopBack">
                                            <p>Producto 3</p>
                                            <img src="https://plazavea.vteximg.com.br/arquivos/ids/561147-450-450/20130998.jpg" alt='' />
                                        </div>

                                        <div className="shoptext">
                                            <p>Precio</p>
                                            <h3>S/. 30.00</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productos;
