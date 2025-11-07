import type { NivelAcademico } from './nivelAcademico'

export interface Programa {
  id: number
  idNivelAcademico: number
  modalidadClases?: string
  nombre: string
  descripcion: string
  version: number
  duracionMeses: number
  costo: number
  fechaInicio: Date | string
  estado: string
  nivelAcademico: NivelAcademico
}
