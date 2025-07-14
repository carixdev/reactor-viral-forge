import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Zap, Brain, Video, Sparkles, Play, Download, Settings } from 'lucide-react';

const Generator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null);

  const topics = [
    'AI Breakthroughs', 'Tech News', 'Machine Learning', 'Robotics', 
    'Future Tech', 'AI Tools', 'Deep Learning', 'Neural Networks'
  ];

  const platforms = [
    { name: 'TikTok', specs: '9:16, 60s max', icon: '📱' },
    { name: 'YouTube Shorts', specs: '9:16, 60s max', icon: '🎥' },
    { name: 'Instagram Reels', specs: '9:16, 90s max', icon: '📸' },
    { name: 'X Video', specs: '16:9 or 9:16, 2m max', icon: '🐦' },
    { name: 'LinkedIn', specs: '16:9, 10m max', icon: '💼' },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedContent({
        title: 'AI Robot Learns to Cook in 10 Minutes',
        description: 'Watch as this AI-powered robot masters cooking through machine learning...',
        script: 'Hook: Did you know AI can now learn to cook better than humans? [Scene 1: Robot in kitchen]...',
        thumbnail: '/api/placeholder/400/225'
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-orbitron bg-gradient-primary bg-clip-text text-transparent mb-2">
          AI Content Generator
        </h1>
        <p className="text-muted-foreground">Create viral content with advanced AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Panel */}
        <div className="space-y-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Content Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Topic/Theme</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    {topics.map((topic) => (
                      <SelectItem key={topic} value={topic.toLowerCase().replace(' ', '-')}>
                        {topic}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Custom Prompt</label>
                <Textarea 
                  placeholder="Describe what kind of content you want to create..."
                  className="min-h-[100px]"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Target Platform</label>
                <div className="grid grid-cols-1 gap-2">
                  {platforms.map((platform) => (
                    <div key={platform.name} className="flex items-center justify-between p-3 border border-border/50 rounded-lg hover:bg-muted/30 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{platform.icon}</span>
                        <div>
                          <div className="font-medium">{platform.name}</div>
                          <div className="text-sm text-muted-foreground">{platform.specs}</div>
                        </div>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Style & Tone</label>
                <div className="flex flex-wrap gap-2">
                  {['Educational', 'Entertaining', 'Dramatic', 'Funny', 'Inspirational', 'Trendy'].map((style) => (
                    <Badge key={style} variant="outline" className="cursor-pointer hover:bg-primary/20">
                      {style}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating}
                className="w-full bg-gradient-primary hover:opacity-80"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Sparkles className="h-4 w-4 mr-2 animate-spin" />
                    Generating Magic...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Generate Content
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* AI Features */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                AI Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Auto-generate hooks</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Trending hashtags</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Viral thumbnails</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Auto-captions</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span>Music suggestions</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Output Panel */}
        <div className="space-y-6">
          {generatedContent ? (
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  Generated Content
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold">{generatedContent.title}</h3>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p className="text-sm text-muted-foreground">{generatedContent.description}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Script Preview</h4>
                  <div className="bg-muted/30 rounded-lg p-3 text-sm">
                    {generatedContent.script}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <Video className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Generated content will appear here</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Recent Generations */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Recent Generations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { title: 'AI vs Human Chess Match', time: '2 hours ago', platform: 'TikTok' },
                  { title: 'Robot Dog Parkour', time: '4 hours ago', platform: 'YouTube' },
                  { title: 'Neural Network Art', time: '6 hours ago', platform: 'Instagram' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border/30 rounded-lg">
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.time}</div>
                    </div>
                    <Badge variant="outline">{item.platform}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Generator;