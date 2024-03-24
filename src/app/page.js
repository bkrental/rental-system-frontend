"use client";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import "@scss/homepage.scss";

function HomePage() {
  return (
    <div className="home_container">
      <div className="home_hero">
        <h1>
          Experience the ease of{" "}
          <span className="home_highlight">BKRental</span> for seamless home
          discovery.
        </h1>

        <h4 className="home_subtitle">
          Discover houses and apartments for rent tailored to your needs and
          budget.
        </h4>

        <div className="home_search">
          <input
            placeholder="Search for City, Address, Neighbourhood..."
            className="home_search-input"
          />
          <button className="home_searchBtn">
            <SearchIcon sx={{ fontSize: 24, color: "hsl(60, 9.1%, 97.8%)" }} />
          </button>
        </div>
      </div>

      <div className="home_banner">
        <Image
          priority={true}
          src="/banner.png"
          className="home_bannerImage"
          alt="The BKRental banner image"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default HomePage;
