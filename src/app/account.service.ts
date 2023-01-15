import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()     //daca vrem sa injectam in acest serviciu info din exterior
                  // de exemplu un alt serviciu, Logging.service

export class AccountsService {
  constructor(private logare: LoggingService){}

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  addAccount(name:string, status:string) {
    this.accounts.push({name: name, status: status});
    this.logare.logStatusChange(status);
  }
  updateStatus(id:number, status:string) {
    this.accounts[id].status = status;
    this.logare.logStatusChange(status);
  }
}
