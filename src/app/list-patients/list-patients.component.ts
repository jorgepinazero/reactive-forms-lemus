import { Component, OnInit } from '@angular/core';
import {DataTransferService} from '../services/data-transfer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit {
  listPacientes: any [] = [];

  constructor( private dataTransfer: DataTransferService,
               private router: Router) { }

  ngOnInit() {
    this.listPacientes = this.dataTransfer.pacientes;
    console.log(this.listPacientes);
  }

  watchAll(i: number) {
    this.router.navigate(['../', i]);
  }

  editPatient(i: number) {
    this.router.navigate(['../', i, 'edit']);
  }

}
