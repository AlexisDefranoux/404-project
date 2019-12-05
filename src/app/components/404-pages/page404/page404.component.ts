import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {AppService} from '../../../services/app.service';
import {GameService} from '../../../services/game.service';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss']
})
export class Page404Component {
  @ViewChild('canvas', {static: false}) public canvas: ElementRef;
  subscription: any;
  showLoader = true;
  touchKey = false;

  constructor(
    private appService: AppService,
    private gameService: GameService
  ) {
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW || event.keyCode === KEY_CODE.LEFT_ARROW) {
      if (this.touchKey === false) {
        const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
        this.appService.createPlayGround(canvasEl);
        this.subscription = this.appService.getImageLoadEmitter()
          .subscribe((item) => {
           this.showLoader = false;
           this.gameService.startGameLoop();
          });
        this.touchKey = true;
      }
    }
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.appService.movePlayer(event, 'keydown');
  }

  @HostListener('document:keyup', ['$event']) onKeyupHandler(event: KeyboardEvent) {
    this.appService.movePlayer(event, 'keyup');
  }
}
