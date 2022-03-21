import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  protected _energyType: EnergyType;
  protected static _necroCount = 0;
  constructor(protected _name: string) {
    super(_name);
    this._energyType = 'mana';
    Necromancer._necroCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances = (): number => Necromancer._necroCount;
}