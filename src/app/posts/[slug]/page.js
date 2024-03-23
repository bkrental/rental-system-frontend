import "@scss/posts.scss";
import getPropertyDetail from "@/actions/getPropertyDetail";
import Image from "next/image";
import formatAddress from "@/utils/formatAddress";
import {
  BathroomOutlined,
  BedroomChildOutlined,
  CropFree,
  PlaceOutlined,
  PaidOutlined,
  BedroomBabySharp,
  BedroomParent,
  BedroomParentSharp,
  BedroomParentRounded,
  BedroomParentOutlined,
  BathtubOutlined,
  BedOutlined,
  PhoneOutlined,
  MessageOutlined,
  FavoriteOutlined,
  FavoriteBorder,
  IosShare,
  BackupOutlined,
  ChevronLeftOutlined,
} from "@mui/icons-material";
import OwnerCard from "@/components/OwnerCard/OwnerCard";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";

export default async function PostDetailPage({ params }) {
  const post = await getPropertyDetail(params.slug);

  const features = [
    {
      label: "Price",
      value: `${post.price} million VND`,
      icon: PaidOutlined,
    },
    {
      label: "Bedroom",
      value: post.bedrooms || 3 + " Beds",
      icon: BedOutlined,
    },
    {
      label: "Area",
      value: `${post.area} m²`,
      icon: CropFree,
    },
    {
      label: "Bathroom",
      value: post.bathrooms || 2 + " Baths",
      icon: BathtubOutlined,
    },
  ];

  return (
    <div className="posts_container">
      <div className="posts_breadcrumbs">
        <Link href="/rent" className="posts_link">
          <ChevronLeftOutlined sx={{ fontSize: 20 }} />
          Back to Search
        </Link>
      </div>
      <div className="posts_content">
        <div className="posts_gallery">
          <Image
            className="posts_thumbnail"
            src={post.thumbnail}
            fill
            sizes="100%"
          />
          <Image
            className="posts_thumbnailOverlay"
            src={post.thumbnail}
            fill
            sizes="100%"
          />
        </div>

        <h1 className="posts_title">{post.name}</h1>

        <div className="posts_group">
          <p className="posts_address">{formatAddress(post.address)}</p>
          <p className="posts_price">{post.price + " triệu/tháng"}</p>
          <div className="posts_commands">
            <div className="posts_command">
              <IosShare sx={{ fontSize: 20 }} />
              Share
            </div>
            <div className="posts_command">
              <FavoriteBorder sx={{ fontSize: 20 }} />
              Save
            </div>
          </div>
        </div>

        <div className="posts_feature">
          <h4 style={{ fontWeight: 500 }}>Home Highlights</h4>
          <div className="posts_featureList">
            {features.map((feature) => (
              <div className="posts_featureItem" key={feature.label}>
                <p className="posts_featureLabel">
                  {feature.icon && <feature.icon sx={{ fontSize: 20 }} />}
                  {feature.label}
                </p>
                <p className="posts_featureValue">{feature.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="posts_description">
          <h4>Home Description</h4>
          <p>{post.description}</p>
        </div>

        <OwnerCard owner={post.owner} />

        <div className="posts_location">
          <h4>See on map</h4>
          <p>{formatAddress(post.address)}</p>
          <iframe
            className="posts_map"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBaKVef9wxV9G0GPuehykDRLkzXOb7B7Xc
    &q=${post.address.street},${post.address.district},${post.address.province}&zoom=18`}
          ></iframe>
        </div>
      </div>

      <div className="posts_sidebar">
        <div className="posts_card">
          <OwnerCard owner={post.owner} />
          <div className="posts_actions">
            <button className="posts_button posts_button--active">
              <PhoneIcon sx={{ fontSize: 25 }} />
              {post.contact.phone}
            </button>
            <button className="posts_button">
              <MessageOutlined sx={{ fontSize: 20 }} />
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
