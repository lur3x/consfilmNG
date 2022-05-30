import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MyErrorStateMatcher } from '../login-page/login-page.component';

@Component({
  selector: 'app-resetpage',
  templateUrl: './resetpage.component.html',
  styleUrls: ['./resetpage.component.scss'],
})
export class ResetPageComponent implements OnInit {
  form!: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }
  resetPassword(value: any) {
    this.auth.resetPassword(value);
  }
}
