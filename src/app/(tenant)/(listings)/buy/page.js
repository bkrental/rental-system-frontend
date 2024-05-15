import dynamic from "next/dynamic";

const PropertiesPage = dynamic(() => import("@/components/GetPropertiesPage"), {
  ssr: false,
});

export default function BuyPage() {
  return <PropertiesPage transaction_type="sale" />;
}
