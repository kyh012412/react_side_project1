
/** 회전하는 이미지 */
const Carousel = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide"  style="width:100px height:100px">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/1.jpg" className="d-block w-100 urgentImg" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="/img/2.jpg" className="d-block w-100 urgentImg" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="/img/3.jpg" className="d-block w-100 urgentImg" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
