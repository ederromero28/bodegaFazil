import React from 'react';

const Homecarousel = () => {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/images/banner/banner-1.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/images/banner/banner-2.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/images/banner/banner-10.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <i class="bi bi-arrow-left"></i>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <i class="bi bi-arrow-right"></i>
                </button>
            </div>
        </>
    );
}

export default Homecarousel;