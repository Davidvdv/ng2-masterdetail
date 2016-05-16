"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_service_1 = require("./user.service");
var user_1 = require("./user");
var userDetail_component_1 = require("./userDetail.component");
var userCreation_component_1 = require("./userCreation.component");
var UserListComponent = (function () {
    function UserListComponent(playerService) {
        this.playerService = playerService;
        this.newUser = new user_1.User();
        this.users = this.playerService.getPlayers();
    }
    UserListComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    UserListComponent.prototype.addPlayer = function (user) {
        this.users.push(user);
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            templateUrl: './app/templates/userList.component.html',
            directives: [userDetail_component_1.UserDetailComponent, userCreation_component_1.UserCreationComponent],
            providers: [user_service_1.UserService],
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=userList.component.js.map