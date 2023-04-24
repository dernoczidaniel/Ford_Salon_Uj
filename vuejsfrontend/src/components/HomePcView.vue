<template>    
    <!-- Reklám videó -->
    <div class="my-element animate__animated animate__fadeIn" :style="{ 'animation-delay': '0.3s' }">

        <div class="container-fluid p-0 mb-5">
            <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style="width:100%; height: 500px;" src="../assets/img/Header/bodyGif.gif" alt="FordHeaderGif">
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div class="p-3" style="max-width: 800px;">
                                <h1 class="display-2 text-white text-uppercase mb-md-4">Ford motor company</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- video -->
    <div class="page">
    <div class="content">

            <div class="col-lg-12 fade-in">
                <div class="container-fluid">
                    <div class="row gx-5">
                        <div class="col-lg-12">
                            <div class="mb-4">
                                <h1 class="display-3 text-uppercase mb-0">Üdv a Ford Motor Company oldalán</h1>
                            </div>
                            <h4 class="text-body mb-4">Autók minden életstílushoz!</h4>
                            <p class="mb-4">
                                Nézze meg modellkínálatunkat, és találja meg, melyik illik Önhöz a leginkább!
                            </p>
                            <h4 class="text-body mb-4">Az új Ford Focus</h4>
                            <p class="mb-4">Feltűnő új dizájnjával és új generációs intelligens megoldásaival a Ford Focus
                                minden
                                korábbinál jobb vezetési élményt kínál.</p>
                            <a href="/cars" class="btn btn-primary py-2 px-5">Aktuális ajánlataink</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Bemutatkozás vége -->
            <!-- Legújabb autó leirás -->
            <div class="my-element animate__animated animate__fadeIn" :style="{ 'animation-delay': '0.3s' }">

                <div class="col-lg-12">
                    <div class="container-fluid p-0 my-5">
                        <div class="row g-0">
                            <div class="col-lg-6" style="min-height: 500px;">
                                <div class="position-relative h-100">
                                    <img class="position-absolute w-100 h-100 animate-on-scroll"
                                        src="../assets/img/Home/X-MAX.jpg"
                                        style="object-fit: cover; width: auto; height: auto;">
                                </div>
                            </div>
                            <div class="col-lg-6 bg-dark p-5">
                                <div class="mb-5">
                                    <h1 class="display-3 text-uppercase text-light mb-0">Ford X-MAX</h1>
                                </div>
                                <div class="owl-carousel testimonial-carousel">
                                    <div class="testimonial-item">
                                        <p class="fs-4 fw-normal text-light mb-4">A Ford S-MAX modellt izgalmas
                                            kirándulásokra terveztük.
                                            És mivel a kalandok sokkal szórakoztatóbbak, ha megosztjuk másokkal,
                                            ez a modell bőséges helyet biztosít az utasok és
                                            holmijuk számára.
                                        </p>

                                        <a href="/cars" class="btn btn-primary py-2 px-5 animate-on-scroll">Érdekel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Legújabb autó leirás vége -->



            <!-- Reklám -->
            <div class="container-fluid p-5 col-lg-12">
                <div class="row g-0">
                    <div class="p-5">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <a href="/cars"><img src="../assets/img/Ad/1.jpeg" class="d-block w-100" alt="1ad"
                                            style="width:40%;  height: 520px;" herf=""></a>
                                    <h3 class=" text-uppercase m-4">Ismerje meg a Ford Mustang Mach-E teljesen elektromos
                                        autót!
                                    </h3>
                                </div>
                                <div class="carousel-item">
                                    <a href="/Service"><img src="../assets/img/Ad/2.jpeg" class="d-block w-100" alt="2ad"
                                            style="width:40%; height: 520px;" herf=""></a>
                                    <h3 class=" text-uppercase m-4">Probálja ki a gyors szervizelésünket!</h3>
                                </div>
                                <div class="carousel-item">
                                    <a href="/cars"><img src="../assets/img/Ad/3.jpg" class="d-block w-100" alt="3ad"
                                            style="width:40%;  height: 520px;" herf=""></a>
                                    <h3 class=" text-uppercase m-4">Sport autót keres? Ford Mustang Gt!</h3>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Reklám vége -->

            <!-- Ajánlatok -->
            <div class="container-fluid p-5 col-lg-12">
                <div class="mb-5 text-center">
                    <h1 class="display-3 text-uppercase mb-0">Ajánlatok</h1>
                </div>
                <div class="row g-5">
                    <div class="col-lg-4 col-md-6">
                        <div class="team-item position-relative">
                            <div class="position-relative overflow-hidden rounded">
                                <img class="img-fluid w-100" src="../assets/img/Home/Mountain.jpg" alt="">
                                <div class="team-overlay">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <a class="btn btn-light rounded-circle mx-1" href="/cars">Érdekel</a>
                                    </div>
                                </div>
                            </div>
                            <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
                                style="background: rgba(34, 36, 41, .9);">
                                <h5 class="text-uppercase text-light">Terep autóink</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="team-item position-relative">
                            <div class="position-relative overflow-hidden rounded">
                                <img class="img-fluid w-100" src="../assets/img/Home/elect-car.jpg" alt="">
                                <div class="team-overlay">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <a class="btn btn-light rounded-circle mx-1" href="/cars">Érdekel</a>
                                    </div>
                                </div>
                            </div>
                            <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
                                style="background: rgba(34, 36, 41, .9);">
                                <h5 class="text-uppercase text-light">Elektromos vagy Hibrid autóink</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="team-item position-relative">
                            <div class="position-relative overflow-hidden rounded">
                                <img class="img-fluid w-100" src="../assets/img/Home/famly.png" alt="">
                                <div class="team-overlay">
                                    <div class="d-flex align-items-center justify-content-start">
                                        <a class="btn btn-light rounded-circle mx-1" href="/cars">Érdekel</a>
                                    </div>
                                </div>
                            </div>
                            <div class="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4"
                                style="background: rgba(34, 36, 41, .9);">
                                <h5 class="text-uppercase text-light">Családi vagy városi autóink</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Ajánlatok vége -->
</template>

<script>

</script>


<style>
/* Animáció az elemek felbukkanásához */
.fade-in {
    opacity: 0;
    /* Először láthatatlan */
    transform: translateY(10px);
    /* Elsődlegesen 10px-re van eltoltva */
    animation: fadeInAnimation 0.8s ease-in-out forwards;
}

@keyframes fadeInAnimation {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.scroll-fade {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}

.scroll-fade.fade-out {
    opacity: 0;
}

.page {
    position: relative;
    overflow: hidden;
}

.content {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
}
</style>