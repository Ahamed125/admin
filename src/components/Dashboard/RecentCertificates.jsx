const RecentCertificates = ({ certificates, onViewAll }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Certificates</h2>
      <div className="space-y-4">
        {certificates.length === 0 ? (
          <p className="text-gray-500 text-center">No certificates found</p>
        ) : (
          certificates.map((certificate, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-800">
                  {certificate.studentName}
                </h3>
                <span className="text-xs text-gray-500">
                  {certificate.dateOfAward}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {certificate.courseName}
              </p>
            </div>
          ))
        )}
      </div>
      <button
        onClick={onViewAll}
        className="block text-center mt-4 text-blue-600 hover:text-blue-800 w-full"
      >
        View All Certificates
      </button>
    </div>
  );
};

export default RecentCertificates;