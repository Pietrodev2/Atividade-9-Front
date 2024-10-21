import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  // Definindo as imagens para cada rota, ajustando o caminho para 'pages/imgs'
  const images = {
    '/': '/src/pages/imgs/kaiser.jpg',
    '/blogs': '/src/pages/imgs/Rin.png',
    '/contact': '/src/pages/imgs/Sae_itoshi.webp',
  };

  // Obtenha a imagem com base na rota atual (ou uma imagem padrão)
  const currentImage = images[location.pathname] || '/src/pages/imgs/default-image.jpg';

  return (
    <>
      {/* Navbar fixa e centralizada no topo */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 1,
        padding: '10px 20px',
        borderRadius: '8px',
      }}>
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', gap: '20px' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Renderiza o conteúdo da página atual */}
      <div style={{
        backgroundImage: `url(${currentImage})`,
        minHeight: '100vh', // Garante que o fundo sempre cubra a altura da tela
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center', // Mover a imagem para o lado direito
        marginTop: '60px', // Espaço para a navbar fixa
        display: 'flex', // Mantém o flex para centralizar conteúdo
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column' // Permite que o conteúdo dentro da div seja empilhado
      }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
