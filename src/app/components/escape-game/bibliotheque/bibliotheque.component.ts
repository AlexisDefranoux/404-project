import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.scss']
})
export class BibliothequeComponent implements OnInit {

  constructor() { }

  public links;
  public truc = new FormControl('');

  characters = [
    'Embauche',
    'Stage',
    'Problèmes',
    'Révision',
    'Transports',
    'Associations',
    'Zen',
    'Crous',
    'Sport',
    'Soin',
    'Démarches'
  ];

  ngOnInit() {
  }

  search(searchText) {
    if (searchText === '.') {
      return ['Bien essayé... Mais non'];
    }
    if (searchText.toLowerCase() === 'merci') {
      return [
        'Sport',
        'Embauche',
        'Problèmes',
        'Transports'
      ];
    }
    return this.characters.filter( it => {
      return it.toLowerCase().includes(searchText);
    });
  }

}
