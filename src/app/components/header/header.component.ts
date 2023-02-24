import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  title:string = 'Lista de tareas';
  showAddTask: boolean = true;
  subscription?: Subscription;

  constructor( private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(){

  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

}
