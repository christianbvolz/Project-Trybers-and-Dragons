import { EnergyType } from '../Energy';

export default abstract class Archetype {
  protected _special: number;
  protected _cost: number;

  constructor(protected _name: string) {
    this._cost = 0;
    this._special = 0;
  }

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  abstract get energyType(): EnergyType;
  
  static createdArchetypeInstances(): number {
    throw new Error('Not implemented'); 
  }
}