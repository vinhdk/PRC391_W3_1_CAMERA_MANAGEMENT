import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BrandService } from 'src/app/services';
import { BrandVM } from 'src/app/models';
import swal from 'sweetalert2';
@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  @Output() useChange: EventEmitter<BrandVM> = new EventEmitter<BrandVM>();
  rows: BrandVM[] = [];
  filterRows: BrandVM[] = [];
  row: BrandVM;
  value = '';
  constructor(protected readonly service: BrandService) { }

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
