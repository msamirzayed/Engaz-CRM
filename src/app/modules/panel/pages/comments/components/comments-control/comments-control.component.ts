import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommentsService } from '../../service/comments.service';

@Component({
  selector: 'app-comments-control',
  templateUrl: './comments-control.component.html',
  styleUrls: ['./comments-control.component.scss'],
})
export class CommentsControlComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  post: any;

  get id() {
    return this.route.snapshot.params.id;
  }
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: CommentsService
  ) {}

  ngOnInit() {
    this.initForm();
    this.getData();
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });
  }

  getData() {
    if (!this.id) return;

    this.service.getOne(this.id).subscribe((resp) => {
      this.form.patchValue(resp);
    });
  }

  save() {
    const value = this.form.value;

    const serviceMethod = this.id
      ? this.service.updateOne(this.id, value)
      : this.service.addOne(value);

    serviceMethod.subscribe((resp) => {
      this.router.navigate(['/panel/comments']);
    });
  }
}
