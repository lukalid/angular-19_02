import {IngredientModel} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {

  private ingredientsChanged = new Subject<void>();
  startedEditing = new Subject<number>();

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

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next();
  }

  updateIngredient(index: number, newIngredient: IngredientModel) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next();
  }

}
