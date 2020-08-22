import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RoleVM } from 'src/app/models';
import { RoleService } from 'src/app/services';
import swal from 'sweetalert2';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {
  @Output() useChange: EventEmitter<RoleVM> = new EventEmitter<RoleVM>();
  rows: RoleVM[] = [];
  filterRows: RoleVM[] = [];
  row: RoleVM;
  value = '';
  constructor(protected readonly service: RoleService) { }

  async ngOnInit() {
    await this.useLoad();
  }

  useLoad = async () => {
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
    this.filterRows = this.rows.filter((row) => row.Name.toLowerCase().includes(this.value.toLowerCase()));
  }

  useRemove = async () => {
    swal.fire({
      title: 'Quyết định xóa?',
      icon: 'warning',
      text: 'Bạn sẽ không thể hồi phục lại ban đầu!',
      showCancelButton: true,
      confirmButtonText: 'Xác nhận, xóa!',
      cancelButtonText: 'Suy nghĩ lại!',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.value) {
        this.service.delete(this.row.Id)
          .then((res) => {
            swal.fire('Thông báo', 'Xóa thành công', 'success');
            this.filterRows = this.filterRows.filter((row) => row.Id !== this.row.Id);
            this.useSelect({ selected: [undefined] });
          }).catch((err) => {
            swal.fire('Thông báo', 'Xóa thất bại', 'error');
          });
      }
    });
  }
}
