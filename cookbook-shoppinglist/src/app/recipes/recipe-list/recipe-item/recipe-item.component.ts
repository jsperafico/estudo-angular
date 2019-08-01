import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() recipeSelectedEmitter = new EventEmitter<void>();
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  selectRecipe() {
    this.recipeSelectedEmitter.emit();
  }
}
