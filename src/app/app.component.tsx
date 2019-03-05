import { Component, OnInit } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private arr = ['holy', 'moly', 'trigger', 'happy'];
  constructor() { }
  ngOnInit() {

    const docList = new Promise((res, rej) => {

      res(this.arr.map(el => <li>{el}</li>));
    });
    this.renderingReact(docList);
  }
 renderingReact = async (input: React.ReactNode): Promise<void> => {
   const docList = await input;
   ReactDOM.render(<ul>{docList}</ul>, document.getElementById('reactRoot'));
  }
}
