import { Solicitud } from "../entidad/Solicitud";

export default interface INotificationNewVenta{
    sendNotification(solicitud: Solicitud):Promise<boolean>;
}