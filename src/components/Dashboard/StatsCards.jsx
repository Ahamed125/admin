const StatsCards = ({ stats }) => {
  const statItems = [
    {
      id: 'students',
      label: 'Total Students',
      icon: 'fas fa-users',
      color: 'blue',
      value: stats.totalStudents || 0
    },
    {
      id: 'courses',
      label: 'Total Courses',
      icon: 'fas fa-book',
      color: 'green',
      value: stats.totalCourses || 0
    },
    {
      id: 'certificates',
      label: 'Certificates Issued',
      icon: 'fas fa-certificate',
      color: 'yellow',
      value: stats.totalCertificates || 0
    },
    {
      id: 'messages',
      label: 'New Messages',
      icon: 'fas fa-envelope',
      color: 'red',
      value: stats.newMessages || 0
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    red: 'bg-red-100 text-red-600'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statItems.map((item) => (
        <div key={item.id} className="stat-card bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className={`p-3 rounded-full ${colorClasses[item.color]} mr-4`}>
              <i className={`${item.icon} text-xl`}></i>
            </div>
            <div>
              <p className="text-gray-500 text-sm">{item.label}</p>
              <h3 className="text-2xl font-bold text-gray-800">{item.value}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;