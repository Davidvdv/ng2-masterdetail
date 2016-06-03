import {Component} from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {UserListComponent} from "../components/userList.component";
import {UserCreationComponent} from "../components/userCreation.component";
import {UserDetailComponent} from "../components/userDetail.component";
import {User} from "../user";

@Component({
    selector: 'users',
    templateUrl: './app/templates/users.component.html',
    directives: [UserListComponent, UserCreationComponent, UserDetailComponent, ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/:id', component: UserDetailComponent}
])
export class UsersLayout {
    currentUser:User;
    
    selectUser(user:User) {
        this.currentUser = user;
    }
}