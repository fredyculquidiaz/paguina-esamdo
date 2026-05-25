// ============================================
// GESTIÓN DE ESTUDIANTES
// ============================================

// Datos iniciales
const estudiantesIniciales = [
    {
        id: '1',
        codigo: 'EST001',
        nombres: 'Juan Carlos',
        apellidos: 'Pérez Rodríguez',
        dni: '12345678',
        telefono: '987654321',
        email: 'juan@example.com',
        nivel: 'blanco',
        estado: 'activo',
        fechaRegistro: new Date().toISOString()
    },
    {
        id: '2',
        codigo: 'EST002',
        nombres: 'María Fernanda',
        apellidos: 'López García',
        dni: '87654321',
        telefono: '912345678',
        email: 'maria@example.com',
        nivel: 'amarillo',
        estado: 'activo',
        fechaRegistro: new Date().toISOString()
    },
    {
        id: '3',
        codigo: 'EST003',
        nombres: 'Carlos Andrés',
        apellidos: 'Mendoza Torres',
        dni: '45678912',
        telefono: '998877665',
        nivel: 'verde',
        estado: 'moroso',
        fechaRegistro: new Date().toISOString()
    }
];

function initEstudiantes() {
    if (!localStorage.getItem('estudiantes')) {
        localStorage.setItem('estudiantes', JSON.stringify(estudiantesIniciales));
    }
}

function getEstudiantes() {
    return JSON.parse(localStorage.getItem('estudiantes') || '[]');
}

function saveEstudiantes(estudiantes) {
    localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
}

function getEstudianteById(id) {
    return getEstudiantes().find(e => e.id === id);
}

function crearEstudiante(data) {
    const estudiantes = getEstudiantes();
    const nuevoId = generateId();
    const nuevoCodigo = `EST${String(estudiantes.length + 1).padStart(3, '0')}`;
    
    const nuevo = {
        id: nuevoId,
        codigo: nuevoCodigo,
        ...data,
        fechaRegistro: new Date().toISOString()
    };
    
    estudiantes.push(nuevo);
    saveEstudiantes(estudiantes);
    return true;
}

function actualizarEstudiante(id, data) {
    const estudiantes = getEstudiantes();
    const index = estudiantes.findIndex(e => e.id === id);
    if (index !== -1) {
        estudiantes[index] = { ...estudiantes[index], ...data };
        saveEstudiantes(estudiantes);
        return true;
    }
    return false;
}

function eliminarEstudiante(id) {
    const estudiantes = getEstudiantes();
    const filtered = estudiantes.filter(e => e.id !== id);
    saveEstudiantes(filtered);
    return true;
}

function getNombreNivel(nivel) {
    const niveles = {
        'blanco': 'Blanco', 'amarillo': 'Amarillo', 'naranja': 'Naranja',
        'verde': 'Verde', 'azul': 'Azul', 'marrón': 'Marrón', 'negro': 'Negro'
    };
    return niveles[nivel] || nivel;
}

initEstudiantes();