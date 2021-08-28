import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';
import TaskListModel from './models/taskListModel';
import TaskModel from './models/taskModel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiConfigService: ApiConfigService) { }

  //to fetch all task lists
  getAllTaskLists(): Observable<TaskListModel[]> {
    return this.apiConfigService.getTaskLists('tasklists');
  }

  //to fetch all tasks
  getAllTasks(taskListId: string): Observable<TaskModel[]> {
    return this.apiConfigService.getTasks(`tasklists/${taskListId}`);
  }

  //create a task list bucket
  createTaskList(title: string): Observable<TaskListModel> {
    let data = { 'title': title };
    return this.apiConfigService.post('tasklists', data);
  }

  //to fetch all tasks inside a task list object
  //http://localhost:3000/tasklists/60e3273f96ddd235381ba8a9/tasks
  getAllTasksForATaskList(taskListId: string) {
    return this.apiConfigService.getTasks(`tasklists/${taskListId}/tasks`);
  }

  //create a task inside a particular task list object
  createTaskInsideATaskList(taskListId: string, title: string) {
    return this.apiConfigService.post(`tasklists/${taskListId}/tasks`, { title });
  }

  //delete a task list
  deleteTaskList(taskListId: string): Observable<TaskListModel[]> {
    return this.apiConfigService.deleteTaskList(`tasklists/${taskListId}`);
  }

  //delete a task inside a particular task list
  //http://localhost:3000/tasklists/60de1aacf57ec02cccadd89c/tasks/60e0ab9223610535e4f50ed9
  deleteAtaskInsideATaskList(taskListId: string, taskId: string): Observable<TaskModel> {
    return this.apiConfigService.deleteTask(`tasklists/${taskListId}/tasks/${taskId}`);
  }

  //update the status of a task whether its completed or not
  updateTaskStatus(taskListId: string, taskObject: TaskModel): Observable<TaskModel> {
    let updateData = { 'completed': !taskObject.completed };//toggle the database value
    return this.apiConfigService.patch(`tasklists/${taskListId}/tasks/${taskObject._id}`, updateData);
  }
}
