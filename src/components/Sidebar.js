// src/components/Sidebar.js

import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FilterAltIcon from '@mui/icons-material/FilterAlt'; // Add import for FilterAltIcon
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <List>

                <ListItem button component={Link} to="/add-task">
                    <ListItemIcon>
                        <AddCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Task" />
                </ListItem>
                <ListItem button component={Link} to="/all-tasks">
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="All Tasks" />
                </ListItem>
                <ListItem button component={Link} to="/sort-filter">
                    <ListItemIcon>
                        <FilterAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sort & Filter" />
                </ListItem>
            </List>
        </div>
    );
};

export default Sidebar;
