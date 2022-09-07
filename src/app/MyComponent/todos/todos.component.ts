import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  localItem: string|null;
  todos:Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null)
    {
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);

    }
    // this.todos = [
    //   {
    //     sno: 1,
    //     title: "This is title1",
    //     desc: "Description",
    //     active: true
    //   },
    //   {
    //     sno: 2,
    //     title: "This is title2",
    //     desc: "Description",
    //     active: true
    //   },
    //   {
    //     sno: 3,
    //     title: "This is title3",
    //     desc: "Description",
    //     active: true
    //   },
    // ];
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(Todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log(Todo);
    // const index = this.todos.indexOf(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));

    console.log(todo)
  }
}