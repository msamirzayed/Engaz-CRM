import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../../../../../core/services';
import { CommentsService } from '../../service/comments.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.scss'],
})
export class AllCommentsComponent implements OnInit {
  comments: any;

  constructor(
    private service: CommentsService,
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((resp) => (this.comments = resp));
  }

  onEdit(id: string) {
    this.router.navigate(['/panel/comments/control', id]);
  }

  onDelete(id: string) {
    this.service
      .deleteOne(id, this.comments)
      .subscribe((resp) => (this.comments = resp));
  }

  goToAdd() {
    this.router.navigate(['/panel/comments/control']);
  }

  goToPosts() {
    this.router.navigate(['/panel/posts']);
  }

  logout() {
    this.storage.clearStorage();
  }
}
