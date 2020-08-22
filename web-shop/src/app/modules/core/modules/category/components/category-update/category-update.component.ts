import { Component, OnInit, OnChanges, Output, EventEmitter, Input, TemplateRef } from '@angular/core';
import { CategoryVM } from 'src/app/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbWindowService } from '@nebular/theme';
import { CategoryService } from 'src/app/services';
import swal from 'sweetalert2';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit, OnChanges {
  @Output() useChange: EventEmitter<CategoryVM> = new EventEmitter<CategoryVM>();
  @Input() row: CategoryVM;
  form: FormGroup;
  windowRef: any;
  constructor(
    protected readonly windowService: NbWindowService,
    protected readonly service: CategoryService,
    protected readonly fb: FormBuilder,
  ) {
    this.initForm();
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.form.get('Id').setValue(this.row ? this.row.Id : '');
    this.form.get('Name').setValue(this.row ? this.row.Name : '');

  }

  openWindow(window: TemplateRef<any>, tittle: string) {
    this.windowRef = this.windowService.open(window, { title: tittle, windowClass: 'm-auto' });
  }

  useUpdate = async () => {
    await this.service.update(this.form.value)
      .then((res) => {
        this.useChange.emit(this.form.value);
        swal.fire('Thông báo', 'Cập nhật thành công', 'success');
        this.windowRef.close();
      })
      .catch((err) => {
        swal.fire('Thông báo', 'Cập nhật thất bại! Có lỗi xảy ra', 'error');
      });
  }

  initForm = () => {
    this.form = this.fb.group({
      Id: ['', Validators.required],
      Name: ['', Validators.required],
    });
  }
}
