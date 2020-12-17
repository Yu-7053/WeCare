import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Link from "@material-ui/core/Link";
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
    backgroundColor: "#00bcd4",
  },
  appBarsolid: {
    backgroundColor: "#00bcd4",
  },
}));

export default function SolidHeader() {
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
      const show = window.scrollY > 0;
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
      <AppBar
        position="fixed"
        className={classes[navRef.current]}
        style={{ height: 75, width: "100%" }}
      >
        <Toolbar>
          <Link href="/">
            <Button
              style={{ fontSize: 30, fontWeight: "bold", color: "white" }}
            >
              WeCare
            </Button>
          </Link>

          <Typography variant="h6" className={classes.title}>
            <Link
              href="/about-us"
              className={classes.menuItem}
              style={{ marginLeft: "70%", fontWeight: "bold" }}
            >
              About Us
            </Link>
            <Link
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              className={classes.menuItem}
              style={{ fontWeight: "bold" }}
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
                        <Link
                          href="/donate-now"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <MenuItem onClick={handleClose}>Donate</MenuItem>
                        </Link>

                        <Link
                          href="/sponsor-now"
                          style={{ textDecoration: "none", color: "black" }}
                        >
                          <MenuItem onClick={handleClose}>
                            Sponsor a Child
                          </MenuItem>
                        </Link>

                        <MenuItem onClick={handleClose}>Volunteer</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Link
              href="#"
              className={classes.menuItem}
              style={{ fontWeight: "bold" }}
            >
              Blog
            </Link>
          </Typography>
          <Link
            href="/donate-now"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Fab color="inherit" fontWeight="Bold" variant="extended">
              Donate
            </Fab>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
