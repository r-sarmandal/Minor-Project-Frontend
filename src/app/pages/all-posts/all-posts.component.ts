import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core'
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})


export class AllPostsComponent {
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  missing_posts: any=[];
  missing_keys: any=[];
  found_id: any=[];
  pagedList: any= [];
  breakpoint: number = 3;
  length: number = 0;
  pageSize: number = 3;  //displaying three cards each row
  pageSizeOptions: number[] = [3, 6, 9, 12];
  
  constructor(private postService : PostService)
  {
    
  }

  ngOnInit(): void {

      this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
      this.postService.returnAllLostPost().subscribe(
        {
          next: (data) =>{
             this.missing_posts=data;
             console.log(data);
          },
          error: (err) => {
            console.log(err)
            },
          complete: () => {
            console.log("completed")
          }
        });

        this.postService.returnAllKeyFoundPost().subscribe(
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

      this.postService.returnAllIDPost().subscribe(
        {
          next: (data) =>{
             this.found_id=data
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

        
        this.pagedList = this.missing_posts.slice(0, 3);
        this.length = this.missing_posts.length;
  }

  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedList = this.missing_posts.slice(startIndex, endIndex);
  }

  onResize(event:any) { //to adjust to screen size
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }

    

    displayContact(post: any)
    {
        console.log("clicked contact");
        Swal.fire("You can contact the owner at "+post.whatsappNumber+" !");
    }

}
