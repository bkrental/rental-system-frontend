"use client";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import "@scss/homepage.scss";

function HomePage() {
  return (
    <div className="home_container">
      <div className="home_hero">
        <h3 className="home_hero-title">
          Experience the ease of{" "}
          <span className="home_text--highlight">BKrental</span> for seamless
          home discovery.
        </h3>

        <p className="home_hero-subtitle">
          Discover houses and apartments for rent tailored to your needs and
          budget.
        </p>

        <div className="home_search">
          <input
            placeholder="Search for City, Address, Neighbourhood..."
            className="home_search-input"
          />
          <button className="btn home_search-btn">
            <SearchIcon sx={{ fontSize: 24, color: "#000" }} />
          </button>
        </div>
      </div>

      <div className="home_banner">
        <Image
          priority={true}
          src="/banner.png"
          className="home_banner-image"
          alt="banner-img"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default HomePage;
