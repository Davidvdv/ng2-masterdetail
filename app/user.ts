export class User {
    id:number;
    firstName:string;
    lastName:string;
    gender:string;
    email:string;
    static count:number = 1;

    constructor(id?:number, firstName?:string, lastName?:string, gender?:string, email?:string) {
        this.id = User.count++;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
    }
}