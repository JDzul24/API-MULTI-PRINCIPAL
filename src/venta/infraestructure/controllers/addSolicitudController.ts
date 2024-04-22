import { Request, Response } from "express";
import { AddVentaUseCase } from "../../application/useCase/addSolicitudUseCase";

export class AddVentaController {
    constructor(readonly addVentaUseCase: AddVentaUseCase){}

    async run(req: Request, res:Response){
        const data = req.body;
        try {
            const venta = await this.addVentaUseCase.run(
                data.id_venta,
                data.contenido,
                data.precio
            )
            if (venta) {      
                res.status(201).send({
                    status: "succes",
                    data:{
                        id_solicitud: venta?.id_solicitud,
                        contenido: venta?.contenido,
                        precio: venta?.precio
                    }
                })
            }else{
                res.status(204).send({
                    status:"error",
                    data: "Ha ocurrido un error",
                })
            }
        } catch (error) {
            console.log(error);
            res.status(204).send({
                status: "error",
                data: "Ha ocurrido un error",
                messages: error
            })
        }
    }
}