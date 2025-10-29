import { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import LoginModal from './components/Layout/LoginModal';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import Certificates from './pages/Certificates';
import Courses from './pages/Courses';
import Students from './pages/Students';
import Settings from './pages/Settings';

function App() {
  const { user, login, logout, updateUser, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = (email, password) => {
    const success = login(email, password);
    if (success) {
      setLoginError('');
    }
    return success;
  };

  const handleLogout = () => {
    logout();
    setCurrentPage('dashboard');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseMenu = () => {
    setSidebarOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'messages':
        return <Messages />;
      case 'certificates':
        return <Certificates />;
      case 'courses':
        return <Courses />;
      case 'students':
        return <Students />;
      case 'settings':
        return <Settings user={user} onUpdateUser={updateUser} />;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <LoginModal 
        onLogin={handleLogin} 
        error={loginError}
        setError={setLoginError}
      />
    );
  }

  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      <div className="flex">
        <Sidebar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          isOpen={sidebarOpen}
          onClose={handleCloseMenu}
        />
        
        <div className="main-content flex-1 md:ml-64">
          <Header
            currentPage={currentPage}
            onMenuToggle={handleMenuToggle}
            user={user}
          />
          
          <main className="p-6">
            {renderPage()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;