import Race from './Race';

export default class Elf extends Race {
  private static _elfCount = 0;
  private _maxLifePoints: number;
  constructor(protected _name: string, protected _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 99;
    Elf._elfCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances = (): number => Elf._elfCount;
}