// Eliminar la importación de 'langchain/models' (no existe)
// Usar un modelo mock para evitar errores (puedes integrar un modelo real más adelante)

export type PropertyFeatures = {
  area: number;        // Metros cuadrados
  bedrooms: number;    // Cantidad de habitaciones
  location: string;    // Ubicación (ej: "CABA, Argentina")
};

export async function predictPrice(features: PropertyFeatures): Promise<number> {
  // Modelo mock para desarrollo (simula una predicción)
  const basePrice = features.area * 500 + features.bedrooms * 20000;
  return Math.round(basePrice * (features.location === "CABA, Argentina" ? 1.5 : 1));
}
