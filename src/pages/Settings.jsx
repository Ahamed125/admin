import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../servicess/firebase';

const Settings = ({ user, onUpdateUser }) => {
  const [adminForm, setAdminForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [websiteForm, setWebsiteForm] = useState({
    instituteName: '',
    address: '',
    phone: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadSettings();
  }, [user]);

  const loadSettings = async () => {
    setAdminForm({
      name: user?.name || 'Admin',
      email: user?.email || 'admin@hitec.edu',
      password: '',
      confirmPassword: ''
    });

    try {
      const docSnap = await getDoc(doc(db, 'websiteSettings', 'general'));
      if (docSnap.exists()) {
        const settings = docSnap.data();
        setWebsiteForm({
          instituteName: settings.instituteName || 'HI-Tec College',
          address: settings.address || '7/2, waragashinna, Akurana-06, Kandy, Sri Lanka, 20850',
          phone: settings.phone || '+94773066411',
          email: settings.email || 'ainudeen@gmail.com'
        });
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    
    if (adminForm.password && adminForm.password !== adminForm.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const updatedUser = {
      name: adminForm.name,
      email: adminForm.email
    };

    onUpdateUser(updatedUser);
    alert('Admin settings updated successfully!');
    
    setAdminForm(prev => ({
      ...prev,
      password: '',
      confirmPassword: ''
    }));
  };

  const handleWebsiteSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await setDoc(doc(db, 'websiteSettings', 'general'), {
        instituteName: websiteForm.instituteName,
        address: websiteForm.address,
        phone: websiteForm.phone,
        email: websiteForm.email,
        updatedAt: new Date()
      });
      alert('Website settings updated successfully!');
    } catch (error) {
      console.error('Error updating website settings:', error);
      alert('Error updating website settings. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAdminChange = (e) => {
    const { name, value } = e.target;
    setAdminForm(prev => ({ ...prev, [name]: value }));
  };

  const handleWebsiteChange = (e) => {
    const { name, value } = e.target;
    setWebsiteForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Settings</h2>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Admin Account</h3>
            
            <form onSubmit={handleAdminSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={adminForm.name}
                  onChange={handleAdminChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={adminForm.email}
                  onChange={handleAdminChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={adminForm.password}
                  onChange={handleAdminChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Leave blank to keep current"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={adminForm.confirmPassword}
                  onChange={handleAdminChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Leave blank to keep current"
                />
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Save Changes
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Website Settings</h3>
            
            <form onSubmit={handleWebsiteSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Institute Name
                </label>
                <input
                  type="text"
                  name="instituteName"
                  value={websiteForm.instituteName}
                  onChange={handleWebsiteChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  name="address"
                  value={websiteForm.address}
                  onChange={handleWebsiteChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={websiteForm.phone}
                  onChange={handleWebsiteChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={websiteForm.email}
                  onChange={handleWebsiteChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md disabled:opacity-50"
              >
                {loading ? 'Saving...' : 'Save Settings'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;