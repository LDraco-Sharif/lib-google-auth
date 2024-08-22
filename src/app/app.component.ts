import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthResponseType, NgsGoogleAuthComponent, ResponseEnum, ScopeEnum, ScopeType } from "ngs-google-auth";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgsGoogleAuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lib-google-auth';
  responseTypes: AuthResponseType[] = [ResponseEnum.Code, ResponseEnum.IdToken];
  scopeTypes: ScopeType[] = [ScopeEnum.Email, ScopeEnum.Profile];
}
