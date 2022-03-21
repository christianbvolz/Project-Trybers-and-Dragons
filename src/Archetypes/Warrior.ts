import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  protected _energyType: EnergyType;
  protected static _warriorCount = 0;
  constructor(protected _name: string) {
    super(_name);
    this._energyType = 'stamina';
    Warrior._warriorCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances = (): number => Warrior._warriorCount;
}