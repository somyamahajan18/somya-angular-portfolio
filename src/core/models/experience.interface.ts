export interface Experience {
    id: number;
    duration: string;
    title: string;
    company: string;
    details: string[];
    showDetails?: boolean; // optional property
}
