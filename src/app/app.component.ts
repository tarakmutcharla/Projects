import { Component, OnInit } from '@angular/core';
import { ListService } from './list/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  show: boolean = true;
  count: any = 0;
  constructor(private listService: ListService) {}
  
  ngOnInit() {
    this.listService.useractivated.subscribe(
      (id: number) => {
        this.count = id;
      }
    );
  }

  toggle() {
    this.show = this.show ? false: true; }

}