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

    constructor(private playerService:UserService) {
        this.newUser = new User();
        this.users = this.playerService.getPlayers();
    }

    onSelect(user) {
        this.selectedUser = user;
    }

    addPlayer(user:User) {
        this.users.push(user);
    }
}