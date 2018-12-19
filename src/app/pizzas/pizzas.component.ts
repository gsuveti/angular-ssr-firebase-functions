import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {
  pizzas: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.pizzas = db.collection('pizzas').valueChanges();
  }

  ngOnInit() {
  }

}
