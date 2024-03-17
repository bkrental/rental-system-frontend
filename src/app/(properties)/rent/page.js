import getProperties from "@/actions/getProperties";
import PropertyList from "@/components/Property/PropertyList";

export default async function RentPage({ searchParams }) {
  const properties = await getProperties(searchParams);

  return <PropertyList properties={properties} />;
}
