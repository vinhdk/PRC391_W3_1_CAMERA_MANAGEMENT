import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CameraVM, BrandVM, CategoryVM } from 'src/app/models';
import { CameraService, CategoryService, BrandService } from 'src/app/services';
import swal from 'sweetalert2';
@Component({
  selector: 'app-camera-list',
  templateUrl: './camera-list.component.html',
  styleUrls: ['./camera-list.component.scss']
})
export class CameraListComponent implements OnInit {
  @Output() useChange: EventEmitter<CameraVM> = new EventEmitter<CameraVM>();
  rows: CameraVM[] = [];
  brands: BrandVM[] = [];
  categorys: CategoryVM[] = [];
  filterRows: CameraVM[] = [];
  row: CameraVM;
  value = '';
  constructor(
    protected readonly service: CameraService,
    protected readonly categoryService: CategoryService,
    protected readonly brandService: BrandService
  ) { }

  async ngOnInit() {
    await this.useLoad();
  }

  useLoad = async () => {
    await this.brandService.getAll()
      .then((res) => {
        this.brands = res;
      });
    await this.categoryService.getAll()
      .then((res) => {
        this.categorys = res;
      });
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

  useGetBrand = (id: string) => {
    return this.brands.find((brand) => brand.Id === id) ? this.brands.find((brand) => brand.Id === id).Name : '';
  }
  useGetCategory = (id: string) => {
    return this.categorys.find((category) => category.Id === id) ? this.categorys.find((category) => category.Id === id).Name : '';
  }
}
