import React from 'react';
import { 
    Drawer as MUIDrawer,
    List,
    ListItem ,
    ListItemIcon,
    ListItemText,
    IconButton,
    Divider,
    makeStyles,
    Drawer
 } from '@material-ui/core'
 import { ChevronLeftIcon } from '@material-ui/icons/ChevronLeft'
 import { ChevronRightIcon } from '@material-ui/icons/ChevronRight'

 const drawerWidth = 240;

 const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
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
 }))

function DrawerLateral() {
    const classes = useStyles();

    return(
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
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
}

export default DrawerLateral;