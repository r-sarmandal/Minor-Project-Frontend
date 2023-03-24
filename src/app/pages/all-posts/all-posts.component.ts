import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {

  posts: any=[];

  constructor(private postService : PostService)
  {
  }

  ngOnInit(): void {
      this.postService.returnAllLostPost().subscribe(
        {
          next: (data) =>{
             this.posts=data
             console.log(data);
          },
          error: (err) => {
            console.log(err)
            },
          complete: () => {
            console.log("completed")
          }
        }
      );
  }

    

    displayContact(post: any)
    {
        console.log("clicked contact");
        Swal.fire("You can contact the owner at "+post.whatsappNumber+" !");
    }
}
