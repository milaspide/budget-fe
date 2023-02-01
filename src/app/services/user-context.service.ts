import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserContextService {

  userBehavior: BehaviorSubject<User> = new BehaviorSubject<User>(new User());
  constructor(private cookieService: CookieService) { }

  /**
   * il metodo prende in input il token di keycloak e crea l'oggetto utente,
   * utenteDaCreare è true solo l'utente non è ancora stato creato dal Token.
   * Nel caso in cui l'utente ha piu ruoli, il suo ruolo verrà valorizzato con quello precedentemente selezionato nel componente scelta-ruolo.
   */
  buildUserBehavior(token: any, utenteDaValorizzare: any) {
    if (utenteDaValorizzare) {
      // const userTemp = new User();
      // userTemp.nome = token.given_name || token.preferred_username;
      // userTemp.cognome = token.family_name;
      // userTemp.email = token.email;
      // userTemp.externalId = token.sub;
      // if (this.ruoloSelezionato != null && this.ruoloSelezionato != undefined && this.ruoloSelezionato != '') {
      //   userTemp.codeRole = this.ruoloSelezionato;
      // } else {
      //   userTemp.codeRole = token.resource_access['alf-scrivania-aic'].roles[0];
      // }
      // if(userTemp.codeRole=='SiteManager'){
      //     this.router.navigate(['/sceltaRuolo']);
      // }
      // const ctx = this;
      // if (!token['id_aps']) {
      //   this.httpServiceService.get('/servizi/utenti/profilo-backoffice').subscribe(data => {
      //     ctx.idAps = data.idAps;
      //   });
      // } else {
      //   ctx.idAps = token['id_aps'];
      // }

      // this.checkRuolo(userTemp.codeRole);
      // this.userBehavior.next(userTemp);
    }
    // this.notificheModel.getNotificheUtente().subscribe(data => {
    //   this.notificheUtente$.next(this.notificheModel.convertiNotifica(data));
    // });
  }
}
