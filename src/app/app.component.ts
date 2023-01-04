import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  tasksList: string[] =['texto-area-1', 'texto-area-2', 'texto-area-3'];
  eliminarTask(taskIndex:number){
    this.tasksList.splice(taskIndex, 1);
  }
}
