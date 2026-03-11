import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customers-add',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './customers-add.html',
  styleUrl: './customers-add.css',
})
export class CustomersAdd implements OnInit {
  id: number | null = null;
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // Capturamos el ID de la URL
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
      this.cargarDatosCliente(this.id);
    }
  }

  cargarDatosCliente(id: number) {
    this.customerService.getCustomerById(id).subscribe({
      next: (c) => {
        this.firstName = c.firstName;
        this.lastName = c.lastName;
        this.email = c.email;
      },
      error: (err) => console.error('Error al cargar cliente', err),
    });
  }

  // Este único método servirá para CREAR y para EDITAR
 guardarCliente() {
  const customerParaEnviar = {
    id: this.id,
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
  };

  if (this.id) {
    // MODO EDICIÓN (PUT)
    this.customerService.updateCustomer(customerParaEnviar as any).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: '¡Actualizado!',
          text: 'Los datos de ' + this.firstName + ' se guardaron correctamente.',
          timer: 2000,
          showConfirmButton: false
        });
        this.router.navigate(['/lista']);
      },
      error: (err) => {
        Swal.fire('Error', 'No se pudo actualizar el cliente.', 'error');
        console.error(err);
      }
    });
  } else {
    // MODO CREACIÓN (POST)
    this.customerService.createCustomer(customerParaEnviar as any).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: '¡Cliente Creado!',
          text: 'El cliente se registró exitosamente.',
          timer: 2000,
          showConfirmButton: false
        });
        this.router.navigate(['/lista']);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Es posible que el correo ya esté en uso o el servidor no responda.',
        });
        console.error(err);
      },
    });
  }
}}
