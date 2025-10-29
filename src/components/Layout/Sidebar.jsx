const Sidebar = ({ currentPage, onNavigate, isOpen, onClose }) => {
  const menuItems = [
    { id: 'dashboard', icon: 'fas fa-tachometer-alt', label: 'Dashboard' },
    { id: 'messages', icon: 'fas fa-envelope', label: 'Messages', hasBadge: true },
    { id: 'certificates', icon: 'fas fa-certificate', label: 'Certificates' },
    { id: 'courses', icon: 'fas fa-book', label: 'Courses' },
    { id: 'students', icon: 'fas fa-users', label: 'Students' },
    { id: 'settings', icon: 'fas fa-cog', label: 'Settings' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="overlay open md:hidden" 
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`sidebar bg-gray-800 text-white w-64 min-h-screen fixed md:relative ${isOpen ? 'open' : ''}`}>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-8">
            <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              H
            </div>
            <h1 className="text-xl font-bold">HI-Tec Admin</h1>
          </div>
          
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`sidebar-link w-full text-left flex items-center space-x-2 py-2 px-4 rounded-md ${
                  currentPage === item.id ? 'active' : ''
                }`}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
                {item.hasBadge && (
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    0
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
          <button
            onClick={() => {/* Logout handled in parent */}}
            className="flex items-center space-x-2 text-gray-300 hover:text-white w-full text-left"
          >
            <i className="fas fa-sign-out-alt"></i>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;