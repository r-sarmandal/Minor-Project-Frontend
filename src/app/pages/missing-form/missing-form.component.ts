import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-missing-form',
  templateUrl: './missing-form.component.html',
  styleUrls: ['./missing-form.component.css']
})
export class MissingFormComponent {

  constructor(private postService:PostService, private snack:MatSnackBar)
  {
      
  }

  public lostPost={
    itemName:'',
    tag:'',
    whatsappNumber:'',
    cashPrize:'',
    description:'',
  };

  public keyLostPost={
    tag:'keys',
    whatsappNumber:'',
    cashPrize:'',
    block:'',
    roomNumber:''
  };

  public idLostPost={
    tag:'ID-Card',
    whatsappNumber:'',
    cashPrize:'',
    registrationNumber:'',
    studentName:''
  };

  lostPostFormSubmit()
  {
    this.postService.saveLostPost(this.lostPost).subscribe(
      {
        next: (data) => console.log(data),
        error: (err) => {
          console.log(err)
          this.snack.open("Something went wrong","X");
        },
        complete: () => {
          Swal.fire("Post Shared !", "Let's hope someone finds your item !", 'success');
          console.log("completed")
        }
      });
    }

    keyLostPostFormSubmit()
    {
      this.postService.saveKeyLostPost(this.keyLostPost).subscribe(
        {
          next: (data) => console.log(data),
          error: (err) => {
            console.log(err)
            this.snack.open("Something went wrong","X");
          },
          complete: () => {
            Swal.fire("Post Shared !", "Let's hope someone finds your keys !", 'success');
            console.log("completed")
          }
        });
    }

    idLostPostFormSubmit()
    {
      this.postService.saveIdLostPost(this.idLostPost).subscribe(
        {
          next: (data) => console.log(data),
          error: (err) => {
            console.log(err)
            this.snack.open("Something went wrong","X");
          },
          complete: () => {
            Swal.fire("Post Shared !", "Let's hope someone finds your ID Card !", 'success');
            console.log("completed")
          }
        });
    }

  imageInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }
}
