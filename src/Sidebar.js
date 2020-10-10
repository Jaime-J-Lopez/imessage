import React from 'react';
import "./Sidebar.css";
import {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { RateReviewOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar className="sidebar_avatar" />
                <div className="sidebar_input">
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>

                <IconButton varient="outlined" className="sidebar_inputButton">
                    <RateReviewOutlined />
                </IconButton>

            </div>

            <div className="class sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    );
}

export default Sidebar;
