import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactSectionComponent {
  private readonly fb = inject(FormBuilder);
  readonly submitted = signal(false);

  readonly form = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    empresa: ['', Validators.required],
    telefone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    cidade: ['', Validators.required],
    estado: ['', [Validators.required, Validators.maxLength(2)]],
    mensagem: ['', [Validators.required, Validators.minLength(10)]],
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // MVP: apenas simulação de captura de lead
    console.info('Lead mockado:', this.form.getRawValue());
    this.submitted.set(true);
    this.form.reset();
  }
}
