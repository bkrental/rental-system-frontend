import BathtubIcon from "@mui/icons-material/Bathtub";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import "@scss/properties.scss";
import "./PropertyCard.scss";
import Image from "next/image";
import Link from "next/link";
import {
  FavoriteBorderRounded,
  Favorite,
  CropFree,
  BedroomChildOutlined,
  BathroomOutlined,
  PlaceOutlined,
  FavoriteOutlined,
} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";

export default function PropertyCard({
  property: {
    _id,
    address,
    name,
    description,
    price,
    area,
    thumbnail,
    owner,
    bedrooms,
    bathrooms,
  },
}) {
  bedrooms = 1;
  bathrooms = 1;
  const formatAddress = ({ street, district, province }) => {
    return `${street}, ${district}, ${province}`;
  };

  return (
    <div className="propertyCard_container" key={_id}>
      <div className="propertyCard_header">
        <Image
          className="propertyCard_thumbnail"
          src={thumbnail}
          fill
          alt="property image"
          sizes="100%"
        />
      </div>

      <div className="propertyCard_body">
        <div className="propertyCard_address">
          <PlaceOutlined sx={{ color: "red", fontSize: 20 }} />
          {formatAddress(address)}
        </div>

        <h3 className="propertyCard_title">
          <Link href={`/rent/${_id}`}>{name}</Link>
        </h3>

        <div className="propertyCard_features">
          <p className="propertyCard_price">{price + " triệu/tháng"}</p>
          <div className="propertyCard_features-item">
            <CropFree />
            <p>
              {`${area} m`}
              <sup>2</sup>
            </p>
          </div>
          {Boolean(bedrooms) && (
            <div className="propertyCard_features-item">
              <BedroomChildOutlined />
              <p>{`${bedrooms} pn`}</p>
            </div>
          )}
          {Boolean(bathrooms) && (
            <div className="propertyCard_features-item">
              <BathroomOutlined />
              <p>{`${bathrooms} wc`}</p>
            </div>
          )}
        </div>

        <p className="propertyCard_description">{description}</p>
      </div>

      <div className="propertyCard_footer">
        <div className="propertyCard_avatar">CĐ</div>
        <div className="propertyCard_owner">{owner?.name || "Ẩn danh"}</div>
        <div className="propertyCard_publishedDate">Đăng hôm nay</div>

        <FavoriteBorderIcon
          className="propertyCard_favorite"
          sx={{ fontSize: 30, fontWeight: 400 }}
        />
      </div>
    </div>
  );
}
