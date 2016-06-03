import {Component, Output, EventEmitter} from '@angular/core';
import {SlackService} from "../services/slack.service";

@Component({
    selector: 'channel-list',
    templateUrl: './app/templates/channelList.component.html',
    providers: [SlackService],
})
export class ChannelListComponent {
    @Output() selectedChannel = new EventEmitter();
    slackChannels;
    
    constructor(private slackService:SlackService) {
        slackService.findAllChannels()
            .then(response => this.slackChannels = response);
    }
    
    onSelect(slackChannel) {
        console.log(slackChannel)
        this.selectedChannel.emit(slackChannel.id);
    }
}