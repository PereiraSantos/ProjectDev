import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../component/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { Project } from './project';
import { Location } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    imports: [ModalComponent, FormsModule],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',

})
export class Dashboard implements OnInit {

    constructor(private location: Location) { }

    ngOnInit(): void {
        this.createList(this.getList('projeto'));
    }

    projects: Project[] = [];

    projectData = {
        nameProject: '',
        description: ''
    };

    createList(list: any[]) {
        for (const project of list) {
            this.projects.push(new Project(1, project['name'], project['descricao']));
        }
    }

    salvar(modal: any) {
        modal.fechar();
        this.addItemToList('projeto', { 'name': this.projectData.nameProject, 'descricao': this.projectData.description });
        this.refresh();
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

}
