
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AnimatedUnderline from './AnimatedUnderline';
import newsItems, { NewsItem } from '@/data/newsItems';
import { Link } from 'react-router-dom';

const NewsContent: React.FC<{ item: NewsItem }> = ({ item }) => {
  return (
    <div className="text-folk-dark-purple max-h-[70vh] overflow-y-auto pr-2">
      <p className="text-sm text-folk-purple mb-4">{item.date}</p>
      <div className="whitespace-pre-line">{item.content}</div>
    </div>
  );
};

const NewsSection: React.FC = () => {
  // Get the latest 2 news items for pop-out display
  const latestNews = [...newsItems].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }).slice(0, 2);

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
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          {latestNews.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="px-6 py-6 text-lg text-folk-purple border-folk-purple hover:bg-folk-lavender"
                >
                  {item.title}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl bg-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-folk-dark-purple">{item.title}</DialogTitle>
                </DialogHeader>
                <NewsContent item={item} />
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/news">
            <Button className="bg-folk-purple hover:bg-folk-dark-purple text-white px-6 py-2">
              Se alla nyheter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
