import "./OwnerCard.scss";
import Image from "next/image";

export default function OwnerCard({ owner }) {
  return (
    <div className="owner_container">
      <div className="owner_avatar">
        <Image
          src="https://a0.muscache.com/im/pictures/user/User-11916985/original/bcc5aeaa-5aac-4c48-a9aa-068ea16f8908.jpeg?im_w=240"
          fill
          sizes="100%"
          alt={owner.name}
        />
      </div>
      <div className="owner_name">{owner.name}</div>
      <div className="owner_joined">Joined 3 months agon</div>
    </div>
  );
}
