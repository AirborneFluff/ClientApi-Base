import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-designer',
  templateUrl: './html-designer.component.html',
  styleUrls: ['./html-designer.component.css']
})
export class HtmlDesignerComponent implements OnInit {
  htmlInput: string;

  constructor() { }

  ngOnInit(): void {
  }

}
