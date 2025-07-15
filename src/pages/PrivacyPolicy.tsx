import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>

            <div className="space-y-8 text-foreground/90">
              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
                <ul className="space-y-2 mt-4">
                  <li>• Account information (email, username, password)</li>
                  <li>• Content preferences and settings</li>
                  <li>• Usage data and analytics</li>
                  <li>• Communication records</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="space-y-2 mt-4">
                  <li>• Provide, maintain, and improve our services</li>
                  <li>• Generate AI content tailored to your preferences</li>
                  <li>• Communicate with you about our services</li>
                  <li>• Monitor and analyze usage patterns</li>
                  <li>• Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties. 
                  We may share your information only in the following circumstances:
                </p>
                <ul className="space-y-2 mt-4">
                  <li>• With your explicit consent</li>
                  <li>• To comply with legal requirements</li>
                  <li>• To protect our rights and safety</li>
                  <li>• With service providers who assist in our operations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">5. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to provide our services 
                  and fulfill the purposes outlined in this privacy policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="space-y-2 mt-4">
                  <li>• Access your personal information</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Delete your account and data</li>
                  <li>• Withdraw consent for data processing</li>
                  <li>• Request data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">7. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience, 
                  analyze usage patterns, and provide personalized content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">8. Changes to Privacy Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes 
                  by posting the new privacy policy on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-4">9. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy, please contact us at privacy@aireactor.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;