import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import blog1 from "../../assets/images/blog1.png"
import blog2 from "../../assets/images/blog2.png"
import blog3 from "../../assets/images/blog3.png"   
const blogPosts = [
  {
    id: "1",
    date: "May 23, 2024",
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    imageUrl: blog1,
    link: "#",
  },
  {
    id: "2",
    date: "May 23, 2024",
    title: "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
    imageUrl: blog2,
    link: "#",
  },
  {
    id: "3",
    date: "May 23, 2024",
    title: "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
    imageUrl: blog3,
    link: "#",
  },
]

export default function Blog() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="w-10/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
             <span className="text-primary bg-primary/10 px-4 py-1 rounded-lg font-medium text-sm w-fit">
            Our Blog
          </span>

          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 my-4">Fresh Harvest Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy
            eating, and culinary inspiration.
          </p>
          <div className="absolute top-8 right-8">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-green-500">
              <path
                d="M32 8C32 8 40 16 48 24C52 28 56 32 56 40C56 48.837 48.837 56 40 56C31.163 56 24 48.837 24 40C24 36 20 32 16 28C12 24 8 20 8 16C8 11.582 11.582 8 16 8C20.418 8 24 11.582 24 16C24 18 26 20 28 22C30 24 32 26 32 28V8Z"
                fill="currentColor"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              {/* Image Container */}
              <Link href={post.link} className="block mb-4 overflow-hidden rounded-2xl">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  {post.imageUrl && (
                    <img
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </Link>

              {/* Content */}
              <div className="space-y-3">
                <time className="text-sm text-gray-500">{post.date}</time>

                <Link href={post.link}>
                  <h3 className="text-xl font-medium text-gray-900 leading-tight group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>

                <Link
                  href={post.link}
                  className="inline-flex items-center gap-2 text-orange-500 font-medium group/link hover:underline transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
