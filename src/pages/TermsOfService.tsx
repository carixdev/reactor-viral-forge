import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 rounded-2xl">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold font-orbitron bg-gradient-primary bg-clip-text text-transparent mb-8">
              Terms of Service
            </h1>

            <div className="space-y-8 text-foreground/90">
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using AI Reactor, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">2. Service Description</h2>
                <p>
                  AI Reactor is an automated content generation platform that creates short-form videos for social media platforms 
                  including TikTok, YouTube Shorts, Instagram, X, and LinkedIn using advanced AI models.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">3. User Responsibilities</h2>
                <ul className="space-y-2">
                  <li>• You are responsible for all content generated through your account</li>
                  <li>• You must comply with all applicable laws and platform policies</li>
                  <li>• You must not use the service for illegal or harmful purposes</li>
                  <li>• You are responsible for maintaining the confidentiality of your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">4. Intellectual Property</h2>
                <p>
                  All content generated through AI Reactor belongs to you. However, you grant us a license to use, 
                  store, and process your content for the purpose of providing our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">5. Limitation of Liability</h2>
                <p>
                  AI Reactor shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                  or any loss of profits or revenues, whether incurred directly or indirectly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">6. Termination</h2>
                <p>
                  We may terminate or suspend your account immediately, without prior notice or liability, 
                  for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">7. Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                  we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">8. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us at support@aireactor.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;