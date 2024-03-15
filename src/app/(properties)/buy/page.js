import getProperties from "@/actions/getProperties";
import PropertyList from "@/components/Property/PropertyList";

export default async function BuyPage() {
  const properties = await getProperties({ transaction_type: "sale" });

  return <PropertyList properties={properties} />;
}
