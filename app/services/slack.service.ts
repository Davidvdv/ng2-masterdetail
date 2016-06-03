import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class SlackService {
    private url:string = 'https://slack.com/api/';
    private token:string = 'TOKEN';

    constructor(private http:Http) {}

    findAllUser() {
        return this.http.get(this.url+'users.list?token='+this.token)
            .map(response => response.json().members)
            .toPromise();
    }

    findAllChannels() {
        return this.http.get(this.url+'channels.list?token='+this.token)
            .map(response => response.json().channels)
            .toPromise();
    }

    findChannelHistory(id:string) {
        return this.http.get(this.url+'channels.history?token='+this.token+'&channel='+id)
            .map(response => { console.log(response.json()); return response.json().messages})
            .toPromise();
    }

    postMessageToChannel(id:string, message:string) {
        return this.http.get(this.url+'chat.postMessage?token='+this.token+'&channel='+id+'&text='+message+'&as_user=true')
            .map(response => response.json())
            .toPromise();
    }
}
