import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false }) name: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput', { static: false }) amount: ElementRef<HTMLInputElement>;
  @Output() addEmitter = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  Add() {
    this.addEmitter.emit(new Ingredient(this.name.nativeElement.value, Number.parseInt(this.amount.nativeElement.value)));
  }
}
