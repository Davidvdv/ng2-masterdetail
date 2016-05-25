import {Component} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./user";
import {UserDetailComponent} from "./userDetail.component";
import {UserCreationComponent} from "./userCreation.component";

@Component({
    selector: 'user-list',
    templateUrl: './app/templates/userList.component.html',
    directives: [UserDetailComponent, UserCreationComponent],
    providers: [UserService],
})
export class UserListComponent {
    newUser:User;
    users:Array<User>;
    selectedUser:User;
    selectedRow;

    constructor(private userService:UserService) {
        this.selectedRow = null;
        this.newUser = new User();
        this.users = this.userService.findAll();
    }

    onSelect(user, rowIndex) {
        this.selectedUser = user;
        this.selectedRow = rowIndex;
    }

    onDelete(user) {
        this.userService.delete(user);
    }
}