import { CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { EnhancedButton } from "@/components/enhanced-button"
import { AnimatedCard } from "@/components/animated-card"
import { FadeInSection } from "@/components/fade-in-section"
import Link from "next/link"
import { Heart, Truck, DollarSign, Star, ArrowRight, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto text-center relative">
          <FadeInSection>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Welcome to{" "}
              <span className="text-primary relative">
                Bones
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full" />
              </span>
            </h1>
          </FadeInSection>
          <FadeInSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Faithful and lively plus-sized jeans designed for parents who deserve comfort, style, and confidence in
              every step.
            </p>
          </FadeInSection>
          <FadeInSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg"
              >
                <Link href="/products" className="flex items-center gap-2">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </Link>
              </EnhancedButton>
              <EnhancedButton variant="outline" size="lg" className="rounded-lg bg-transparent">
                Learn More
              </EnhancedButton>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance">
              Why Choose Bones?
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={100}>
              <AnimatedCard className="text-center h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl" />
                    <Heart className="h-12 w-12 text-primary mx-auto relative" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Faithfulness</h3>
                  <p className="text-muted-foreground">
                    We stay true to our commitment of providing quality jeans that fit perfectly and last long.
                  </p>
                </CardContent>
              </AnimatedCard>
            </FadeInSection>
            <FadeInSection delay={200}>
              <AnimatedCard className="text-center h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl" />
                    <DollarSign className="h-12 w-12 text-primary mx-auto relative" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Affordability</h3>
                  <p className="text-muted-foreground">
                    Premium quality doesn't have to break the bank. We offer competitive prices for all families.
                  </p>
                </CardContent>
              </AnimatedCard>
            </FadeInSection>
            <FadeInSection delay={300}>
              <AnimatedCard className="text-center h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl" />
                    <Truck className="h-12 w-12 text-primary mx-auto relative" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Direct Shipping</h3>
                  <p className="text-muted-foreground">
                    Fast, reliable delivery straight to your door. No hassle, no waiting - just great jeans when you
                    need them.
                  </p>
                </CardContent>
              </AnimatedCard>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance">
              Our Plus-Sized Jeans Collection
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={100}>
              <AnimatedCard className="overflow-hidden">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src="/comfortable-plus-sized-jeans-for-parents.jpg"
                    alt="Classic Comfort Jeans"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Best Seller
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Classic Comfort</h3>
                  <p className="text-muted-foreground mb-4">
                    Our signature fit with stretch fabric for all-day comfort. Perfect for busy parents on the go.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">$49.99</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent fill-current" />
                      ))}
                    </div>
                  </div>
                  <EnhancedButton className="w-full" variant="outline">
                    View Details
                  </EnhancedButton>
                </CardContent>
              </AnimatedCard>
            </FadeInSection>

            <FadeInSection delay={200}>
              <AnimatedCard className="overflow-hidden">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src="/stylish-plus-sized-denim-jeans.jpg"
                    alt="Urban Style Jeans"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Urban Style</h3>
                  <p className="text-muted-foreground mb-4">
                    Modern cut with a contemporary look. Great for casual outings and weekend adventures.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">$54.99</span>
                    <div className="flex items-center">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent fill-current" />
                      ))}
                      <Star className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <EnhancedButton className="w-full" variant="outline">
                    View Details
                  </EnhancedButton>
                </CardContent>
              </AnimatedCard>
            </FadeInSection>

            <FadeInSection delay={300}>
              <AnimatedCard className="overflow-hidden">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img
                    src="/premium-plus-sized-jeans-for-parents.jpg"
                    alt="Premium Flex Jeans"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Premium
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Premium Flex</h3>
                  <p className="text-muted-foreground mb-4">
                    Our most advanced fabric technology with maximum stretch and durability for active lifestyles.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">$64.99</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-accent fill-current" />
                      ))}
                    </div>
                  </div>
                  <EnhancedButton className="w-full" variant="outline">
                    View Details
                  </EnhancedButton>
                </CardContent>
              </AnimatedCard>
            </FadeInSection>
          </div>

          <FadeInSection delay={400}>
            <div className="text-center mt-12">
              <EnhancedButton
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
              >
                <Link href="/products" className="flex items-center gap-2">
                  View All Products <ArrowRight className="h-4 w-4" />
                </Link>
              </EnhancedButton>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance">
              What Our Customers Say
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={100}>
              <AnimatedCard>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Finally found jeans that fit perfectly! The comfort is unmatched and they look great too."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">SM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Sarah M.</p>
                      <p className="text-sm text-muted-foreground">Verified Customer</p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </FadeInSection>
            <FadeInSection delay={200}>
              <AnimatedCard>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Great quality and fast shipping. These jeans have become my go-to for everyday wear."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">JD</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Jessica D.</p>
                      <p className="text-sm text-muted-foreground">Verified Customer</p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </FadeInSection>
            <FadeInSection delay={300}>
              <AnimatedCard>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Love the fit and style! Customer service was amazing when I had questions about sizing."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">MR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Maria R.</p>
                      <p className="text-sm text-muted-foreground">Verified Customer</p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance">
              Get in Touch
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeInSection delay={100}>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div>
                      <strong className="text-foreground">Email:</strong> hello@bones.com
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div>
                      <strong className="text-foreground">Phone:</strong> (555) 123-4567
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <div>
                      <strong className="text-foreground">Hours:</strong> Monday - Friday, 9AM - 6PM EST
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Follow Us</h4>
                  <p className="text-muted-foreground mb-4">
                    Stay connected with Bones for the latest updates, style tips, and exclusive offers!
                  </p>
                  <div className="flex space-x-4">
                    <EnhancedButton variant="outline" size="sm" className="rounded-lg bg-transparent">
                      Facebook
                    </EnhancedButton>
                    <EnhancedButton variant="outline" size="sm" className="rounded-lg bg-transparent">
                      Instagram
                    </EnhancedButton>
                    <EnhancedButton variant="outline" size="sm" className="rounded-lg bg-transparent">
                      Twitter
                    </EnhancedButton>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <AnimatedCard hoverScale={false}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Send us a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="rounded-lg transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="rounded-lg transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={4}
                        className="rounded-lg transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <EnhancedButton
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg"
                    >
                      Send Message
                    </EnhancedButton>
                  </form>
                </CardContent>
              </AnimatedCard>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90" />
        <div className="max-w-4xl mx-auto text-center relative">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Find Your Perfect Fit?</h2>
            <p className="text-xl mb-8 text-pretty">
              Join thousands of satisfied parents who have found comfort and confidence in Bones jeans.
            </p>
            <EnhancedButton asChild size="lg" variant="secondary" className="rounded-lg">
              <Link href="/products" className="flex items-center gap-2">
                Shop Now <ArrowRight className="h-4 w-4" />
              </Link>
            </EnhancedButton>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
