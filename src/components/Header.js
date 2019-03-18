import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import '../styles/index.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  icon: {
    color: '#b5a33f',
    fontSize: '40px',
    background: '#FFF',
    borderRadius: '20px',
  },
  bar: {
    minHeight: '100px',
  }
};

class Header extends React.Component {
  render() {
    const { classes } = this.props;
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.bar}>
            <Typography variant="h4" color="inherit" align="left" className={classes.grow}>
              Hogwarts School of Witchcraft and Wizardry
            </Typography>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">  
              <Link href='/students' className={classes.link}>
                <OfflineBoltIcon color="action" className={classes.icon}  />
              </Link>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);