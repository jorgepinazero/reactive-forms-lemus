import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DataTransferService} from '../services/data-transfer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  bloodType: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  array = new FormArray([]);
  nameCtrl = new FormControl('Jack Rakkan', [Validators.required, Validators.email]);
  formGroup = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'age': new FormControl('', [Validators.required]),
    'bloodType': new FormControl('', [Validators.required]),
    'array': this.array
  });


  constructor( private router: Router,
               private dataTransfer: DataTransferService) {
  }

  ngOnInit() {
  }

  send() {
    console.log(this.formGroup);
    this.router.navigate(['../']);
    this.dataTransfer.addPatient(this.formGroup.value);
  }

  add() {
    if (this.array.valid) {
      this.array.push(this._addContactNumber());
    }
    console.log(this.array);
  }

  remove(i: number) {
    console.log(i);
    this.array.removeAt(i);
  }

  private _addContactNumber() {
    return new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'phone': new FormControl('', Validators.required)
    });
  }

}
