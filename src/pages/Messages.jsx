import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, doc, updateDoc, deleteDoc, writeBatch } from 'firebase/firestore';
import { db } from '../servicess/firebase';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessages, setSelectedMessages] = useState(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, 'contactSubmissions'),
        orderBy('timestamp', 'desc')
      );
      setMessages(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error('Error loading messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const viewMessage = async (messageId) => {
    try {
      const message = messages.find(m => m.id === messageId);
      if (message && !message.read) {
        await updateDoc(doc(db, 'contactSubmissions', messageId), {
          read: true
        });
        loadMessages(); // Reload to update status
      }
      
      alert(`Message from ${message.name} (${message.email}):\n\nSubject: ${message.subject}\n\nMessage: ${message.message}`);
    } catch (error) {
      console.error('Error viewing message:', error);
    }
  };

  const deleteMessage = async (messageId) => {
    if (confirm('Are you sure you want to delete this message?')) {
      try {
        await deleteDoc(doc(db, 'contactSubmissions', messageId));
        loadMessages();
      } catch (error) {
        console.error('Error deleting message:', error);
        alert('Error deleting message. Please try again.');
      }
    }
  };

  const markAllAsRead = async () => {
    try {
      const batch = writeBatch(db);
      messages.forEach(message => {
        if (!message.read) {
          const messageRef = doc(db, 'contactSubmissions', message.id);
          batch.update(messageRef, { read: true });
        }
      });
      await batch.commit();
      loadMessages();
      alert('All messages marked as read!');
    } catch (error) {
      console.error('Error marking messages as read:', error);
    }
  };

  const deleteSelected = async () => {
    if (selectedMessages.size === 0) {
      alert('Please select at least one message to delete.');
      return;
    }

    if (confirm(`Are you sure you want to delete ${selectedMessages.size} message(s)?`)) {
      try {
        const batch = writeBatch(db);
        selectedMessages.forEach(messageId => {
          const messageRef = doc(db, 'contactSubmissions', messageId);
          batch.delete(messageRef);
        });
        await batch.commit();
        setSelectedMessages(new Set());
        loadMessages();
        alert(`${selectedMessages.size} message(s) deleted successfully!`);
      } catch (error) {
        console.error('Error deleting messages:', error);
      }
    }
  };

  const toggleSelectAll = (checked) => {
    if (checked) {
      setSelectedMessages(new Set(messages.map(m => m.id)));
    } else {
      setSelectedMessages(new Set());
    }
  };

  const toggleSelectMessage = (messageId, checked) => {
    const newSelected = new Set(selectedMessages);
    if (checked) {
      newSelected.add(messageId);
    } else {
      newSelected.delete(messageId);
    }
    setSelectedMessages(newSelected);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return <div className="text-center py-8">Loading messages...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Contact Messages</h2>
        <div className="flex space-x-2">
          <button
            onClick={markAllAsRead}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
          >
            Mark All as Read
          </button>
          <button
            onClick={deleteSelected}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
          >
            Delete Selected
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  checked={selectedMessages.size === messages.length && messages.length > 0}
                  onChange={(e) => toggleSelectAll(e.target.checked)}
                  className="rounded"
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {messages.map((message) => (
              <tr key={message.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedMessages.has(message.id)}
                    onChange={(e) => toggleSelectMessage(message.id, e.target.checked)}
                    className="rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{message.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{message.email}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{message.subject}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{formatDate(message.timestamp)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    message.read ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {message.read ? 'Read' : 'Unread'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => viewMessage(message.id)}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    View
                  </button>
                  <button
                    onClick={() => deleteMessage(message.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;