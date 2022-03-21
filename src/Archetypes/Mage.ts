import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  protected _energyType: EnergyType;
  protected static _mageCount = 0;
  constructor(protected _name: string) {
    super(_name);
    this._energyType = 'mana';
    Mage._mageCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances = (): number => Mage._mageCount;
}