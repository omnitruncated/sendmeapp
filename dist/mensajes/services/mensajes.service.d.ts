import { CreateMensajeDto } from "src/mensajes/dto/create-mensaje-dto";
import { Mensaje } from "src/mensajes/entities/mensaje.entity";
import { Repository } from "typeorm";
export declare class MensajesService {
    private readonly mensajeRepository;
    constructor(mensajeRepository: Repository<Mensaje>);
    getAll(): Promise<Mensaje[]>;
    createMensaje(mensajeNuevo: CreateMensajeDto): Promise<Mensaje>;
    updateMensaje(idMensaje: number, mensajeActualizar: CreateMensajeDto): Promise<Mensaje>;
    deleteMensaje(idMensaje: number): Promise<any>;
}
