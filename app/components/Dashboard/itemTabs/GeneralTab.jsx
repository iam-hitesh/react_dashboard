import React from 'react';
import { Grid, Row, Col, Dropdown, MenuItem, Tabs, Tab, Table, Pagination, Panel, Button ,DropdownButton} from 'react-bootstrap';
//import auth from '../../components/Common/auth';
//import utilService from '../../components/Common/utilService';

class GeneralTab extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            userList: [],
            locations: [],
            userGroups: [],
            numOfPages: 1,
            activePage: 1,
            activeIndex: -1,
            sortField: "",
            sortDirection: 0,
            selectedUser: {},
            formTitle: "",
            editOption: true //false-create, true-edit
        };

        this.userEditForm = null;
        //this.currentUser = auth.getCurrentUser();
        this.dataTable = null;

    }

    componentDidMount() {
        // $(document.body).removeClass("offsidebar-open");
        // utilService.initLanguage();
        // var lang = utilService.getLanguage();
        // window.Parsley.setLocale(lang == 'en' ? 'en' : 'zh-cn');
        //
        // this.ifMounted = true
        // this.userEditForm = $('form#userEditForm').parsley();
        //
        // this.searchUser(1);

    }

    componentWillUnmount() {
        // this.ifMounted = false;
        // $(document.body).removeClass("offsidebar-open");
    }

    searchUser(page, e) {

        // if (e)
        //     e.preventDefault();
        // var query = this.refs.query.value;
        //
        // if(page)
        // {
        //     query +="&page=" + page;
        // }
        // console.log("Query is .....", query);
        // if (this.state.sortDirection != 0) {
        //     query += "&sort=" + this.state.sortDirection + "&field=" + this.state.sortField
        // }
        //
        // console.log("search user query", query);
        // apiService.userGroup.getUserGroups((err, rets) => {
        //     console.log(err, rets);
        //     console.log("searchUser is comming in.............");
        //     this.ifMounted && this.setState({
        //         userGroups: rets,
        //     })
        //     apiService.user.getUsers(query, CONST.NUM_PER_PAGES * (page - 1), CONST.NUM_PER_PAGES, (error, users) => {
        //         if (error) {
        //             console.log(error);
        //             return;
        //         }
        //         console.log("users is ..............", users);
        //         this.ifMounted && this.setState({
        //             userList: users,
        //             activePage: page,
        //             numOfPages: users.TotalNumberOfPages
        //         })
        //         console.log("this.numOfPages ..............", this.state.numOfPages);
        //     });
        // })
    }

    editUser(user, e) {
        // //console.log(user);
        // if (this.userEditForm == undefined)
        //     this.userEditForm = $('form#userEditForm').parsley();
        // this.userEditForm.reset();
        //
        // this.ifMounted && this.setState({
        //     selectedUser: $.extend(true, {}, user),
        //     editOption: true,
        //     formTitle: utilService.getLangByCode("FormTitle.EDIT_USER")
        // });
        // $(document.body).addClass("offsidebar-open");
    }

    createUser(e) {
        // if (this.userEditForm == undefined)
        //     this.userEditForm = $('form#userEditForm').parsley();
        // this.userEditForm.reset();
        //
        // this.ifMounted && this.setState({
        //     selectedUser: {
        //
        //         Avatar:"",
        //         Username: "",
        //         Password: "",
        //         FirstName: "",
        //         LastName: "",
        //         Email: "",
        //         PhoneNumber: "",
        //         Token: "",
        //         Deleted: 0,
        //         Enabled: true,
        //         IsAdmin: true,
        //
        //     },
        //     editOption: false,
        //     formTitle: utilService.getLangByCode("FormTitle.NEW_USER")
        // });
        // //this.searchLocations(1);
        // $(document.body).addClass("offsidebar-open");
    }

    closeEditForm(e) {
        // e.preventDefault();
        // $(document.body).removeClass("offsidebar-open");
    }

    changeField(field, e) {
        // e.preventDefault();
        // var selectedUser = this.state.selectedUser;
        // selectedUser[field] = e.target.value;
        //
        // this.ifMounted && this.setState({
        //     selectedUser: selectedUser
        // });
    }

    submitForm(e) {
        // e.preventDefault();
        // this.userEditForm.validate();
        // if (this.userEditForm.isValid()) {
        //     console.log(this.state.selectedUser);
        //     if (this.state.editOption) {
        //         apiService.user.updateUser(this.state.selectedUser, (error, ret) => {
        //             if (error) {
        //                 $.notify(utilService.getLangByCode("PopupMsgs.Remote." + error.messageType), "danger");
        //                 return;
        //             }
        //             console.log("Hello, world....users after update..........",ret);
        //             var userList = this.state.userList;
        //
        //             var user = _.find(userList, (o) => {
        //                 return o.UserID == this.state.selectedUser.UserID;
        //             });
        //             console.log(this.state.selectedUser, user)
        //
        //             _.extend(user, this.state.selectedUser);
        //
        //             this.ifMounted && this.setState({
        //                 userList: userList
        //             });
        //
        //             $.notify(utilService.getLangByCode("PopupMsgs.Local.info.USER_UPDATED"), "info");
        //             $(document.body).removeClass("offsidebar-open");
        //         })
        //     } else {
        //         //create user
        //         console.log("Selected User is ..........................", this.state.selectedUser);
        //         apiService.user.createUser(this.state.selectedUser, (error, ret) => {
        //             if (error) {
        //                 console.log('error',utilService.getLangByCode("PopupMsgs.Remote." + error.messageType))
        //                 $.notify(utilService.getLangByCode("PopupMsgs.Remote." + error.messageType), "danger");
        //                 return;
        //             }
        //
        //             this.searchUser(this.state.activePage);
        //
        //             $.notify(utilService.getLangByCode("PopupMsgs.Local.info.USER_CREATED"), "info");
        //             $(document.body).removeClass("offsidebar-open");
        //         })
        //     }
        // }

    }

    deleteUser(e) {

            // e.preventDefault();
            // swal({
            //     title: utilService.getLangByCode('PopupMsgs.Local.info.CONFIRM'),
            //     text: utilService.getLangByCode('PopupMsgs.Local.info.DELETE_ALARM'),
            //     showCancelButton: true,
            //     confirmButtonColor: "#5d9cec",
            //     confirmButtonText: utilService.getLangByCode('common.Confirm'),
            //     cancelButtonText: utilService.getLangByCode('common.Cancel'),
            //     closeOnConfirm: true
            // }, () => {
            //     apiService.user.deleteUser(this.state.selectedUser.UserID, (error, ret) => {
            //         if (error) {
            //             $.notify(utilService.getLangByCode("PopupMsgs.Remote." + error.messageType), "danger");
            //             return;
            //         }
            //
            //         this.searchUser(this.state.activePage);
            //
            //         $.notify(utilService.getLangByCode("PopupMsgs.Local.info.USER_DELETED"), "info");
            //         $(document.body).removeClass("offsidebar-open");
            //     })
            // })


    }

    handlePageSelect(eventKey) {
    }

    sortList(field, direction) {
        // this.state.sortField = field;
        // this.state.sortDirection = direction;
        // this.setState({
        //     sortField: field,
        //     sortDirection: direction
        // })
        // this.searchUser(this.state.activePage);
    }
    uploadImage(event) {

        // event.preventDefault();
        // var files = event.target.files;
        //
        // console.log("selected files are ....", files.length);
        // if(!files || (files && files.length<1))
        //     return
        //
        //
        // var file = files[0];
        // console.log("selected files are ....", files);
        //
        // apiServiceForFiles.file.uploadFile(file,
        //     (returnData)=>{
        //         //console.log("returnData is ",returnData);
        //         this.state.selectedUser.Avatar = returnData.filePath;
        //         console.log("this.state.selectedUser.Avatar ",this.state.selectedUser.Avatar);
        //
        //         this.setState({
        //             selectedUser:this.state.selectedUser
        //         })
        //
        //         console.log("after setting:this.state.selectedUser.Avatar ",this.state.selectedUser.Avatar);
        //     },
        //     'ext',
        //     (max,current)=> {
        //         console.log(max, current);
        //     })


    }
    changeImage(e) {
        // if (e)
        //     e.preventDefault();
        // console.log("changeImage")
        // $('#uploadedImage').trigger('click');
    }
    render() {
        return (
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <Row style={{marginRight:'10'}}>
                                <Col lg={9}></Col>
                                <Col lg={1}>
                                    <Button bsStyle="default">Reset</Button>
                                </Col>
                                <Col lg={1}>
                                    <Button bsStyle="danger">Danger</Button>
                                </Col>
                                <Col lg={1}>
                                    <Button bsStyle="success">Save</Button>
                                </Col>
                            </Row>
                            <Row className="pv-lg">
                                <Col lg={6}>
                                    <form className="form-horizontal">
                                       <Row>
                                           <Col lg={2}>
                                           </Col>
                                           <Col lg={5}>
                                               <div className="checkbox">
                                                   <label>
                                                       <input type="checkbox" />Can be sold</label>
                                               </div>
                                           </Col>
                                           <Col lg={5}>
                                               <div className="checkbox">
                                                   <label>
                                                       <input type="checkbox" />Can be purchased</label>
                                               </div>
                                           </Col>
                                       </Row>
                                       <br />
                                       <div className="form-group">
                                            <label htmlFor="inputContact1" className="col-sm-2 control-label">Code</label>
                                            <div className="col-sm-10">
                                                <input id="inputContact1" type="text" placeholder="" defaultValue="Audrey Hunt" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputContact2" className="col-sm-2 control-label">Name</label>
                                            <div className="col-sm-10">
                                                <input id="inputContact2" type="email" defaultValue="mail@example.com" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputContact3" className="col-sm-2 control-label">Type</label>
                                            <div className="col-sm-10">
                                                <input id="inputContact3" type="text" defaultValue="(123) 465 789" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputContact4" className="col-sm-2 control-label">Category</label>
                                            <div className="col-sm-10">
                                                <input id="inputContact4" type="text" defaultValue="(12) 123 987 465" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputContact5" className="col-sm-2 control-label">Unit</label>
                                            <div className="col-sm-10">
                                                <input id="inputContact5" type="text" defaultValue="http://some.wesbite.com" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputContact6" className="col-sm-2 control-label">Spec</label>
                                            <div className="col-sm-10">
                                                <textarea id="inputContact6" rows="4" className="form-control" defaultValue="Some nice Street, 1234"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputContact7" className="col-sm-2 control-label">Reference(file)</label>
                                            <div className="col-sm-5">
                                                <input id="inputContact7" type="text"  defaultValue="@Social" className="form-control" />
                                            </div>
                                            <div className="col-sm-offset-2 col-sm-3">
                                                <button type="submit" className="btn btn-info">Browse</button>
                                            </div>
                                        </div>
                                    </form>
                                </Col>
                                <Col lg={6}>
                                    <form className="form-horizontal">
                                        <br />
                                        <br />
                                        <div className="form-group">
                                            <label htmlFor="inputContact1" className="col-sm-2 control-label">Cost</label>
                                            <div className="col-sm-10">
                                                <input id="inputContact1" type="text" placeholder="" defaultValue="Audrey Hunt" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputContact2" className="col-sm-2 control-label">Sales Prices</label>
                                            <div className="col-sm-10">
                                                <input id="inputContact2" type="email" defaultValue="mail@example.com" className="form-control" />
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <Row>
                                            <Col lg={6}>
                                                <img src="img/bg3.jpg" alt="" className="img-responsive" />
                                            </Col>
                                            <Col lg={6}>
                                                <img src="img/bg3.jpg" alt="" className="img-responsive" />
                                            </Col>
                                        </Row>
                                     </form>

                                </Col>
                            </Row>
                        </div>
                    </div>
        );
    }
}

export default GeneralTab;
