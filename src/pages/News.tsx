
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedUnderline from '@/components/AnimatedUnderline';
import newsItems, { NewsItem } from '@/data/newsItems';
import NewsDialog from '@/components/NewsDialog';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  const handleOpenNews = (item: NewsItem) => {
    setSelectedNews(item);
    setIsDialogOpen(true);
  };

  const handleCloseNews = () => {
    setIsDialogOpen(false);
  };

  // Filter news by search term
  const filteredNews = newsItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort news by date
  const sortedNews = [...filteredNews].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 px-6 bg-folk-gray">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h1 className="text-4xl md:text-5xl font-bold text-folk-dark-purple mb-4">Aktuellt</h1>
              <div className="w-24 mx-auto mb-6">
                <AnimatedUnderline className="bg-folk-purple" />
              </div>
              <p className="text-lg text-folk-purple max-w-2xl mx-auto">
                Här hittar du alla nyheter och uppdateringar från Folkviljan Orust.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="relative w-full md:w-auto flex-grow">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-folk-purple" />
                  <Input
                    placeholder="Sök nyheter..."
                    className="pl-10 border-folk-purple"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-folk-dark-purple whitespace-nowrap">Sortera:</span>
                  <ToggleGroup type="single" value={sortOrder} onValueChange={(value) => value && setSortOrder(value as "newest" | "oldest")}>
                    <ToggleGroupItem value="newest" aria-label="Nyaste först" className="text-folk-purple">
                      Nyaste först
                    </ToggleGroupItem>
                    <ToggleGroupItem value="oldest" aria-label="Äldsta först" className="text-folk-purple">
                      Äldsta först
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedNews.length > 0 ? (
                sortedNews.map((item) => (
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
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-folk-dark-purple">Inga nyheter matchade din sökning.</p>
                </div>
              )}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/">
                <Button className="bg-folk-purple hover:bg-folk-dark-purple text-white px-6 py-2">
                  Tillbaka till hemsidan
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <NewsDialog 
        newsItem={selectedNews} 
        isOpen={isDialogOpen} 
        onClose={handleCloseNews} 
      />
    </div>
  );
};

export default News;
