import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core'


@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})


export class AllPostsComponent {
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  missing_posts: any=[];
  missing_keys: any=[];

  constructor(private postService : PostService)
  {
    
  }

  ngOnInit(): void {
      this.postService.returnAllLostPost().subscribe(
        {
          next: (data) =>{
             this.missing_posts=data
             console.log(data);
          },
          error: (err) => {
            console.log(err)
            },
          complete: () => {
            console.log("completed")
          }
        });

        this.postService.returnAllKeyPost().subscribe(
          {
            next: (data) =>{
               this.missing_keys=data
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
