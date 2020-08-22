import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountVM, RoleVM } from 'src/app/models';
import { AccountService, RoleService } from 'src/app/services';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  @Output() useChange: EventEmitter<AccountVM> = new EventEmitter<AccountVM>();
  rows: AccountVM[] = [];
  filterRows: AccountVM[] = [];
  row: AccountVM;
  roles: RoleVM[] = [];
  value = '';
  constructor(
    protected readonly service: AccountService,
    protected readonly roleService: RoleService
  ) { }

  async ngOnInit() {
    await this.useLoad();
  }

  useLoad = async () => {
    await this.roleService.getAll()
      .then((res) => this.roles = res);
    await this.service.getAll()
      .then((res) => {
        this.rows = res;
        this.useFilter(this.value);
      });
  }
  useSelect = ({ selected }) => {
    this.row = selected[0];
    this.useChange.emit(this.row);
  }

  useFilter = (value: string) => {
    this.value = value;
    this.filterRows = this.rows.filter((row) => row.Fullname.toLowerCase().includes(this.value.toLowerCase()));
  }

  useGetRole = (id: string) => {
    return this.roles.find((role) => role.Id === id) ? this.roles.find((role) => role.Id === id).Name : '';
  }
}
