import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss']
})
export class PizzaDetailComponent implements OnInit {
  private pizzas: Observable<any[]>;
  private reviews: Observable<any[]>;

  constructor(private db: AngularFirestore, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
        const pizzaName = params.get('pizzaName');

        this.pizzas = this.db.collection('pizzas',
          ref => ref.where('name', '==', pizzaName).limit(1)
        ).valueChanges();


        this.reviews = this.db.collection('reviews',
          ref => ref.where('pizza', '==', pizzaName)
        ).valueChanges();
      }
    );
  }

}
