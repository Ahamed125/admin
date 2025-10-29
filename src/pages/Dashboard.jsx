import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, limit, where } from 'firebase/firestore';
import { db } from '../servicess/firebase';
import StatsCards from '../components/Dashboard/StatsCards';
import RecentMessages from '../components/Dashboard/RecentMessages';
import RecentCertificates from '../components/Dashboard/RecentCertificates';

const Dashboard = ({ onNavigate }) => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalCourses: 0,
    totalCertificates: 0,
    newMessages: 0
  });
  const [recentMessages, setRecentMessages] = useState([]);
  const [recentCertificates, setRecentCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      // Load stats
      const [studentsSnapshot, coursesSnapshot, certificatesSnapshot, messagesSnapshot] = await Promise.all([
        getDocs(collection(db, 'students')),
        getDocs(collection(db, 'courses')),
        getDocs(collection(db, 'certificates')),
        getDocs(query(collection(db, 'contactSubmissions'), where('read', '==', false)))
      ]);

      setStats({
        totalStudents: studentsSnapshot.size,
        totalCourses: coursesSnapshot.size,
        totalCertificates: certificatesSnapshot.size,
        newMessages: messagesSnapshot.size
      });

      // Load recent messages
      const messagesQuery = query(
        collection(db, 'contactSubmissions'),
        orderBy('timestamp', 'desc'),
        limit(5)
      );
      const messagesSnapshot2 = await getDocs(messagesQuery);
      setRecentMessages(messagesSnapshot2.docs.map(doc => doc.data()));

      // Load recent certificates
      const certificatesQuery = query(
        collection(db, 'certificates'),
        orderBy('dateOfAward', 'desc'),
        limit(5)
      );
      const certificatesSnapshot2 = await getDocs(certificatesQuery);
      setRecentCertificates(certificatesSnapshot2.docs.map(doc => doc.data()));

    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Loading dashboard data...</div>
      </div>
    );
  }

  return (
    <div>
      <StatsCards stats={stats} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentMessages 
          messages={recentMessages} 
          onViewAll={() => onNavigate('messages')}
        />
        
        <RecentCertificates 
          certificates={recentCertificates}
          onViewAll={() => onNavigate('certificates')}
        />
      </div>
    </div>
  );
};

export default Dashboard;