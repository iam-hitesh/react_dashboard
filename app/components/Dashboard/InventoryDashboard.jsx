import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Dropdown, MenuItem } from 'react-bootstrap';

class InventoryDashboard extends React.Component {



    componentDidMount() {

    }

    componentWillUnmount() {
        $(this.refs.chartSpline).data('plot').shutdown();
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                   Inventory Dashboard
                   <small data-localize="dashboard.WELCOME">Control your inventory</small>
                </div>
                { /* START widgets box */ }
                <Row>
                    <Col lg={ 3 } sm={ 6 }>
                        { /* START widget */ }
                        <div className="panel widget bg-locations">
                            <Row className="row-table">
                                <Col xs={ 4 } className="text-center bg-locations-dark pv-lg">
                                    <em className="icon-cloud-upload fa-3x"></em>
                                </Col>
                                <Col xs={ 8 } className="pv-lg">
                                    <div className="h2 mt0">1700</div>
                                    <div className="text-uppercase">Warehouse</div>
                                </Col>
                            </Row>
                            <div className="text-left bg-primary-dark pv-lg dash-footer pl-20 height-30" >
                                <div className="mt-n11">View details</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={ 3 } sm={ 6 }>
                        { /* START widget */ }
                        <div className="panel widget bg-items">
                            <Row className="row-table">
                                <Col xs={ 4 } className="text-center bg-items-dark pv-lg">
                                    <em className="icon-cloud-upload fa-3x"></em>
                                </Col>
                                <Col xs={ 8 } className="pv-lg">
                                    <div className="h2 mt0">1700</div>
                                    <div className="text-uppercase">Items</div>
                                </Col>
                            </Row>
                            <div className="text-left bg-primary-dark pv-lg dash-footer pl-20 height-30" >
                                <div className="mt-n11">View details</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={ 3 } sm={ 6 }>
                        { /* START widget */ }
                        <div className="panel widget bg-transfers">
                            <Row className="row-table">
                                <Col xs={ 4 } className="text-center bg-transfers-dark pv-lg">
                                    <em className="icon-cloud-upload fa-3x"></em>
                                </Col>
                                <Col xs={ 8 } className="pv-lg">
                                    <div className="h2 mt0">1700</div>
                                    <div className="text-uppercase">Transfer Request</div>
                                </Col>
                            </Row>
                            <div className="text-left bg-primary-dark pv-lg dash-footer pl-20 height-30" >
                                <div className="mt-n11">View details</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={ 3 } sm={ 6 }>
                        { /* START widget */ }
                        <div className="panel widget bg-pic">
                            <Row className="row-table">
                                <Col xs={ 4 } className="text-center bg-pic-dark pv-lg">
                                    <em className="icon-cloud-upload fa-3x"></em>
                                </Col>
                                <Col xs={ 8 } className="pv-lg">
                                    <div className="h2 mt0">1700</div>
                                    <div className="text-uppercase">Persons in charge</div>
                                </Col>
                            </Row>
                            <div className="text-left bg-primary-dark pv-lg dash-footer pl-20 height-30" >
                                <div className="mt-n11">View details</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                { /* END widgets box */ }

            </ContentWrapper>
            );

    }

}

export default InventoryDashboard;
