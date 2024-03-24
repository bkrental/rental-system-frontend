import { removeUserInfo } from "@/redux/features/auth/authSlice";
import {
  ExitToAppOutlined,
  HomeOutlined,
  LockClockOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function HeaderProfileDropDown() {
  const router = useRouter();
  const dispatch = useDispatch();

  const logout = () => {
    router.push("/");
    dispatch(removeUserInfo());
  };

  return (
    <div className="header_profile-dropdown">
      <div className="header_profile-dropdown-item">
        <HomeOutlined sx={{ fontSize: 18 }} />
        Manage my properties
      </div>
      <div className="header_profile-dropdown-item">
        <PersonOutlineOutlined sx={{ fontSize: 18 }} />
        Update profile
      </div>
      <div className="header_profile-dropdown-item">
        <LockClockOutlined sx={{ fontSize: 18 }} />
        Change password
      </div>
      <div className="header_profile-dropdown-item" onClick={logout}>
        <ExitToAppOutlined sx={{ fontSize: 18 }} />
        Logout
      </div>
    </div>
  );
}
