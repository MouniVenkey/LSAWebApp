import { Component, OnInit } from '@angular/core';
import { LifeStyleCardUsage } from 'src/app/model/lifestyle-card-usage.interface';
import { LifeStyleCardService } from 'src/app/service/lifestyle-card.service';
import { ChartDataset, ChartType, ChartOptions } from 'chart.js';
import { Subject } from 'rxjs';
import { Transactions } from 'src/app/model/transaction.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'LsaApp';

  images: Array<any> = []
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  persons:any[] = [];

  lifeStyleCard: LifeStyleCardUsage[] = [];
  transactions : Transactions[]=[];
  responsiveOptions;
  headerText:string='It pays to be healthy.';
  public pieChartOptions: ChartOptions = {
    responsive: true,
    elements: {
      arc: {
          borderWidth: 0
      }
  }
  };

  public pieChartData: Array<any> = [{
    data: [300,50],
    backgroundColor: ["#00A184", "#FF5978"],
    hoverBackgroundColor: ['#00A184', '#FF5978']
  }];
  public pieChartLabels: Array<any> = ['l1', 'l2'];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  // public pieChartColors:Array<any>=['', ''];
  constructor(private lifeStyleCardService: LifeStyleCardService) {
    
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.lifeStyleCardService.getProductsSmall().then(products => {
      console.log('yes');
			this.lifeStyleCard = products;
		});
    this.lifeStyleCardService.getTransactions().then(Transactions=>{
      this.transactions = Transactions;
    });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
