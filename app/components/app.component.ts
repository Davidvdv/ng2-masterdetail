import {Component, OnInit} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {UserListComponent} from './userList.component';
import {UserService} from "../services/user.service";
import {UserCreationComponent} from "./userCreation.component";
import {UsersLayout} from "../layouts/users.component";
import {APILayout} from "../layouts/api.component";
import {UserDetailComponent} from "./userDetail.component";

@Component({
    selector: 'master-detail-app',
    templateUrl: './app/templates/app.component.html',
    directives: [UserListComponent, UserCreationComponent, ROUTER_DIRECTIVES],
    providers: [UserService]
})
@Routes([
    { path: '/users', component: UsersLayout },
    { path: '/users/:id', component: UserDetailComponent },
    { path: '/api', component: APILayout }
])
export class AppComponent implements OnInit {
    constructor(private router:Router) {}

    ngOnInit() {
        this.router.navigate(['/users']);
    }
}