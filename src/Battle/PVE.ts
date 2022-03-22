import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected _char: Fighter,
    protected _monsters: SimpleFighter[],
  ) {
    super(_char);
  }

  private singleBattle(monster: SimpleFighter): number {
    let result;
    while (!result) {
      this._char.attack(monster);
      if (monster.lifePoints === -1) result = 1;
      monster.attack(this._char);
      if (this._char.lifePoints === -1) result = -1;
    }
    return result;
  }

  fight(): number {
    let result;
    this._monsters.forEach((monster) => {
      const resultSB = this.singleBattle(monster);
      if (resultSB === -1) result = resultSB;
    });
    if (!result) result = 1;
    return result;
  }
}
