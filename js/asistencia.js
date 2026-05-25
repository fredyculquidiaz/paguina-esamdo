// ============================================
// GESTIÓN DE ASISTENCIA
// ============================================

const asistenciaInicial = [];

function initAsistencia() {
    if (!localStorage.getItem('asistencia')) {
        localStorage.setItem('asistencia', JSON.stringify(asistenciaInicial));
    }
}

function getAsistencia() {
    return JSON.parse(localStorage.getItem('asistencia') || '[]');
}

function saveAsistencia(asistencia) {
    localStorage.setItem('asistencia', JSON.stringify(asistencia));
}

function marcarAsistencia(estudianteId, fecha, estado) {
    const asistencia = getAsistencia();
    const index = asistencia.findIndex(a => a.estudianteId === estudianteId && a.fecha === fecha);
    
    if (index !== -1) {
        asistencia[index].estado = estado;
        asistencia[index].hora = new Date().toLocaleTimeString();
    } else {
        asistencia.push({
            id: generateId(),
            estudianteId,
            fecha,
            estado,
            hora: new Date().toLocaleTimeString()
        });
    }
    
    saveAsistencia(asistencia);
    return true;
}

initAsistencia();