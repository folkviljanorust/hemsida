
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedUnderline from './AnimatedUnderline';
import newsItems, { NewsItem } from '@/data/newsItems';
import { Link } from 'react-router-dom';
import NewsDialog from './NewsDialog';

const NewsSection: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenNews = (item: NewsItem) => {
    setSelectedNews(item);
    setIsDialogOpen(true);
  };

  const handleCloseNews = () => {
    setIsDialogOpen(false);
  };

  // Get the latest 3 news items
  const latestNews = [...newsItems].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).slice(0, 3);

  return (
    <section id="news" className="py-16 md:py-24 px-6 bg-folk-gray">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-folk-dark-purple mb-4">Aktuellt</h2>
          <div className="w-24 mx-auto mb-6">
            <AnimatedUnderline className="bg-folk-purple" />
          </div>
          <p className="text-lg text-folk-purple max-w-2xl mx-auto">
            Här hittar du de senaste nyheterna och uppdateringarna från Folkviljan Orust.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((item) => (
            <Card key={item.id} className="animate-on-scroll bg-white shadow-md hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-folk-dark-purple">{item.title}</CardTitle>
                <CardDescription>{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.content.substring(0, 150)}...</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="text-folk-purple border-folk-purple hover:bg-folk-lavender" onClick={() => handleOpenNews(item)}>
                  Läs mer
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/news">
            <Button className="bg-folk-purple hover:bg-folk-dark-purple text-white px-6 py-2">
              Se alla nyheter
            </Button>
          </Link>
        </div>
      </div>

      <NewsDialog 
        newsItem={selectedNews} 
        isOpen={isDialogOpen} 
        onClose={handleCloseNews} 
      />
    </section>
  );
};

export default NewsSection;
