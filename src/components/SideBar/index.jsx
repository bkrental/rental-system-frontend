import { PRICE_SUGGESTIONS } from "@/constants/price";
import { SUPPORTED_PROPERTY_TYPES } from "@/constants/propertyTypes";
import { getPriceOptionLabel } from "@/utils/getPriceLabel";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./SideBar.scss";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <div className="sideBar_container">
      <div className="sideBar_group">
        <h6 className="sideBar_groupTitle">Filter by property type</h6>
        <div className="sideBar_groupList">
          {SUPPORTED_PROPERTY_TYPES.slice(1).map((propertyType) => (
            <Link
              key={propertyType.value}
              href={`${pathname}?property_type=${propertyType.value}`}
              className="sideBar_groupItem"
            >
              {<propertyType.Icon />}
              {propertyType.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="sideBar_group">
        <h6 className="sideBar_groupTitle">Filter by price range</h6>
        <div className="sideBar_groupList">
          {PRICE_SUGGESTIONS.slice(1).map((price) => (
            <Link
              key={price.toString()}
              href={`${pathname}?price[gt]=${price[0]}&price[lt]=${price[1]}`}
              className="sideBar_groupItem"
            >
              <RadioButtonCheckedIcon />
              {getPriceOptionLabel(price)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
