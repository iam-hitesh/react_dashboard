import React from 'react';
import Select from 'react-select';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { Panel, Row, Col, Dropdown, MenuItem, Tabs, Tab, Table, Button } from 'react-bootstrap';

class Modal1 extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    close(e) {
        e.stopPropagation()
        e.preventDefault()

        this.props.closeHandle()
    }

    render() {
        const {width, showModal, title, height, style} = this.props
        var handleId = Date.now()
        return (
            <div className="custom-modal" style={Object.assign({}, {display: showModal ? 'block' : 'none', zIndex: 1000, top:0, left:0, position:'fixed', width:'100%', height:0, background:'transparent'}, style)}>
                <Draggable
                    handle={'.handle' + handleId}
                    position={null}
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <div className="panel panel-default" style={{ width: width, position: 'relative', height:height?height:'initial', margin:'100px auto' }}>
                        <div className={'panel-heading handle' + handleId} style={{ cursor: 'move' }}>
                            {title}
                            <a className="pull-right" href="#" onClick={this.close.bind(this)}><i className="fa fa-close" style={{fontSize:'16px',color:'#fff'}}></i></a>
                        </div>
                        <div className="panel-body" style={{padding:0,height:'calc(100% - 31px)'}}>
                            {this.props.children}
                        </div>
                    </div>
                </Draggable>
           </div>
        );
    }
}

export default Modal1;