// ============================================
// GESTIÓN DE INVENTARIO
// ============================================

const inventarioInicial = [
    { id: '1', producto: 'Karategui Junior', categoria: 'Uniforme', stock: 20, precioVenta: 120 },
    { id: '2', producto: 'Karategui Adulto', categoria: 'Uniforme', stock: 15, precioVenta: 150 },
    { id: '3', producto: 'Guantes de Boxeo', categoria: 'Equipo', stock: 30, precioVenta: 80 },
    { id: '4', producto: 'Espinilleras', categoria: 'Equipo', stock: 25, precioVenta: 60 },
    { id: '5', producto: 'Cinturón Blanco', categoria: 'Cinturón', stock: 50, precioVenta: 15 },
    { id: '6', producto: 'Cinturón Negro', categoria: 'Cinturón', stock: 10, precioVenta: 25 },
    { id: '7', producto: 'Bebida Energética', categoria: 'Suplemento', stock: 100, precioVenta: 5 }
];

function initInventario() {
    if (!localStorage.getItem('inventario')) {
        localStorage.setItem('inventario', JSON.stringify(inventarioInicial));
    }
}

function getInventario() {
    return JSON.parse(localStorage.getItem('inventario') || '[]');
}

function saveInventario(inventario) {
    localStorage.setItem('inventario', JSON.stringify(inventario));
}

initInventario();