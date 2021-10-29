import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  search : string;

  public personlist : any;

  constructor(
    public fireData : AngularFirestore
  ) { }

  ngOnInit() {
    this.fireData.collection('users').valueChanges().subscribe(
      (res)=>{
        this.personlist=res;
      }
    );
  }

}
