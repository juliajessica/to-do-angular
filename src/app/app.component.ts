import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'crazy-app-selector',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  selectedTask = null;

  editTask(clickedTask){
    this.selectedTask = clickedTask;
  }

  finishedEditing(){
    this.selectedTask = null;
  }




}
