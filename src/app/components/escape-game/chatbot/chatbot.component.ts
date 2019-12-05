import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit {

  public message = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (/indice/.test(this.message.value)) {
      console.log('l\'indice est');
    } else if (/aide/.test(this.message.value)) {
      console.log('aide');
    }
  }

}
