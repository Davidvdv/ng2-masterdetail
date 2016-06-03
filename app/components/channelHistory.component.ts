import {Component, Input, SimpleChange, OnChanges} from '@angular/core';
import {SlackService} from "../services/slack.service";

@Component({
    selector: 'channel-history',
    templateUrl: './app/templates/channelHistory.component.html',
    providers: [SlackService],
    inputs: ['channel']
})
export class ChannelHistoryComponent implements OnChanges {
    @Input() channel:string;
    channelHistory:Array<any>;
    message;

    constructor(private slackService:SlackService) { }

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        this.slackService.findChannelHistory(this.channel)
            .then(response => this.channelHistory = response);
    }

    onSubmit() {
        this.slackService.postMessageToChannel(this.channel, this.message)
            .then(response => {
                this.channelHistory.unshift(response.message);
                this.message = null;
            })
            .catch(err => console.log(err));
    }
}