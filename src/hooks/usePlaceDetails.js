import { useEffect, useState } from "react";

export default function usePlaceDetails(address) {
  const [addressDetails, setAddressDetails] = useState(null);

  useEffect(() => {
    const getAddressDetails = async () => {
      if (!address || !address?.place_id) return;

      const url = `/api/places/details?place_id=${address.place_id}&more_compound=true`;
      const response = await fetch(url.toString());
      const data = await response.json();

      return data?.result;
    };

    getAddressDetails().then((data) => {
      setAddressDetails(data);
    });
  }, [address]);

  return addressDetails;
}
