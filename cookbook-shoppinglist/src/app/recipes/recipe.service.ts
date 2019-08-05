import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Pão',
      'Pão de Forma.',
      'https://pt.petitchef.com/imgupl/recipe/pao-de-forma-caseiro-e-bem-facil--md-455898p708561.jpg',
      [
        new Ingredient('Farinha de Trigo (g)', 300),
        new Ingredient('Açucar (col)', 1),
        new Ingredient('Sal (col)', 1),
        new Ingredient('Fermento Padeiro Fresco (g)', 10),
        new Ingredient('Leite (ml)', 120),
        new Ingredient('Água (ml)', 80),
        new Ingredient('Manteiga (g)', 20),
        new Ingredient('Ovo', 1),
      ]
    ),
    new Recipe(
      'Guacamole',
      'Rápido e Fácil.',
      'https://pt.petitchef.com/imgupl/recipe/guacamole-rapido--md-302166p493617.jpg',
      [
        new Ingredient('Abacate (un)', 2),
        new Ingredient('Limão (à gosto)', 1),
        new Ingredient('Tomate (à gosto)', 1),
        new Ingredient('Cebola (à gosto)', 1),
        new Ingredient('Pimenta (à gosto)', 1),
        new Ingredient('Sal (à gosto)', 1),
      ]
    )
  ];

  constructor(private shoppingList: ShoppingListService) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingList.addIngredients(ingredients);
  }
}
