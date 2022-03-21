import Race from './Race';

export default class Orc extends Race {
  private static _orcCount = 0;
  private _maxLifePoints: number;
  constructor(protected _name: string, protected _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 74;
    Orc._orcCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances = (): number => Orc._orcCount;
}