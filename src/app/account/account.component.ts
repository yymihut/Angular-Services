import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private accountService: AccountsService
  ) { } //service tb sa aiba exact numele clasei din logging.service.ts

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.accountService.statusUpdated.emit(status);
  }
}
