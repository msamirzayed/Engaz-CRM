import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../../../../../core/services';
import { PostsService } from '../../service/posts.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent implements OnInit {
  posts: any;

  constructor(
    private service: PostsService,
    private router: Router,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((resp) => (this.posts = resp));
  }

  onEdit(id: string) {
    this.router.navigate(['/panel/posts/control', id]);
  }

  onDelete(id: string) {
    this.service
      .deleteOne(id, this.posts)
      .subscribe((resp) => (this.posts = resp));
  }

  goToAdd() {
    this.router.navigate(['/panel/posts/control']);
  }

  goToComments() {
    this.router.navigate(['/panel/comments']);
  }

  logout() {
    this.storage.clearStorage();
  }
}
