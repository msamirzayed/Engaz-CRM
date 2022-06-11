import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.scss'],
})
export class PostControlComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  post: any;

  get id() {
    return this.route.snapshot.params.id;
  }
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: PostsService
  ) {}

  ngOnInit() {
    this.initForm();
    this.getData();
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      title: ['', [Validators.required]],
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
      this.router.navigate(['/panel/posts']);
    });
  }
}
