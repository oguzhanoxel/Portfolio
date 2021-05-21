import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.css']
})
export class CommentsPageComponent implements OnInit {

  comments: Comment[];
  commentAddForm:FormGroup;

  constructor(
    private commentService: CommentService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.getComments();
    this.createCommentAddForm();
  }

  getComments(): void {
    this.commentService.getComments().subscribe(response => {
      let tempcomments = response.sort((a, b) => b.id - a.id);
      this.comments = tempcomments
    })
  }

  createCommentAddForm(){
    this.commentAddForm = this.formBuilder.group({
      content:["",Validators.required],
    });
  }

  createComment(){
    if(this.commentAddForm.valid){
      let comment = Object.assign({}, this.commentAddForm.value)
      console.log(comment)
      this.commentService.createComment(comment).subscribe( response => {
        this.getComments();
        this.commentAddForm.reset();
      })
    }
  }

  deleteComment(comment:Comment){
    if(confirm("Are you sure you want to delete comment ?")){
      this.commentService.deleteComment(comment.id).subscribe(response =>{
        this.getComments();
      });
    }
  }

}
