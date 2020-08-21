import { Component, OnInit, Output, EventEmitter, TemplateRef } from '@angular/core';
import { RoleVM } from 'src/app/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbWindowService } from '@nebular/theme';
import { RoleService } from 'src/app/services';
import swal from 'sweetalert2';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent implements OnInit {
  @Output() useChange: EventEmitter<RoleVM> = new EventEmitter<RoleVM>();
  form: FormGroup;
  windowRef: any;
  constructor(
    protected readonly windowService: NbWindowService,
    protected readonly service: RoleService,
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
