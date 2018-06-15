import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

class Project extends React.Component {
    render() {
        console.log('project :: render ');
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="component.Project"/>}/>
                <div className="d-flex justify-content-center">
                    <h1><IntlMessages id="component.Project.description"/></h1>
                </div>
                <div>projectId={this.props.match.params.projectId}</div>
            </div>
        );
    }
}
export default Project;