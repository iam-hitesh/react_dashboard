import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { browserHistory } from 'react-router';
import { Grid, Row, Col, Dropdown, MenuItem, Tabs, Tab } from 'react-bootstrap';

class MapsVector extends React.Component {
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
                        Customers(6)
                    </div>
                </ContentWrapper>
                <div className="col-lg-10 col-lg-offset-1 white-background">
                    <form>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="inputtext" placeholder="Name,Number" />
                        </div>
                        <div className="col-sm-3">
                            <select className="form-control" id="">
                                <option>All Customers</option>
                                <option>Company</option>
                                <option>Individual</option>
                            </select>
                        </div>
                        <div className="col-sm-2">
                            <label className="container1">Customers
                                <input type="checkbox" />
                                    <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className="col-sm-2">
                            <label className="container1">Vendors
                                <input type="checkbox" />
                                    <span className="checkmark"></span>
                            </label>
                        </div>
                    </form>
                    <div className="pull-right">
                        <button className="btn btn-primary">New</button>
                    </div>
                    <p>&nbsp; <hr /></p>
                    <table className="table table condensed">
                        <thead>
                        <tr  >
                            <th>#</th>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Is Customer</th>
                            <th>Is Vendor</th>
                            <th>Leads</th>
                            <th>Meeting</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>MP0001</td>
                            <td>Company</td>
                            <td>A-Company</td>
                            <td>024515</td>
                            <td>test@abc.com</td>
                            <td>Yes</td>
                            <td>No</td>
                            <th>3</th>
                            <th>1</th>
                            <th> <a href="#">
                                <i className="fa fa-pencil Action-btn" title="edit"></i>
                            </a>
                                <a href="#">
                                    <i className="fa fa-close Action-btn" title="deactivate"></i>
                                </a>
                            </th>
                        </tr>
                        </tbody>
                    </table>
                    <center>
                        <ul className="inline_pagination">
                            <li><a href="#"> &#8826; </a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#"> &#8827; </a></li>
                        </ul>
                    </center>
                </div>
            </div>
        );
    }
}

export default MapsVector;


