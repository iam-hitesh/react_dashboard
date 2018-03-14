import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { browserHistory } from 'react-router';
import { Grid, Row, Col, Dropdown, MenuItem, Tabs, Tab } from 'react-bootstrap';
import DashboardRun from './DashboardV1.run';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time


class Lead extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            getCreateClose : false,
        };
    }

    getCreate(){
        this.setState({
            getCreateOpen : !this.state.getCreateOpen
        })
    }

    render(){
        return(
            <div className="popup">
                <div className="popup_inner">
                    <div id="Channelnew" className="overlayactivitytype col-lg-12">
                        <div className="overlay-content col-lf-offset-2">
                            <div className="row overlay-content-row">
                                <h5><strong>Create A Lead</strong></h5>
                                <a href="javascript:void(0)" className="closebtn pull-right" onClick={this.props.getLeadClose}>&times;</a>
                            </div>
                            <div className="row overlay-content-row">
                                <div className="form-group row">
                                    <label for="inputtext" className="col-sm-2 col-form-label">Title</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="inputtext" placeholder="New Design Report" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputtext" className="col-sm-2 col-form-label"> Customer </label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="inputtext" placeholder="ABC Company" />
                                    </div>
                                    <div className="col-sm-1 col-md-1">
                                        <i className="fa fa-calendar"></i>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputtext" className="col-sm-2 col-form-label">Expected Revenue($)</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="inputtext" placeholder="13, 000" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputtext" className="col-sm-2 col-form-label">Priority</label>
                                    <div className="col-sm-9">
                                        <i className="fa fa-star star"></i><i className="fa fa-star star"></i><i className="fa fa-star-o"></i>
                                    </div>
                                </div>
                                <p>&nbsp;<hr/></p>
                                <button className="btn btn-secondary pull-left" onClick={this.props.getLeadClose}>Close</button>
                                <button className="btn btn-primary pull-right">Create &amp; Edit</button>
                                <button className="btn btn-primary pull-right" onClick={this.getCreate.bind(this)}>Create</button>
                                {
                                    this.state.getCreateOpen ? <Create
                                        getCreateClose = {this.getCreate.bind(this)}
                                    />
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Stage extends React.Component{
    render(){
        return(
            <div className="popup">
                <div className="popup_inner">
                    <div id="Channelnew" className="overlayactivitytype col-lg-12">
                        <div className="overlay-content col-lf-offset-2">
                            <div className="row overlay-content-row">
                                <h5><strong>Create A Stage</strong></h5>
                                <a href="javascript:void(0)" className="closebtn pull-right" onClick={this.props.getStageClose}>&times;</a>
                            </div>
                            <div className="row overlay-content-row">
                                <div className="form-group row">
                                    <label for="inputtext" className="col-sm-2 col-form-label">Title</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="inputtext" placeholder="Negotiation" />
                                    </div>
                                </div>
                                <p>&nbsp;<hr/></p>
                                <button className="btn btn-secondary pull-left" onClick={this.props.getStageClose}>Close</button>
                                <button className="btn btn-primary pull-right">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Create extends React.Component{
    constructor(props,context){
        super(props,context);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            key : 1,
        };
    }

    handleSelect(key) {
        this.setState({ key });
    }
    render(){
        return(
            <div className="popup">
                <div className="popup_inner">
                    <div id="Channelnew" className="overlayactivitytype col-lg-12">
                        <div className="row overlay-content-row">
                            <h5><strong>Create A Contact</strong></h5>
                            <a href="javascript:void(0)" className="closebtn pull-right" onClick={this.props.getCreateClose}>&times;</a>
                        </div>
                        <Tabs className="tab"
                              activeKey={this.state.key}
                              onSelect={this.handleSelect}
                              id="controlled-tab-example"
                        >
                            <Tab eventKey={1} title="Contact">
                                <div className="">
                                    <div className="form-group row">
                                        <label for="inputtext" className="col-sm-2 col-form-label">Contact Name</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="inputtext" placeholder="New Design Project" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputtext" className="col-sm-2 col-form-label">Title</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="inputtext" placeholder="New Design Project" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputtext" className="col-sm-2 col-form-label">Job Position</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="inputtext" placeholder="New Design Project" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputtext" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="inputtext" placeholder="New Design Project" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputtext" className="col-sm-2 col-form-label">Phone</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="inputtext" placeholder="New Design Project" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputtext" className="col-sm-2 col-form-label">Mobile</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="inputtext" placeholder="New Design Project" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputtext" className="col-sm-2 col-form-label">Notes</label>
                                        <div className="col-sm-6">
                                            <textarea className="form-control" rows="4" id="comment"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey={2} title="Invoice address">
                                <div className="row">
                                    <div className="col-md-10 col-sm-10 col-lg-10">
                                        <div className="row">

                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group row">
                                                    <label for="inputtext" className="col-sm-4 col-form-label">Address</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" className="form-control" id="inputtext" placeholder="Street " />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group row">
                                                    <label for="inputtext" className="col-sm-4 col-form-label">Contact Name</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" className="form-control" id="inputtext" placeholder=" " />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">

                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group row">
                                                    <label for="inputtext" className="col-sm-4 col-form-label"></label>
                                                    <div className="col-sm-6">
                                                        <input type="text" className="form-control" id="inputtext" placeholder="Street2 " />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group row">
                                                    <label for="inputtext" className="col-sm-4 col-form-label">Email</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" className="form-control" id="inputtext" placeholder=" " />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">

                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group row">
                                                    <label for="inputtext" className="col-sm-4 col-form-label"></label>
                                                    <div className="col-sm-6">
                                                        <input type="text" className="form-control" id="inputtext" placeholder="City " />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group row">
                                                    <label for="inputtext" className="col-sm-4 col-form-label">Phone</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" className="form-control" id="inputtext" placeholder=" " />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">

                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group row">
                                                    <label for="inputtext" className="col-sm-4 col-form-label"></label>
                                                    <div className="col-sm-6">
                                                        <input type="text" className="form-control" id="inputtext" placeholder="state " />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group row">
                                                    <label for="inputtext" className="col-sm-4 col-form-label">Mobile</label>
                                                    <div className="col-sm-6">
                                                        <input type="text" className="form-control" id="inputtext" placeholder="State " />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-lg-6">
                                                <div className="row">
                                                    <label for="inputtext" className="col-sm-4 col-form-label"></label>
                                                    <div className="col-md-6 col-lg-6">
                                                        <div className="form-group row">

                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control" id="inputtext" placeholder="ZIP " />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <label for="inputtext" className="col-sm-4 col-form-label"></label>
                                                    <div className="col-md-6 col-lg-6">
                                                        <div className="form-group row">

                                                            <div className="col-sm-6">
                                                                <input type="text" className="form-control" id="inputtext" placeholder=" Country" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <div className="form-group row">
                                                    <label for="inputtext" className="col-sm-4 col-form-label">Notes</label>
                                                    <div className="col-sm-6">
                                                        <textarea className="form-control" rows="5" id="comment"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey={3} title="Leads(3)" disabled>
                                Disabled
                            </Tab>
                        </Tabs>
                        <button className="btn btn-secondary pull-left" onClick={this.props.getCreateClose}>Close</button>
                        <button className="btn btn-primary pull-right">Save & New</button>
                        <button className="btn btn-primary pull-right">Save & Close</button>
                    </div>
                </div>
            </div>
        );
    }
}

class DashboardV1 extends React.Component {
    componentDidMount() {
        DashboardRun(
            ReactDom.findDOMNode(this.refs.chartSpline)
        );
    }

    componentWillUnmount() {
        $(this.refs.chartSpline).data('plot').shutdown();
    }

    constructor(props){
        super(props);
        this.state = {
            getLeadClose : false,
            getStageClose : false,
        };
    }

    getLead(){
        this.setState({
            getLeadOpen : !this.state.getLeadOpen
        })
    }

    getStage(){
        this.setState({
            getStageOpen : !this.state.getStageOpen
        })
    }

    hidden(){
        document.getElementById("delete_box").className = "hidden_delete";
    }
    render() {
        return (
            <div className="app">
                <ContentWrapper>
                    <div className="content-heading">
                        { /* START Language list */ }
                        <div className="pull-right">
                            <button className="btn btn-primary" onClick={this.getLead.bind(this)}>New Lead</button>
                            {
                                this.state.getLeadOpen ? <Lead
                                    getLeadClose = {this.getLead.bind(this)}
                                />
                                    : null
                            }

                            <button className="btn btn-primary" onClick={this.getStage.bind(this)}>New Stage</button>
                            {
                                this.state.getStageOpen ? <Stage
                                    getStageClose = {this.getStage.bind(this)}
                                />
                                    : null
                            }
                        </div>
                        { /* END Language list */ } Pipeline
                    </div>
                </ContentWrapper>
                <div className="r">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-3 well  border del1" id="delete_box">
                                <div className="row">
                                    <strong>New</strong>
                                    <div className="dropdown pull-right">
                                        <a className="pull-right dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="1000" data-close-others="false"><i className="fa fa-gear " ></i></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Edit Stages</a></li>
                                            <li><a onClick={this.hidden.bind(this)}>Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <Draggable>
                                <div className="row">
                                    <div className="container-fluid well well-inner">
                                        <div className="row"><a><strong>New UI Design</strong></a></div>
                                        <div className="row"><a>$13,000,ABC Company</a></div>
                                        <div className="row"><a><strong>2018/02/27</strong></a></div>
                                        <div className="row"><a><i className="fa fa-star star"></i><i className="fa fa-star star"></i>
                                            <i className="fa fa-star-half star"></i></a>
                                            <div className="dropdown " id="dropdown-margin">
                                                <a className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-calendar-check-o calendar " aria-hidden="true"></i></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">3 Activities</a></li>
                                                    <li><a href="#" >Schedule an activity</a></li>
                                                </ul>
                                            </div>
                                            <img src="https://lh3.googleusercontent.com/-HxSAl6WJSI0/WM-dbkQ1ONI/AAAAAAAADuY/RsjaXC3tg4oBozCUYyLr12ZjZ1_Cl91mACJoC/w424-h319-p-rw/sumit.png" className="img-circle pull-right img-margin" width="25px" height="25px"/>
                                        </div>
                                    </div>
                                </div>
                                </Draggable>
                            </div>
                            <Draggable>
                            <div className="col-md-3 well ">
                                <div className="row">
                                    <strong>Qualification</strong>
                                    <a className="pull-right"><strong>$0</strong></a>
                                </div>
                                <div className="row">
                                    <div className="container-fluid well"></div>
                                </div>
                            </div>
                            </Draggable>
                            <div className="col-md-3 well  border">
                                <div className="row">
                                    <strong>Proposition</strong>
                                    <a className="pull-right"><strong>$12000</strong></a>
                                </div>
                                <div className="row box">
                                    <Draggable>
                                    <div className="container-fluid well well-inner">
                                        <div className="row"><a><strong>New UI Design</strong></a></div>
                                        <div className="row"><a>$13,000,ABC Company</a></div>
                                        <div className="row"><a><strong>2018/02/27</strong></a></div>
                                        <div className="row"><a><i className="fa fa-star star"></i>
                                            <i className="fa fa-star star"></i>
                                            <i className="fa fa-star-o"></i>
                                            <div className="dropdown" id="dropdown-margin">
                                                <a className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-calendar-check-o calendar " aria-hidden="true"></i></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">3 Activities</a></li>
                                                    <li><a href="#" >Schedule an activity</a></li>
                                                </ul>
                                            </div>
                                            <img src="https://lh3.googleusercontent.com/-HxSAl6WJSI0/WM-dbkQ1ONI/AAAAAAAADuY/RsjaXC3tg4oBozCUYyLr12ZjZ1_Cl91mACJoC/w424-h319-p-rw/sumit.png" className="img-circle pull-right img-margin" width="25px" height="25px" />
                                        </a>
                                        </div>
                                    </div>
                                    </Draggable>
                                    <Draggable>
                                    <div className="container-fluid well well-inner">
                                        <div className="row"><a><strong>New UI Design</strong></a></div>
                                        <div className="row"><a>$13,000,ABC Company</a></div>
                                        <div className="row"><a><strong>2018/02/27</strong></a></div>
                                        <div className="row"><a><i className="fa fa-star star"></i>
                                            <i className="fa fa-star star"></i>
                                            <i className="fa fa-star-o"></i></a>
                                            <div className="dropdown " id="dropdown-margin">
                                                <a className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-calendar-check-o calendar " aria-hidden="true"></i></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">3 Activities</a></li>
                                                    <li><a href="#" >Schedule an activity</a></li>
                                                </ul>
                                            </div>
                                            <img src="https://lh3.googleusercontent.com/-HxSAl6WJSI0/WM-dbkQ1ONI/AAAAAAAADuY/RsjaXC3tg4oBozCUYyLr12ZjZ1_Cl91mACJoC/w424-h319-p-rw/sumit.png" className="img-circle pull-right img-margin" width="25px" height="25px"/></div>
                                    </div>
                                    </Draggable>
                                    <Draggable>
                                    <div className="container-fluid well well-inner">
                                        <div className="row"><a><strong>New UI Design</strong></a></div>
                                        <div className="row"><a>$13,000,ABC Company</a></div>
                                        <div className="row"><a><strong>2018/02/27</strong></a></div>
                                        <div className="row"><a><i className="fa fa-star star"></i>
                                            <i className="fa fa-star star"></i>
                                            <i className="fa fa-star-o"></i></a>
                                            <div className="dropdown " id="dropdown-margin">
                                                <a className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-calendar-check-o calendar " aria-hidden="true"></i></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">3 Activities</a></li>
                                                    <li><a href="#" >Schedule an activity</a></li>
                                                </ul>
                                            </div>
                                            <img src="https://lh3.googleusercontent.com/-HxSAl6WJSI0/WM-dbkQ1ONI/AAAAAAAADuY/RsjaXC3tg4oBozCUYyLr12ZjZ1_Cl91mACJoC/w424-h319-p-rw/sumit.png" className="img-circle pull-right img-margin" width="25px" height="25px" /></div>
                                    </div>
                                    </Draggable>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 col-sm-3 well " id="tab-won">
                                <div className="row">
                                    <strong>Won</strong>
                                    <p className="pull-right"><strong>$12000</strong></p>
                                </div>
                                <div className="row">
                                    <Draggable>
                                    <div className="container-fluid well well-inner del2">
                                        <div className="row"><a><strong>New UI Design</strong></a>
                                            <div className="dropdown pull-right">
                                                <a className="pull-right dropdown-toggle" data-toggle="dropdown"><i className="fa fa-ellipsis-v" ></i></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Edit</a></li>
                                                    <li><a href="#">Delete</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row"><a>$13,000,ABC Company</a></div>
                                        <div className="row"><a><strong>2018/02/27</strong></a></div>
                                        <div className="row"><a><i className="fa fa-star star"></i>
                                            <i className="fa fa-star star"></i>
                                            <i className="fa fa-star-o"></i></a>
                                            <div className="dropdown " id="dropdown-margin">
                                                <a className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-calendar-check-o calendar " aria-hidden="true"></i></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">3 Activities</a></li>
                                                    <li><a href="#" >Schedule an activity</a></li>
                                                </ul>
                                            </div>
                                            <img src="https://lh3.googleusercontent.com/-HxSAl6WJSI0/WM-dbkQ1ONI/AAAAAAAADuY/RsjaXC3tg4oBozCUYyLr12ZjZ1_Cl91mACJoC/w424-h319-p-rw/sumit.png" className="img-circle pull-right img-margin" width="25px" height="25px" />
                                        </div>
                                    </div>
                                    </Draggable>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
       }
}

export default DashboardV1;
