import { AddVentaController } from "../controllers/addSolicitudController";
import { AddVentaUseCase } from "../../application/useCase/addSolicitudUseCase";
import { MysqlVentaRepository } from "../repository/Mysqlsolicitudrepository";
import { NotificationNewVenta } from "../rabbitMQService/NotificationNewSolicitud";
import { NotificationNewVentaUseCase } from "../../application/services/NotificationNewVentaUseCase";

export const mysqlVentaRepository = new MysqlVentaRepository();
export const notificationNewVenta = new NotificationNewVenta();
export const servicesNotification = new NotificationNewVenta();
export const  servicesNotificationUseCase = new NotificationNewVentaUseCase(servicesNotification);

export const addVentaUseCase = new AddVentaUseCase(mysqlVentaRepository, servicesNotificationUseCase);
export const addVentaController = new AddVentaController(addVentaUseCase)