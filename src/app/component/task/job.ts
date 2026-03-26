import { Status } from "./status_enum";

export class Job {
    id: number;
    name: string;
    description: string;
    status: Status;

    constructor(id: number, name: string, description: string, status: Status) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
    }
}