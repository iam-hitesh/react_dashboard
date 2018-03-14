import React from 'react';
import ContentWrapper from '../../components/Layout/ContentWrapper';
import { Grid, Row, Col, Dropdown, MenuItem, Tabs, Tab, Table } from 'react-bootstrap';
//import utilService from '../components/Common/utilService'
import StocksTab from './itemTabs/StocksTab';
import GeneralTab from './itemTabs/GeneralTab';

class ItemEdit extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            key: 1,
        };
    }

    componentDidMount() {
        this.ifMounted = true;
        $(document.body).removeClass("offsidebar-open");
    }

    componentWillUnmount() {
        this.ifMounted = false;
        $(document.body).removeClass("offsidebar-open");
    }

    handleSelect(key) {
        this.ifMounted && this.setState({
            key
        });

        $(document.body).removeClass("offsidebar-open");
    }

    renderGeneralTab() {
         if(this.state.key == 1) {
             return (
                 <GeneralTab />
             )
         } else
             return null;
    }

    renderStocksTab() {
         if(this.state.key == 2) {
             return (
                 <StocksTab />
             )
         } else
             return null;
     }
 render() {
        let generalTab = this.renderGeneralTab();
        let stocksTab = this.renderStocksTab();
        return (
            <ContentWrapper>
                <div className="content-heading">
                    {/*{utilService.getLangByCode("system.users.USERS")}*/}
                </div>
                <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)} justified id="tabID">
                    <Tab eventKey={1} title="General">
                        {generalTab}
                    </Tab>
                    <Tab eventKey={2} title="Stocks">
                        {stocksTab}
                    </Tab>
                    <Tab eventKey={3} title="Transfer Requests">
                        {generalTab}
                    </Tab>
                </Tabs>
            </ContentWrapper>
        );
    }
}


export default ItemEdit;
