import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    imports: [FormsModule],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class Login {


    loginData = {
        email: '',
        password: ''
    };


    constructor(private router: Router) {
    }

    fazerLogin() {

        console.log('Tentativa de login com:', this.loginData);

        if (this.loginData.email === 'admin' && this.loginData.password === '1234') {
            alert('Login realizado com sucesso!');
            this.router.navigate(['/dashboard']);
        } else {
            alert('Usuário ou senha inválidos.');
        }
    }
}
