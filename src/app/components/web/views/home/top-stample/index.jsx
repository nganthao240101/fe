import React from "react";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Topstample({ topStamples }) {
  console.log(
    "🚀 ~ file: index.jsx:48 ~ Topstample ~ topStamples:",
    topStamples
  );
  // "discount, satus, photo, name, buyerPrice(450), netPrice(800), id, unit"
  // 1 items

  return (
    <div>
      {/* New Item slider */}
      <section className="product-items-slider section-padding">
        <div className="container" id="header-category-bk">
          <div className="section-header">
            <span>For You</span>
            <h5 className="heading-design-h5">
              Top Stample{" "}
              {/* <span className="badge badge-primary">20% OFF</span> */}
              <a className="float-right text-secondary" href="!#">
                View All
              </a>
            </h5>
          </div>
          <Slider {...settings}>
            {topStamples.map((productTopStample) => (
              <TopStampleItem
                discount={productTopStample?.discount}
                status={productTopStample?.status}
                photo={productTopStample?.photo}
                name={productTopStample?.name}
                buyerPrice={productTopStample?.buyerPrice}
                netPrice={productTopStample?.netPrice}
                unit={productTopStample?.unit}
                id={productTopStample?.id}
              />
            ))}
          </Slider>
        </div>
      </section>
      {/* End New item slider */}
    </div>
  );
}

function TopStampleItem({
  discount,
  status,
  photo,
  name,
  buyerPrice,
  netPrice,
  unit,
  id,
}) {
  return (
    <div className="item">
      <div className="product">
        <a href="single.html">
          <div className="product-header">
            <span className="badge badge-success">{discount}% OFF</span>
            <img className="img-fluid" src={photo} alt="product" />
            <span className="veg text-success mdi mdi-circle" />
          </div>
          <div className="product-body">
            <h5>{name}</h5>
            <h6>
              <strong>
                <span className="mdi mdi-approval" /> {status} in
              </strong>{" "}
              - {unit}
            </h6>
          </div>
          <div className="product-footer">
            <button
              type="button"
              className="btn btn-secondary btn-sm float-right"
            >
              <i className="mdi mdi-cart-outline" /> Add To Cart
            </button>
            <p className="offer-price mb-0">
              {buyerPrice} <i className="mdi mdi-tag-outline" />
              <br />
              <span className="regular-price">{netPrice}</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
