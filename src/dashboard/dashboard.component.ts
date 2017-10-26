import { Component } from "@angular/core";

@Component({
    selector:'dash-comp',
    templateUrl:'./dashboard.component.html'
})
export class DashboardComponent{
    tempContacts;
    tempContact;
    filteredItems;
    contacts =  [
        { "username": "vegeshwar", "contact": +17892345 }, 
        { "username": "vegeshwar2", "contact": +9112384845 }, 
        { "username": "vegeshwar3", "contact": +9134567789 }
    ];
}