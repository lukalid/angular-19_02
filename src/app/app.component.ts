import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  recipesClicked = false;
  shoppingListClicked = true;

  constructor() { }

  ngOnInit(): void {
  }

  onRecipesClicked(recipesClicked) {
    this.recipesClicked = recipesClicked;
  }

  onShoppingListClicked(shoppingListClicked) {
    this.shoppingListClicked = shoppingListClicked;
  }

}
