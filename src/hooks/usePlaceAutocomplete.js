import { useEffect, useState } from "react";
import { debounce } from "lodash";

export default function usePlaceAutocomplete() {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getAddressOptions = debounce(async () => {
      const BASE_URL = process.env.NEXT_PUBLIC_LOCATION_SERVICE_ENDPOINT;
      const response = await fetch(`${BASE_URL}/autocomplete?input=${input}`);
      const data = await response.json();
      setOptions(data?.predictions || []);
    }, 500);

    if (input) getAddressOptions();
  }, [input]);

  return [input, setInput, options];
}
