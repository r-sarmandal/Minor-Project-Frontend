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

    if(this.lostPost.itemName.trim()=='' || this.lostPost.itemName==null
      || this.lostPost.tag.trim()=='' || this.lostPost.tag==null
      || this.lostPost.description.trim()=='' || this.lostPost.description==null
      || this.lostPost.cashPrize.trim()=='' || this.lostPost.cashPrize==null
    )
  {
    this.snack.open("Please do not leave any field blank", "X");
    return;
  }

  if(/^\d{10}$/.test(this.lostPost.whatsappNumber)==false)
  {
    this.snack.open('Please enter a valid phone number !','X');
      return;
  }

  

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

      if(this.keyLostPost.block.trim()=='' || this.keyLostPost.block==null
      || this.keyLostPost.roomNumber.trim()=='' || this.keyLostPost.roomNumber==null
    )
    {
      this.snack.open("Please do not leave any field blank !", "X");
      return;
    }

    if(^\d{3}$.test(this.lostPost.whatsappNumber)==false)
  {
    this.snack.open('Please enter a valid phone number !','X');
      return;
  }
  {
    this.snack.open("Username is required !", "X");
    return;
  }

  if(/^\d{10}$/.test(this.lostPost.whatsappNumber)==false)
  {
    this.snack.open('Please enter a valid phone number !','X');
      return;
  }

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
