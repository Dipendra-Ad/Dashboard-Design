import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { menu } from '../../data'; 
import './menu.css';
import { MenuItem as MenuItemType } from '../../types'; 

const Menu: React.FC = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          {/* <span className="title">{item.title}</span> */}
          <List>
            {item.listItems.map((listItem) => (
              <ListItem
                button
                component={Link}
                to={listItem.url}
                key={listItem.id}
                className="listItem"
              >
                <ListItemIcon>
                  <img src={listItem.icon} alt="" className="icon" />
                </ListItemIcon>
                <ListItemText primary={listItem.title} />
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </div>
  );
};

export default Menu;
