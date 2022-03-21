import Race from './Race';

export default class Dwarf extends Race {
  private static _dwarfCount = 0;
  private _maxLifePoints: number;
  constructor(protected _name: string, protected _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 80;
    Dwarf._dwarfCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances = (): number => Dwarf._dwarfCount;
}