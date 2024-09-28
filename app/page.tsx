import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, MessageCircle, ShoppingBag, Upload } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <BookOpen className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">StampBook</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="collection">
            My Collection
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="marketplace">
            Marketplace
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="profile">
            Profile
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to StampBook
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your digital platform for stamp information, verification, and exchange.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#features"  ><Button>Get Started</Button></Link>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 relative flex">
          <div className="lg:flex container px-4 md:px-6 justify-center items-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Link href="/collection">
              <Card>
                <CardHeader>
                  <Upload className="h-6 w-6 mb-2" />
                  <CardTitle>Upload Stamps</CardTitle>
                  <CardDescription>Get details about your stamps by uploading pictures.</CardDescription>
                </CardHeader>
              </Card></Link>
              <Link href="/chat">
              <Card>
                <CardHeader>
                  <MessageCircle className="h-6 w-6 mb-2" />
                  <CardTitle>Chat with Stamps</CardTitle>
                  <CardDescription>Get stamp-related information in a conversational manner.</CardDescription>
                </CardHeader>
              </Card></Link>
              <Link href="/marketplace">
              <Card>
                <CardHeader>
                  <ShoppingBag className="h-6 w-6 mb-2" />
                  <CardTitle>Marketplace</CardTitle>
                  <CardDescription>Buy and sell stamps in our online marketplace.</CardDescription>
                </CardHeader>
              </Card></Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Explore StampBook
            </h2>
            <Tabs defaultValue="upload" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="upload">Upload</TabsTrigger>
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
              </TabsList>
              <TabsContent value="upload">
                <Card>
                  <CardHeader>
                    <CardTitle>Upload Your Stamp</CardTitle>
                    <CardDescription>Get information about your stamp by uploading a picture.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <label htmlFor="stamp-upload">Upload Stamp Image</label>
                      <Input id="stamp-upload" type="file" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Upload</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="chat">
                <Card>
                  <CardHeader>
                    <CardTitle>Chat with Stamp</CardTitle>
                    <CardDescription>Ask questions about your stamp in a conversational manner.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <label htmlFor="chat-input">Your Question</label>
                      <Input id="chat-input" placeholder="Ask about your stamp..." />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Send</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="marketplace">
                <Card>
                  <CardHeader>
                    <CardTitle>Stamp Marketplace</CardTitle>
                    <CardDescription>Buy and sell stamps in our online marketplace.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <label htmlFor="search-stamps">Search Stamps</label>
                      <Input id="search-stamps" placeholder="Search for stamps..." />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/marketplace"><Button>Search</Button></Link>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 StampBook. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}