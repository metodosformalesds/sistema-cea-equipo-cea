import { Component, OnInit } from '@angular/core';
import { BDService } from '../services/bd.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.page.html',
  styleUrls: ['./bitacora.page.scss'],
})
export class bitacoraPage implements OnInit {
  hoy: number;
  matricula: string;
  carrera: string;
  motivo: string;
  fecha: string;
  nombre: string;
  id = '';
  listadoBitacora: any[];
  Editar: boolean = false;
  selectedItem;
  errorMessage: string;
  validation_form: FormGroup;
  validation_messages = {
    'nombre' :[
      {type: 'required', message: 'Requiere llenar este campo.'},
      {type: 'pattern', message: 'Ingrese un nombre valido'}
    ],
    'matricula' :[
      {type: 'required', message: 'Requiere llenar este campo.'},
      {type: 'pattern', message: 'Ingrese una matricula valida'}
    ],
    'carrera' :[
      {type: 'required', message: 'Requiere llenar este campo.'},
      {type: 'pattern', message: 'Ingrese una carrera valida'}
    ],
    'motivo' :[
      {type: 'required', message: 'Requiere llenar este campo.'},
      {type: 'pattern', message: 'Ingrese un motivo valido'}
    ]

  }

  constructor(private BD: BDService,private formBuilder: FormBuilder, private navCtrl: NavController,) { }

  ngOnInit() {
    console.log(this.listadoBitacora);
    this.listadobitacora();
  }

  guardar() {
    this.BD.registroBitacora(this.id, this.nombre, this.fecha, this.matricula, this.carrera, this.motivo);
    this.limpiar();
  }

  limpiar() {
    this.matricula = '';
    this.carrera = '';
    this.motivo = '';
    this.fecha = '';
    this.nombre = '';
    this.listadobitacora();
  }

  listadobitacora() {
    this.BD.listadobitacora = [];
    this.hoy = new Date().getFullYear();
    this.BD.listadoBitacora();
    this.listadoBitacora = this.BD.listadobitacora;
  }

  borrar(ID: string) {
    this.BD.deleteBitacora(ID);
    console.log(this.listadoBitacora);
    this.listadobitacora();

    this.nombre = ''
    this.fecha = ''
    this.matricula = ''
    this.carrera = ''
    this.motivo = ''

  }

  editar(ID: string) {
    this.BD.updateBitacora(ID, this.nombre, this.fecha, this.matricula, this.carrera, this.motivo);
    this.Editar = false;
    console.log(this.listadoBitacora);
    this.listadobitacora();
    this.nombre = '';
    this.fecha = '';
    this.matricula = '';
    this.carrera = '';
    this.motivo = '';
  }

  editobitacora(item) {
    this.selectedItem = item;
    this.Editar = true;
  }

}
