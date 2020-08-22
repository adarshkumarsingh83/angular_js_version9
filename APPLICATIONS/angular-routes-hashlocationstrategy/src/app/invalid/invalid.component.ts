import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invalid',
  templateUrl: './invalid.component.html',
  styleUrls: ['./invalid.component.scss']
})
export class InvalidComponent implements OnInit {

  public href: string = "";

    constructor(private router: Router) {}

    ngOnInit() {
        this.href = this.router.url;
        console.log(this.router.url);
    }

}
