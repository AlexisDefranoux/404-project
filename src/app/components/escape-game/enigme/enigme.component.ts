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
  private numEnigme = 0;

  constructor() {
  }

  ngOnInit() {
    this.indicep = document.getElementById('indicep');
  }

  onSubmit() {
    if (this.numEnigme === 0 &&
      this.indice.value === '5') {
      this.numEnigme = 1;
      this.indicep.innerText = '';
    } else
    if (this.numEnigme === 1 &&
      this.indice.value === '2') {
      this.numEnigme = 2;
      this.indicep.innerText = '';
    }
  }

  onClick() {
    if (this.numEnigme === 0) {
      this.indicep.innerText = 'indice 1';
    } else
    if (this.numEnigme === 1) {
      this.indicep.innerText = 'indice 2';
    } else
    if (this.numEnigme === 2) {
      this.indicep.innerText = 'indice 3';
    }
  }

}
