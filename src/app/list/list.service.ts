import { List } from './list.model';
import { Subject } from 'rxjs';

export class ListService {
    useractivated = new Subject();
        Lists: List[] = [
        new List('https://images.unsplash.com/photo-1470363493890-3210c43004b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          'Nature',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          'Wed June 13 2018'),
          new List('https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80','Bike',
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          'Wed June 13 2018'),
          new List('https://images.unsplash.com/photo-1556950961-8c092986258e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80','Castle',
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'Wed June 13 2018')
      ];

    addlst(txt,nme,drip,dte) {
        let lst = new List(txt,nme,drip,dte);
        this.Lists.push(lst);
    }

    getLists() {
        return this.Lists;
    }



}