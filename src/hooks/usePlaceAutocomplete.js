import { useEffect, useState } from "react";
import { debounce } from "lodash";

export default function usePlaceAutocomplete() {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getAddressOptions = debounce(async () => {
      const response = await fetch(`/api/places/autocomplete?input=${input}`);
      const data = await response.json();
      setOptions(data?.predictions || []);
    }, 500);

    if (input) getAddressOptions();
  }, [input]);

  return [input, setInput, options];
}
