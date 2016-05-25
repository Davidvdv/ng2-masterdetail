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
var UserService = (function () {
    function UserService() {
        this.users = [{ "id": 1, "gender": "Female", "firstName": "Jacqueline", "lastName": "Robertson", "email": "jrobertson0@dion.ne.jp" },
            { "id": 2, "gender": "Male", "firstName": "Jimmy", "lastName": "Crawford", "email": "jcrawford1@bluehost.com" },
            { "id": 3, "gender": "Female", "firstName": "Kathryn", "lastName": "Mendoza", "email": "kmendoza2@de.vu" },
            { "id": 4, "gender": "Female", "firstName": "Ruby", "lastName": "Moore", "email": "rmoore3@barnesandnoble.com" },
            { "id": 5, "gender": "Male", "firstName": "Edward", "lastName": "Daniels", "email": "edaniels4@addtoany.com" },
            { "id": 6, "gender": "Male", "firstName": "Jerry", "lastName": "Hawkins", "email": "jhawkins5@t.co" },
            { "id": 7, "gender": "Male", "firstName": "Donald", "lastName": "Jackson", "email": "djackson6@cisco.com" },
            { "id": 8, "gender": "Female", "firstName": "Mildred", "lastName": "Bishop", "email": "mbishop7@umich.edu" },
            { "id": 9, "gender": "Male", "firstName": "Jonathan", "lastName": "Hamilton", "email": "jhamilton8@pagesperso-orange.fr" },
            { "id": 10, "gender": "Female", "firstName": "Rachel", "lastName": "Myers", "email": "rmyers9@usgs.gov" },
            { "id": 11, "gender": "Female", "firstName": "Melissa", "lastName": "Kelley", "email": "mkelleya@icq.com" },
            { "id": 12, "gender": "Male", "firstName": "Clarence", "lastName": "Wright", "email": "cwrightb@imgur.com" },
            { "id": 13, "gender": "Female", "firstName": "Teresa", "lastName": "Rogers", "email": "trogersc@w3.org" },
            { "id": 14, "gender": "Male", "firstName": "Victor", "lastName": "Hernandez", "email": "vhernandezd@princeton.edu" },
            { "id": 15, "gender": "Female", "firstName": "Denise", "lastName": "Allen", "email": "dallene@barnesandnoble.com" },
            { "id": 16, "gender": "Female", "firstName": "Stephanie", "lastName": "Kennedy", "email": "skennedyf@google.cn" },
            { "id": 17, "gender": "Female", "firstName": "Susan", "lastName": "Green", "email": "sgreeng@senate.gov" },
            { "id": 18, "gender": "Female", "firstName": "Irene", "lastName": "James", "email": "ijamesh@ibm.com" },
            { "id": 19, "gender": "Male", "firstName": "Richard", "lastName": "Hernandez", "email": "rhernandezi@weibo.com" },
            { "id": 20, "gender": "Male", "firstName": "Earl", "lastName": "White", "email": "ewhitej@cloudflare.com" }];
    }
    UserService.prototype.findAll = function () {
        return this.users;
    };
    UserService.prototype.create = function (newUser) {
        this.users.push(newUser);
    };
    UserService.prototype.delete = function (user) {
        var index = this.users.indexOf(user);
        this.users.splice(index, 1);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map