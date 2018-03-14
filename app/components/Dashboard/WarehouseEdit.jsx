import React from 'react';
import { Panel, Row, Col, Dropdown, MenuItem, Tabs, Tab, Table, Button } from 'react-bootstrap';
//import utilService from '../../components/Common/utilService';
import Modal1 from './Modal1';
//import NumericInput from 'react-numeric-input';
//import resourceApiService from '../../resource/common/apiService';
//import * as CONST from '../../components/Common/constants';

class WarehouseEdit extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {

            prefix:'',
            fromNumAddress:0,
            toNumAddress:0,
            equipments:[],
            selectedEquipment: {},
            showModal: false,
            // formTitle: utilService.getLangByCode("FormTitle.ADDRESS_RANGE_DEFINE")
            formTitle: "Warehouse Edit"
        };
    }

    componentDidMount() {
        //utilService.initLanguage();
        //var lang = utilService.getLanguage();
        //window.Parsley.setLocale(lang == 'en' ? 'en' : 'zh-cn');

        //this.getResources()
        //this.ifMounted = true;
    }

    componentWillReceiveProps(nextProps) {
        this.state.showModal = nextProps.showModal;


        this.ifMounted && this.setState({
            showModal: this.state.showModal,
        });
    }

    componentWillUnmount() {
        this.ifMounted = false;
    }

    getResources() {


    }

    changeField(field, e) {
        e.preventDefault();
        if (field=='prefix') {
            this.state.prefix = e.target.value;
            this.ifMounted && this.setState({
                prefix: this.state.prefix
            });
        }
    }

    changeNumberValue(key, val) {
        //console.log(groupKey, key, e.target.value)
        if (key=='fromNumAddress') {
            this.state.fromNumAddress = val;
            this.ifMounted && this.setState({
                fromNumAddress: this.state.fromNumAddress
            });
        }
        else if (key=='toNumAddress') {
            this.state.toNumAddress = val;
            this.ifMounted && this.setState({
                toNumAddress: this.state.toNumAddress
            });
        }
    }



    closeView(e) {
        if (e)
            e.preventDefault();
        this.props.closeView();
        this.ifMounted && this.setState({
            showModal: false
        })
    }

    getResourceTitle(resource) {
        if (resource.name) {
            var nameStr = resource.name;
            return nameStr + "(" + resource.number + ")"
        }
        return resource.number
    }

    render() {
        return (
            <Modal1 title={"P0001"} width={500} height={500} showModal={this.state.showModal}
                    closeHandle={() => {
                        this.closeView()
                    }}>

                <div className="row mt-30 pl20 pr20">
                    <div className="col-xs-12">
                        <div className="pull-left">
                            Li Xing
                        </div>
                        <div className="pull-right">
                            2012/02/18 10:20
                        </div>
                    </div>
                </div>
                <div className="row mt-10 pl20 pr20">
                    <div className="col-xs-12">
                        <div className="pull-left">
                            Paid
                        </div>
                        <div className="pull-right">
                            Auto Billed
                        </div>
                    </div>
                </div>
                <div className="row mt-10 pl20 pr20">
                    <div className="col-xs-12">
                        <div className="pull-left ">
                            <strong>{4 }Apps</strong>
                        </div>
                        <div className="pull-right">
                            ${160}
                        </div>
                    </div>
                </div>

            </Modal1>
        );
    }
}

export default WarehouseEdit;