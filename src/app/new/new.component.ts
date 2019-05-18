import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListService } from '../list/list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  constructor(private listServ: ListService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  addlist(txt: HTMLInputElement, nam: HTMLInputElement, descrip: HTMLInputElement, da: HTMLInputElement) {
    const txtEl = txt.value;
    const nameEl = nam.value;
    const desEl = descrip.value;
    const dateEl = da.value;
    this.listServ.addlst(txtEl,nameEl,desEl,dateEl);
    this.router.navigate(['../'], {relativeTo: this.route});
    return false;
  }
}
