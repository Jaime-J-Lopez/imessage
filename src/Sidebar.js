import React from 'react';
import "./Sidebar.css";
import {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { RateReviewOutlined } from "@material-ui/icons";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />
                <div className="sidebar_input">
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>

                <IconButton>
                    <RateReviewOutlined />
                </IconButton>

            </div>

            <div className="class sidebar_chats">

            </div>
        </div>
    );
}

export default Sidebar;
