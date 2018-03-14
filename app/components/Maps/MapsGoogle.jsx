import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { browserHistory } from 'react-router';
import { Grid, Row, Col, Dropdown, MenuItem, Tabs, Tab } from 'react-bootstrap';


class Confirm extends React.Component{
    render(){
        return(
            <div className="popup">
                <div className="popup_inner">
                    <div id="Channelnew" className="overlayactivitytype col-lg-12">
                        <div className="overlay-content">
                            <div className="row overlay-content-row">
                                <h5><strong>Are you going to cancel this activity?</strong></h5>
                                <a href="javascript:void(0)" className="closebtn pull-right" onClick={this.props.confirmDelClose}>&times;</a>
                            </div>
                            <form>
                                <div className="row overlay-content-row">
                                    <div className="form-group row">
                                        <label for="inputtext" className="col-sm-2 col-form-label">Please note cancel reason here.</label>
                                        <div className="col-sm-12">
                                            <textarea className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <button className="btn btn btn-secondary pull-left" onClick={this.props.confirmDelClose}>Close</button>
                                    </div>
                                    <div className="pull-right">
                                        <button className="btn btn-primary">Confirm</button>
                                    </div>
                                    <p>&nbsp;</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Delete extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            confirmDelClose : false,
        };
    }

    confirmDel(){
        this.setState({
            confirmDelOpen : !this.state.confirmDelOpen,
        });
    }

    render(){
        return(
            <div className="popup">
                <div className="popup_inner">
                    <div id="Channelnew" className="overlayactivitytype col-lg-12">
                        <div className="overlay-content">
                            <div className="row overlay-content-row">
                                <h5><strong>New Activity</strong></h5>
                                <a href="javascript:void(0)" className="closebtn pull-right" onClick={this.props.deleteActClose}>&times;</a>
                            </div>

                                <div className="row overlay-content-row">
                                    <div className="form-group row">
                                        <label for="inputtext" className="col-sm-2 col-form-label">Activity</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="inputtext" placeholder="Meeting" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputtext" className="col-sm-2 col-form-label">Summary</label>
                                        <div className="col-sm-9">
                                            <input type="text" className="form-control" id="inputtext" placeholder="Requirement Defination" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="col-lg-5">
                                            <label for="inputtext" className="col-sm-2 col-form-label">Planned/Due Date</label>
                                            <div className="col-sm-10">
                                                <input type="date" className="form-control" id="datepicker" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1">
                                            <i className="fa fa-calendar"></i>
                                        </div>
                                        <div className="col-lg-5">
                                            <label for="inputtext" className="col-sm-2 col-form-label">End Date/Execute Date</label>
                                            <div className="col-sm-10">
                                                <input type="date" className="form-control" id="datepicker" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-1">
                                            <i className="fa fa-calendar"></i>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputtext" className="col-sm-2 col-form-label">Note</label>
                                        <div className="col-sm-9">
                                            <textarea className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                        <button className="btn btn btn-secondary pull-left" onClick={this.props.deleteActClose}>Close</button>
                                    </div>
                                    <div className="pull-right">
                                        <button className="btn btn-danger" onClick={this.confirmDel.bind(this)}>Cancel</button>
                                        {
                                            this.state.confirmDelOpen ? <Confirm
                                                confirmDelClose = {this.confirmDel.bind(this)}
                                            />
                                                : null
                                        }
                                        <button className="btn btn-primary">Complete</button>
                                        <button className="btn btn-primary">Save</button>
                                    </div>
                                    <p>&nbsp;</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


class MapsGoogle extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            key: 1,
            deleteActClose : false,
            confirmDelClose : false,
        };
    }

    deleteAct(){
        this.setState({
            deleteActOpen : !this.state.deleteActOpen,
        });
    }

    handleSelect(key) {
        this.setState({ key });
    }
    render() {
        return (
            <div className="app">
                <ContentWrapper>
                    <div className="content-heading">
                        Pipeling/New Design Project
                    </div>
                </ContentWrapper>
                <div className="col-lg-10 col-lg-offset-1">
                    <Tabs
                          activeKey={this.state.key}
                          onSelect={this.handleSelect}
                          id="controlled-tab-example"
                    >
                        <Tab eventKey={1} title="Generals">
                            <p className="pull-left">
                                <form>
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio" />NEW
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio" />QUALIFIED
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio" />PROPOSITION
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="optradio" />WON
                                    </label>
                                </form>
                            </p>
                            <div className="pull-right">
                                <button className="btn btn-danger">Delete</button>
                                <button className="btn btn-primary">Save</button>
                            </div>
                            <p>&nbsp;<hr/></p>
                            <form className="form-horizontal" action="/action_page.php">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="control-label col-sm-2">Name:</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="control-label col-sm-2">Expected Revenue:</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control"/>
                                                    <div className="col-sm-1 col-md-1">
                                                        <i className="fa fa-calendar"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="control-label col-sm-2">Probability:</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" />
                                                    <div className="col-sm-1 col-md-1">
                                                        <i className="fa fa-calendar"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="control-label col-sm-2">Customer:</label>
                                                <div className="col-sm-10">
                                                    <input type="date" id="datepicker" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="control-label col-sm-2">Expected Closing:</label>
                                                <div className="col-sm-10">
                                                    <input type="date" id="datepicker" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="control-label col-sm-2">Email:</label>
                                                <div className="col-sm-10">
                                                    <input type="email" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="control-label col-sm-2">Phone:</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="control-label col-sm-2">Salesperson:</label>
                                                <div className="col-sm-10">
                                                    <input type="date" id="datepicker" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="control-label col-sm-2">Priority:</label>
                                                <i className="fa fa-star star"></i><i className="fa fa-star star"></i><i className="fa fa-star-o"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="control-label col-sm-2">Sales Channel:</label>
                                                <div className="col-sm-10">
                                                    <input type="date" id="datepicker" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="control-label col-sm-2">Tags:</label>
                                                <div className="col-sm-10">
                                                    <input type="text" placeholder="<span style=" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="col-lg-8">
                                            <div className="form-group">
                                                <label className="control-label col-sm-2">Note:</label>
                                                <div className="col-sm-10">
                                                    <textarea className="form-control"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Tab>
                        <Tab eventKey={2} title="Activities">
                            <div className="container-fluid" id="">
                                <div className="row title-row">
                                    <div className="form-group">
                                        <b>Today(1)</b>
                                        <button className="btn btn-danger pull-right" onClick={this.deleteAct.bind(this)}>Delete</button>
                                        {
                                            this.state.deleteActOpen ? <Delete
                                                deleteActClose = {this.deleteAct.bind(this)}
                                            />
                                                : null
                                        }
                                    </div>
                                </div>
                                <table className="table ">
                                    <thead className="text-warning">
                                    <th>Activity</th>
                                    <th>Summary</th>
                                    <th>Due Date/Schedule Date</th>

                                    <th className=" text-right"></th>
                                    </thead>
                                    <tbody>

                                    <tr>
                                        <td>Meeting</td>
                                        <td>Requirment Define</td>

                                        <td >2018//03/07 10.00</td>
                                        <td class=" text-right">
                                            <a href="#">
                                                <button type="button" href="" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs">
                                                    <i className="fa fa-check-circle fa-times-circle"></i>
                                                </button>
                                            </a>
                                            <a href="#">
                                                <button type="button" rel="tooltip" title="" className="btn btn-secondary btn-simple btn-xs">
                                                    <i className="fa fa-times-circle"></i>
                                                </button>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="container-fluid">
                                <div className="row title-row">
                                    <div className="form-group">
                                        <b>Planned(2)</b>
                                    </div>
                                </div>
                                <table className="table ">
                                    <thead className="text-warning">
                                    <th>Activity</th>
                                    <th>Summary</th>
                                    <th>Due Date/Schedule Date</th>

                                    <th className=" text-right"></th>
                                    </thead>
                                    <tbody>

                                    <tr>
                                        <td>Metting</td>
                                        <td>Requirment Define</td>

                                        <td >2018//03/07 10.00</td>
                                        <td className=" text-right">
                                            <a href="#">
                                                <button type="button" href="" rel="tooltip" className="btn btn-primary btn-simple btn-xs">
                                                    <i className="fa fa-check-circle fa-times-circle"></i>
                                                </button>
                                            </a>
                                            <a href="#">
                                                <button type="button" rel="tooltip" className="btn btn-secondary btn-simple btn-xs">
                                                    <i className="fa fa-times-circle"></i>
                                                </button>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="container-fluid" id="">
                                <div className="row title-row">
                                    <div className="form-group">
                                        <b>History(3)</b>
                                    </div>
                                </div>
                                <table className="table ">
                                    <thead className="text-warning">
                                    <th>Activity</th>
                                    <th>Summary</th>
                                    <th>Due Date/Schedule Date</th>
                                    <th>Execute/Complete Time</th>

                                    <th>Status</th>
                                    </thead>
                                    <tbody>

                                    <tr>
                                        <td>Metting</td>
                                        <td>Requirment Define</td>
                                        <td >2018//03/07 10.00</td>
                                        <td >2018//03/07 10.00</td>
                                        <td className="">
                                            <a href="#">
                                                <button type="button" href="" rel="tooltip" title="" className="btn btn-primary btn-simple btn-xs">
                                                    <i className="fa fa-check-circle fa-times-circle"></i>
                                                </button>
                                            </a>
                                            <a href="#">
                                                <button type="button" rel="tooltip" title="" className="btn btn-secondary btn-simple btn-xs">
                                                    <i className="fa fa-times-circle"></i>
                                                </button>
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default MapsGoogle;


