import { CarImage } from "@modules/cars/infra/typeorm/entities/CarImage";


class UploadCarImageController {
  async execute(): Promise<CarImage>
}

export { UploadCarImageController };