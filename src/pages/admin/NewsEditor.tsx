
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

const NewsEditor: React.FC = () => {
  return (
    <div className="min-h-screen bg-folk-gray p-6">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-folk-dark-purple">Hantera Nyheter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Viktigt!</h3>
            <p className="text-yellow-800">
              För att lägga till eller redigera nyheter, gå till filen <code>src/data/newsItems.ts</code>
            </p>
            <p className="mt-2 text-yellow-800">
              Se nedan för instruktioner om hur du redigerar nyhetsinläggen.
            </p>
          </div>

          <div className="prose max-w-none">
            <h2>Instruktioner för att hantera nyheter</h2>
            
            <h3>Lägga till en ny nyhet:</h3>
            <ol>
              <li>Öppna filen <code>src/data/newsItems.ts</code></li>
              <li>Lägg till ett nytt nyhetsobjekt högst upp i listan (med högsta id-numret)</li>
              <li>Fyll i följande information:
                <ul>
                  <li><code>id</code>: Unikt ID (använd högre nummer än befintliga)</li>
                  <li><code>title</code>: Nyhetens rubrik</li>
                  <li><code>date</code>: Datum i format "ÅÅÅÅ-MM-DD"</li>
                  <li><code>content</code>: Kort innehåll/ingress för nyheten</li>
                </ul>
              </li>
              <li>Spara filen och committa ändringarna</li>
            </ol>

            <h3>Redigera en befintlig nyhet:</h3>
            <ol>
              <li>Öppna filen <code>src/data/newsItems.ts</code></li>
              <li>Hitta nyhetsobjektet du vill redigera baserat på id eller titel</li>
              <li>Ändra önskad information</li>
              <li>Spara filen och committa ändringarna</li>
            </ol>

            <h3>Exempel på nyhetsobjekt:</h3>
            <pre className="bg-gray-100 p-4 rounded">
{`{
  id: 4, // Högre än befintliga ID
  title: "Ny budget för kommunen",
  date: "2025-05-10", // Datum i format ÅÅÅÅ-MM-DD
  content: "Folkviljan Orust presenterar sitt förslag till ny budget för kommunen.",
}`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsEditor;
