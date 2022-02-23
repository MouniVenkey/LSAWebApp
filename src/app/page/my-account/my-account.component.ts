import { Component, OnInit } from '@angular/core';
import { Transactions } from '../../model/transaction.interface';
import { LifeStyleCardService } from '../../service/lifestyle-card.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  constructor(private lifeCardService:LifeStyleCardService) { }
  headerText:string="One account for all your wellness needs";
  tarnsactions : Transactions[]=[];
  ngOnInit(): void {
    //this.lifeCardService.getTransactions()
    this.lifeCardService.getTransactions().then(Transactions=>{
      this.tarnsactions =Transactions;
      console.log(this.tarnsactions);
    })
  }

}
