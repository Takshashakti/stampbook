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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ShoppingCart, Search, Plus } from "lucide-react";

const stamps = [
  { id: 1, name: "1840 Penny Black", year: 1840, image: "/1840-penny-black-stamp.jpg", price: 1000 },
  { id: 2, name: "1918 Inverted Jenny", year: 1918, image: "/British_Guiana.jpg", price: 2000 },
  {
    id: 3,
    name: "1856 British Guiana 1c Magenta",
    year: 1856,
    image: "/US_Airmail_inverted_Jenny_24c_1918_issue.jpg",
    price: 3000,
  },
  // Add more stamps as needed
];

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [isSellDialogOpen, setIsSellDialogOpen] = useState(false);

  const filteredStamps = stamps
    .filter((stamp) =>
      stamp.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Stamp Marketplace</h1>
        <Dialog open={isSellDialogOpen} onOpenChange={setIsSellDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Sell Stamp
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sell Your Stamp</DialogTitle>
              <DialogDescription>
                Enter the details of the stamp you want to sell.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4">
              <div>
                <Label htmlFor="stamp-name">Stamp Name</Label>
                <Input id="stamp-name" placeholder="Enter stamp name" />
              </div>
              <div>
                <Label htmlFor="stamp-price">Price</Label>
                <Input
                  id="stamp-price"
                  type="number"
                  placeholder="Enter price"
                />
              </div>
              <div>
                <Label htmlFor="stamp-image">Image URL</Label>
                <Input id="stamp-image" placeholder="Enter image URL" />
              </div>
              <Button type="submit" className="w-full">
                List for Sale
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search stamps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Sort by Name</SelectItem>
            <SelectItem value="price">Sort by Price</SelectItem>
          </SelectContent>
        </Select>
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
              <p className="text-2xl font-bold">
                ${stamp.price.toLocaleString()}
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
