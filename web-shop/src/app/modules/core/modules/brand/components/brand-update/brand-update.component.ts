import { Component, OnInit, TemplateRef, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbWindowService } from '@nebular/theme';
import { BrandService } from 'src/app/services';
import { BrandVM } from 'src/app/models';
import swal from 'sweetalert2';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.scss']
})
export class BrandUpdateComponent implements OnInit, OnChanges {
  @Output() useChange: EventEmitter<BrandVM> = new EventEmitter<BrandVM>();
  @Input() row: BrandVM;
  form: FormGroup;
  windowRef: any;
  constructor(
    protected readonly windowService: NbWindowService,
    protected readonly service: BrandService,
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
