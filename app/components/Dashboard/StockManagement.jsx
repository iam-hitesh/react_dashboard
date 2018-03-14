import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Pagination } from 'react-bootstrap';
//import WarehouseEdit from './WarehouseEdit'


class StockManagement extends React.Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            showWarehouseEdit:false,
            warehouse:{
                code:1000,
                name:"name1",
                address:"address1"
            },
            warehouses:[]
        }
    }
    componentDidMount() {

        var warehouse1={
            code:1000,
            name:"name1",
            address:"address1"
        }
        var warehouse2={
            code:2000,
            name:"name2",
            address:"address2"
        }
        this.state.warehouses.push(warehouse1);
        this.state.warehouses.push(warehouse2);
    }
    closeWarehouseEdit(e){

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
                <h3>Stock Management
                    <small>Manage your Stocks</small>
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
                                <th>Item Code</th>
                                <th>Item Name</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*{*/}
                                {/*this.state.warehouses.map((item, i)=>{*/}
                                    {/*return(*/}
                                        {/*<tr onClick={this.warehouseEditDisplay.bind(this,item)} className="clickable">*/}
                                            {/*<td>1</td>*/}
                                            {/*<td>code12341234</td>*/}
                                            {/*<td>name1</td>*/}
                                            {/*<td>quantity1</td>*/}
                                        {/*</tr>*/}
                                    {/*)*/}
                                {/*})*/}

                            {/*}*/}

                        </tbody>
                    </Table>
                    { /* END table-responsive */ }

                </div>
                {/*<WarehouseEdit*/}
                    {/*showModal={this.state.showWarehouseEdit}*/}
                    {/*closeView = {this.closeWarehouseEdit.bind(this)}*/}
                {/*/>*/}
            </ContentWrapper>
            );
    }

}

export default StockManagement;
