export function camelCaseToWords(label: string): string {
  return label
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Inserta un espacio antes de cada mayúscula
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // Maneja siglas como "HTMLParser" -> "HTML Parser"
    .trim(); // Elimina espacios iniciales/finales
}
