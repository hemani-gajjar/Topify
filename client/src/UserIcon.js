import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function UserIcon({ user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    window.open(" https://accounts.spotify.com/en/logout");
  };

  return (
    <div className="userIcon">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          textTransform: "none",
          color: "#eeeeee",
          mr: 8,
          mt: 1,
          mb: 0,
          ml: 0,
        }}
      >
        <img src={user.image} alt="user" className="user-profile-img" />

        {user.name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="menu-profile"
      >
        <a
          href="https://github.com/hemani-gajjar/Topify#usage"
          target="_blank"
          rel="noreferrer"
        >
          <MenuItem
            sx={{ textDecoration: "none", color: "black" }}
            onClick={handleClose}
          >
            About Topify{" "}
          </MenuItem>{" "}
        </a>
        <a href="/">
          <MenuItem
            sx={{ textDecoration: "none", color: "black" }}
            onClick={handleLogout}
          >
            Logout
          </MenuItem>
        </a>
      </Menu>
    </div>
  );
}
