import { Solicitud } from "../../domain/entidad/Solicitud";
import { VentaRepository } from "../../domain/interfaz/ventaRepository";
import { NotificationNewVentaUseCase } from "../services/NotificationNewVentaUseCase";

export class AddVentaUseCase{
    constructor(readonly ventaRepository: VentaRepository, readonly sendNotification: NotificationNewVentaUseCase){}

    async run(
        id_venta:number,
        contenido: string,
        precio: number
    ): Promise<Solicitud|null> {

        try {
            const venta:any = await this.ventaRepository.createVenta(
                id_venta,
                contenido,
                precio
            )
            if (venta) {
               this.sendNotification.run(venta)
            }
            return venta;
        } catch (error) {
            console.log("Error al agregar la venta:", error);
            return null;
        }
    }
}