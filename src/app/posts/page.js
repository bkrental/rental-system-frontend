import Image from "next/image";
import "@scss/properties.scss";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";

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

  const properties = await getProperties();

  return (
    <div className="property_list">
      {properties.map((property) => (
        <PropertyCard property={property} key={property._id} />
      ))}
    </div>
  );
}
