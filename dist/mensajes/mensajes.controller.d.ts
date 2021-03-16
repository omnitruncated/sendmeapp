import { CreateMensajeDto } from './dto/create-mensaje-dto';
export declare class MensajesController {
    Create(CreateMensajeDto: CreateMensajeDto): string;
    getAll(): string;
    update(updateMensajeDto: CreateMensajeDto): string;
    delete(): string;
}
