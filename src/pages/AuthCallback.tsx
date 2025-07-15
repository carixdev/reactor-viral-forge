import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AuthCallback = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Simulate auth processing
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Check for success/error parameters in URL
        const urlParams = new URLSearchParams(window.location.search);
        const error = urlParams.get('error');
        const success = urlParams.get('success');

        if (error) {
          setStatus('error');
          setMessage(error === 'access_denied' ? 'Access was denied' : 'Authentication failed');
        } else if (success) {
          setStatus('success');
          setMessage('Successfully authenticated! Redirecting to dashboard...');
          setTimeout(() => navigate('/dashboard'), 2000);
        } else {
          setStatus('success');
          setMessage('Authentication completed! Redirecting to dashboard...');
          setTimeout(() => navigate('/dashboard'), 2000);
        }
      } catch (error) {
        setStatus('error');
        setMessage('An unexpected error occurred');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="glass-card p-8 rounded-2xl text-center max-w-md w-full">
        <div className="flex flex-col items-center space-y-6">
          {status === 'loading' && (
            <>
              <Loader2 className="h-16 w-16 animate-spin text-primary" />
              <h2 className="text-2xl font-bold font-orbitron text-foreground">
                Processing Authentication...
              </h2>
              <p className="text-muted-foreground">
                Please wait while we complete your authentication.
              </p>
            </>
          )}

          {status === 'success' && (
            <>
              <CheckCircle className="h-16 w-16 text-green-500" />
              <h2 className="text-2xl font-bold font-orbitron text-foreground">
                Authentication Successful!
              </h2>
              <p className="text-muted-foreground">{message}</p>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-primary h-2 rounded-full animate-pulse" style={{ width: '100%' }}></div>
              </div>
            </>
          )}

          {status === 'error' && (
            <>
              <XCircle className="h-16 w-16 text-red-500" />
              <h2 className="text-2xl font-bold font-orbitron text-foreground">
                Authentication Failed
              </h2>
              <p className="text-muted-foreground">{message}</p>
              <div className="flex space-x-4 w-full">
                <Button 
                  onClick={() => navigate('/')} 
                  variant="outline" 
                  className="flex-1"
                >
                  Go Home
                </Button>
                <Button 
                  onClick={() => window.location.reload()} 
                  className="flex-1 bg-gradient-primary hover:opacity-80"
                >
                  Try Again
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;