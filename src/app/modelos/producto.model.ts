export interface Producto{
    id: number;
    nombre: string;
    precio: number;
    disponibilidad: boolean;
    cantidad?: number; // tenia un signo de "?"
    descripcion: string;
    imagen: string;
}