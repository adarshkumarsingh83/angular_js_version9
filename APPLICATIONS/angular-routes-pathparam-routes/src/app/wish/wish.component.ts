import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss']
})
export class WishComponent implements OnInit {

  queryMessageParamValue = '';
  queryNameParamValue='';
  constructor(private activatedRoutes: ActivatedRoute){
     
     this.activatedRoutes.params.subscribe(data => {
     	 this.queryMessageParamValue = data.message;
     	 this.queryNameParamValue = data.name;
     	})
  }

  ngOnInit(): void {
  }

}
