import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
    selector: 'app-category',
    imports: [FormsModule],
    templateUrl: './category.html',
    styleUrl: './category.css',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Category {
    projectData = {
        id: '',
        nameTask: '',
        description: ''
    };

    salvar() { }
}