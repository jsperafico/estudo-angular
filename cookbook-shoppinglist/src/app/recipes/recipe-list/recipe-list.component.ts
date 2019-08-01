import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Teste 1', 'Simple a teste.', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ricotta-goat-cheese-stuffed-zucchini-recipe-1558036677.jpg'),
    new Recipe('Teste 2', 'Simple a teste.', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ricotta-goat-cheese-stuffed-zucchini-recipe-1558036677.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  RecipeSelected(value: Recipe) {
    this.recipeWasSelected.emit(value);
  }

}
