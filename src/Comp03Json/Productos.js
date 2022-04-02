import React from 'react';
import { Link } from 'react-router-dom';
import  productos  from '../Data/Products';

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
                                {/* con el .map obtenemos la data del Json de productos. */}
                                {productos.map((product) => (
                                    <div
                                        className="shop col-lg-4 col-md-6 col-sm-6"
                                        key={product.idproducto}
                                    >
                                        <div className="border-product">
                                            <Link to={`/productodetalle/${product.idproducto}`}>
                                                <div className="shopBack">
                                                    <img src={product.imagen} alt={product.nombreprod} />
                                                </div>
                                            </Link>

                                            <div className="shoptext">
                                                <p>
                                                    <Link to={`/productodetalle/${product.idproducto}`}>
                                                        {product.nombreprod}
                                                    </Link>
                                                </p>
                                                <h3>S/. {product.precio}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productos;
