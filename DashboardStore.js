import { observable, action } from "mobx";

export default class DashboardStore {
    @observable
    selectedTab = "main";

    @action
    setSelectedTab(tab) {
        this.selectedTab = tab;
    }
}