import {Component} from '@angular/core';
import {MdIconRegistry} from "@angular/material";

@Component({
  moduleId: module.id,
  selector: 'app-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.css'],
  providers: [MdIconRegistry],
})
export class HomePageComponent {

  constructor(){
    console.log("Constructing HomePageComponent");
  }
  showDialog: boolean = false;
  editingTodo = null;
  fieldValue: string = '';
  todoList: any = [];
  okButtonText: string = 'Create task';

  todoDialog(todo = null) {
    this.okButtonText = 'Create task';
    this.fieldValue = '';
    this.editingTodo = todo;
    if (todo) {
      this.fieldValue = todo.title;
      this.okButtonText = 'Edit task';
    }
    this.showDialog = true;
  }

  remove(index: number) {
    this.todoList.splice(index, 1);
  }

  updateTodo(title) {
    console.log(title)
    if (title) {
      title = title.trim();
      if (this.editingTodo) {
        this.editTodo(title);
      } else {
        this.addTodo(title);
      }
    }
    this.hideDialog();
  }

  editTodo(title) {
    this.editingTodo.title = title;
  }

  addTodo(title) {
    const todo = {title: title, completed: false};
    this.todoList.push(todo);
  }

  hideDialog() {
    this.showDialog = false;
    this.editingTodo = null;
    this.fieldValue = null; // make sure Input is always new
  }
}
