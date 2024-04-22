import { Solicitud } from "../../domain/entidad/Solicitud";
import { NotificationNewVenta } from "../../infraestructure/rabbitMQService/NotificationNewSolicitud";

export class NotificationNewVentaUseCase{
    constructor(readonly notificationNewVenta: NotificationNewVenta){}
    async run(solicitud: Solicitud){
        await this.notificationNewVenta.sendNotification(solicitud)
    }
}