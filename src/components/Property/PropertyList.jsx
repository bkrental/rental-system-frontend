import PropertyCard from "./PropertyCard";

export default function PropertyList({ properties }) {
  if (!properties || properties.length === 0) {
    return <p>There is no property suitable with your requirements</p>;
  }

  return (
    <div className="property_list">
      {properties.map((property) => (
        <PropertyCard property={property} key={property._id} />
      ))}
    </div>
  );
}
