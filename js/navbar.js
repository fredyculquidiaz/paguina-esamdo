// ============================================
// NAVBAR UNIFICADO - MISMO EN TODAS LAS PÁGINAS
// ============================================

function actualizarNavbar() {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu) return;
    
    const usuario = localStorage.getItem('usuario');
    const user = usuario ? JSON.parse(usuario) : null;
    
    // Obtener página actual
    const path = window.location.pathname;
    let activePage = path.substring(path.lastIndexOf('/') + 1);
    if (activePage === '' || activePage === 'ESAM-DO/') activePage = 'index.html';
    
    function isActive(page) {
        return activePage === page ? 'active' : '';
    }
    
    // Enlaces comunes para TODOS
    const enlaces = `
        <li class="nav-item"><a class="nav-link ${isActive('index.html')}" href="index.html">Inicio</a></li>
        <li class="nav-item"><a class="nav-link ${isActive('nosotros.html')}" href="nosotros.html">Nosotros</a></li>
        <li class="nav-item"><a class="nav-link ${isActive('horarios.html')}" href="horarios.html">Horarios</a></li>
        <li class="nav-item"><a class="nav-link ${isActive('tienda.html')}" href="tienda.html">Tienda</a></li>
        <li class="nav-item"><a class="nav-link ${isActive('contacto.html')}" href="contacto.html">Contacto</a></li>
    `;
    
    // CASO 1: ADMINISTRADOR logueado
    if (user && user.rol === 'admin') {
        navMenu.innerHTML = enlaces + `
            <li class="nav-item"><a class="nav-link text-danger fw-bold" href="admin/dashboard.html"><i class="fas fa-tachometer-alt"></i> Admin</a></li>
            <li class="nav-item"><a class="btn btn-danger ms-2" href="#" onclick="cerrarSesion(); return false;"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</a></li>
        `;
    } 
    // CASO 2: Usuario NORMAL logueado
    else if (user) {
        navMenu.innerHTML = enlaces + `
            <li class="nav-item"><a class="btn btn-danger ms-2" href="#" onclick="cerrarSesion(); return false;"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</a></li>
        `;
    } 
    // CASO 3: Visitante NO logueado
    else {
        navMenu.innerHTML = enlaces + `
            <li class="nav-item"><a class="btn btn-danger ms-2" href="login.html"><i class="fas fa-sign-in-alt"></i> Iniciar Sesión</a></li>
        `;
    }
}

function cerrarSesion() {
    localStorage.removeItem('usuario');
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', actualizarNavbar);