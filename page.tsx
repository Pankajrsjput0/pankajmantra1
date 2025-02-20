import Image from "next/image"
import Link from "next/link"
import { Eye, Clock } from "lucide-react"

const TopNovel = ({ title, views, coverUrl }: { title: string; views: number; coverUrl: string }) => (
  <div className="flex flex-col items-center">
    <Image src={coverUrl || "/placeholder.svg"} alt={title} width={120} height={180} className="rounded-lg shadow-md" />
    <h3 className="mt-2 text-center font-semibold">{title}</h3>
    <div className="flex items-center mt-1">
      <Eye size={16} className="mr-1" />
      <span>{views}</span>
    </div>
  </div>
)

const NovelCard = ({
  title,
  author,
  views,
  coverUrl,
  tags,
  lastUpdated,
}: { title: string; author: string; views: number; coverUrl: string; tags: string[]; lastUpdated: string }) => (
  <div className="flex bg-white rounded-lg shadow-md p-2">
    <Image src={coverUrl || "/placeholder.svg"} alt={title} width={80} height={120} className="rounded-lg" />
    <div className="ml-4 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{author}</p>
        <div className="flex items-center mt-1">
          <Eye size={16} className="mr-1" />
          <span className="mr-2">{views}</span>
          <Clock size={16} className="mr-1" />
          <span>{lastUpdated}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-1 mt-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
)

export default function Home() {
  const topNovels = [
    { title: "The Lost Kingdom", views: 1000000, coverUrl: "/placeholder.svg" },
    { title: "Eternal Love", views: 950000, coverUrl: "/placeholder.svg" },
    { title: "Cyber Nexus", views: 900000, coverUrl: "/placeholder.svg" },
    { title: "Dragon's Fury", views: 850000, coverUrl: "/placeholder.svg" },
    { title: "Whispers in the Wind", views: 800000, coverUrl: "/placeholder.svg" },
  ]

  const recentlyUpdatedNovels = [
    {
      title: "Shadows of Eternity",
      author: "J.K. Rowling",
      views: 500000,
      coverUrl: "/placeholder.svg",
      tags: ["Fantasy", "Magic"],
      lastUpdated: "2h ago",
    },
    {
      title: "Starborn Legacy",
      author: "Brandon Sanderson",
      views: 450000,
      coverUrl: "/placeholder.svg",
      tags: ["Sci-Fi", "Adventure"],
      lastUpdated: "5h ago",
    },
    {
      title: "Echoes of the Past",
      author: "Stephen King",
      views: 400000,
      coverUrl: "/placeholder.svg",
      tags: ["Horror", "Thriller"],
      lastUpdated: "1d ago",
    },
    {
      title: "Crimson Skies",
      author: "George R.R. Martin",
      views: 350000,
      coverUrl: "/placeholder.svg",
      tags: ["Fantasy", "Epic"],
      lastUpdated: "2d ago",
    },
    {
      title: "Quantum Dreams",
      author: "Isaac Asimov",
      views: 300000,
      coverUrl: "/placeholder.svg",
      tags: ["Sci-Fi", "Philosophy"],
      lastUpdated: "3d ago",
    },
    {
      title: "Hearts Entwined",
      author: "Jane Austen",
      views: 250000,
      coverUrl: "/placeholder.svg",
      tags: ["Romance", "Historical"],
      lastUpdated: "4d ago",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="relative h-96 rounded-xl overflow-hidden">
          <Image src="/hero-image.jpg" alt="Featured Book" layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Link
              href="/explore"
              className="bg-orange-500 text-white px-6 py-3 rounded-full text-xl font-bold hover:bg-orange-600 transition-colors"
            >
              Start Reading
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Top 10 Novels</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {topNovels.map((novel, index) => (
            <TopNovel key={index} {...novel} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Recently Updated Novels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentlyUpdatedNovels.map((novel, index) => (
            <NovelCard key={index} {...novel} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/explore"
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors inline-block"
          >
            View More
          </Link>
        </div>
      </section>
    </div>
  )
}

