export interface Department {
    id: number;
    name: string;
    employees_count: number;
}

export interface Interprise {
    id: number;
    name: string;
    departments: Department[];
}

export type Handler = (value: any) => string;
