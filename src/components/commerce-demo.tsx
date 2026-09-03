"use client";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  Boxes,
  Check,
  ChevronDown,
  CircleDollarSign,
  Command,
  CreditCard,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Menu,
  Package,
  Plus,
  Search,
  Settings,
  ShoppingBag,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { money, orders, products, sales, type OrderStatus } from "@/data/mock-data";

const navigation = [
  { label: "Resumen", icon: LayoutDashboard },
  { label: "Ventas", icon: ShoppingBag, badge: "8" },
  { label: "Clientes", icon: Users },
  { label: "Productos", icon: Package },
  { label: "Inventario", icon: Boxes, badge: "3" },
  { label: "Reportes", icon: BarChart3 },
];

const titles: Record<string, { eyebrow: string; title: string; description: string }> = {
  Resumen: { eyebrow: "Jueves, 3 de septiembre", title: "Buen día, Valentina", description: "Así viene tu negocio esta semana." },
  Ventas: { eyebrow: "Operaciones", title: "Ventas", description: "Seguimiento de pedidos y cobros en un solo lugar." },
  Clientes: { eyebrow: "Relaciones", title: "Clientes", description: "Tu cartera comercial, ordenada y accionable." },
  Productos: { eyebrow: "Catálogo", title: "Productos", description: "Precios, variantes y disponibilidad actual." },
  Inventario: { eyebrow: "Control de stock", title: "Inventario", description: "Detectá faltantes antes de perder una venta." },
  Reportes: { eyebrow: "Rendimiento", title: "Reportes", description: "Indicadores claros para decidir con información." },
};

function Status({ value }: { value: OrderStatus }) {
  return <span className={`status status-${value.toLowerCase()}`}><i />{value}</span>;
}

function Logo() {
  return <div className="brand" aria-label="Nexo"><span className="brand-mark"><span /></span><span>NEXO</span></div>;
}

export function CommerceDemo() {
  const [active, setActive] = useState("Resumen");
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState(false);
  const [period, setPeriod] = useState("Últimos 30 días");
  const heading = titles[active];
  const filteredOrders = useMemo(() => orders.filter((order) => `${order.id} ${order.customer}`.toLowerCase().includes(query.toLowerCase())), [query]);

  const navigate = (label: string) => { setActive(label); setMenuOpen(false); setQuery(""); };
  const notify = () => { setToast(true); window.setTimeout(() => setToast(false), 2600); };

  return (
    <div className="app-shell">
      <div className="demo-ribbon"><Sparkles size={13} /> Demo conceptual · Datos ficticios</div>
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-top"><Logo /><button className="icon-button close-menu" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú"><X size={20} /></button></div>
        <nav aria-label="Navegación principal">
          <p className="nav-label">Espacio de trabajo</p>
          {navigation.map(({ label, icon: Icon, badge }) => (
            <button key={label} className={`nav-item ${active === label ? "active" : ""}`} onClick={() => navigate(label)}>
              <Icon size={18} strokeWidth={1.8} /><span>{label}</span>{badge && <b>{badge}</b>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <button className="nav-item"><HelpCircle size={18} /><span>Ayuda</span></button>
          <button className="nav-item"><Settings size={18} /><span>Configuración</span></button>
          <div className="profile"><div className="avatar">VR</div><div><strong>Valentina Ríos</strong><small>Administradora</small></div><ChevronDown size={16} /></div>
        </div>
      </aside>
      {menuOpen && <button className="backdrop" onClick={() => setMenuOpen(false)} aria-label="Cerrar navegación" />}

      <main className="main-content">
        <header className="topbar">
          <button className="icon-button menu-button" onClick={() => setMenuOpen(true)} aria-label="Abrir menú"><Menu size={21} /></button>
          <div className="search"><Search size={17} /><input aria-label="Buscar" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar pedidos, clientes..." /><kbd><Command size={11} /> K</kbd></div>
          <button className="icon-button notification" aria-label="Notificaciones"><Bell size={19} /><i /></button>
          <button className="primary-button" onClick={notify}><Plus size={17} /> Nueva venta</button>
        </header>

        <section className="content">
          <div className="page-heading"><div><p>{heading.eyebrow}</p><h1>{heading.title}</h1><span>{heading.description}</span></div><select value={period} onChange={(e) => setPeriod(e.target.value)} aria-label="Período"><option>Últimos 30 días</option><option>Esta semana</option><option>Este trimestre</option></select></div>
          {active === "Resumen" ? <Dashboard query={query} ordersList={filteredOrders} /> : <ModuleView active={active} query={query} />}
        </section>
      </main>
      {toast && <div className="toast" role="status"><span><Check size={16} /></span><div><strong>Venta iniciada</strong><small>El flujo está listo para completar.</small></div></div>}
    </div>
  );
}

function Dashboard({ query, ordersList }: { query: string; ordersList: typeof orders }) {
  return <>
    <div className="metric-grid">
      <Metric icon={CircleDollarSign} label="Ventas netas" value="$ 2.480.600" change="12,8%" positive detail="vs. período anterior" />
      <Metric icon={ShoppingBag} label="Pedidos" value="148" change="8,2%" positive detail="11 por completar" />
      <Metric icon={Users} label="Clientes nuevos" value="36" change="4,1%" positive detail="62% recurrentes" />
      <Metric icon={CreditCard} label="Ticket promedio" value="$ 16.761" change="2,4%" detail="vs. período anterior" />
    </div>
    <div className="dashboard-grid">
      <section className="panel sales-panel">
        <div className="panel-heading"><div><p>Rendimiento</p><h2>Ventas del período</h2></div><div className="legend"><i /> Ventas netas</div></div>
        <div className="chart-summary"><strong>$ 2,48 M</strong><span><ArrowUpRight size={14} /> 12,8%</span></div>
        <div className="chart" aria-label="Gráfico de ventas de los últimos doce meses">
          <div className="grid-lines"><i /><i /><i /><i /></div>
          <svg viewBox="0 0 660 170" preserveAspectRatio="none" role="img">
            <defs><linearGradient id="fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#3e6fe8" stopOpacity=".22"/><stop offset="100%" stopColor="#3e6fe8" stopOpacity="0"/></linearGradient></defs>
            <path d={`M ${sales.map((v,i) => `${i*60},${170-v}`).join(" L ")} L 660,170 L 0,170 Z`} fill="url(#fill)" />
            <polyline points={sales.map((v,i) => `${i*60},${170-v}`).join(" ")} fill="none" stroke="#3e6fe8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="months"><span>Oct</span><span>Dic</span><span>Feb</span><span>Abr</span><span>Jun</span><span>Ago</span></div>
        </div>
      </section>
      <section className="panel stock-panel">
        <div className="panel-heading"><div><p>Inventario</p><h2>Stock crítico</h2></div><button className="text-button">Ver todo <ArrowRight size={15} /></button></div>
        <div className="stock-list">{products.map((product, index) => <div className="stock-item" key={product.sku}><div className={`product-image product-${index}`}><Package size={20}/></div><div><strong>{product.name}</strong><small>{product.sku} · {money(product.price)}</small></div><span>{product.stock} u.</span></div>)}</div>
        <div className="stock-note"><Boxes size={17} /><span><strong>3 productos</strong> necesitan reposición esta semana.</span></div>
      </section>
    </div>
    <section className="panel orders-panel">
      <div className="panel-heading"><div><p>Actividad reciente</p><h2>Últimos pedidos</h2></div><button className="text-button">Ver ventas <ArrowRight size={15} /></button></div>
      <div className="table-wrap"><table><thead><tr><th>Pedido</th><th>Cliente</th><th>Canal</th><th>Fecha</th><th>Estado</th><th className="align-right">Total</th></tr></thead><tbody>{ordersList.map((order) => <tr key={order.id}><td><strong className="order-id">{order.id}</strong></td><td><div className="customer"><span>{order.initials}</span><strong>{order.customer}</strong></div></td><td>{order.channel}</td><td>{order.date}</td><td><Status value={order.status} /></td><td className="align-right"><strong>{money(order.amount)}</strong></td></tr>)}</tbody></table>{ordersList.length === 0 && <EmptySearch query={query} />}</div>
    </section>
  </>;
}

function Metric({ icon: Icon, label, value, change, positive, detail }: { icon: typeof Users; label: string; value: string; change: string; positive?: boolean; detail: string }) {
  return <article className="metric"><div className="metric-top"><span><Icon size={18} /></span><small>{label}</small></div><strong>{value}</strong><div className={positive ? "positive" : "negative"}>{positive ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>} {change}<em>{detail}</em></div></article>;
}

function ModuleView({ active, query }: { active: string; query: string }) {
  const iconMap = { Ventas: ShoppingBag, Clientes: Users, Productos: Package, Inventario: Boxes, Reportes: BarChart3 };
  const Icon = iconMap[active as keyof typeof iconMap] || FileText;
  if (active === "Ventas") return <section className="panel orders-panel module"><div className="panel-heading"><div><p>Todos los canales</p><h2>Pedidos recientes</h2></div><button className="secondary-button"><Plus size={16}/> Crear pedido</button></div><div className="table-wrap"><table><thead><tr><th>Pedido</th><th>Cliente</th><th>Canal</th><th>Fecha</th><th>Estado</th><th className="align-right">Total</th></tr></thead><tbody>{orders.filter(o => `${o.id} ${o.customer}`.toLowerCase().includes(query.toLowerCase())).map(order => <tr key={order.id}><td><strong className="order-id">{order.id}</strong></td><td><div className="customer"><span>{order.initials}</span><strong>{order.customer}</strong></div></td><td>{order.channel}</td><td>{order.date}</td><td><Status value={order.status}/></td><td className="align-right"><strong>{money(order.amount)}</strong></td></tr>)}</tbody></table></div></section>;
  return <section className="panel module-placeholder"><div className="placeholder-icon"><Icon size={27}/></div><p>Módulo conectado</p><h2>{active} listo para explorar</h2><span>Esta vista demuestra una arquitectura modular. El MVP prioriza el tablero y el flujo de ventas; este módulo se ampliaría según las reglas reales del negocio.</span><button className="secondary-button"><Plus size={16}/> Agregar registro</button></section>;
}

function EmptySearch({ query }: { query: string }) { return <div className="empty"><Search size={22}/><strong>Sin resultados</strong><span>No encontramos pedidos para “{query}”.</span></div>; }
