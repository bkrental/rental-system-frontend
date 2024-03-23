import {
  BathroomOutlined,
  BedroomChildOutlined,
  CropFree,
  PlaceOutlined,
} from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";
import Link from "next/link";
import "./PropertyCard.scss";

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

        <h4 className="propertyCard_title">
          <Link href={`/posts/${_id}`}>{name}</Link>
        </h4>

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
