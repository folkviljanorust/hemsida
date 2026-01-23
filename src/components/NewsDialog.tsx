
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { NewsItem } from '@/data/newsItems';
import { Button } from './ui/button';

interface NewsDialogProps {
  newsItem: NewsItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const NewsDialog: React.FC<NewsDialogProps> = ({ newsItem, isOpen, onClose }) => {
  if (!newsItem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl text-folk-dark-purple">{newsItem.title}</DialogTitle>
          <DialogDescription className="text-folk-purple font-medium">
            {newsItem.date}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 text-folk-dark-purple">
          <p className="mb-4">{newsItem.content}</p>
          
          {/* If there's more detailed content, it would go here */}
          <p className="mb-4">
            Läs mer om detta ämne i vårt arkiv eller kontakta oss för mer information.
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <Button 
            className="bg-folk-purple hover:bg-folk-dark-purple text-white"
            onClick={onClose}
          >
            Stäng
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsDialog;
