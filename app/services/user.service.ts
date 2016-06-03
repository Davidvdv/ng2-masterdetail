import {Injectable} from '@angular/core';
import {User} from '../user';

@Injectable()
export class UserService {
    users:Array<User> = [{"id":1,"gender":"Female","firstName":"Jacqueline","lastName":"Robertson","email":"jrobertson0@dion.ne.jp"},
        {"id":2,"gender":"Male","firstName":"Jimmy","lastName":"Crawford","email":"jcrawford1@bluehost.com"},
        {"id":3,"gender":"Female","firstName":"Kathryn","lastName":"Mendoza","email":"kmendoza2@de.vu"},
        {"id":4,"gender":"Female","firstName":"Ruby","lastName":"Moore","email":"rmoore3@barnesandnoble.com"},
        {"id":5,"gender":"Male","firstName":"Edward","lastName":"Daniels","email":"edaniels4@addtoany.com"},
        {"id":6,"gender":"Male","firstName":"Jerry","lastName":"Hawkins","email":"jhawkins5@t.co"},
        {"id":7,"gender":"Male","firstName":"Donald","lastName":"Jackson","email":"djackson6@cisco.com"},
        {"id":8,"gender":"Female","firstName":"Mildred","lastName":"Bishop","email":"mbishop7@umich.edu"},
        {"id":9,"gender":"Male","firstName":"Jonathan","lastName":"Hamilton","email":"jhamilton8@pagesperso-orange.fr"},
        {"id":10,"gender":"Female","firstName":"Rachel","lastName":"Myers","email":"rmyers9@usgs.gov"},
        {"id":11,"gender":"Female","firstName":"Melissa","lastName":"Kelley","email":"mkelleya@icq.com"},
        {"id":12,"gender":"Male","firstName":"Clarence","lastName":"Wright","email":"cwrightb@imgur.com"},
        {"id":13,"gender":"Female","firstName":"Teresa","lastName":"Rogers","email":"trogersc@w3.org"},
        {"id":14,"gender":"Male","firstName":"Victor","lastName":"Hernandez","email":"vhernandezd@princeton.edu"},
        {"id":15,"gender":"Female","firstName":"Denise","lastName":"Allen","email":"dallene@barnesandnoble.com"},
        {"id":16,"gender":"Female","firstName":"Stephanie","lastName":"Kennedy","email":"skennedyf@google.cn"},
        {"id":17,"gender":"Female","firstName":"Susan","lastName":"Green","email":"sgreeng@senate.gov"},
        {"id":18,"gender":"Female","firstName":"Irene","lastName":"James","email":"ijamesh@ibm.com"},
        {"id":19,"gender":"Male","firstName":"Richard","lastName":"Hernandez","email":"rhernandezi@weibo.com"},
        {"id":20,"gender":"Male","firstName":"Earl","lastName":"White","email":"ewhitej@cloudflare.com"}];
    
    findAll() {
        return this.users;
    }
    
    create(newUser:User) {
        this.users.push(newUser);
    }
    
    delete(user) {
        let index = this.users.indexOf(user);
        this.users.splice(index, 1);
    }
}