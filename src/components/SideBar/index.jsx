"use client";
import { FormatListBulletedOutlined, LogoutOutlined, VerifiedUserOutlined } from "@mui/icons-material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FeedbackIcon from "@mui/icons-material/Feedback";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { orange } from "@mui/material/colors";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const postManagementGroup = {
  title: "Post Management",
  icon: <FormatListBulletedOutlined />,
  options: [
    { text: "View all posts", url: "/landlord" },
    { text: "Create new post", url: "/landlord/publish" },
    { text: "View pending posts", url: "/landlord/pending" },
  ],
};

const accountManagementGroup = {
  title: "Account Management",
  icon: <VerifiedUserOutlined />,
  options: [
    { text: "Edit basic information", url: "/landlord/edit-info" },
    { text: "Change password", url: "/landlord/change-password" },
  ],
};

const useIsGroupSelected = (group) => {
  const pathname = usePathname();
  return group.options.some(({ url }) => pathname == url);
};

export default function SideBar() {
  const theme = useTheme();
  const user = useSelector((s) => s.auth.user);
  const pathname = usePathname();
  const isPostGroupSelected = useIsGroupSelected(postManagementGroup);
  const isAccountGroupSelected = useIsGroupSelected(accountManagementGroup);
  const [open, setOpen] = useState(isPostGroupSelected);
  const [accountGroupOpen, setAccountGroupOpen] = useState(isAccountGroupSelected);

  return (
    <Stack sx={{ height: "calc(100vh - 60px)", minWidth: 280, py: 2, px: 1, boxShadow: theme.shadows[1] }}>
      <Stack direction="row" alignItems="center" justifyContent="flex-start" p={2} spacing={2}>
        <Avatar src="/path-to-avatar.jpg" sx={{ width: 48, height: 48 }} />
        <Box>
          <Typography variant="h6" component="p" sx={{ fontSize: 16, lineHeight: 1 }}>
            {user.name}
          </Typography>
          <Typography variant="caption" display="block">
            {user.phone}
          </Typography>
        </Box>
      </Stack>

      <Divider />

      <List dense={true}>
        <ListItemButton
          onClick={() => setOpen((prev) => !prev)}
          sx={{ color: isPostGroupSelected ? orange[800] : "inherit" }}
        >
          <ListItemIcon sx={{ minWidth: 32, color: isPostGroupSelected ? orange[800] : "inherit" }}>
            {postManagementGroup.icon}
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ fontWeight: "bold" }} primary={postManagementGroup.title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" dense={true}>
            {postManagementGroup.options.map(({ url, text }, index) => (
              <ListItemButton sx={{ pl: 6 }} key={text} components={Link} to={url} selected={pathname == url}>
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        <ListItemButton onClick={() => setAccountGroupOpen((prev) => !prev)}>
          <ListItemIcon sx={{ minWidth: 32 }}>{accountManagementGroup.icon}</ListItemIcon>
          <ListItemText primaryTypographyProps={{ fontWeight: "bold" }} primary={accountManagementGroup.title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={accountGroupOpen} timeout="auto" unmountOnExit>
          <List component="div" dense={true}>
            {accountManagementGroup.options.map(({ url, text }, index) => (
              <ListItemButton sx={{ pl: 6 }} key={text} components={Link} to={url} selected={pathname == url}>
                <ListItemText primary={text} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>

      <Divider />
      <Box sx={{ flex: 1 }}></Box>

      <List>
        {[
          { text: "Settings", icon: <SettingsIcon /> },
          { text: "Send Feedback", icon: <FeedbackIcon /> },
          { text: "Logout", icon: <LogoutOutlined /> },
        ].map((item, index) => (
          <ListItem button key={item.text}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
