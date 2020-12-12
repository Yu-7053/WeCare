import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Link from "@material-ui/core/Link";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import { List, ListItem, ListItemText, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiFab-root": {
      backgroundColor: "rgb(3,90,166)",
      fontSize: 20,
      fontWeight: "bold",
    },
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  menuItem: {
    flexGrow: 1,
    color: "White",
    marginRight: theme.spacing(3),
  },
  appBarTransparent: {
    backgroundColor: "rgba(67, 129, 168, 0)",
  },
  appBarsolid: {
    backgroundColor: "#00bcd4",
  },
}));

const testClick = () => {
  alert("Hi");
};

const blogClick = () => {
  alert("This is not the fucking Blog");
};

export default function Header() {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState("appBarTransparent");
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const navRef = React.useRef();
  navRef.current = navBackground;

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 310;
      if (show) {
        setNavBackground("appBarsolid");
      } else {
        setNavBackground("appBarTransparent");
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes[navRef.current]} style={{height:75}}>
        <Toolbar>
          <Button style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
            WeCare
          </Button>

          <Typography variant="h6" className={classes.title}>
            <Link
              href="#"
              onClick={testClick}
              className={classes.menuItem}
              style={{ marginLeft: "70%" }}
            >
              About Us
            </Link>
            <Link
              href="#"
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              className={classes.menuItem}
            >
              Get Involved
            </Link>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>Donate</MenuItem>
                        <MenuItem onClick={handleClose}>
                          Sponsor a Child
                        </MenuItem>
                        <MenuItem onClick={handleClose}>Volunteer</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Link href="#" onClick={blogClick} className={classes.menuItem}>
              Blog
            </Link>
          </Typography>
          <Fab color="inherit" fontWeight="Bold" variant="extended">
            Donate
          </Fab>
        </Toolbar>
      </AppBar>
    </div>
  );
}
