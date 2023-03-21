import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userService:UserService, private snack:MatSnackBar)
  {
      
  }

  public user={
    username:'',
    phoneNumber:'',
    password:''
  };

  formSubmit()
  {
    if(this.user.username=='' || this.user.username==null)
    {
      this.snack.open('Please enter a username !','X');
      return;
    }

    if(this.user.phoneNumber=='' || this.user.phoneNumber==null)
    {
      this.snack.open('Please enter a valid phone number !','X');
      return;
    }

    if(this.user.password=='' || this.user.password==null)
    {
      this.snack.open('Please enter a password !','X');
      return;
    }

    if(/^\d{10}$/.test(this.user.phoneNumber)==false)
    {
      this.snack.open('Please enter a valid phone number !','X');
      return;
    }

    this.userService.addUser(this.user).subscribe(
      {
        next: (data) => console.log(data),
        error: (err) => {
          console.log(err)
          this.snack.open("Something went wrong. Try entering a different username.","X");
        },
        complete: () => {
          Swal.fire("Sign Up Succesful !", "Congrats", 'success');
          console.log("completed")
        }
      });
    }
}

