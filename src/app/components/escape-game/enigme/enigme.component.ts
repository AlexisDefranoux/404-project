import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-enigme',
  templateUrl: './enigme.component.html',
  styleUrls: ['./enigme.component.scss']
})
export class EnigmeComponent implements OnInit {

  public indice = new FormControl('');
  private indicep;
  private grosindice;
  public logoUrl = './././assets/blanc.PNG';

  constructor() {
  }

  ngOnInit() {
    this.indicep = document.getElementById('indicep');
    this.indicep.innerText = 'N\'hésitez pas à parler avec vos senpai';
    this.grosindice = document.getElementById('grosindice');
  }

  onSubmit() {
    if (this.indice.value.toString().toLowerCase() === 'merci') {
      this.indicep.innerText = 'Pensez à remercier LES fonctionnalités';
      this.grosindice.innerText = '';
    } else
    if (this.indice.value.toString().toLowerCase() === 'sept' || this.indice.value === '7') {
      this.indicep.innerText = 'Rien ne sert de filtrer, il faut partir à point';
      this.grosindice.innerText = '';
    } else
    if (this.indice.value.toString().toLowerCase() === 'zen') {
      this.indicep.innerText = 'Et qu\'en pense le chatbox ?';
      this.grosindice.innerText = '';
    } else
    if (this.indice.value === '357') {
      this.indicep.innerText = 'bravo';
      this.logoUrl = './././assets/csgroup.png';
    }
  }

  onClick() {
    if (this.indicep.innerText === 'N\'hésitez pas à parler avec vos senpai') {
      this.grosindice.innerText = 'Prenez en compte les identités';
    } else
    if (this.indicep.innerText === 'Pensez à remercier LES fonctionnalités') {
      this.grosindice.innerText = 'Interroger le chatbot vous donne les pistes suffisantes lors de la recherche dans la bibliothèque';
    } else
    if (this.indicep.innerText === 'Rien ne sert de filtrer, il faut partir à point') {
      this.grosindice.innerText = 'Un filtre vide est plus efficace lorsque l\'on souhaite se balader dans la bibliothèque';
    } else
    if (this.indicep.innerText === 'Et qu\'en pense le chatbox ?') {
      this.grosindice.innerText = 'La réponse pourrait vous retourner la tête';
    }
  }

}
