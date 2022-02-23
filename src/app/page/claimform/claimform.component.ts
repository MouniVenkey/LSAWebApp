import { Component, OnInit } from '@angular/core';
import { LifeStyleCardService } from 'src/app/service/lifestyle-card.service';

@Component({
  selector: 'app-claimform',
  templateUrl: './claimform.component.html',
  styleUrls: ['./claimform.component.scss']
})
export class ClaimformComponent implements OnInit {
  title = 'LsaApp';

  images: Array<any> = []

  responsiveOptions;
  headerText: string = 'Request a Reimbursement.';
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
  }

}
