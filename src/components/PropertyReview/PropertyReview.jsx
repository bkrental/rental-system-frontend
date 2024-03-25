import "./PropertyReview.scss";
import Image from "next/image";
export default function PropertyReview({ owner, review }) {
  return (
    <div className="propertyReview_container">
      <p className="propertyReview_owner">{owner?.name || "Guest"}</p>
      <p className="propertyReivew_content">{review}</p>
    </div>
  );
}
