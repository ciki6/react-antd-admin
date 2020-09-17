import React from "react";
import { connect } from "react-redux";
import { MenuUnfoldOutlined,MenuFoldOutlined } from "@ant-design/icons";
import { toggleSiderBar } from "@/store/actions";
import "./index.less";
const Hamburger = (props) => {
  const { sidebarCollapsed, toggleSiderBar } = props;
  return (
    <div className="hamburger-container">
        {React.createElement(sidebarCollapsed ? MenuUnfoldOutlined  : MenuFoldOutlined , {
            onClick: toggleSiderBar,
        })}
    </div>
  );
};

export default connect((state) => state.app, { toggleSiderBar })(Hamburger);
