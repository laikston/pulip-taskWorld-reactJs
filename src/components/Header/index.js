import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {
    BELOW_THE_HEADER,
    COLLAPSED_DRAWER,
    FIXED_DRAWER,
    HORIZONTAL_NAVIGATION,
    INSIDE_THE_HEADER
} from 'constants/ActionTypes';
import {switchLanguage, toggleCollapsedNav} from 'actions/Setting';
import Menu from 'components/TopNav/Menu';

class Header extends React.Component {


    constructor() {
        super();
        this.state = {
        }
    }
    onToggleCollapsedNav = (e) => {
        const val = !this.props.navCollapsed;
        this.props.toggleCollapsedNav(val);
    };

    render() {
        const {drawerType, locale, navigationStyle, horizontalNavPosition} = this.props;
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'd-block d-xl-none' : drawerType.includes(COLLAPSED_DRAWER) ? 'd-block' : 'd-none';

        return (
            <AppBar
                className={`app-main-header ${(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === BELOW_THE_HEADER) ? 'app-main-header-top' : ''}`}>
                <Toolbar className="app-toolbar" disableGutters={false}>
                    {navigationStyle === HORIZONTAL_NAVIGATION ?
                    <div className="d-block d-md-none pointer mr-3" onClick={this.onToggleCollapsedNav}>
                    <span className="jr-menu-icon">
                            <span className="menu-icon"/>
                            </span>
                            </div>
                    :
                    <IconButton className={`jr-menu-icon mr-3 ${drawerStyle}`} aria-label="Menu"
                        onClick={this.onToggleCollapsedNav}>
                    <span className="menu-icon"/>
                            </IconButton>
                }

                </Toolbar>
            </AppBar>
        );
    }

}

const mapStateToProps = ({settings}) => {
    const {drawerType, locale, navigationStyle, horizontalNavPosition} = settings;
    return {drawerType, locale, navigationStyle, horizontalNavPosition}
};

export default withRouter(connect(mapStateToProps, {toggleCollapsedNav, switchLanguage})(Header));