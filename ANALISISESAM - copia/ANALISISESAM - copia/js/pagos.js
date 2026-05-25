// ============================================
// GESTIÓN DE PAGOS
// ============================================

const pagosIniciales = [
    {
        id: '1',
        estudianteId: '1',
        monto: 120,
        concepto: 'mensualidad',
        mes: 1,
        anio: 2026,
        fecha: new Date().toISOString(),
        estado: 'pagado'
    },
    {
        id: '2',
        estudianteId: '2',
        monto: 120,
        concepto: 'mensualidad',
        mes: 1,
        anio: 2026,
        fecha: new Date().toISOString(),
        estado: 'pagado'
    }
];

function initPagos() {
    if (!localStorage.getItem('pagos')) {
        localStorage.setItem('pagos', JSON.stringify(pagosIniciales));
    }
}

function getPagos() {
    return JSON.parse(localStorage.getItem('pagos') || '[]');
}

function savePagos(pagos) {
    localStorage.setItem('pagos', JSON.stringify(pagos));
}

function registrarPago(data) {
    const pagos = getPagos();
    const nuevo = {
        id: generateId(),
        ...data,
        fecha: new Date().toISOString()
    };
    pagos.push(nuevo);
    savePagos(pagos);
    return true;
}

initPagos();