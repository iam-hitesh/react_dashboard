import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Pagination } from 'react-bootstrap';
import WarehouseEdit from './WarehouseEdit'


class WarehouseManagement extends React.Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            showWarehouseEdit:false,
            warehouse:{
                id:1,
                code:1000,
                name:"name1",
                address:"address1",
                responsible:"responsible1",
                createdAt:"createdAt",
                updatedAt:"updatedAt",
            },
            warehouses:[]
        }
    }
    componentDidMount() {

        var warehouse1={
            id:1,
            code:1000,
            name:"name1",
            address:"address1",
            responsible:"responsible1",
            createdAt:"createdAt",
            updatedAt:"updatedAt",
        }
        var warehouse2={
            id:3,
            code:2000,
            name:"name2",
            address:"address2",
            responsible:"responsible2",
            createdAt:"createdAt2",
            updatedAt:"updatedAt2",
        }
        this.state.warehouses.push(warehouse1);
        this.state.warehouses.push(warehouse2);
        this.setState({
            warehouses:this.state.warehouses
        })
        this.ifMounted = true
    }
    closeWarehouseEdit(e){
        this.ifMounted && this.setState({
            showWarehouseEdit:false
        })
    }
    warehouseEditDisplay(item,e)
    {

        this.setState({
            showWarehouseEdit:true
        })
    }
    render() {
        return (
            <ContentWrapper>
                <h3>Warehouse Management
                    <small>Manage your warehouses</small>
                </h3>
                { /* START panel */ }
                <div className="panel panel-default">
                    <div className="panel-footer">
                        <Row>
                            <Col lg={ 2 }>
                                <select className="form-control" placeholder="Locations">
                                    <option>Location1</option>
                                    <option>Location2</option>
                                </select>
                            </Col>
                            <Col lg={ 2 }>
                                <div className="input-group">
                                    <input type="text" placeholder="Code Name" className="input-sm form-control" />
                                    <span className="input-group-btn">
                                              <button type="button" className="btn btn-sm btn-default">Search</button>
                                           </span>
                                </div>
                            </Col>

                            <Col lg={7}></Col>
                            <Col lg={ 1 } style={{textAlign:'right'}}>
                                <div className="input-group pull-right" style={{textAlign:'right'}}>
                                    <span className="input-group-btn">
                                        <button className="btn btn-sm btn-default btn-primary">Stock In</button>
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    { /* START table-responsive */ }
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Responsible</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.warehouses.map((item,i)=>{
                                    return(
                                    <tr onClick={this.warehouseEditDisplay.bind(this,item)} className="clickable">
                                        <td>{item.id}</td>
                                        <td>{item.code}</td>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.responsible}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.updatedAt}</td>
                                    </tr>
                                    )
                                })

                            }
                        </tbody>
                    </Table>
                    { /* END table-responsive */ }

                </div>
                <WarehouseEdit
                    warehouses={this.state.warehouses}
                    showModal={this.state.showWarehouseEdit}
                    closeView = {this.closeWarehouseEdit.bind(this)}
                />
            </ContentWrapper>
            );
    }

}

export default WarehouseManagement;
