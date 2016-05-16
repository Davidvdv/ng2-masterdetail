export class User {
    id:number;
    firstName:string;
    lastName:string;
    gender:string;
    email:string;

    constructor(id?:number, firstName?:string, lastName?:string, gender?:string, email?:string) {
        this.id = id ? id : 1;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
    }
}