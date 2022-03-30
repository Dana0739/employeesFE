import { Component } from '@angular/core';
import {Authorization} from "./model/Authorization";
import {AuthorizationService} from "./service/authorization.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authorization: Authorization;

  constructor(private authorizationService: AuthorizationService) {
    this.authorization = this.authorizationService.authorization;
  }
}
