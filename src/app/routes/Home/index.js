import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

class Home extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title={<IntlMessages id="component.Home"/>}/>
                
                <div className="d-flex justify-content-center">
                    <h1><IntlMessages id="component.Home.description"/></h1>
                </div>
            </div>
        );
    }
}

export default Home;