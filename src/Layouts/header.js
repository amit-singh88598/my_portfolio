import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import {
  Assignment,
  Home,
  Info,
  LocalActivity,
  School,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    backgroundColor: "#FFD700",
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    display: "none",
    textTransform: "uppercase",
    fontSize: "1.8em",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  navText: {
    color: "#fff",
    textDecoration: "none",
    marginLeft: 15,
    marginRight: 15,
    display: "flex",
  },
  mobNavigation: {
    color: "#000",
    textDecoration: "none",
    display: "flex",
  },
  mobIcon: {
    marginLeft: 12,
    marginRight: 10,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/home" className={classes.mobNavigation}>
          <Home className={classes.mobIcon} />
          home
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/about" className={classes.mobNavigation}>
          <Info className={classes.mobIcon} />
          About
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/education" className={classes.mobNavigation}>
          <School className={classes.mobIcon} />
          Education
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/experience" className={classes.mobNavigation}>
          <LocalActivity className={classes.mobIcon} />
          Experience
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/myWork" className={classes.mobNavigation}>
          <Assignment className={classes.mobIcon} />
          My Work
        </Link>
      </MenuItem>
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#CF6766" }}
        elevation={0}
      >
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}

          {/* <Typography className={classes.title} variant="h6" noWrap>
            Amit Singh
          </Typography> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/home" className={classes.navText}>
              <Home style={{ marginRight: 10 }} />
              Home
            </Link>
            <Link to="/about" className={classes.navText}>
              <Info style={{ marginRight: 10 }} />
              About
            </Link>
            <Link to="/education" className={classes.navText}>
              <School style={{ marginRight: 10 }} />
              Education
            </Link>
            <Link to="/experience" className={classes.navText}>
              <LocalActivity style={{ marginRight: 10 }} />
              Experience
            </Link>
            <Link to="/myWork" className={classes.navText}>
              <Assignment style={{ marginRight: 10 }} />
              My Work
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
