import React,{forwardRef } from 'react'
import { Button, ListItem, makeStyles, colors } from '@material-ui/core'
import { Label } from '@material-ui/icons';
import { NavLink as RouterLink } from 'react-router-dom';

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const useStyles = makeStyles(theme => ({
    item: {
      display: 'block',
      paddingTop: 0,
      paddingBottom: 0
    },
    itemLeaf: {
      display: 'flex',
      paddingTop: 0,
      paddingBottom: 0
    },
    button: {
      color: colors.blueGrey[800],
      padding: '10px 8px',
      justifyContent: 'flex-start',
      textTransform: 'none',
      letterSpacing: 0,
      width: '100%'
    },
    buttonLeaf: {
      color: colors.blueGrey[800],
      padding: '10px 8px',
      justifyContent: 'flex-start',
      textTransform: 'none',
      letterSpacing: 0,
      width: '100%',
      fontWeight: theme.typography.fontWeightRegular,
      '&.depth-0': {
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    icon: {
      color: theme.palette.icon,
      display: 'flex',
      alignItems: 'center',
      marginRight: theme.spacing(1)
    },
    expandIcon: {
      marginLeft: 'auto',
      height: 16,
      width: 16
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto'
    },
    active: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      '& $icon': {
        color: theme.palette.primary.main
      }
    }
  }));

function ListMenu({title,Icon,isActive,href,rest}) {
    const classes = useStyles();
    return (
    <ListItem
        {...rest}
        className={classes.itemLeaf}
        disableGutters
      >
        <Button
          activeClassName={classes.active}
          className={classes.buttonLeaf}
          component={CustomRouterLink}
          exact
          to={href}
        >
          {Icon && <Icon className={classes.icon} />}
          {title}
        </Button>
      </ListItem>
    )
}

export default ListMenu