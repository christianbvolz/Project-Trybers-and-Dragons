import Race from './Race';

export default class Halfling extends Race {
  private static _halflingCount = 0;
  private _maxLifePoints: number;
  constructor(protected _name: string, protected _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 60;
    Halfling._halflingCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances = (): number => Halfling._halflingCount;
}