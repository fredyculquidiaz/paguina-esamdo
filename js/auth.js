// ============================================
// GESTIÓN DE USUARIOS
// ============================================

// Usuarios por defecto
const defaultUsers = [
    {
        id: '1',
        nombre: 'Administrador',
        email: 'admin@esamdo.com',
        password: 'admin123',
        rol: 'admin'
    },
    {
        id: '2',
        nombre: 'Instructor Carlos',
        email: 'instructor@esamdo.com',
        password: 'inst123',
        rol: 'instructor'
    }
];

// Inicializar usuarios en localStorage
function initUsers() {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }
}

// Registrar usuario
function registerUser(nombre, email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find(u => u.email === email)) {
        return { success: false, message: 'El correo ya está registrado' };
    }
    
    const newUser = {
        id: generateId(),
        nombre,
        email,
        password,
        rol: 'instructor'
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    return { success: true, message: 'Registro exitoso' };
}

// Iniciar sesión
function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        const { password, ...userWithoutPassword } = user;
        localStorage.setItem('usuario', JSON.stringify(userWithoutPassword));
        return { success: true, user: userWithoutPassword };
    }
    
    return { success: false, message: 'Correo o contraseña incorrectos' };
}

// Inicializar al cargar
initUsers();