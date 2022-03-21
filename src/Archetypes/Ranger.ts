import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  protected _energyType: EnergyType;
  protected static _rangerCount = 0;
  constructor(protected _name: string) {
    super(_name);
    this._energyType = 'stamina';
    Ranger._rangerCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances = (): number => Ranger._rangerCount;
}