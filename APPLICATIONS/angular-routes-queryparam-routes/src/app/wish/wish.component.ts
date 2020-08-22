import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss']
})
export class WishComponent implements OnInit {

  messageValue = '';
  nameValue='';
  constructor(private activatedRoutes: ActivatedRoute){
     
     this.activatedRoutes.queryParams.subscribe(data => {
     	 this.messageValue = data.message;
     	 this.nameValue = data.name;
     	})
  }

  ngOnInit(): void {
  }

}
