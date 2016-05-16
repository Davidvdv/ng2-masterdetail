import {Component} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./user";

@Component({
    selector: 'user-creation',
    templateUrl: './app/templates/userCreation.component.html',
    outputs: ['created']
})
export class UserCreationComponent {
    newUser;
    
    constructor(private userService:UserService) {
        this.newUser = new User(21);
    }

    onSubmit() {
        this.userService.createPlayer(this.newUser);
    }
}