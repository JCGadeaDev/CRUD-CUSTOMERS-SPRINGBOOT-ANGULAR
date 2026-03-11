import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private api: string = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) {}

  // Método para obtener los clientes
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.api);
  }

  // Método para agregar un nuevo cliente
  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.api, customer);
  }

  // Obtener uno solo por ID (¡Este es el que te faltaba!)
  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.api}/${id}`);
  }
  // Método para actualizar un cliente existente
  updateCustomer(customer: Customer): Observable<Customer> {
   return this.http.put<Customer>(this.api, customer);
  }

  // Método para eliminar un cliente
  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
