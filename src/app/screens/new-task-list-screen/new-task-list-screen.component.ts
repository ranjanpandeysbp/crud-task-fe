import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import TaskListModel from 'src/app/models/taskListModel';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task-list-screen',
  templateUrl: './new-task-list-screen.component.html',
  styleUrls: ['./new-task-list-screen.component.scss']
})
export class NewTaskListScreenComponent implements OnInit {

  constructor(
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  addNewTaskList(title: string) {
    if (title) {
      this.taskService.createTaskList(title)
        .subscribe(
          (newlyCreatedTaskList: TaskListModel) => {
            this.router.navigate(['task-list', newlyCreatedTaskList._id]);
          }
        );
    } else {
      alert("Title cannot be empty!");
      return;
    }
  }

}
