import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from 'components/Header/index';
import Sidebar from 'containers/SideNav/index';
import {
    ABOVE_THE_HEADER,
    BELOW_THE_HEADER,
    COLLAPSED_DRAWER,
    FIXED_DRAWER,
    HORIZONTAL_NAVIGATION,
} from 'constants/ActionTypes';
import {isIOS, isMobile} from 'react-device-detect';
import asyncComponent from '../util/asyncComponent';
import TopNav from 'components/TopNav';
import * as service from '../app/service/data';
import{ Map, List } from 'immutable';

class App extends React.Component {
    state = {
        data: Map({
            projectList: List([])
        })
    }
    componentDidMount(){
        console.log('app :: componentDidMount ')
        this.getProjectListData();
    }
    getProjectListData = async () => {
        const { data } = this.state;
        const listData = await service.getProjectListData({'memberid':'schemak'});
        this.setState({
            projectListData: data.set('projectList', listData)
        });
        this.props.location.state = {projectList: listData};
    }
    render() {
        const {match, drawerType, navigationStyle, horizontalNavPosition} = this.props;
        const drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'fixed-drawer' : drawerType.includes(COLLAPSED_DRAWER) ? 'collapsible-drawer' : 'mini-drawer';
        //set default height and overflow for iOS mobile Safari 10+ support.
        if (isIOS && isMobile) {
            document.body.classList.add('ios-mobile-view-height')
        }
        else if (document.body.classList.contains('ios-mobile-view-height')) {
            document.body.classList.remove('ios-mobile-view-height')
        }

        console.log(navigationStyle, horizontalNavPosition);
        return (
            <div className={`app-container ${drawerStyle}`}>

                <Sidebar/>
                <div className="app-main-container">
                    <div
                        className={`app-header ${navigationStyle === HORIZONTAL_NAVIGATION ? 'app-header-horizontal' : ''}`}>
                        {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === ABOVE_THE_HEADER) &&
                        <TopNav styleName="app-top-header"/>}
                        <Header/>
                        {(navigationStyle === HORIZONTAL_NAVIGATION && horizontalNavPosition === BELOW_THE_HEADER) &&
                        <TopNav/>}
                    </div>

                    <main className="app-main-content-wrapper">
                        <div className="app-main-content">
                            <Switch>
                                <Route path={`${match.url}/home`} component={asyncComponent(() => import('./routes/Home'))}/> 
                                <Route path={`${match.url}/projects/project-list`} component={asyncComponent(() => import('./routes/Projects/ProjectList'))}/>  
                                
                                <Route path={`${match.url}/projects/project/:projectId`} component={asyncComponent(() => import('./routes/Projects/Project'))}/>                                 
                                <Route component={asyncComponent(() => import('components/Error404'))}/>
                            </Switch>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({settings}) => {
    const {drawerType, navigationStyle, horizontalNavPosition} = settings;
    return {drawerType, navigationStyle, horizontalNavPosition}
};
export default withRouter(connect(mapStateToProps)(App));