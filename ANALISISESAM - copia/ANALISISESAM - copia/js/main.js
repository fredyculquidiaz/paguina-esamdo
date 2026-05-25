// ============================================
// FUNCIONES GLOBALES
// ============================================

// Verificar autenticación
function isAuthenticated() {
    return localStorage.getItem('usuario') !== null;
}

// Obtener usuario actual
function getCurrentUser() {
    return JSON.parse(localStorage.getItem('usuario'));
}

// Verificar si es admin
function isAdmin() {
    const user = getCurrentUser();
    return user && user.rol === 'admin';
}

// Redirigir si no está logueado
function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = '../login.html';
        return false;
    }
    return true;
}

// Redirigir si no es admin
function requireAdmin() {
    if (!requireAuth()) return false;
    if (!isAdmin()) {
        alert('Acceso denegado. Se requieren permisos de administrador.');
        window.location.href = '../index.html';
        return false;
    }
    return true;
}

// Mostrar mensaje de éxito
function showSuccess(message) {
    showAlert(message, 'success');
}

// Mostrar mensaje de error
function showError(message) {
    showAlert(message, 'danger');
}

function showAlert(message, type) {
    const alertDiv = document.getElementById('alertContainer');
    if (alertDiv) {
        alertDiv.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show fade-in" role="alert">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
        setTimeout(() => {
            const alert = alertDiv.querySelector('.alert');
            if (alert) alert.remove();
        }, 3000);
    }
}

// Formatear moneda
function formatMoney(amount) {
    return 'S/ ' + parseFloat(amount).toLocaleString('es-PE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Formatear fecha
function formatDate(date) {
    return new Date(date).toLocaleDateString('es-PE');
}

// Generar ID único
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Cerrar sesión
function logout() {
    localStorage.removeItem('usuario');
    window.location.href = 'login.html';
}