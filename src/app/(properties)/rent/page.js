import getProperties from "@/actions/getProperties";
import PropertyList from "@/components/Property/PropertyList";
import { getPropertiesWithQueryString } from "@/actions/getProperties";

export default async function RentPage({ searchParams }) {
  const properties = await getProperties(searchParams);

  return <PropertyList properties={properties} />;
}
