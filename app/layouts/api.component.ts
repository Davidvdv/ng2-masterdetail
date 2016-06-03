import {Component} from '@angular/core';
import {SlackService} from "../services/slack.service";
import {ChannelHistoryComponent} from "../components/channelHistory.component";
import {ChannelListComponent} from "../components/channelList.component";

@Component({
    selector: 'api-layout',
    templateUrl: './app/templates/api.component.html',
    directives: [ChannelHistoryComponent, ChannelListComponent],
    providers: [SlackService]
})
export class APILayout {
    slackUsers;
    currentChannel:string;

    constructor(private slackService:SlackService) {
        slackService.findAllUser()
            .then(response => this.slackUsers = response);
    }

    selectedChannel(selectedChannel) {
        console.log(selectedChannel)
        this.currentChannel = selectedChannel;
    }
}