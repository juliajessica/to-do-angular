import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; //add input to get the data from app-component
import { Task } from '../models/task.model'; //pulling in the data for the array

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  @Input() childTaskList: Task[]; //add input to recieve the array & change the variable name
  @Output() clickSender = new EventEmitter(); //@Output pass action outwards & upwards to parent component
  filterByCompleteness: string = "incompleteTasks"; //<option value="incompleteTasks" in task-list.html

  editButtonClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
    //click sender is the output name given to the new EventEmitter();
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2){
      return "bg-warning";
    } else {
      return "bg-success";
    }
  }
  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

  toggleDone(clickedTask: Task, setCompleteness: boolean) {
    clickedTask.done = setCompleteness;
  }

  constructor() { }
  ngOnInit() {
  }

}
