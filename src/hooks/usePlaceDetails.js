import { useEffect, useState } from "react";

export default function usePlaceDetails(addressId) {
  const [addressDetails, setAddressDetails] = useState(null);

  useEffect(() => {
    const getAddressDetails = async () => {
      if (!addressId) return;

      const url = `/api/places/details?place_id=${addressId}&more_compound=true`;
      const response = await fetch(url.toString());
      const data = await response.json();

      return data?.result;
    };

    getAddressDetails().then((data) => {
      setAddressDetails(data);
    });
  }, [addressId]);

  return addressDetails;
}
