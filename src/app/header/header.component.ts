import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @Output() recipesClicked = new EventEmitter<boolean>();
  @Output() shoppingListClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onClickRecipes() {
    this.recipesClicked.emit(true);
    this.shoppingListClicked.emit(false);
  }

  onClickShoppingList() {
    this.shoppingListClicked.emit(true);
    this.recipesClicked.emit(false);
  }

  ngAfterViewInit(): void {
    this.recipesClicked.emit(false);
    this.shoppingListClicked.emit(false);
  }

}
