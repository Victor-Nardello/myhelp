import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import StarIcon from '@material-ui/icons/Star';
import ForumIcon from '@material-ui/icons/Forum';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TextField from '@material-ui/core/TextField';
import { Avatar } from '@material-ui/core'
import Post from './Post'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  accountAvatar: {
      cursor: 'pointer',
  },
  divAvatarSpacing: {
    padding: theme.spacing(2)
  },
  growDiv: {
    flexGrow: 1
  },
  buttonLogout: {
    fontSize: '18px',
  },
  textFieldConfig: {
    background: 'inherit',
    width: '600px',
    borderRadius: '10px'
  },
  configButton: {
    backgroundColor: '#1565c0',
    color: 'white'
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  var numberRandom = [];
  while(numberRandom.length < 2){
    var idUser = Math.floor(Math.random() * 1000000);
    if(numberRandom.indexOf(idUser) === -1) numberRandom.push(idUser);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
      <Typography variant="h6" noWrap>User {idUser}</Typography>
        <div className={classes.divAvatarSpacing}/>
       <Avatar className={classes.accountAvatar}></Avatar>
        <div className={classes.growDiv}/>
        <Button>
          <ExitToAppIcon />
          <Typography variant="h6" noWrap className={classes.buttonLogout}>
              Sair
           </Typography>
        </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Configurações', 'Favoritos'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <SettingsIcon /> : <StarIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            
          ))}
        </List>
        <List>
          {['Desabafos', 'Excluídos'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <ForumIcon /> : <DeleteSharpIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
    <div className={classes.drawerHeader} />
    <TextField
            id="filled-multiline-static"
            multiline
            rows={4}
            placeholder="Qual o seu desabafo?"
            variant="outlined"
            InputProps={{
              className: classes.textFieldConfig,
              endAdornment: <Button variant="outlined" color="primary" className={classes.configButton}>
                Bla bla bla
              </Button>
            }}
          />
        <Post />
      </main>
    </div>
  );
}