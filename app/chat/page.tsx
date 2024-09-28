"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Stamp, User, Upload } from "lucide-react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "Welcome to StampChat! Ask me anything about stamps.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }]);
      // Here you would typically send the message to your backend
      // and get a response. For now, we'll just simulate a response.
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "system",
            content: "This is a simulated response about stamps.",
          },
        ]);
      }, 1000);
      setInput("");
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here you would typically upload the image to your server
      // and then send a message with the image URL
      setMessages([
        ...messages,
        { role: "user", content: `Uploaded image: ${file.name}` },
      ]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "system",
            content:
              "I&apos;ve received your image. What would you like to know about this stamp?",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-2xl font-bold">StampChat</h1>
        <Button variant="outline">New Chat</Button>
      </header>
      <ScrollArea className="flex-grow p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start mb-4 ${
              message.role === "user" ? "justify-end" : ""
            }`}
          >
            {message.role === "system" && (
              <Avatar className="mr-2">
                <AvatarImage src="/stamp-avatar.png" alt="Stamp" />
                <AvatarFallback>
                  <Stamp />
                </AvatarFallback>
              </Avatar>
            )}
            <div
              className={`rounded-lg p-3 max-w-[80%] ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              {message.content}
            </div>
            {message.role === "user" && (
              <Avatar className="ml-2">
                <AvatarImage src="/user-avatar.png" alt="User" />
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about stamps..."
            className="flex-grow"
          />
          <Button type="submit">Send</Button>
          <label htmlFor="image-upload" className="cursor-pointer">
            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <Button type="button" variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload Image
            </Button>
          </label>
        </form>
      </div>
    </div>
  );
}
