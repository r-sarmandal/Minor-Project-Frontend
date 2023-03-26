import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-found-form',
  templateUrl: './found-form.component.html',
  styleUrls: ['./found-form.component.css']
})
export class FoundFormComponent {

  constructor(private postService:PostService, private snack:MatSnackBar)
  {
      
  }

  public generalFoundPost={
    itemName:'',
    tag:'',
    whatsappNumber:'',
    submittedTo:'',
    foundAtLocation:'',
  };

  public idFoundPost={
    registrationNumber:'',
    studentName:'',
    whatsappNumber:'',
    submittedTo:'',
    foundAtLocation:'',
    tag:'ID-Card',
  };

  public keyFoundPost={
    blockNumber:'',
    roomNumber:'',
    whatsappNumber:'',
    submittedTo:'',
    foundAtLocation:'',
    tag:'Keys',
  };

  generalFoundPostFormSubmit()
  {
    this.postService.saveGeneralFoundPost(this.generalFoundPost).subscribe(
      {
        next: (data) => console.log(data),
        error: (err) => {
          console.log(err)
          this.snack.open("Something went wrong","X");
        },
        complete: () => {
          Swal.fire("Post Shared !", "Let's hope the person finds their item !", 'success');
          console.log("completed")
        }
      });
    }

    idFoundPostFormSubmit()
    {
      this.postService.saveIdFoundPost(this.idFoundPost).subscribe(
        {
          next: (data) => console.log(data),
          error: (err) => {
            console.log(err)
            this.snack.open("Something went wrong","X");
          },
          complete: () => {
            Swal.fire("Post Shared !", "Let's hope the person finds their item !", 'success');
            console.log("completed")
          }
        });
    }

    keyFoundPostFormSubmit()
    {
      this.postService.saveKeyFoundPost(this.keyFoundPost).subscribe(
        {
          next: (data) => console.log(data),
          error: (err) => {
            console.log(err)
            this.snack.open("Something went wrong","X");
          },
          complete: () => {
            Swal.fire("Post Shared !", "Let's hope the person finds their item !", 'success');
            console.log("completed")
          }
        });
    }



  imageInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

}
