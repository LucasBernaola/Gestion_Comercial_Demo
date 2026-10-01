export type OrderStatus = "Pagado" | "Pendiente" | "Preparando" | "Enviado";
export interface Order { id: string; customer: string; initials: string; amount: number; status: OrderStatus; date: string; day: number; channel: "Tienda" | "WhatsApp" | "Web"; }
export const orders: Order[] = [
  { id: "#1048", customer: "Marina Costa", initials: "MC", amount: 184500, status: "Pagado", date: "30 sep, 10:42", day: 30, channel: "Web" },
  { id: "#1047", customer: "Estudio Norte", initials: "EN", amount: 96000, status: "Preparando", date: "29 sep, 09:18", day: 29, channel: "WhatsApp" },
  { id: "#1046", customer: "Tomás Aguirre", initials: "TA", amount: 52200, status: "Pendiente", date: "28 sep, 18:31", day: 28, channel: "Tienda" },
  { id: "#1045", customer: "Casa Umbral", initials: "CU", amount: 218900, status: "Enviado", date: "25 sep, 16:04", day: 25, channel: "Web" },
  { id: "#1044", customer: "Lucía Ferreyra", initials: "LF", amount: 74500, status: "Pagado", date: "22 sep, 11:26", day: 22, channel: "Tienda" },
  { id: "#1043", customer: "Marina Costa", initials: "MC", amount: 48900, status: "Enviado", date: "18 sep, 14:10", day: 18, channel: "Web" },
  { id: "#1042", customer: "Taller Alameda", initials: "TA", amount: 145000, status: "Pagado", date: "14 sep, 12:05", day: 14, channel: "WhatsApp" },
  { id: "#1041", customer: "Casa Umbral", initials: "CU", amount: 62400, status: "Enviado", date: "09 sep, 15:32", day: 9, channel: "Tienda" },
  { id: "#1040", customer: "Sofía Méndez", initials: "SM", amount: 97800, status: "Pagado", date: "04 sep, 10:20", day: 4, channel: "Web" },
];
export const products = [
  { name: "Lámpara Nido", sku: "LUM-014", stock: 3, minimum: 6, price: 48900, category: "Iluminación" },
  { name: "Silla Aura", sku: "MOB-032", stock: 5, minimum: 8, price: 72500, category: "Mobiliario" },
  { name: "Mesa lateral Ocre", sku: "MOB-041", stock: 2, minimum: 4, price: 62400, category: "Mobiliario" },
  { name: "Florero Siena", sku: "DEC-018", stock: 18, minimum: 6, price: 26100, category: "Decoración" },
  { name: "Almohadón Lino", sku: "TEX-009", stock: 24, minimum: 10, price: 18500, category: "Textiles" },
  { name: "Espejo Arco", sku: "DEC-027", stock: 9, minimum: 3, price: 96000, category: "Decoración" },
];
export const money = (value: number) => new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(value);
