import React from 'react';
import { Router, Route, Link, History, withRouter } from 'react-router-dom';
import pubsub from 'pubsub-js';
import { Collapse } from 'react-bootstrap';
import SidebarRun from './Sidebar.run';

class Sidebar extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            userBlockCollapse: false,
            collapse: {
                dashboard: this.routeActive(['dashboard', 'dashboardv2', 'dashboardv3']),
                widget: this.routeActive('widgets'),
                elements: this.routeActive(['buttons', 'notifications', 'sweetalert', 'tour', 'carousel', 'spinners', 'animations', 'dropdown', 'nestable', 'sortable', 'panels', 'portlet', 'grid', 'grid-masonry', 'typography', 'icons-font', 'icons-weather', 'colors']),
                forms: this.routeActive(['form-standard', 'form-extended', 'form-validation', 'form-wizard', 'form-upload', 'form-xeditable', 'form-cropper']),
                charts: this.routeActive(['chart-flot', 'chart-radial', 'chart-chartjs', 'chart-rickshaw', 'chart-morris', 'chart-chartist']),
                tables: this.routeActive(['table-standard', 'table-extended', 'table-datatable', 'table-jqgrid']),
                maps: this.routeActive(['map-google', 'map-vector']),
                extras: this.routeActive(['mailbox', 'timeline', 'calendar', 'invoice', 'search', 'todo', 'profile','bug-tracker','contact-details','contacts','faq','file-manager','followers','help-center','plans','project-details','projects','settings','social-board','team-viewer','vote-links']),
                blog: this.routeActive(['blog-list', 'blog-post', 'blog-articles', 'blog-article-view']),
                ecommerce: this.routeActive(['ecommerce-orders', 'ecommerce-order-view', 'ecommerce-products', 'ecommerce-product-view', 'ecommerce-checkout']),
                forum: this.routeActive(['forum-categories', 'forum-topics', 'forum-discussion']),
                pages: false
            }
        };
        this.pubsub_token = pubsub.subscribe('toggleUserblock', () => {
            this.setState({
                userBlockCollapse: !this.state.userBlockCollapse
            });
        });
    };

    componentDidMount() {
        // pass navigator to access router api
        SidebarRun(this.navigator.bind(this));
    }

    navigator(route) {
        this.props.history.push(route);
    }

    componentWillUnmount() {
        // React removed me from the DOM, I have to unsubscribe from the pubsub using my token
        pubsub.unsubscribe(this.pubsub_token);
    }

    routeActive(paths) {
        paths = Array.isArray(paths) ? paths : [paths];
        if (paths.indexOf(this.props.location.pathname.replace('/','')) > -1)
            return true;
        return false;
    }

    toggleItemCollapse(stateName) {
        var newCollapseState = {};
        for (let c in this.state.collapse) {
            if (this.state.collapse[c] === true && c !== stateName)
                this.state.collapse[c] = false;
        }
        this.setState({
            collapse: {
                [stateName]: !this.state.collapse[stateName]
            }
        });
    }

    render() {
        return (
            <aside className='aside'>
                { /* START Sidebar (left) */ }
                <div className="aside-inner">
                    <nav className="sidebar">
                        { /* START sidebar nav */ }
                        <ul className="nav">
                            <li className="nav-heading ">
                                <span data-localize="sidebar.heading.HEADER"></span>
                            </li>
                            <li className={ this.routeActive(['dashboard']) ? 'active' : '' }>
                                <Link to="dashboardv1" title="Dashboard">
                                    <em className="icon-speedometer"></em>
                                    <span data-localize="sidebar.nav.WIDGETS">Dashboard</span>
                                </Link>
                            </li>
                            <li className={ this.routeActive('dashboardv3') ? 'active' : '' }>
                                <Link to="dashboardv3" title="Pipeline">
                                    <em className="icon-grid"></em>
                                    <span data-localize="sidebar.nav.WIDGETS">Widgets</span>
                                </Link>
                            </li>
                            <li className="nav-heading ">
                                <span data-localize="sidebar.heading.COMPONENTS">Components</span>
                            </li>
                            <li className={ this.routeActive(['new_design_project']) ? 'active' : '' }>
                                <Link to="new_design_project" title="New Design Project">
                                    <em className="icon-chemistry"></em>
                                    <span data-localize="sidebar.nav.WIDGETS">New Design</span>
                                </Link>
                            </li>
                            <li className={ this.routeActive(['setting']) ? 'active' : '' }>
                                <Link to="setting" title="Setting">
                                    <em className="icon-note"></em>
                                    <span data-localize="sidebar.nav.WIDGETS">Settings</span>
                                </Link>
                            </li>
                            <li className={ this.routeActive(['customer']) ? 'active' : '' }>
                                <Link to="customer" title="Customers">
                                    <em className="icon-note"></em>
                                    <span data-localize="sidebar.nav.WIDGETS">Customer's</span>
                                </Link>
                            </li>
                            <li className={ this.routeActive(['customers']) ? 'active' : '' }>
                                <Link to="customers" title="Customers">
                                    <em className="icon-note"></em>
                                    <span data-localize="sidebar.nav.WIDGETS">Customer</span>
                                </Link>
                            </li>
                        </ul>
                        { /* END sidebar nav */ }
                    </nav>
                </div>
                { /* END Sidebar (left) */ }
            </aside>
        );
    }

}

export default withRouter(Sidebar);

