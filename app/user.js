"use strict";
var User = (function () {
    function User(id, firstName, lastName, gender, email) {
        this.id = id ? id : 1;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map