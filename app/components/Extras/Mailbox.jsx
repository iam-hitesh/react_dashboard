import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { browserHistory } from 'react-router';
import { Grid, Row, Col, Dropdown, MenuItem, Tabs, Tab } from 'react-bootstrap';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time


class NewChannel extends React.Component{
    render(){
        return(
            <div className="popup">
                <div className="popup_inner">
                    <div id="Channelnew" className="overlayactivitytype col-lg-12">
                        <div className="overlay-content col-lf-offset-2">
                            <div className="row overlay-content-row">
                                <h5><strong>New Sales Channel</strong></h5>
                                <a href="javascript:void(0)" className="closebtn pull-right" onClick={this.props.newChannelClose}>&times;</a>
                            </div>
                            <div className="row overlay-content-row">
                                <div className="form-group row">
                                    <label for="inputtext" className="col-sm-2 col-form-label">Name</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="inputtext" placeholder="Direct Sales" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputtext" className="col-sm-2 col-form-label">Channel Leader</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="inputtext" placeholder="Zang Wei" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="inputtext" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" id="inputtext" placeholder="test@abc.com" />
                                    </div>
                                </div>
                                <p>&nbsp;<hr/></p>
                                <button className="btn btn-secondary pull-left" onClick={this.props.newChannelClose}>Close</button>
                                <button className="btn btn-primary pull-right">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


class Mailbox extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            key: 1,
            newChannelClose : false,
        };
    }
    handleSelect(key) {
        this.setState({ key });
    }
    closebtn(){
        document.getElementById('Channelnew').className = 'hidden';
    }
    newChannel(){
        this.setState({
            newChannelOpen : !this.state.newChannelOpen
        });
    }
    render() {
        return (
            <div className="app">
                <ContentWrapper>
                    <div className="content-heading">
                        Setting
                    </div>
                </ContentWrapper>
                <div className="col-lg-10 col-lg-offset-1">
                    <Tabs className="button tab"
                          activeKey={this.state.key}
                          onSelect={this.handleSelect}
                          id="controlled-tab-example"
                    >
                        <Tab eventKey={1} title="Generals">
                            <div className="pull-right">
                                <button className="btn btn-primary" onClick={this.newChannel.bind(this)}>New Channel</button>
                                {
                                    this.state.newChannelOpen ? <NewChannel
                                        newChannelClose = {this.newChannel.bind(this)}
                                    />
                                        : null
                                }
                            </div>
                            <p>&nbsp;</p>
                            <table className="table table-condensed">
                                <thead>
                                <tr>
                                    <th>Sales Channels Name</th>
                                    <th>Channel Leader</th>
                                    <th>Action</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Direct Sales</td>
                                    <td>Zang</td>

                                    <td>
                                        <a href="#">
                                            <i className="fa fa-close" title="deactivate"></i>
                                        </a>
                                    </td>

                                </tr>
                                </tbody>
                            </table>
                        </Tab>
                        <Tab eventKey={2} title="Activities">
                            <div className="pull-right">
                                <button className="btn btn-primary">Save</button>
                            </div>
                            <p>&nbsp;</p>
                            <table className="table table-condensed">
                                <thead>
                                <tr>
                                    <th>Sales Channels Name</th>
                                    <th>Channel Leader</th>
                                    <th>Action</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Direct Sales</td>
                                    <td>Zang</td>

                                    <td>
                                        <a href="#">
                                            <i className="fa fa-close" title="deactivate"></i>
                                        </a>
                                    </td>

                                </tr>
                                </tbody>
                            </table>
                            <Draggable>
                                <div id="Channelnew" className="overlayactivitytype  col-md-offset-2 col-md-8">
                                    <div className="overlay-content">
                                        <div className="row overlay-content-row">
                                            <h5><strong>New Activity Type</strong></h5>
                                            <a href="javascript:void(0)" className="closebtn pull-right" onClick={this.closebtn.bind(this)}>&times;</a>
                                        </div>
                                        <div className="row overlay-content-row">
                                                <div className="form-group row">
                                                    <label for="inputtext" className="col-sm-2 col-form-label">Name</label>
                                                    <div className="col-sm-9">
                                                        <input type="text" className="form-control" id="inputtext" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label for="inputtext" className="col-sm-2 col-form-label">Summery</label>
                                                    <div className="col-sm-9">
                                                        <textarea className="form-control" rows="5" id="comment"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-10 col-lg-offset-1">
                                                    <button className="btn btn-danger pull-left"  onClick={this.closebtn.bind(this)}>Close</button>
                                                    <button className="btn btn-primary pull-right">Save</button>
                                                </div>
                                                <p>&nbsp;</p>
                                        </div>
                                    </div>
                                </div>
                            </Draggable>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Mailbox;


