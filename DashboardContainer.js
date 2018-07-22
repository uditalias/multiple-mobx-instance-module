import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject(stores => ({
    dashboardStore: stores.dashboardStore
}))
@observer
export default class DashboardContainer extends Component {
    changeSelectedTab = (e) => {
        const { dashboardStore } = this.props;

        dashboardStore.setSelectedTab(e.target.value);
    }
    render() {
        const { dashboardStore } = this.props;

        return (
            <div>
                <h1>Selected tab is: {dashboardStore.selectedTab}</h1>
                <input type="text" onChange={this.changeSelectedTab} />
            </div>
        );
    }
}