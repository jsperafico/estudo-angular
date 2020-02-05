import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Potato", 10),
    new Ingredient("Apples", 5),
  ];

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(value: Ingredient) {
    this.ingredients.push(value);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(values: Ingredient[]) {
    this.ingredients.push(...values);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
