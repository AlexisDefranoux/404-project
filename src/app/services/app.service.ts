import {Injectable, EventEmitter} from '@angular/core';
import {GameService} from './game.service';

@Injectable()
export class AppService {

  isImageLoaded: EventEmitter<number> = new EventEmitter();

  constructor(private gameService: GameService) {
  }

  createPlayGround(canvasElement): void {
    this.gameService.loadAssets(canvasElement).then((image) => {
      this.isImageLoaded.emit();
    });
  }

  getImageLoadEmitter() {
    return this.isImageLoaded;
  }

  movePlayer(event: KeyboardEvent, type: string): void {
    if (type === 'keydown') {
      if (event.keyCode === 37) {
        this.gameService.moveLeft = true;
        this.gameService.moveUP = false;
        this.gameService.moveDown = false;
      } else if (event.keyCode === 39) {
        this.gameService.moveRight = true;
        this.gameService.moveLeft = false;
        this.gameService.moveUP = false;
        this.gameService.moveDown = false;
      }
    } else if (type === 'keyup') {
      this.gameService.moveDown = false;
      this.gameService.moveLeft = false;
      this.gameService.moveRight = false;
      this.gameService.moveUP = false;
    }
  }
}
