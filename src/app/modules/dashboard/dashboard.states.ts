import { Ng2StateDeclaration } from "@uirouter/angular";
import { DashboardComponent } from "./views/dashboard.component";


export const DashboardState: Ng2StateDeclaration = {
    name: 'dashboard',
    url: '/',
    component: DashboardComponent
};

export const STATES = [DashboardState]