import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Pagination } from 'react-bootstrap';
//import TableExtendedRun from './TableExtended.run';

class Items extends React.Component {
    componentDidMount() {
        //TableExtendedRun();
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Items
                    <small>Manage Items</small>
                </h3>
                { /* START panel */ }
                <div className="panel panel-default">
                    <div className="panel-footer">
                        <Row>
                            <Col lg={ 2 }>
                                <div className="input-group">
                                    <input type="text" placeholder="Code Name" className="input-sm form-control" />
                                    <span className="input-group-btn">
                                              <button type="button" className="btn btn-sm btn-default">Search</button>
                                           </span>
                                </div>
                            </Col>
                            <Col lg={ 2 }>
                                <select className="form-control">
                                    <option>All Types</option>
                                </select>
                            </Col>
                            <Col lg={ 2 }>
                                <select className="form-control">
                                    <option>All Categories</option>
                                </select>
                            </Col>
                            <Col lg={5}></Col>
                            <Col lg={ 1 }>
                                <div className="input-group pull-right" style={{textAlign:'right'}}>
                                    <span className="input-group-btn">
                                        <button className="btn btn-sm btn-default btn-primary">New</button>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    { /* START table-responsive */ }
                    <Table id="table-ext-1" responsive bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Category</th>
                                <th>Unit</th>
                                <th>Cost</th>
                                <th>Sales Price</th>
                                <th>File</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>code12341234</td>
                                <td>name1</td>
                                <td>type1</td>
                                <td>category1</td>
                                <td>unit</td>
                                <td>cost1</td>
                                <td>price1</td>
                                <td>
                                   <em className="fa fa-file-archive-o fa-fw"></em>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-sm btn-default">
                                        <em className="fa fa-pencil"></em>
                                    </button>
                                    <button type="button" className="btn btn-sm btn-danger">
                                        <em className="fa fa-trash"></em>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    { /* END table-responsive */ }

                </div>
            </ContentWrapper>
            );
    }

}

export default Items;
