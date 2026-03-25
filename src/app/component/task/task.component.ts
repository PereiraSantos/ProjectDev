import { Component } from "@angular/core";
import { ModalComponent } from "../modal/modal.component";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-task',
    imports: [FormsModule, ModalComponent],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',

})
export class Task {

    projectData = {
        nameProject: '',
        description: ''
    };



    salvar(modal: any) {
        modal.fechar();

    }
}