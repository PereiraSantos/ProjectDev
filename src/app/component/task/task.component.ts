import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ModalComponent } from "../modal/modal.component";
import { FormsModule } from "@angular/forms";
import { Job } from "./job";
import { Status } from "./status_enum";

@Component({
    selector: 'app-task',
    imports: [FormsModule, ModalComponent],
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task implements OnInit {

    constructor(private cdr: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.createList(this.getList('tarefa'));
    }

    projectData = {
        id: '',
        nameTask: '',
        description: ''
    };


    jobs: Job[] = [];

    createList(list: any[]) {
        for (const job of list) {
            this.jobs.push(new Job(job['id'], job['name'], job['description'], job['status']));
        }
    }

    open(modal: any, item: Job) {
        modal.abrir()
        this.projectData.id = item.id.toString();
        this.projectData.nameTask = item.name;
        this.projectData.description = item.description;
    }

    salvar(modal: any) {
        modal.fechar();
        this.addItemToList('tarefa', { 'id': this.getList('tarefa').length, 'name': this.projectData.nameTask, 'description': this.projectData.description, 'status': Status.Start });
    }

    update(modal: any) {
        const select = document.getElementById('status-select') as HTMLInputElement;
        modal.fechar();
        this.updateItem(new Job(parseInt(this.projectData.id), this.projectData.nameTask, this.projectData.description, parseInt(select.value)));
        this.updateComponent();
    }

    updateItem(itemAtualizado: Job) {

        const data = localStorage.getItem('tarefa');

        if (data) {
            let lista: Job[] = JSON.parse(data);
            const index = lista.findIndex(i => i.id === itemAtualizado.id);

            if (index !== -1) {

                lista[index] = itemAtualizado;
                localStorage.setItem('tarefa', JSON.stringify(lista));
            }
        }

        this.updateComponent();
    }

    saveList(key: string, list: any[]): void {
        localStorage.setItem(key, JSON.stringify(list));
    }

    getList(key: string): any[] {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    }

    addItemToList(key: string, newItem: any): void {
        const list = this.getList(key);
        list.push(newItem);
        this.saveList(key, list);
    }

    refresh() {
        window.location.reload();
    }

    getStart(): Job[] {
        return this.jobs.filter((n) => n.status === Status.Start);
    }

    getMake(): Job[] {
        return this.jobs.filter((n) => n.status === Status.Make);
    }

    getFinish(): Job[] {
        return this.jobs.filter((n) => n.status === Status.Finish);
    }

    updateComponent() {
        this.cdr.detectChanges();
    }
}