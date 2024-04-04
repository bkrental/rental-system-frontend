import { useEffect, useState } from "react";

export default function usePlaceDetails(address) {
  const [addressDetails, setAddressDetails] = useState(null);

  useEffect(() => {
    const getAddressDetails = async () => {
      if (!address || !address?.place_id) return;

      const BASE_URL = process.env.NEXT_PUBLIC_LOCATION_SERVICE_ENDPOINT;
      const response = await fetch(`${BASE_URL}/places/${address.place_id}`);
      const data = await response.json();
      return data?.result;
    };

    getAddressDetails().then((data) => {
      setAddressDetails(data);
    });
  }, [address]);

  return addressDetails;
}
