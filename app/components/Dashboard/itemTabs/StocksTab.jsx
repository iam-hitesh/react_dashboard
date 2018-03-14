import React from 'react';
import { Grid, Row, Col, Dropdown, MenuItem, Tabs, Tab, Table, Panel, Pagination, Button } from 'react-bootstrap';
//import apiService from '../common/apiService';
//import utilService from '../../components/Common/utilService';

class StocksTab extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            blockList: [],
            numOfPages: 1,
            activePage: 1,
            blockItem: {}
        };
        this.blockForm = null;
    }

    componentDidMount() {
        // utilService.initLanguage();
        // var lang = utilService.getLanguage();
        // window.Parsley.setLocale(lang == 'en' ? 'en' : 'zh-cn');
        // this.searchBlockList(1);
        //
        // this.ifMounted = true;
        // this.blockForm = $('form#blockForm').parsley();
    }

    componentWillUnmount() {
        this.ifMounted = false;
    }

    deleteIP(block, e) {
        // e.preventDefault();
        // apiService.block.deleteBlockIp(block.id, (error, ret) => {
        //     if (error) {
        //         $.notify(utilService.getLangByCode("PopupMsgs.Remote." + error.messageType), "danger");
        //         return;
        //     }
        //
        //     this.searchBlockList(this.state.activePage)
        //
        //     $.notify(utilService.getLangByCode("PopupMsgs.Local.info.SUCCESS_PROCESS"), "info");
        // })
    }

    searchBlockList(page,e) {
        // if (e)
        //     e.preventDefault();
        // var query = this.refs.query.value;
        // console.log("query", query);
        //
        // if (e)
        //     e.preventDefault();
        // var query = this.refs.query.value;
        //
        // if(page)
        // {
        //     query +="&page=" + page;
        // }
        //
        // apiService.block.getBlockIpList(query,CONST.NUM_PER_PAGES * (page - 1), CONST.NUM_PER_PAGES, (error, blocks) => {
        //     if (error) {
        //         console.log(error);
        //         return;
        //     }
        //     console.log('blockList', blocks)
        //     this.ifMounted && this.setState({
        //         activePage: page,
        //         numOfPages: blocks.TotalNumberOfPages,
        //         blockList: blocks
        //     })
        //     console.log('blockList list is .....................', this.state.blockList)
        // })
    }

    createBlock(e) {
        // //console.log(user);
        // this.ifMounted && this.setState({
        //     blockItem: {
        //
        //         IpAddress: "",
        //         UserAgent: "",
        //         LastAccessTime: "",
        //         TryCount: 5,
        //         Deleted: 0,
        //         Enabled: true
        //     },
        //     formTitle: utilService.getLangByCode("FormTitle.ADD_BLOCK_IP")
        // });
        //
        // $(document.body).addClass("offsidebar-open");
    }

    closeEditForm(e) {
        e.preventDefault();
        $(document.body).removeClass("offsidebar-open");
    }

    changeField(field, e) {
        e.preventDefault();
        var temp = this.state.blockItem;
        temp[field] = e.target.value;
        console.log("blockItem is ......................o")
        this.ifMounted && this.setState({
            blockItem: temp
        });
    }

    submitForm(e) {
        // e.preventDefault();
        //
        // this.blockForm.validate();
        // if (this.blockForm.isValid()) {
        //     //create factory
        //     console.log("this.state.blockItem is.......................",this.state.blockItem);
        //     apiService.block.createBlock(this.state.blockItem, (error, ret) => {
        //         if (error) {
        //             $.notify(utilService.getLangByCode("PopupMsgs.Remote." + error.messageType), "danger");
        //             return;
        //         }
        //
        //         this.searchBlockList(this.state.activePage)
        //
        //         $.notify(utilService.getLangByCode("PopupMsgs.Local.info.BLOCK_IP_ADDED"), "info");
        //         $(document.body).removeClass("offsidebar-open");
        //     })
        // }
    }
    handlePageSelect(eventKey) {
        this.searchBlockList(eventKey);
    }
    render() {
        return (
            <div>
                <Table responsive striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Warehouse Code</th>
                        <th>Warehouse Name</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>L00001</td>
                        <td>Floor A-1</td>
                        <td>20</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default StocksTab;
