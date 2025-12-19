import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post-service.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from "@angular/common";
import { Post } from '../../models/post';
import { Comment } from '../../models/comment';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
  postService=inject(PostService)
  route = inject(ActivatedRoute)
  post? : Post;
  comments : Comment[] = [];
  userId:number = 0
  commentText:string='';
  numericId : number = 0;
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.numericId = Number(id);
    this.postService.getPostById(this.numericId).subscribe((res:any)=>{
      this.post = res
      console.log(res)
    })
    this.postService.getPostComments(this.numericId).subscribe((res:any)=> {
      this.comments = res.comments
      console.log(res)
    })
  }
  submitComment() {
    const data = {
      userId: this.userId,
      body: this.commentText,
      postId: this.numericId
    }
    this.postService.addComment(data).subscribe((res)=>{
      console.log(res);
      this.postService.getPostComments(this.numericId).subscribe((res:any)=> {
        this.comments = res.comments
        console.log(res)
      })
    })
  }
}
