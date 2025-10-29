import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const DownloadCertificate = () => {
  const [certificateId, setCertificateId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [certificateFound, setCertificateFound] = useState(false);
  const [error, setError] = useState('');

  // Simulated certificate verification - replace with actual API call
  const verifyCertificate = async (id) => {
    setIsSearching(true);
    setError('');
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demonstration - consider ID valid if it's 6 digits
      const isValid = /^\d{6}$/.test(id);
      setCertificateFound(isValid);
      
      if (!isValid) {
        setError('No certificate available for the given number');
      }
    } catch (err) {
      setError('Error verifying certificate. Please try again.');
      setCertificateFound(false);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (certificateId.trim()) {
      verifyCertificate(certificateId);
    }
  };

  const handlePreview = () => {
    // Implement preview logic
    console.log('Preview certificate:', certificateId);
  };

  const handleDownload = () => {
    // Implement download logic
    console.log('Download certificate:', certificateId);
  };

  return (
    <div className="max-w-md mx-auto bg-card p-6 rounded-brand shadow-brand-lg">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Icon name="Certificate" className="w-6 h-6 text-primary" />
          <h3 className="text-lg font-semibold">Verify & Download Certificate</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="certificateId" className="text-sm font-medium text-muted-foreground">
              Enter Certificate ID
            </label>
            <div className="flex space-x-2">
              <Input
                id="certificateId"
                type="text"
                placeholder="Enter 6-digit certificate ID"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                className="flex-1"
              />
              <Button 
                type="submit" 
                variant="default"
                disabled={isSearching || !certificateId.trim()}
              >
                {isSearching ? (
                  <Icon name="Loader2" className="w-4 h-4 animate-spin" />
                ) : (
                  <Icon name="Search" className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          {error && (
            <div className="text-sm text-error flex items-center space-x-1">
              <Icon name="AlertCircle" className="w-4 h-4" />
              <span>{error}</span>
            </div>
          )}

          {certificateFound && (
            <div className="flex space-x-2">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handlePreview}
              >
                <Icon name="Eye" className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button
                type="button"
                variant="default"
                className="flex-1"
                onClick={handleDownload}
              >
                <Icon name="Download" className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          )}
        </form>

        <div className="text-xs text-muted-foreground">
          <p>* Certificate ID can be found on your course completion email</p>
          <p>* For any issues, please contact support</p>
        </div>
      </div>
    </div>
  );
};

export default DownloadCertificate;
