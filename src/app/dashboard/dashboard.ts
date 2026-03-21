import { Component, inject } from '@angular/core';
import { ModalComponent } from '../component/modal/modal.component';
import { ToastService } from '../services/toast.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    imports: [ModalComponent, FormsModule],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',

})
export class Dashboard {

    private toastService = inject(ToastService);

    projectData = {
        nameProject: '',
        description: ''
    };

    salvar() {
        console.log(this.projectData.nameProject)
        this.toastService.show('Usuário ou senha inválidos!', 'error');

    }

}
