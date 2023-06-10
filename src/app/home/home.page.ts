import { Component } from '@angular/core';
import { HistoryService } from '../service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: string | undefined ;
  address: string | undefined;
  nik: string | undefined;
  tempattanggallahir:any;
  golongandarah: any ;
  agama: any;
  pekerjaan: any;
  kewarganegaraan: any;
  statusPerkawinan: any;
  berlakuhingga: any;



  // Other form fields

  constructor(private historyService: HistoryService, private router: Router) {}


  submitForm() {
    const data = {
      name: this.name,
      address: this.address,
      nik: this.nik
    };

    this.historyService.addToHistory(data);
    this.router.navigate(['/history']); // Navigasi ke halaman riwayat setelah submit
  }
}
