import BathtubIcon from "@mui/icons-material/Bathtub";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import "@scss/properties.scss";
import "./PropertyCard.scss";
import Image from "next/image";
import Link from "next/link";
import { FavoriteBorderRounded, HomeOutlined } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";

export default function PropertyCard({
  property: {
    _id,
    address,
    description,
    price,
    area,
    thumbnail,
    owner,
    bedrooms,
    bathrooms,
  },
}) {
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
        <h3 className="propertyCard_title">
          <Link href={`/rent/${_id}`}>{formatAddress(address)}</Link>
        </h3>

        <div className="propertyCard_features">
          <div className="propertyCard_features-item">
            <p>{`${area} m2`}</p>
          </div>
          {Boolean(bedrooms) && (
            <div className="propertyCard_features-item">
              <SingleBedIcon />
              <p>{`${bedrooms} phòng ngủ`}</p>
            </div>
          )}
          {Boolean(bathrooms) && (
            <div className="propertyCard_features-item">
              <BathtubIcon />
              <p>{`${1} phòng tắm`}</p>
            </div>
          )}
        </div>

        <p className="propertyCard_price">{price + " triệu/tháng"}</p>
        <p className="propertyCard_description">{description}</p>
      </div>

      <div className="propertyCard_footer">
        <div className="propertyCard_avatar">CĐ</div>
        <div className="propertyCard_owner">{owner?.name || "Ẩn danh"}</div>
        <div className="propertyCard_publishedDate">Đăng hôm nay</div>

        <FavoriteBorderRounded
          className="propertyCard_favorite"
          sx={{ fontSize: 25, fontWeight: 400, color: "grey" }}
        />
      </div>
    </div>
  );
}
