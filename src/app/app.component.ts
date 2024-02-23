import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMail';

  loginform = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    Gender: new FormControl(''),
    State: new FormControl('')
  })

  get Email() {
    return this.loginform.get('Email');
  }
  get Password() {
    return this.loginform.get('Password')
  }

  onSubmit() {
    console.log('valid?', this.loginform.valid);
    if (this.loginform.value) {
      return;
    }
    alert('Logged In')
    console.log(this.loginform.value)
  }

}
