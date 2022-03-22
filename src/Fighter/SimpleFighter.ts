export default interface SimpleFighter {
  lifePoints: number;
  strength: number;
  attack(enemy: SimpleFighter): number;
  receiveDamage(attackPoints: number): number;
}