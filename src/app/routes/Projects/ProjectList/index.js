
import React from 'react';
import { NavLink } from 'react-router-dom';
import queryString from 'query-string';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import ProjectInfo from '../ProjectInfo/index';
class ProjectList extends React.Component {    
    state = {
        list: []
    };   
    componentDidMount(){
        console.log('projectList :: componentDidMount ');
        
        if(this.props.location.state != undefined){
            this.setState({
                list: this.props.location.state.projectList
            })
        }
        // console.log('projectlist :: ', this.props.location.state.projectList);
    }
    renderProjectList = (() => {
        let tag;
        tag = this.state.list.map((_list, index) => {
            //<NavLink to={`${this.props.match.url}?project-info=${list.projectid}`} style={{color: 'red'}}>projectInfo</NavLink> <a href="javascript:;" onClick={this.handler} style={{color: 'red'}}>projectInfo</a>
            return <div key={_list.projectid}><NavLink to={`/app/projects/${_list.projectid}`} style={{color: 'green'}}>{_list.projectname}</NavLink><br/><NavLink to={`${this.props.match.url}?project-info=${_list.projectid}`} style={{color: 'red'}}>projectInfo</NavLink></div>;
        });
        return tag;             
    });  
    handler = (e, id) => {        
        console.log(e);
        console.log(e.target);
        // this.props.history.push(this.props.match.url+'?project-info='+id);
        e.preventDefault();
    }
    render() {
        const { match, location, history } = this.props;
        const openProjectInfo = queryString.parse(location.search)['project-info'] != undefined;
        console.log('projectList :: render :: state가 바뀜 ', this.state);
        return (
            <div className="app-wrapper">
                <ContainerHeader match={match} title={<IntlMessages id="component.ProjectList"/>}/>
                <div className="d-flex justify-content-center">
                    <h1><IntlMessages id="component.ProjectList.description"/></h1>
                </div>   
                <div>
                    {this.state.list ? this.renderProjectList() : 'loading...'}
                </div>
                {(openProjectInfo == true) ? <ProjectInfo></ProjectInfo> : <div></div>}
            </div>
        );
    }
}
export default ProjectList;