import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Dropdown, MenuItem, Tabs, Tab } from 'react-bootstrap';
import DashboardRun from './DashboardV3.run';

class DashboardV3 extends React.Component {

    componentDidMount() {
        DashboardRun(
            ReactDom.findDOMNode(this.refs.chartSpline)
        );
    }

    componentWillUnmount() {
        $(this.refs.chartSpline).data('plot').shutdown();
    }

    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    CRM
                </div>
                { /* START widgets box*/ }
                <Row>
                    <Col lg={ 3 } sm={ 6 }>
                        <div className="col-lg-4 dark_green"><i className="fa fa-align-justify fa-4x white_color"></i></div>
                        <div className="col-lg-8 green"><h2>12</h2><p>Vendors</p></div>
                        <p className="black_footer">
                            <span>View Details</span>
                        </p>
                    </Col>
                    <Col lg={ 3 } sm={ 6 }>
                        <div className="col-lg-4 dark_orange"><i className="fa fa-lock fa-4x white_color"></i></div>
                        <div className="col-lg-8 orange"><h2>6</h2><p>Customers</p></div>
                        <p className="black_footer">
                            <span>View Details</span>
                        </p>
                    </Col>
                    <Col lg={ 3 } md={ 6 } sm={ 12 }>
                        <div className="col-lg-4 dark_red"><i className="fa fa-users fa-4x white_color"></i></div>
                        <div className="col-lg-8 red"><h2>12</h2><p>Leads</p></div>
                        <p className="black_footer">
                            <span>View Details</span>
                        </p>
                    </Col>
                    <Col lg={ 3 } md={ 6 } sm={ 12 }>
                        <div className="col-lg-4 dark_purple"><i className="fa fa-globe fa-4x white_color"></i></div>
                        <div className="col-lg-8 purple"><h2>2</h2><p>Today Meetings</p></div>
                        <p className="black_footer">
                            <span>View Details</span>
                        </p>
                    </Col>
                </Row>
                <p>&nbsp;</p>
                <h2>Performance this Month</h2>
                <Row>
                    <Col lg={ 3 }>
                        { /* START loader widget*/ }
                        <div className="panel panel-default">
                            <center><h2>23</h2></center>
                            <p>&nbsp;</p>
                            <center><p>Registered Leads</p></center>
                        </div>
                        { /* END loader widget*/ }
                    </Col>
                    <Col lg={ 3 }>
                        { /* START loader widget*/ }
                        <div className="panel panel-default">
                            <center><h2>94</h2></center>
                            <p>&nbsp;</p>
                            <center><p>Activities Done</p></center>
                        </div>
                        { /* END loader widget*/ }
                    </Col>
                    <Col lg={ 3 }>
                        { /* START loader widget*/ }
                        <div className="panel panel-default">
                            <center><h2>78, 100</h2></center>
                            <p>&nbsp;</p>
                            <center><p>Won in opportunities</p></center>
                        </div>
                        { /* END loader widget*/ }
                    </Col>
                    <Col lg={ 3 }>
                        <div className="panel panel-default">
                            <center><h2>8d 4h</h2></center>
                            <p>&nbsp;</p>
                            <center><p>Average Winning Speed</p></center>
                        </div>
                    </Col>
                </Row>
                { /* END Widgets*/ }
            </ContentWrapper>
            );
    }

}

export default DashboardV3;
