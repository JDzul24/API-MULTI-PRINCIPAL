import { Solicitud } from "../entidad/Solicitud";

export interface VentaRepository{
    createVenta(
        id_solicitud:number,
        contenido:string,
        precio: number
    ): Promise<Solicitud | null>;
}