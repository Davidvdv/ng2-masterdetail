import {Component, Input} from '@angular/core';
import {User} from "../user";

@Component({
    selector: 'user-detail',
    templateUrl: './app/templates/userDetail.component.html',
    inputs: ['user']
})
export class UserDetailComponent {
    @Input() user:User;
}