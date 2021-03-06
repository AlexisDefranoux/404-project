import {SingleObstacles} from '../interfaces/single-obstacle';

export const playGroundHeight = window.innerHeight - 250;
export const playGroundWidth = 700;
export const frameNumber = 0;
export const spritePath = 'assets/img/sprites.png';
export const playerCarSpeed = 5;
export const playerCar = {
  sX: 410,  // Black Viper car
  sY: 265,
  sWidth: 64,
  sHeight: 135,
  width: 40,
  height: 90,
};
export const vehicles: SingleObstacles[] = [
  {
    sX: 35, // Green car
    sY: 265,
    sWidth: 68,
    sHeight: 135,
    width: 40,
    height: 90,
    redirect: "https://www.etudiant.gouv.fr/cid96662/la-sante-sur-les-campus.html"
  }, {
    sX: 100,  // Black car
    sY: 269,
    sWidth: 64,
    sHeight: 135,
    width: 40,
    height: 90,
    redirect: "https://wwwd.caf.fr/"
  }, {
		sX: 161,  // Yellow car
		sY: 265,
		sWidth: 64,
		sHeight: 135,
		width: 40,
		height: 90,
    redirect: "https://www.education.gouv.fr/"
	}
];
