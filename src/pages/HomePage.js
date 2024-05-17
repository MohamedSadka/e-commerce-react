import { BestSellingCards } from "../components/BestSellingCards";
import { PhoneCard } from "../components/BrowseByCate";
import { FlashSalesTime } from "../components/FlashSalesTime";
import { OurProductsCards } from "../components/OurProductsCards";
import { ProjectsCards } from "../components/ProjectsCards";
import {
  ArrowSVG,
  MusicExperienceTimerSVG,
  RightArrowSVG,
  RightLeftArrowsSVG,
} from "../components/Svgs";


const HomePage = () => {
  return (
    <div className="home-pgae mb-5 w-100">
      <div className="categories d-flex w-100">
        <ul className="list-unstyled">
          <div className="list-item d-flex align-items-center gap-4">
            <li>Woman’s Fashion</li>
            <ArrowSVG />
          </div>
          <div className="list-item d-flex align-items-center gap-5">
            <li>Men’s Fashion</li>
            <ArrowSVG />
          </div>
          <li className="list-item">Electronics</li>
          <li className="list-item">Home & Lifestyle</li>
          <li className="list-item">Sports & Outdoor</li>
          <li className="list-item">Baby’s & Toys</li>
          <li className="list-item">Groceries & Pets</li>
          <li className="list-item">Health & Beauty</li>
        </ul>
        <div className="cate-adv d-flex p-4">
          <div className="cate-details">
            <div className="apple-details d-flex align-items-center gap-4">
              <img
                className="apple-img"
                src="/images/apple-cate.png"
                alt="apple imgae"
              />
              <span className="apple-title">iPhone 14 Series</span>
            </div>
            <p className="cate-offer mt-3 mb-3">Up to 10% off Voucher</p>
            <div className="d-flex gap-2 align-items-center">
              <span className="shop-now">Shop Now</span>
              <RightArrowSVG />
            </div>
            <div className="bullets d-flex gap-2 mt-5">
              <div className="bullet"></div>
              <div className="bullet"></div>
              <div className="bullet active"></div>
              <div className="bullet"></div>
              <div className="bullet"></div>
            </div>
          </div>
          <div>
            <img className="promax" src="/images/cate-img.jpeg" alt="promax" />
          </div>
        </div>
      </div>
      <h6 className="categories-main-title">Today's</h6>
      <div className="flash-sales d-flex justify-content-between align-items-center">
        <div className=" d-flex align-items-center gap-5">
          <h4 className="main-title mt-3">Flash Sales</h4>
          <div className="flash-sales-time d-flex gap-3">
            <FlashSalesTime />
          </div>
        </div>
        <RightLeftArrowsSVG />
      </div>
      <div className="flash-sales-products">
        <ProjectsCards/>
        <button className="view-products-btn">View All Products</button>
      </div>

      <div className="browse-category">
        <h6 className="categories-main-title">Categories</h6>
        <h4 className="main-title mt-3">Browse By Category</h4>
      </div>
      <div className="categorie-items d-flex gap-3 mt-5 flex-wrap">
        <PhoneCard />
        <PhoneCard />
        <PhoneCard />
        <PhoneCard />
        <PhoneCard />
      </div>

      <div className="best-selling-products">
        <div>
          <h6 className="categories-main-title">This Month</h6>
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="main-title mt-3">Best Selling Products</h4>
            <button className="view-all-btn">View All</button>
          </div>
          <BestSellingCards />
        </div>
      </div>

      <div className="sounds d-flex gap-5 align-items-center justify-content-around">
        <div className="sounds-info d-flex justify-content-between align-items-start flex-column gap-3 p-5">
          <p className="sounds-title">Categories</p>
          <h5 className="sound-content">Enhance Your Music Experience</h5>
          <MusicExperienceTimerSVG />
          <button className="sounds-btn">Buy Now</button>
        </div>
        <img className="sounds-img" src="/images/sounds.png" alt="sounds" />
      </div>

      <div className="explore-products">
        <h6 className="categories-main-title">Our Products</h6>
        <div className="flash-sales d-flex justify-content-between align-items-center">
          <div>
            <h4 className="main-title mt-3">Flash Sales</h4>
          </div>
          <RightLeftArrowsSVG />
        </div>

        <OurProductsCards />
        <button className="view-all-products d-block">View All Products</button>
      </div>
    </div>
  );
};

export default HomePage;
