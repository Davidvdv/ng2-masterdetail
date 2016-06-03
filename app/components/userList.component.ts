import {Component, Output, EventEmitter} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../user";
import {UserDetailComponent} from "./userDetail.component";
import {UserCreationComponent} from "./userCreation.component";
import {Router, Routes} from "@angular/router";

@Component({
    selector: 'user-list',
    templateUrl: './app/templates/userList.component.html',
    directives: [UserDetailComponent, UserCreationComponent],
    providers: [UserService]
})
export class UserListComponent {
    @Output() selectUser = new EventEmitter();
    newUser:User;
    users:Array<User>;
    selectedUser:User;
    selectedRow;

    constructor(private userService:UserService, private router:Router) {
        this.selectedRow = null;
        this.newUser = new User();
        this.users = this.userService.findAll();
    }

    onSelect(user, rowIndex) {
        this.selectedUser = user;
        this.selectedRow = rowIndex;
        this.selectUser.emit(user);
        //this.router.navigate(['/users/'+user.id, user])
    }

    onDelete(user) {
        this.userService.delete(user);
    }
}