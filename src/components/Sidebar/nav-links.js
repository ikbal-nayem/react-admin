import {
  AutoAwesomeMosaic,
  Settings,
  HomeRepairService
} from "@mui/icons-material";
import user_type from "util/user_type";


const { HOUSEKEEPER } = user_type

const navLinks = [
  { label: "Dashboard", link: "/dashboard", icon: <AutoAwesomeMosaic /> },
  { label: "House Keeping", link: "/house-keeping", icon: <HomeRepairService />, show_to: [HOUSEKEEPER] },
  {
    label: "Configuration", link: "/configuration", icon: <Settings />,
    children: [
      { label: "User", link: "/configuration/user" },
    ]
  }
];

export default navLinks;