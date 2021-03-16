import { CreateMensajeDto } from "../dto/create-mensaje-dto";
import { MensajesService } from "../services/mensajes.service";
export declare class MensajesController {
    private mensajesService;
    constructor(mensajesService: MensajesService);
    Create(createMensajeDto: CreateMensajeDto, response: any): void;
    getAll(response: any): void;
    update(updateMensajeDto: CreateMensajeDto, response: any, idMensaje: any): void;
    delete(response: any, idMensaje: any): void;
}
