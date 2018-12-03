import { Component, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

import { Message } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private hubConnection: HubConnection;
  msgs: Message[] = [];

  ngOnInit() {
    let builder = new HubConnectionBuilder();
    this.hubConnection = builder.withUrl('/eleva').build();
    this.hubConnection.start();

    this.hubConnection.on('SendNotification', (type: string, message: string) => {
      this.msgs.push({ severity: type, summary: message });
    });
  }
}
