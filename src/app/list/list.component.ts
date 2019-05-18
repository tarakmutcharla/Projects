import { Component, OnInit } from '@angular/core';
import { List } from './list.model';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cont = 0;
  Lists: List[] = [];
  constructor(private listService: ListService) {}

  ngOnInit() {
    this.Lists = this.listService.getLists();
    // console.log(this.Lists);
    this.cont = this.Lists.length;
    this.listService.useractivated.next(this.cont);
  }

}