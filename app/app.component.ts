import {Component} from '@angular/core';
import {UserListComponent} from './userList.component';
import {UserService} from "./user.service";
import {UserCreationComponent} from "./userCreation.component";

@Component({
    selector: 'master-detail-app',
    templateUrl: './app/templates/app.component.html',
    directives: [UserListComponent, UserCreationComponent],
    providers: [UserService]
})
export class AppComponent { }