import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { browserHistory } from 'react-router';
import { Grid, Row, Col, Dropdown, MenuItem, Tabs, Tab } from 'react-bootstrap';

class DashboardV2 extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            key: 1
        };
    }

    handleSelect(key) {
        this.setState({ key });
    }
    render() {
        return (
            <div className="app">
                <ContentWrapper>
                    <div className="content-heading">
                        Customers/A-Company
                    </div>
                </ContentWrapper>
                <div className="col-lg-10 col-lg-offset-1">
                    <Tabs className="button tab"
                        activeKey={this.state.key}
                        onSelect={this.handleSelect}
                        id="controlled-tab-example"
                    >
                        <Tab eventKey={1} title="General">
                            <div className="row">
                                <div className="col-md-10 col-sm-10 col-lg-10">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-6">
                                            <div className="form-group row">
                                                <div className="col-sm-4">
                                                    <label className="radio-inline">
                                                        <input type="radio" name="optradio" />individual
                                                    </label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="radio-inline">
                                                        <input type="radio" name="optradio" />Company
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-lg-5">
                                            <div className="col-sm-6">
                                                <label className="container1">IsCustomers
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                            <div className="col-sm-6">
                                                <label className="container1">Is Vendors
                                                    <input type="checkbox" />
                                                    <span className="checkmark"></span>

                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="form-group row">
                                            <label for="inputtext" className="col-sm-4 col-form-label">Name</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="inputtext" placeholder="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12">
                                            <div className="form-group row">
                                                <label for="inputtext" className="col-sm-2 col-md-2 col-form-label">Address</label>
                                                <div className="col-sm-4 col-md-4">
                                                    <input type="text" className="form-control" id="inputtext" placeholder=" Street" />
                                                </div>
                                                <div className="col-sm-4 col-md-4">
                                                    <input type="text" className="form-control" id="inputtext" placeholder="Street2" />
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">

                                        <div className="col-md-12 col-lg-12">
                                            <div className="form-group row">
                                                <label for="inputtext" className="col-sm-2 col-md-2 col-form-label"></label>
                                                <div className="col-sm-4 col-md-4">
                                                    <input type="text" className="form-control" id="inputtext" placeholder=" Street" />
                                                </div>
                                                <div className="col-sm-4 col-md-4">
                                                    <input type="text" className="form-control" id="inputtext" placeholder="Street2" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12">
                                            <div className="form-group row">
                                                <label for="inputtext" className="col-sm-2 col-md-2 col-form-label"></label>
                                                <div className="col-sm-4 col-md-4">
                                                    <input type="text" className="form-control" id="inputtext" placeholder=" Street" />
                                                </div>
                                                <div className="col-sm-4 col-md-4">
                                                    <input type="text" className="form-control" id="inputtext" placeholder="Street2" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-md-6 col-lg-6">
                                            <div className="form-group row">
                                                <label for="inputtext" className="col-sm-4 col-form-label">Email</label>
                                                <div className="col-sm-8 col-md-8">
                                                    <input type="text" className="form-control" id="inputtext" placeholder=" "/>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="form-group row">
                                                <label for="inputtext" className="col-sm-4 col-form-label">Phone</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" id="inputtext" placeholder=" "/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="row">

                                        <div className="col-md-6 col-lg-6">
                                            <div className="form-group row">
                                                <label for="inputtext" className="col-sm-4 col-form-label">Website</label>
                                                <div className="col-sm-8 col-md-8">
                                                    <input type="text" className="form-control" id="inputtext" placeholder=" "/>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6">
                                            <div className="form-group row">
                                                <label for="inputtext" className="col-sm-4 col-form-label">Mobile</label>
                                                <div className="col-sm-8">
                                                    <input type="text" className="form-control" id="inputtext" placeholder=" "/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-md-6 col-lg-6">
                                            <div className="form-group row">
                                                <label for="inputtext" className="col-sm-4 col-form-label">Language</label>
                                                <div className="col-sm-8 col-md-8">
                                                    <input type="text" className="form-control" id="inputtext" placeholder=" "/>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12">
                                            <div className="form-group row">
                                                <label for="inputtext" className="col-sm-2 col-form-label">Notes</label>
                                                <div className="col-sm-10">
                                                    <textarea className="form-control" rows="4" id="comment"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-2 col-lg-2">

                                    <div class="panel panel-default">
                                        <div class="panel-body text-center upload_pic"></div>
                                    </div>

                                    <div class="row text-center text-primary">Upload</div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey={2} title="Contacts(4)">
                            <button className="pull-right btn btn-info">New Contact</button>
                            <p>&nbsp;</p>
                            <table className="table table-condensed">
                                <thead>
                                <tr>
                                    <th>Contact Name</th>
                                    <th>Title</th>
                                    <th>job Position</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Mobile</th>
                                    <th class=" pull-right"> </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Li YaPing</td>
                                    <td>Mr</td>
                                    <td>Sales Director</td>
                                    <td>yping1982@qq.com</td>
                                    <td>(086)123213413</td>
                                    <td>(086)3243435232</td>
                                    <td>*</td>
                                </tr>
                                </tbody>
                            </table>
                        </Tab>
                        <Tab eventKey={3} title="Leads(3)">
                            <table className="table table-condensed">
                                <thead>
                                <tr>
                                    <th>Create Date</th>
                                    <th>Title</th>
                                    <th>Expected Revenue</th>
                                    <th>Priority</th>
                                    <th>Stage</th>
                                    <th>Probality</th>
                                    <th>Sales Channel</th>
                                    <th>Sales Person</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>2018/03/01 10.00</td>
                                    <td>Design Task</td>
                                    <td>$10,000</td>
                                    <td>High </td>
                                    <td>New</td>
                                    <td>50%</td>
                                    <td>Direct Sales</td>
                                    <td>Li Xing</td>
                                </tr>
                                </tbody>
                            </table>
                        </Tab>
                        <Tab eventKey={4} title="Sales(13)" disabled>
                            Tab 4 content
                        </Tab>
                        <Tab eventKey={5} title="Purchases(3)" disabled>
                            Tab 5 content
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default DashboardV2;
