import React from 'react';
 import logo from './logo.svg';
import './App.css';
 import BottomNavigation from "@material-ui/core/BottomNavigation";
 import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
 import FavoriteIcon from "@material-ui/icons/Favorite";
 import RestoreIcon from "@material-ui/icons/Restore";
 import LocationOnIcon from "@material-ui/icons/LocationOn";
import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";



const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: 0,
        width: '100%'
    },
});


function App() {
    const classes = useStyles();
     const [value, setValue] = React.useState(null);
     const [open, setOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(open);
    };

    const list = () => (
        <div role="presentation"
            onClick={toggleDrawer( false)}
            onKeyDown={toggleDrawer( false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
                <React.Fragment key={'left'}>
                    <>
                        <div className="App">
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo"/>
                                <p>
                                    Edit <code>src/App.js</code> and save to reload.
                                </p>
                                <a
                                    className="App-link"
                                    href="https://reactjs.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Learn React
                                </a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, sapien id elementum mattis, tellus justo pharetra tortor, non molestie quam magna eget erat. Integer pellentesque sit amet nisl ac sodales. Suspendisse a eleifend lacus, eu dapibus purus. Donec eros ex, lobortis ac nunc ac, tincidunt tristique nulla. Morbi commodo nibh in nunc euismod, non maximus urna bibendum. Etiam ornare consectetur tellus et dapibus. Duis venenatis ligula nisl, id pretium leo vestibulum at. Etiam efficitur ante eu tellus semper scelerisque sit amet ac dui. Vestibulum eu interdum sem, at bibendum urna. In sed fermentum sapien. Nulla facilisi. Vestibulum placerat interdum arcu a euismod. Vestibulum vestibulum velit a nulla commodo sollicitudin. Ut in orci dictum, congue urna quis, pretium risus. Donec iaculis nunc eget ipsum pharetra venenatis. Ut interdum viverra eros eu posuere.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, sapien id elementum mattis, tellus justo pharetra tortor, non molestie quam magna eget erat. Integer pellentesque sit amet nisl ac sodales. Suspendisse a eleifend lacus, eu dapibus purus. Donec eros ex, lobortis ac nunc ac, tincidunt tristique nulla. Morbi commodo nibh in nunc euismod, non maximus urna bibendum. Etiam ornare consectetur tellus et dapibus. Duis venenatis ligula nisl, id pretium leo vestibulum at. Etiam efficitur ante eu tellus semper scelerisque sit amet ac dui. Vestibulum eu interdum sem, at bibendum urna. In sed fermentum sapien. Nulla facilisi. Vestibulum placerat interdum arcu a euismod. Vestibulum vestibulum velit a nulla commodo sollicitudin. Ut in orci dictum, congue urna quis, pretium risus. Donec iaculis nunc eget ipsum pharetra venenatis. Ut interdum viverra eros eu posuere.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, sapien id elementum mattis, tellus justo pharetra tortor, non molestie quam magna eget erat. Integer pellentesque sit amet nisl ac sodales. Suspendisse a eleifend lacus, eu dapibus purus. Donec eros ex, lobortis ac nunc ac, tincidunt tristique nulla. Morbi commodo nibh in nunc euismod, non maximus urna bibendum. Etiam ornare consectetur tellus et dapibus. Duis venenatis ligula nisl, id pretium leo vestibulum at. Etiam efficitur ante eu tellus semper scelerisque sit amet ac dui. Vestibulum eu interdum sem, at bibendum urna. In sed fermentum sapien. Nulla facilisi. Vestibulum placerat interdum arcu a euismod. Vestibulum vestibulum velit a nulla commodo sollicitudin. Ut in orci dictum, congue urna quis, pretium risus. Donec iaculis nunc eget ipsum pharetra venenatis. Ut interdum viverra eros eu posuere.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, sapien id elementum mattis, tellus justo pharetra tortor, non molestie quam magna eget erat. Integer pellentesque sit amet nisl ac sodales. Suspendisse a eleifend lacus, eu dapibus purus. Donec eros ex, lobortis ac nunc ac, tincidunt tristique nulla. Morbi commodo nibh in nunc euismod, non maximus urna bibendum. Etiam ornare consectetur tellus et dapibus. Duis venenatis ligula nisl, id pretium leo vestibulum at. Etiam efficitur ante eu tellus semper scelerisque sit amet ac dui. Vestibulum eu interdum sem, at bibendum urna. In sed fermentum sapien. Nulla facilisi. Vestibulum placerat interdum arcu a euismod. Vestibulum vestibulum velit a nulla commodo sollicitudin. Ut in orci dictum, congue urna quis, pretium risus. Donec iaculis nunc eget ipsum pharetra venenatis. Ut interdum viverra eros eu posuere.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, sapien id elementum mattis, tellus justo pharetra tortor, non molestie quam magna eget erat. Integer pellentesque sit amet nisl ac sodales. Suspendisse a eleifend lacus, eu dapibus purus. Donec eros ex, lobortis ac nunc ac, tincidunt tristique nulla. Morbi commodo nibh in nunc euismod, non maximus urna bibendum. Etiam ornare consectetur tellus et dapibus. Duis venenatis ligula nisl, id pretium leo vestibulum at. Etiam efficitur ante eu tellus semper scelerisque sit amet ac dui. Vestibulum eu interdum sem, at bibendum urna. In sed fermentum sapien. Nulla facilisi. Vestibulum placerat interdum arcu a euismod. Vestibulum vestibulum velit a nulla commodo sollicitudin. Ut in orci dictum, congue urna quis, pretium risus. Donec iaculis nunc eget ipsum pharetra venenatis. Ut interdum viverra eros eu posuere.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, sapien id elementum mattis, tellus justo pharetra tortor, non molestie quam magna eget erat. Integer pellentesque sit amet nisl ac sodales. Suspendisse a eleifend lacus, eu dapibus purus. Donec eros ex, lobortis ac nunc ac, tincidunt tristique nulla. Morbi commodo nibh in nunc euismod, non maximus urna bibendum. Etiam ornare consectetur tellus et dapibus. Duis venenatis ligula nisl, id pretium leo vestibulum at. Etiam efficitur ante eu tellus semper scelerisque sit amet ac dui. Vestibulum eu interdum sem, at bibendum urna. In sed fermentum sapien. Nulla facilisi. Vestibulum placerat interdum arcu a euismod. Vestibulum vestibulum velit a nulla commodo sollicitudin. Ut in orci dictum, congue urna quis, pretium risus. Donec iaculis nunc eget ipsum pharetra venenatis. Ut interdum viverra eros eu posuere.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, sapien id elementum mattis, tellus justo pharetra tortor, non molestie quam magna eget erat. Integer pellentesque sit amet nisl ac sodales. Suspendisse a eleifend lacus, eu dapibus purus. Donec eros ex, lobortis ac nunc ac, tincidunt tristique nulla. Morbi commodo nibh in nunc euismod, non maximus urna bibendum. Etiam ornare consectetur tellus et dapibus. Duis venenatis ligula nisl, id pretium leo vestibulum at. Etiam efficitur ante eu tellus semper scelerisque sit amet ac dui. Vestibulum eu interdum sem, at bibendum urna. In sed fermentum sapien. Nulla facilisi. Vestibulum placerat interdum arcu a euismod. Vestibulum vestibulum velit a nulla commodo sollicitudin. Ut in orci dictum, congue urna quis, pretium risus. Donec iaculis nunc eget ipsum pharetra venenatis. Ut interdum viverra eros eu posuere.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat, sapien id elementum mattis, tellus justo pharetra tortor, non molestie quam magna eget erat. Integer pellentesque sit amet nisl ac sodales. Suspendisse a eleifend lacus, eu dapibus purus. Donec eros ex, lobortis ac nunc ac, tincidunt tristique nulla. Morbi commodo nibh in nunc euismod, non maximus urna bibendum. Etiam ornare consectetur tellus et dapibus. Duis venenatis ligula nisl, id pretium leo vestibulum at. Etiam efficitur ante eu tellus semper scelerisque sit amet ac dui. Vestibulum eu interdum sem, at bibendum urna. In sed fermentum sapien. Nulla facilisi. Vestibulum placerat interdum arcu a euismod. Vestibulum vestibulum velit a nulla commodo sollicitudin. Ut in orci dictum, congue urna quis, pretium risus. Donec iaculis nunc eget ipsum pharetra venenatis. Ut interdum viverra eros eu posuere.</p>
                                <BottomNavigation
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    showLabels
                                    className={classes.root}
                                >
                                    <BottomNavigationAction onClick={ toggleDrawer( true)} label="Recents" icon={<RestoreIcon/>}/>
                                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
                                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
                                </BottomNavigation>
                            </header>

                        </div>

                    </>
                    {/*<Button onClick={toggleDrawer( true)}>{'left'}</Button>*/}
                    <SwipeableDrawer
                        anchor={'left'}
                        open={open}
                        onClose={toggleDrawer( false)}
                        onOpen={toggleDrawer( true)}
                    >
                        {list()}
                    </SwipeableDrawer>
                </React.Fragment>
        </div>


    );
}

export default App;
