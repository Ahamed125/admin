const Header = ({ currentPage, onMenuToggle, user }) => {
  const pageTitles = {
    dashboard: 'Dashboard',
    messages: 'Messages',
    certificates: 'Certificates',
    courses: 'Courses',
    students: 'Students',
    settings: 'Settings'
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <button
            onClick={onMenuToggle}
            className="md:hidden bg-gray-800 text-white p-2 rounded-md mr-4"
          >
            <i className="fas fa-bars"></i>
          </button>
          <h1 className="text-2xl font-bold text-gray-800">
            {pageTitles[currentPage]}
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-bell"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
              {user?.name?.charAt(0) || 'A'}
            </div>
            <span className="text-gray-700 font-medium">
              {user?.name || 'Admin'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;