import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  public message = new FormControl('');
  public chatboxanswer;

  constructor() { }

  ngOnInit() {
    this.chatboxanswer = document.getElementById('chatboxanswer');
  }

  onSubmit() {
    if (/merci/i.test(this.message.value)) {
      this.chatboxanswer.innerText = 'initials';
    } else if (/zen/i.test(this.message.value)) {
      this.chatboxanswer.innerText = 'nez=753';
    } else {
      this.chatboxanswer.innerText = 'Le chatbox n\'est là que pour la chasse au trésor, désolé...';
    }
  }

}
