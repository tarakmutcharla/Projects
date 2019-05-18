import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../list/list.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {
  @Input() holder;
  @Input() num;
  Lists;
  cont;
  del: boolean = false;
  List = this.holder;
  constructor(private listService: ListService) { }

  ngOnInit() {
    this.Lists = this.listService.getLists();
  }
  
  remove(element){
    this.Lists.splice(element,1);
    this.cont = this.Lists.length;
    this.listService.useractivated.next(this.cont);
  }

  showdel() {
    this.del = this.del ? false: true;
  }

}
