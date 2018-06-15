import React from 'react';
import { NavLink } from 'react-router-dom';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
class ProjectInfo extends React.Component {    
    
    render() {
        return (
            <div className="app-wrapper">
                {/* <ContainerHeader match={match} title={<IntlMessages id="component.ProjectList"/>}/> */}
                {/* <div className="d-flex justify-content-center">
                    <h1><IntlMessages id="component.ProjectList.description"/></h1>
                </div>    */}
                <div>
                ProjectInfo
                </div>
            </div>
        );
    }
}
export default ProjectInfo;