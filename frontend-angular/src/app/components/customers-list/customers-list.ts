import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../customer';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-customers-list',
  imports: [RouterLink], // Para usar routerLink en el HTML
  templateUrl: './customers-list.html',
  styleUrl: './customers-list.css',
})
export class CustomersList implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.listCustomers();
  }

  listCustomers(): void {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  // MÉTODO PARA ELIMINAR
  deleteCustomer(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      this.customerService.deleteCustomer(id).subscribe({
        next: () => {
          // Filtramos la lista local para que el cambio sea instantáneo
          this.customers = this.customers.filter((c) => c.id !== id);
          console.log('Cliente eliminado con éxito');
        },
        error: (err) => console.error('Error al eliminar:', err),
      });
    }
  }

  // MÉTODO PARA EDITAR
  editCustomer(id: number): void {
    // Esto te llevará a la ruta de edición, p.ej: /edit/5
    this.router.navigate(['/edit', id]);
  }
}
