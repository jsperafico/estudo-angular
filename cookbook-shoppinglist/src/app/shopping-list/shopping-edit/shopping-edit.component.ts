import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false }) name: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput', { static: false }) amount: ElementRef<HTMLInputElement>;

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
  }

  Add() {
    this.shoppingList.addIngredient(new Ingredient(this.name.nativeElement.value, Number.parseInt(this.amount.nativeElement.value)));
  }
}
