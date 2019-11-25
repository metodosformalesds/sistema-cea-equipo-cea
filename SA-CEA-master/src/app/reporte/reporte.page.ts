import { Component, OnInit } from '@angular/core';
import { BDService } from '../services/bd.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {

  fechain: Date = new Date();
  fechafin: Date = new Date();
  hoy: number;
  listadoCita: any[];
  listadoBitacora: any[];
  selectedDate: Date = new Date();
  citaOpen: boolean = false;
  bitacoraOpen: boolean = false;

  constructor(private BD: BDService,
  ) { }

  ngOnInit() {

  }

  listadocita() {
    this.citaOpen = true;
    this.bitacoraOpen = false;
    this.BD.listadocita = [];
    this.hoy = new Date().getFullYear();
    this.BD.listadoCita().then(() => {
      this.listadoCita = this.BD.listadocita;

      this.listadoCita = this.listadoCita.filter((cita) => {
        const citaFecha = new Date(cita.Fecha);
        const citaFechaAnio = citaFecha.getFullYear();
        const citaFechaMes = citaFecha.getMonth() + 1;
        const citaFechaDia = citaFecha.getDate();

        const truefechain = new Date(this.fechain);
        const truefechafin = new Date(this.fechafin);

        if (truefechain && truefechain) {
          const fechainYear = truefechain.getFullYear();
          const fechainMonth = truefechain.getMonth() + 1;
          const fechainDay = truefechain.getDate() + 1;

          const fechafinYear = truefechafin.getFullYear();
          const fechafinMonth = truefechafin.getMonth() + 1;
          const fechafinDay = truefechafin.getDate() + 1;

          return citaFechaAnio >= fechainYear &&
            citaFechaMes >= fechainMonth &&
            citaFechaDia >= fechainDay &&
            citaFechaAnio <= fechafinYear &&
            citaFechaMes <= fechafinMonth &&
            citaFechaDia <= fechafinDay
        } else {
          return true;
        }
      });
    });
  }

  listadobitacora() {
    this.bitacoraOpen = true;
    this.citaOpen = false;
    this.BD.listadobitacora = [];
    this.hoy = new Date().getFullYear();
    this.BD.listadoBitacora().then(() => {
      this.listadoBitacora = this.BD.listadobitacora;

      this.listadoBitacora = this.listadoBitacora.filter((bitacora) => {
        const bitacoraFecha = new Date(bitacora.Fecha);
        const bitacoraFechaAnio = bitacoraFecha.getFullYear();
        const bitacoraFechaMes = bitacoraFecha.getMonth() + 1;
        const bitacoraFechaDia = bitacoraFecha.getDate();

        const truefechain = new Date(this.fechain);
        const truefechafin = new Date(this.fechafin);

        if (truefechain && truefechain) {
          const fechainYear = truefechain.getFullYear();
          const fechainMonth = truefechain.getMonth() + 1;
          const fechainDay = truefechain.getDate() + 1;

          const fechafinYear = truefechafin.getFullYear();
          const fechafinMonth = truefechafin.getMonth() + 1;
          const fechafinDay = truefechafin.getDate() + 1;

          return bitacoraFechaAnio >= fechainYear &&
            bitacoraFechaMes >= fechainMonth &&
            bitacoraFechaDia >= fechainDay &&
            bitacoraFechaAnio <= fechafinYear &&
            bitacoraFechaMes <= fechafinMonth &&
            bitacoraFechaDia <= fechafinDay
        } else {
          return true;
        }
      });
    });
  }

  guardar() {
    
  }

}
