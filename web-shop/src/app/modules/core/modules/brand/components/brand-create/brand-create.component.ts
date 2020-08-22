import { Component, OnInit, TemplateRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbWindowService } from '@nebular/theme';
import { BrandService } from 'src/app/services';
import { BrandVM } from 'src/app/models';
import swal from 'sweetalert2';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.scss']
})
export class BrandCreateComponent implements OnInit {
  @Output() useChange: EventEmitter<BrandVM> = new EventEmitter<BrandVM>();
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

  openWindow(window: TemplateRef<any>, tittle: string) {
    this.windowRef = this.windowService.open(window, { title: tittle, windowClass: 'm-auto' });
  }

  useCreate = async () => {
    await this.service.insert(this.form.value)
      .then((res) => {
        this.useChange.emit(this.form.value);
        swal.fire('Thông báo', 'Thêm mới thành công', 'success');
        this.windowRef.close();
        this.form.reset();
      })
      .catch((err) => {
        swal.fire('Thông báo', 'Thêm mới thất bại! Có lỗi xảy ra', 'error');
      });
  }

  initForm = () => {
    this.form = this.fb.group({
      Name: ['', Validators.required],
    });
  }
}
