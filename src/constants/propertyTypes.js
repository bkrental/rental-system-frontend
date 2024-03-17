import {
  ApartmentOutlined,
  BusinessCenterOutlined,
  HomeWorkOutlined,
  VillaOutlined,
  WarehouseOutlined,
  YardOutlined,
  HomeOutlined,
  HolidayVillageOutlined,
} from "@mui/icons-material";

export const SUPPORTED_PROPERTY_TYPES = [
  {
    value: "all",
    label: "All",
    viLabel: "Tất cả nhà đất",
  },
  {
    value: "house",
    label: "House",
    viLabel: "Nhà riêng",
    Icon: HomeOutlined,
  },
  {
    value: "rooming_house",
    label: "Rooming House",
    viLabel: "Nhà trọ, phòng trọ",
    Icon: HolidayVillageOutlined,
  },
  {
    value: "dormitory",
    label: "Dormitory",
    viLabel: "Ký túc xá",
    Icon: HomeWorkOutlined,
  },
  {
    value: "appartment",
    label: "Appartment",
    viLabel: "Căn hộ chung cư",
    Icon: ApartmentOutlined,
  },
  {
    value: "land",
    label: "Land",
    viLabel: "Đất",
    Icon: YardOutlined,
  },
  {
    value: "office",
    label: "Office",
    viLabel: "Văn phòng",
    Icon: BusinessCenterOutlined,
  },
  {
    value: "villa",
    label: "Villa",
    viLabel: "Biệt thự",
    Icon: VillaOutlined,
  },
  {
    value: "warehouse",
    label: "Warehouse",
    viLabel: "Kho, nhà xưởng",
    Icon: WarehouseOutlined,
  },
];
