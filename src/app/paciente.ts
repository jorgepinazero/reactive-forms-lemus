export interface Paciente {
  age: string;
  array: Array<NumerosEmergencia>;
  bloodType: string;
  name: string;
}

export interface NumerosEmergencia {
  name: string;
  phone: string;
}
