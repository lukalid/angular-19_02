import {IngredientModel} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {

  private ingredientsChanged = new Subject<void>();

  private ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addNewIngredient(newIngredient: IngredientModel) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next();
  }

  onIngredientsChanged(callbackFunction: () => void) {
    return this.ingredientsChanged.subscribe(callbackFunction);
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next();
  }

}
