import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Play, Eye, Heart, Share2, BarChart3, Calendar } from 'lucide-react';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const stats = [
    { title: 'Total Views', value: '2.4M', change: '+12.5%', trend: 'up', color: 'text-green-400' },
    { title: 'Viral Videos', value: '47', change: '+8.2%', trend: 'up', color: 'text-blue-400' },
    { title: 'Engagement Rate', value: '14.2%', change: '-2.1%', trend: 'down', color: 'text-red-400' },
    { title: 'Revenue', value: '$12,450', change: '+24.7%', trend: 'up', color: 'text-green-400' },
  ];

  const recentVideos = [
    { title: 'AI Breakthrough: GPT-5 Demo', platform: 'TikTok', views: '1.2M', engagement: '18.5%', status: 'viral' },
    { title: 'Robot Dog vs Real Dog', platform: 'YouTube', views: '890K', engagement: '22.1%', status: 'trending' },
    { title: 'Neural Network Explains Itself', platform: 'Instagram', views: '645K', engagement: '15.8%', status: 'growing' },
    { title: 'AI Art in 60 Seconds', platform: 'X', views: '420K', engagement: '19.3%', status: 'viral' },
    { title: 'Machine Learning Magic', platform: 'LinkedIn', views: '285K', engagement: '12.4%', status: 'stable' },
  ];

  const platforms = [
    { name: 'TikTok', followers: '2.1M', growth: '+15.2%', color: 'bg-pink-500' },
    { name: 'YouTube', followers: '890K', growth: '+8.7%', color: 'bg-red-500' },
    { name: 'Instagram', followers: '1.5M', growth: '+12.1%', color: 'bg-purple-500' },
    { name: 'X', followers: '456K', growth: '+5.4%', color: 'bg-blue-500' },
    { name: 'LinkedIn', followers: '234K', growth: '+18.9%', color: 'bg-blue-600' },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-orbitron bg-gradient-primary bg-clip-text text-transparent mb-2">
          Analytics Dashboard
        </h1>
        <p className="text-muted-foreground">Monitor your AI-generated content performance</p>
      </div>

      {/* Period Selector */}
      <div className="flex gap-2 mb-8">
        {['24h', '7d', '30d', '90d'].map((period) => (
          <Button
            key={period}
            variant={selectedPeriod === period ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedPeriod(period)}
          >
            {period}
          </Button>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              {stat.trend === 'up' ? (
                <TrendingUp className="h-4 w-4 text-green-400" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-400" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className={`text-xs ${stat.color}`}>
                {stat.change} from last period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Chart Placeholder */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Performance Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive chart would go here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Platform Performance */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle>Platform Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${platform.color}`}></div>
                    <span className="font-medium">{platform.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{platform.followers}</div>
                    <div className="text-sm text-green-400">{platform.growth}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Videos */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>Recent Videos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-3 px-4">Video</th>
                  <th className="text-left py-3 px-4">Platform</th>
                  <th className="text-left py-3 px-4">Views</th>
                  <th className="text-left py-3 px-4">Engagement</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentVideos.map((video, index) => (
                  <tr key={index} className="border-b border-border/30">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <Play className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="font-medium">{video.title}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{video.platform}</td>
                    <td className="py-3 px-4 font-semibold">{video.views}</td>
                    <td className="py-3 px-4">{video.engagement}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        video.status === 'viral' ? 'bg-green-500/20 text-green-400' :
                        video.status === 'trending' ? 'bg-blue-500/20 text-blue-400' :
                        video.status === 'growing' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {video.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;