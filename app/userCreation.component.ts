import {Component} from '@angular/core';
import {UserService} from "./user.service";
import {User} from "./user";

@Component({
    selector: 'user-creation',
    templateUrl: './app/templates/userCreation.component.html',
})
export class UserCreationComponent {
    newUser;
    
    constructor(private userService:UserService) {
        this.newUser = new User();
    }

    onSubmit() {
        this.userService.create(this.newUser);
    }
}