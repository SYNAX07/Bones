import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Filter } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Classic Comfort Jeans",
    description: "Our signature fit with stretch fabric for all-day comfort. Perfect for busy parents on the go.",
    price: 49.99,
    originalPrice: null,
    image: "/comfortable-plus-sized-jeans-for-parents.jpg",
    rating: 5,
    reviews: 124,
    sizes: ["14", "16", "18", "20", "22", "24"],
    colors: ["Dark Blue", "Light Blue", "Black"],
    isNew: false,
    isBestseller: true,
  },
  {
    id: 2,
    name: "Urban Style Jeans",
    description: "Modern cut with a contemporary look. Great for casual outings and weekend adventures.",
    price: 54.99,
    originalPrice: null,
    image: "/stylish-plus-sized-denim-jeans.jpg",
    rating: 4,
    reviews: 89,
    sizes: ["14", "16", "18", "20", "22", "24", "26"],
    colors: ["Dark Blue", "Black", "Gray"],
    isNew: true,
    isBestseller: false,
  },
  {
    id: 3,
    name: "Premium Flex Jeans",
    description: "Our most advanced fabric technology with maximum stretch and durability for active lifestyles.",
    price: 64.99,
    originalPrice: null,
    image: "/premium-plus-sized-jeans-for-parents.jpg",
    rating: 5,
    reviews: 156,
    sizes: ["14", "16", "18", "20", "22", "24", "26", "28"],
    colors: ["Dark Blue", "Light Blue", "Black", "White"],
    isNew: false,
    isBestseller: true,
  },
  {
    id: 4,
    name: "Everyday Essential Jeans",
    description: "Versatile and comfortable jeans perfect for daily wear. Great value for money.",
    price: 39.99,
    originalPrice: 49.99,
    image: "/comfortable-plus-sized-jeans-for-parents.jpg",
    rating: 4,
    reviews: 67,
    sizes: ["14", "16", "18", "20", "22"],
    colors: ["Dark Blue", "Black"],
    isNew: false,
    isBestseller: false,
  },
  {
    id: 5,
    name: "Weekend Relaxed Fit",
    description: "Loose and comfortable fit for relaxed weekends and casual activities.",
    price: 44.99,
    originalPrice: null,
    image: "/stylish-plus-sized-denim-jeans.jpg",
    rating: 4,
    reviews: 43,
    sizes: ["16", "18", "20", "22", "24", "26"],
    colors: ["Light Blue", "Dark Blue"],
    isNew: false,
    isBestseller: false,
  },
  {
    id: 6,
    name: "Professional Plus Jeans",
    description: "Sophisticated design perfect for work and professional settings.",
    price: 59.99,
    originalPrice: null,
    image: "/premium-plus-sized-jeans-for-parents.jpg",
    rating: 5,
    reviews: 92,
    sizes: ["14", "16", "18", "20", "22", "24"],
    colors: ["Dark Blue", "Black", "Navy"],
    isNew: true,
    isBestseller: false,
  },
]

export default function ProductsPage() {
  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Plus-Sized Jeans Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover comfort, style, and confidence with our carefully curated collection of plus-sized jeans designed
            specifically for parents.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 p-4 bg-muted rounded-lg">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Filter by:</span>
            <Button variant="outline" size="sm" className="rounded-lg bg-transparent">
              Size
            </Button>
            <Button variant="outline" size="sm" className="rounded-lg bg-transparent">
              Color
            </Button>
            <Button variant="outline" size="sm" className="rounded-lg bg-transparent">
              Price
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">Showing {products.length} products</div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="aspect-square bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && <Badge className="bg-accent text-accent-foreground">New</Badge>}
                  {product.isBestseller && <Badge className="bg-primary text-primary-foreground">Bestseller</Badge>}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < product.rating ? "text-accent fill-current" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                {/* Sizes */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-foreground mb-2 block">Available Sizes:</span>
                  <div className="flex flex-wrap gap-1">
                    {product.sizes.map((size) => (
                      <Badge key={size} variant="outline" className="text-xs">
                        {size}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-foreground mb-2 block">Colors:</span>
                  <div className="flex flex-wrap gap-1">
                    {product.colors.map((color) => (
                      <Badge key={color} variant="secondary" className="text-xs">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold text-foreground mb-4">Can't Find Your Perfect Fit?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our customer service team is here to help you find the perfect jeans. Contact us for personalized
            recommendations and sizing assistance.
          </p>
          <Button asChild variant="outline" className="rounded-lg bg-transparent">
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
