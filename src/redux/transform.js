export const transformPropertiesResponse = (response) => {
  return {
    properties: response?.data ?? [],
    pagination: response?.pagination,
  };
};
