import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BehaviorSubject } from 'rxjs';
import { User } from '../shared/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserContextService {

  userBehavior: BehaviorSubject<User> = new BehaviorSubject<User>(new User());
  userId?: number;
  ref?: DynamicDialogRef;

  constructor(private cookieService: CookieService,
    public dialogService: DialogService,
    private client: HttpClient) { }

  buildUserBehavior(token: any, utenteDaValorizzare: any) {
    if (utenteDaValorizzare) {
      const userTemp = new User();
      userTemp.name = token.given_name || token.preferred_username;
      userTemp.surname = token.family_name;
      userTemp.email = token.email;
      // userTemp.codeRole = token.resource_access['alf-scrivania-aic'].roles[0];
      if (!token['id_aps']) {
        this.client.get<any>('/servizi/utenti/profilo-backoffice').subscribe(data => {
          this.userId = data.userId;
        });
      } else {
        this.userId = token['id_aps'];
      }

      this.userBehavior.next(userTemp);
    }
    // this.notificheModel.getNotificheUtente().subscribe(data => {
    //   this.notificheUtente$.next(this.notificheModel.convertiNotifica(data));
    // });
  }
}
