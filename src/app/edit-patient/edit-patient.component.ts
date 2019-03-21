import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DataTransferService} from '../services/data-transfer.service';
import {Paciente, NumerosEmergencia} from '../paciente';
import {FormControl, FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  bloodType: string[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  id: number;
  paciente: Paciente = {
    age: '',
    array: [{name: '', phone: ''}],
    bloodType: '',
    name: ''
  };
  // formGroup = new FormGroup({
  //   'name': new FormControl(this.paciente.name, [Validators.required]),
  //   'age': new FormControl(this.paciente.age, [Validators.required]),
  //   'bloodType': new FormControl(this.paciente.bloodType, [Validators.required]),
  //   'arrayName': new FormControl(this.paciente.array),
  //   'arrayPhone': new FormControl(this.paciente.array)
  // });

  formGroup: FormGroup;
  arrayNumbers: FormArray;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private dataTransfer: DataTransferService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(events => {
      this.id = events.id;
    });
    this.paciente = this.dataTransfer.pacientes[this.id];
    console.log(this.paciente);
    // this.formGroup.get('name').setValue(this.paciente.name);
    // this.formGroup.get('age').setValue(this.paciente.age);
    // this.formGroup.get('bloodType').setValue(this.paciente.bloodType);
    // this.formGroup.get('arrayName').setValue(this.paciente.array.name);
    // this.formGroup.get('arrayPhone').setValue(this.paciente.array[].phone);
    this.arrayNumbers = this.formBuilder.array(this.initArray(this.paciente.array));
    this.formGroup = this.formBuilder.group({
      'name': [this.paciente.name, [Validators.required]],
      // 'name': new FormControl(this.paciente.name, [Validators.required]),
      'age': [this.paciente.age, [Validators.required]],
      'bloodType': [this.paciente.bloodType, [Validators.required]],
      'array': this.formBuilder.array(this.initArray(this.paciente.array))
    });
  }

  // TEMPLATE DRIVEN METHODS
  // add() {
  //   this.paciente.array.push({name: '', phone: ''});
  // }
  //
  //
  // remove(i: number) {
  //   this.paciente.array.splice(i, 1);
  //   console.log(this.paciente.array);
  // }
  add () {
    this.arrayNumbers = this.formGroup.get('array') as FormArray;
    this.arrayNumbers.push(this.addItemArray());
  }
  remove(i: number) {
    this.arrayNumbers = this.formGroup.get('array') as FormArray;
    this.arrayNumbers.removeAt(i);
  }


  replaceData() {
    this.paciente.array = this.arrayNumbers.value;
    this.dataTransfer.replacePatient(this.id, this.paciente);
    this.router.navigate(['../../']);
  }

  initArray(array: any[]) {
    const contacts = [];

    array.forEach(value => {
      contacts.push(this.formBuilder.group({
        'name': [value.name],
        'phone': [value.phone]
      }));
    });
    return contacts;
  }

  addItemArray(): FormGroup {
    return this.formBuilder.group({
      name: '',
      phone: ''
    });
  }

}
