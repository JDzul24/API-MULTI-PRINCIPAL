import { Solicitud } from "../../domain/entidad/Solicitud";
import INotificationNewVenta from "../../domain/servicios/INotificationAddVenta";
import amqplib from "amqplib";

export class NotificationNewVenta implements INotificationNewVenta{
    private url: any;
    private exch: any;
    
    constructor() {
        this.url = "amqp://carlos:12345@34.229.31.98";
        this.exch = "event";
    }

    async sendNotification(solicitud: Solicitud): Promise<boolean> {
        const conn = await amqplib.connect(this.url);
        const channel = await conn.createChannel();
        console.log(solicitud.id_solicitud);
        
        const status = await channel.publish(this.exch,'12345', Buffer.from(JSON.stringify(solicitud.id_solicitud)))
        
        return status
    }
}