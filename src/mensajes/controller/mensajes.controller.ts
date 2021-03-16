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
} from "@nestjs/common";
import { CreateMensajeDto } from "../dto/create-mensaje-dto";
import { MensajesService } from "../services/mensajes.service";

@Controller("mensajes")
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
          .json({ mensaje: "error en la creación del mensaje" });
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
          .json({ mensaje: "error en la obtención de mensajes" });
      });
  }

  @Put(":id")
  update(
    @Body() updateMensajeDto: CreateMensajeDto,
    @Res() response,
    @Param("id") idMensaje
  ) {
    this.mensajesService
      .updateMensaje(idMensaje, updateMensajeDto)
      .then((mensaje) => {
        response.status(HttpStatus.OK).json(mensaje);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: "error en la edición del mensaje" });
      });
  }

  @Delete(":id")
  delete(@Res() response, @Param("id") idMensaje) {
    this.mensajesService
      .deleteMensaje(idMensaje)
      .then((res) => {
        response.status(HttpStatus.OK).json(res);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ mensaje: "error en la eliminación del mensaje" });
      });
  }
}
