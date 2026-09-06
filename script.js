// Configuración de Tailwind CSS
tailwind.config = {
    theme: {
        extend: {
            colors: {
                bohoRust: '#C17767',   /* Terracota cálido */
                bohoGreen: '#8F9779',  /* Verde Salvia */
                bohoCream: '#FDFBF7',  /* Crema muy claro para fondo */
                bohoSand: '#E8E4D9',   /* Arena para secciones */
                bohoDark: '#3A3532',   /* Marrón/Gris muy oscuro para texto */
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                serif: ['Cormorant Garamond', 'serif'],
            },
            borderRadius: {
                'arch': '12rem 12rem 0 0', /* Forma de arco */
                'arch-sm': '8rem 8rem 0 0',
            }
        }
    }
};

// Lógica de interacción con la interfaz
document.addEventListener('DOMContentLoaded', () => {
    // Menú móvil
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Formulario y Página de Gracias
    const contactForm = document.getElementById('contactForm');
    const mainContent = document.getElementById('mainContent');
    const thankYouSection = document.getElementById('thankYouSection');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            // Oculta principal, muestra agradecimiento
            if (mainContent && thankYouSection) {
                mainContent.classList.add('hidden');
                thankYouSection.classList.remove('hidden');
                thankYouSection.classList.add('flex');
                
                window.scrollTo(0, 0);
            }
        });
    }

    // Botón para volver a la página principal desde la sección de gracias
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.location.reload();
        });
    }
});
