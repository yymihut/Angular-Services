import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe((status: string) =>
      alert('new status' + status)
    );
  } //service tb sa aiba exact numele clasei din AccountsService
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}
