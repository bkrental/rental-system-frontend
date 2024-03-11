import Image from "next/image";
import "@scss/properties.scss";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";

export default async function RentPage() {
  async function getProperties() {
    const res = await fetch(
      `${process.env.RENTAL_SERVICE_BACKEND_ENDPOINT}/posts`,
      {
        next: {
          revalidate: 300,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const { posts } = (await res.json()).data;
    return posts;
  }

  async function formatAddress(address) {
    const { street, district, province } = address;
    return `${street}, ${district}, ${province}`;
  }

  const properties = await getProperties();

  return (
    <div className="property_list">
      {properties.map(
        ({ _id, description, address, price, area, thumbnail, owner }) => (
          <div className="property_card" key={_id}>
            <div className="property_card-header">
              <Image
                className="property_card-image"
                src={thumbnail}
                fill
                objectFit="cover"
                alt="property image"
              />
            </div>

            <div className="property_card-body">
              {/* <h3 className="property_card-title">{name}</h3> */}
              <h3 className="property_card-title">
                <Link href={`/rent/${_id}`}>{formatAddress(address)}</Link>
              </h3>

              <div className="property_card-features">
                <div className="property_card-features_item">
                  <p>{`${area} m2`}</p>
                </div>
                <div className="property_card-features_item">
                  <SingleBedIcon />
                  <p>{`${1} phòng ngủ`}</p>
                </div>
                <div className="property_card-features_item">
                  <BathtubIcon />
                  <p>{`${1} phòng tắm`}</p>
                </div>
              </div>

              <p className="property_card-price">{price + " triệu/tháng"}</p>

              <p className="property_card-description">{description}</p>
            </div>

            <div className="property_card-footer">
              <div className="property_card-owner">
                <div className="property_card-owner_avatar">CĐ</div>
                <div className="property_card-owner_info">
                  <div className="property_card-owner_name">
                    {owner?.name || "Ẩn danh"}
                  </div>
                  <div className="property_card-published-time">
                    Đăng hôm nay
                  </div>
                </div>
              </div>

              <div className="property_card-favourite">
                <FavoriteBorderIcon
                  sx={{ fontSize: 25, fontWeight: 400, color: "grey" }}
                />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
