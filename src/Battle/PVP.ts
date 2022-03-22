import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(protected _char1: Fighter, protected _char2: Fighter) {
    super(_char1);
  }

  fight(): number {
    let result;
    while (!result) {
      this._char1.attack(this._char2);
      if (this._char2.lifePoints === -1) result = 1;
      this._char2.attack(this._char1);
      if (this._char1.lifePoints === -1) result = -1;
    }
    return result;
  }
}