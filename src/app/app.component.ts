import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  helloMessage: string = '';

  constructor(private helloService: HelloService) { }

  ngOnInit(): void {
    this.helloService.getHelloWorld().subscribe((message) => {
      this.helloMessage = message;
    });
  }
}
