export type OrderStatus = "Pagado" | "Pendiente" | "Preparando" | "Enviado";

export interface Order {
  id: string;
  customer: string;
  initials: string;
  amount: number;
  status: OrderStatus;
  date: string;
  channel: "Tienda" | "WhatsApp" | "Web";
}

export const orders: Order[] = [
  { id: "#1048", customer: "Marina Costa", initials: "MC", amount: 184500, status: "Pagado", date: "Hoy, 10:42", channel: "Web" },
  { id: "#1047", customer: "Estudio Norte", initials: "EN", amount: 96000, status: "Preparando", date: "Hoy, 09:18", channel: "WhatsApp" },
  { id: "#1046", customer: "Tomás Aguirre", initials: "TA", amount: 52200, status: "Pendiente", date: "Ayer, 18:31", channel: "Tienda" },
  { id: "#1045", customer: "Casa Umbral", initials: "CU", amount: 218900, status: "Enviado", date: "Ayer, 16:04", channel: "Web" },
  { id: "#1044", customer: "Lucía Ferreyra", initials: "LF", amount: 74500, status: "Pagado", date: "Ayer, 11:26", channel: "Tienda" },
];

export const sales = [42, 56, 48, 72, 65, 88, 82, 105, 94, 121, 112, 138];

export const products = [
  { name: "Lámpara Nido", sku: "LUM-014", stock: 3, price: 48900 },
  { name: "Silla Aura", sku: "MOB-032", stock: 5, price: 72500 },
  { name: "Mesa Lateral Ocre", sku: "MOB-041", stock: 2, price: 62400 },
];

export const money = (value: number) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(value);
