import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { response } from 'express';
import { CreateMensajeDto } from '../dto/create-mensaje-dto';
import { MensajesService } from '../services/mensajes.service';

@Controller('mensajes')
export class MensajesController {
  constructor(private mensajesService: MensajesService) {}

  @Post()
  Create(@Body() createMensajeDto: CreateMensajeDto, @Res() response) {
    this.mensajesService
      .createMensaje(createMensajeDto)
      .then((mensaje) => {
        response.status(HttpStatus.CREATED).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la creación del mensaje' });
      });
  }

  @Get()
  getAll(@Res() response) {
    this.mensajesService
      .getAll()
      .then((mensajesList) => {
        response.status(HttpStatus.OK).json(mensajesList);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: 'error en la obtención de mensajes' });
      });
  }

  @Put(':id')
  update(
    @Body() updateMensajeDto: CreateMensajeDto,
    @Res() response,
    @Param('id') idMensaje,
  ) {
    this.mensajesService
      .updateMensaje(idMensaje, updateMensajeDto)
      .then((mensaje) => {
        return response;
      });
  }

  @Delete(':id')
  delete() {
    return 'mensaje eliminado';
  }
}
