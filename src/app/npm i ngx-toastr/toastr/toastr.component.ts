import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss']
})
export class ToastrComponent implements OnInit {
  value:any;
  x:any;
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
   this.showSuccess()
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  
}
