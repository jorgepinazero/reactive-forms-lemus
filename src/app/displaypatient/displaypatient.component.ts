import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DataTransferService} from '../services/data-transfer.service';

@Component({
  selector: 'app-displaypatient',
  templateUrl: './displaypatient.component.html',
  styleUrls: ['./displaypatient.component.css']
})
export class DisplaypatientComponent implements OnInit {
  id: any;
  paciente = {};

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private dataTransfer: DataTransferService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( events => {
      this.id = events.id;
      console.log('id: ' + this.id);
    });
    this.paciente = this.dataTransfer.pacientes[this.id];
    console.log(this.paciente);
  }

}
