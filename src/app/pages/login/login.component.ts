import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private snack:MatSnackBar, private login:LoginService)
  {
      
  }

loginData={
  username:'',
  password:''
};

formSubmit()
{
  console.log("login button clicked");

  if(this.loginData.username.trim()=='' || this.loginData.username==null)
  {
    this.snack.open("Username is required !", "X");
    return;
  }

  if(this.loginData.password.trim()=='' || this.loginData.password==null)
  {
    this.snack.open("Password is required !", "X");
    return;
  }

  this.login.generateToken(this.loginData).subscribe({
    next: (data) => console.log(data),
    error: (err) => {
        console.log(err)
        console.log(this.login.generateToken(this.loginData));
        this.snack.open("Something went wrong..","X");
      }
    });
}

}
