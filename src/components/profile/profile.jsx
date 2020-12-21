import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';


import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Fab from '@material-ui/core/Fab';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import DeleteIcon from '@material-ui/icons/Delete';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FavoriteIcon from '@material-ui/icons/Favorite';

import EditIcon from '@material-ui/icons/Edit';



const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    
    margin:"24px",
    marginRight:"12px",
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "blueGrey",
    width:'80px',
    height:'80px',
    textAlign:'center'
  },
  addUser:{
    position:'fixed',
    bottom:"50px",
    right:"50px"
  }

}));




export default function Profile(props) {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  
   console.log(props)


  return (
      <div style={{display:'flex',flexWrap:"wrap"}} className="profile__wrapper">
      {
        props.users.map(item=>{
          return(
            <Card key={item.id} className={classes.root}>
      <CardHeader 
        avatar={
          <Avatar aria-label="recipe" src="/broken-image.jpg"  className={classes.avatar}>
            
          </Avatar>
        }
        
        
      />
      
      <CardContent
      
      >
        
      
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary={`${item.first_name} ${item.last_name}`} />
      </ListItem>
      
      <ListItem button>
        <ListItemIcon>
          <AlternateEmailIcon  />
        </ListItemIcon>
        <ListItemText primary={item.email} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <VerifiedUserIcon />
        </ListItemIcon>
        <ListItemText primary={item.username} />
      </ListItem>
      
     
      <BottomNavigation
  // value={value}
  // onChange={(event, newValue) => {
  //   setValue(newValue);
  // }}
  showLabels
  className="card__edit-btn"
>
  
  <BottomNavigationAction label="Изменить" icon={<EditIcon />} />
  <BottomNavigationAction  label="Удалить" icon={<DeleteIcon />} />
  {/* onClick={()=>props.deleteUser({current_password:"makarov123"})} */}
</BottomNavigation>
      </CardContent>
      
    </Card>

          )
        })
      }


    

    
    
    {props.getMe.is_staff && <Fab onClick={()=>props.modalCreateUser()} className={classes.addUser} color="primary" aria-label="add">
  <PersonAddIcon />
    </Fab>}
    </div>
  );
}
