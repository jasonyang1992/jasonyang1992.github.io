import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itblog',
  templateUrl: './itblog.component.html',
  styleUrls: ['./itblog.component.css']
})
export class ITBlogComponent implements OnInit {

  page = 1;

  constructor() { }

  ngOnInit() {
  }

}
