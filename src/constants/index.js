export const SUPPORTED_PROPERTY_TYPES = {
  all: "All",
  house: "House",
  rooming_house: "Rooming House",
  dormitory: "Dormitory",
  appartment: "Appartment",
  land: "Land",
  office: "Office",
  villa: "Villa",
};

export const DEFAULT_FILTER = {
  keyword: "",
  address: {
    province: "Ho Chi Minh City",
    districts: [],
  },
  price: {
    min: 0,
    max: 0,
  },
  property_type: "all",
};
