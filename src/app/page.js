"use client";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import styles from "@scss/LandingPage.module.scss";

function LandingPage() {
  return (
    <div className="container">
      <div className={styles.hero}>
        <h3 className={styles.heroTitle}>
          Experience the ease of{" "}
          <span className={styles.highlight}>BKrental</span> for seamless home
          discovery.
        </h3>

        <p className={styles.heroSubtitle}>
          Discover houses and apartments for rent tailored to your needs and
          budget.
        </p>

        <div className={styles.heroSearch}>
          <input
            placeholder="Search for City, Address, Neighbourhood..."
            className={styles.heroSearchInput}
          ></input>
          <button className={`btn ${styles.heroSearchBtn}`}>
            <SearchIcon sx={{ fontSize: 24, color: "#000" }} />
          </button>
        </div>
      </div>

      <div className={styles.banner}>
        <Image
          src="/banner.png"
          className={styles.bannerImage}
          alt="banner-img"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default LandingPage;
