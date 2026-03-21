import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { ToastContainerComponent } from '../component/toast-container.component';


@Component({
    selector: 'app-login',
    imports: [FormsModule, ToastContainerComponent],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class Login {
    private toastService = inject(ToastService);

    loginData = {
        email: '',
        password: ''
    };

    constructor(private router: Router) { }

    doLogin() {
        if (this.loginData.email === 'admin' && this.loginData.password === '1234') {
            this.router.navigate(['/dashboard']);
        } else {
            this.toastService.show('Usuário ou senha inválidos!', 'error');
        }
    }
}
