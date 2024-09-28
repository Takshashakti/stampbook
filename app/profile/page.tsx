"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatar.jpg",
    bio: "Passionate stamp collector with a focus on 19th century European stamps.",
    collectionCount: 3,
    marketListings: 3,
  });

  const userStamps = [
    { id: 1, name: "1840 Penny Black", year: 1840, image: "/1840-penny-black-stamp.jpg" },
    { id: 2, name: "1918 Inverted Jenny", year: 1918, image: "/British_Guiana.jpg" },
    {
      id: 3,
      name: "1856 British Guiana 1c Magenta",
      year: 1856,
      image: "/US_Airmail_inverted_Jenny_24c_1918_issue.jpg",
    },
    // Add more stamps as needed
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically send the updated user data to your backend
    console.log("Profile updated:", user);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <Button>Change Picture</Button>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Input
                  id="bio"
                  value={user.bio}
                  onChange={(e) => setUser({ ...user, bio: e.target.value })}
                />
              </div>
              <Button type="submit">Save Changes</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="collection">
            <TabsList>
              <TabsTrigger value="collection">Collection</TabsTrigger>
              <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            </TabsList>
            <TabsContent value="collection">
              <p>You have {user.collectionCount} stamps in your collection.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {userStamps.map((stamp) => (
          <Card key={stamp.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="truncate">{stamp.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="aspect-square w-full relative mb-4">
                <img
                  src={stamp.image}
                  alt={stamp.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <p className="text-lg">Year: {stamp.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
            </TabsContent>
            <TabsContent value="marketplace">
              <p>
                You have {user.marketListings} active listings in the
                marketplace.
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {userStamps.map((stamp) => (
          <Card key={stamp.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="truncate">{stamp.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="aspect-square w-full relative mb-4">
                <img
                  src={stamp.image}
                  alt={stamp.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <p className="text-lg">Year: {stamp.year}</p>
            </CardContent>
          </Card>
        ))}
      </div>
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
