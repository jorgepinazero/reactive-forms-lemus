import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private _pacientes: any[] = [];

  constructor() {
  }

  get pacientes(): any[] {
    return this._pacientes.slice();
  }

  addPatient(paciente: any) {
    this._pacientes.push(paciente);
  }

  replacePatient(id: number, paciente: any) {
    this._pacientes.splice(id, 1, paciente);
  }
}
