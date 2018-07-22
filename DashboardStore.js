import { observable, action } from "mobx";

export default class DashboardStore {
    @observable selectedTab;

    constructor() {
        this.reset();
    }

    @action reset() {
        this.selectedTab = "main";
    }

    @action setSelectedTab(tab) {
        this.selectedTab = tab;
    }
}