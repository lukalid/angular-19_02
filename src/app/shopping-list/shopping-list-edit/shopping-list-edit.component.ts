import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  @ViewChild('formIngredient', { static: false }) formIngredient: NgForm;
  startedEditingSubscription: Subscription;
  editMode = false;
  selectedIngredientIndex;
  selectedIngredient: IngredientModel;

  constructor(private shoppingListService: ShoppingListService, private renderer: Renderer2) { }

  ngOnInit() {
    this.startedEditingSubscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.selectedIngredientIndex = index;
        this.selectedIngredient = this.shoppingListService.getIngredient(index);
        this.formIngredient.form.setValue({
          'ingredientName': this.selectedIngredient.name,
          'ingredientAmount': this.selectedIngredient.amount
        });
      }
    );
  }

  onSubmit() {
    const newIngredient = new IngredientModel(this.formIngredient.value.ingredientName, this.formIngredient.value.ingredientAmount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.selectedIngredientIndex, newIngredient);
    } else {
      this.shoppingListService.addNewIngredient(newIngredient);
    }
    this.resetForm();
  }

  resetForm() {
    this.editMode = false;
    this.formIngredient.reset();
  }

  onDelete() {
    if (this.editMode) {
      this.shoppingListService.deleteIngredient(this.selectedIngredientIndex);
      this.resetForm();
    }
  }

  ngOnDestroy(): void {
    this.startedEditingSubscription.unsubscribe();
  }

}
