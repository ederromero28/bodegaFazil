import React from 'react';
import { useParams } from 'react-router-dom';
import productos from '../Data/Products';

const Productodetalle = () => {
    const { idproducto } = useParams();
    return (
        <>
            {/* <h1>{productos[idproducto - 1].nombreprod}</h1>{" "}
            <img src={productos[idproducto - 1].imagen} alt={productos[idproducto - 1].nombreprod} /> */}
            <div className="container single-product">
                <div className="row">
                    <div className="col-md-6">
                        <div className="single-image">
                        <img src={productos[idproducto - 1].imagen} alt={productos[idproducto - 1].nombreprod} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="product-dtl">
                            <div className="product-info">
                                <div className="product-name">{productos[idproducto - 1].nombreprod}</div>
                            </div>
                            <p>{productos[idproducto - 1].descripcionprod}</p>

                            <div className="product-count col-lg-7 ">
                                <div className="flex-box d-flex justify-content-between align-items-center">
                                    <h6>Precio</h6>
                                    <span>s/. {productos[idproducto - 1].precio}</span>
                                </div>
                                <div className="flex-box d-flex justify-content-between align-items-center">
                                    <h6>Estado</h6>
                                    {productos[idproducto - 1].stock > 0 ? (
                                        <span>En stock</span>
                                    ) : (
                                        <span>No disponible</span>
                                    )}
                                </div>
                                {productos[idproducto - 1].stock > 0 ? (
                                    <>
                                        <div className="flex-box d-flex justify-content-between align-items-center">
                                            <h6>Cantidad</h6>
                                            <select>
                                                {[...Array(productos[idproducto - 1].stock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <button className="round-black-btn">Agregar al carrito</button>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Productodetalle;


// function Productodetalle() {
//     const { idproducto } = useParams();
//     console.log("hOLA");
//     return (
//         <>

//         </>
//     );
// }

// export default Productodetalle;
