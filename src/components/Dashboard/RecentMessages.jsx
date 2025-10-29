const RecentMessages = ({ messages, onViewAll }) => {
  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Messages</h2>
      <div className="space-y-4">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center">No messages found</p>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 last:border-0 last:pb-0"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-800">{message.name}</h3>
                <span className="text-xs text-gray-500">
                  {formatDate(message.timestamp)}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1 truncate">
                {message.subject}
              </p>
            </div>
          ))
        )}
      </div>
      <button
        onClick={onViewAll}
        className="block text-center mt-4 text-blue-600 hover:text-blue-800 w-full"
      >
        View All Messages
      </button>
    </div>
  );
};

export default RecentMessages;