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

  imageInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }
}