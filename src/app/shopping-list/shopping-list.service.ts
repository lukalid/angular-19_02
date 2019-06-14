import {IngredientModel} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  private ingredientsChanged = new EventEmitter<void>();

  private ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(newIngredient: IngredientModel) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit();
  }

  onIngredientsChanged(callbackFunction: () => void) {
    this.ingredientsChanged.subscribe(callbackFunction);
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit();
  }

}
