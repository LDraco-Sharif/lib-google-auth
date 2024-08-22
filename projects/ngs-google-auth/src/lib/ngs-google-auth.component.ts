import { Component, Input, SecurityContext } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from '@angular/platform-browser';
import { ResponseEnum, ScopeEnum } from './ngs-google-auth.enums';
import { AccessType, ScopeType, PromptType, AuthResponseType } from './ngs-google-auth.types';
@Component({
  selector: 'ngs-google-auth',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <a mat-raised-button  [href]="sanitizer.bypassSecurityTrustUrl(prepareURL())">
      Sign-in with Google
    </a>
  `,
  styles: ``
})
export class NgsGoogleAuthComponent {

  constructor(public sanitizer: DomSanitizer) {
    
  }
  @Input() accessType: AccessType = 'online';
  @Input({required: true}) clientId: string = '';
  @Input() responseTypes: AuthResponseType[] = [ResponseEnum.Code, ResponseEnum.IdToken];
  @Input({required: true}) redirectUri: string = "";
  @Input({required: true}) nonce: string = "";
  @Input() scopeTypes: ScopeType[] = [ScopeEnum.Profile, ScopeEnum.Email];
  @Input() promptType: PromptType = 'consent';
  

  prepareURL() {
    let responseTypeString = this.prepareResponseTypeString();
    let scopeTypeString = this.prepareScopeTypeString();

    let url = `https://accounts.google.com/o/oauth2/v2/auth?access_type=${this.accessType}&redirect_uri=${this.redirectUri}&client_id=${this.clientId}&response_type=${responseTypeString}&nonce=${this.nonce}&scope=${scopeTypeString}&prompt=${this.promptType}`;

    return url;
  }

  prepareResponseTypeString() {
    let responseTypeString: string = '';

    responseTypeString = this.responseTypes.join(" ");

    return responseTypeString;
  }

  prepareScopeTypeString() {
    let scopeTypeString: string = '';

    scopeTypeString = this.scopeTypes.join(" ");

    return scopeTypeString;
  }


}





