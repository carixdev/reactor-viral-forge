import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { User, Bell, Shield, CreditCard, Palette, Globe } from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-orbitron bg-gradient-primary bg-clip-text text-transparent mb-2">
            Settings
          </h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Navigation */}
          <div className="space-y-2">
            {[
              { icon: User, label: 'Profile', active: true },
              { icon: Bell, label: 'Notifications' },
              { icon: Shield, label: 'Security' },
              { icon: CreditCard, label: 'Billing' },
              { icon: Palette, label: 'Appearance' },
              { icon: Globe, label: 'Platform Settings' },
            ].map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                  item.active 
                    ? 'bg-primary/20 text-primary border border-primary/50' 
                    : 'hover:bg-muted/50 text-muted-foreground'
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Settings */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Bio</label>
                  <Input placeholder="Tell us about yourself..." />
                </div>
                <Button className="bg-gradient-primary hover:opacity-80">
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            {/* Platform Connections */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Connected Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'TikTok', connected: true, followers: '2.1M' },
                    { name: 'YouTube', connected: true, followers: '890K' },
                    { name: 'Instagram', connected: false, followers: '0' },
                    { name: 'X (Twitter)', connected: true, followers: '456K' },
                    { name: 'LinkedIn', connected: false, followers: '0' },
                  ].map((platform, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${platform.connected ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                        <div>
                          <div className="font-medium">{platform.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {platform.connected ? `${platform.followers} followers` : 'Not connected'}
                          </div>
                        </div>
                      </div>
                      <Button variant={platform.connected ? 'outline' : 'default'} size="sm">
                        {platform.connected ? 'Disconnect' : 'Connect'}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: 'New video generated', description: 'Get notified when AI creates new content' },
                  { label: 'Viral content alerts', description: 'Alerts when your content goes viral' },
                  { label: 'Weekly analytics', description: 'Receive weekly performance reports' },
                  { label: 'Platform updates', description: 'Updates about new features and improvements' },
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{setting.label}</div>
                      <div className="text-sm text-muted-foreground">{setting.description}</div>
                    </div>
                    <Switch defaultChecked={index < 2} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Content Preferences */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Content Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Content Style</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="educational">Educational</SelectItem>
                      <SelectItem value="entertaining">Entertaining</SelectItem>
                      <SelectItem value="promotional">Promotional</SelectItem>
                      <SelectItem value="mixed">Mixed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Target Audience</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Audience</SelectItem>
                      <SelectItem value="tech">Tech Enthusiasts</SelectItem>
                      <SelectItem value="business">Business Professionals</SelectItem>
                      <SelectItem value="creative">Creative Professionals</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Content Topics</label>
                  <div className="flex flex-wrap gap-2">
                    {['AI News', 'Tech Reviews', 'Tutorials', 'Industry Updates', 'Product Demos'].map((topic) => (
                      <Badge key={topic} variant="outline" className="cursor-pointer hover:bg-primary/20">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;