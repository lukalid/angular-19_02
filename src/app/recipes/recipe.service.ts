import {RecipeModel} from './recipe.model';
import {Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<void>();
  private recipes: RecipeModel[] = [

    new RecipeModel(
      'Cheesecake',
      'Best cake ever!',
      'https://live.staticflickr.com/7858/47287618081_da13c082e5_b.jpg',
      [
        new IngredientModel('Cherry', 30),
        new IngredientModel('Cheese', 1)
      ]
    ),

    new RecipeModel(
      'Lemon Cake',
      'Yellow, must be good...',
      'https://cdn.pixabay.com/photo/2018/09/12/11/35/apple-pie-3671925_960_720.png',
      [
        new IngredientModel('Lemon', 20),
        new IngredientModel('Crust', 10)
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  updateRecipe(id: number, newRecipe: RecipeModel) {
    this.recipes[id].name = newRecipe.name;
    this.recipes[id].imagePath = newRecipe.imagePath;
    this.recipes[id].description = newRecipe.description;
    this.recipes[id].ingredients = newRecipe.ingredients;
    this.recipesChanged.next();
  }

  addRecipe(newRecipe: RecipeModel) {
    this.recipes.push(newRecipe);
    this.recipesChanged.next();
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    console.log(this.recipes);
    this.recipesChanged.next();
  }

}
