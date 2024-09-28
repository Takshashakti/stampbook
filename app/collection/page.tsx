"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Search, Plus } from "lucide-react";

const userStamps = [
  { id: 1, name: "1840 Penny Black", year: 1840, image: "/placeholder.svg" },
  { id: 2, name: "1918 Inverted Jenny", year: 1918, image: "/placeholder.svg" },
  {
    id: 3,
    name: "1856 British Guiana 1c Magenta",
    year: 1856,
    image: "/placeholder.svg",
  },
  // Add more stamps as needed
];

export default function CollectionPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredStamps = userStamps.filter(
    (stamp) =>
      stamp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stamp.year.toString().includes(searchTerm)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Stamp Collection</h1>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Stamp
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Stamp</DialogTitle>
              <DialogDescription>
                Enter the details of your new stamp.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <Label htmlFor="stamp-name">Stamp Name</Label>
                <Input id="stamp-name" placeholder="Enter stamp name" />
              </div>
              <div>
                <Label htmlFor="stamp-year">Year of Issue</Label>
                <Input id="stamp-year" type="number" placeholder="Enter year" />
              </div>
              <div>
                <Label htmlFor="stamp-image">Image URL</Label>
                <Input id="stamp-image" placeholder="Enter image URL" />
              </div>
              <Button type="submit" className="w-full">
                Add to Collection
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="relative mb-8">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search your collection..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-8"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredStamps.map((stamp) => (
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
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
