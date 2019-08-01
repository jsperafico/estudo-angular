import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Potato", 10),
    new Ingredient("Apples", 5),
  ];

  selectedIngredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  update(value: Ingredient) {
    this.ingredients.push(value);
  }
}
