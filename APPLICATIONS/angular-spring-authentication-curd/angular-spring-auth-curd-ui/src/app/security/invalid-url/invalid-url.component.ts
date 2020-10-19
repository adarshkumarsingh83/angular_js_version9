import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invalid-url',
  templateUrl: './invalid-url.component.html',
  styleUrls: ['./invalid-url.component.scss'],
})
export class InvalidUrlComponent implements OnInit {
  public href: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
  }
}
