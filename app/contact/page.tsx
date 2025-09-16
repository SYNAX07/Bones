"use client"

import type React from "react"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { EnhancedButton } from "@/components/enhanced-button"
import { AnimatedCard } from "@/components/animated-card"
import { FadeInSection } from "@/components/fade-in-section"
import { Mail, Phone, Clock, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)

    // Show success message (in a real app, you'd handle this properly)
    alert("Message sent successfully!")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We're here to help! Reach out to us with any questions about our plus-sized jeans, sizing, or orders.
            </p>
          </FadeInSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeInSection>
            <AnimatedCard hoverScale={false}>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="rounded-lg transition-all focus:ring-2 focus:ring-primary/20"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="rounded-lg transition-all focus:ring-2 focus:ring-primary/20"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="rounded-lg transition-all focus:ring-2 focus:ring-primary/20"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="rounded-lg transition-all focus:ring-2 focus:ring-primary/20"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      className="rounded-lg transition-all focus:ring-2 focus:ring-primary/20"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="rounded-lg transition-all focus:ring-2 focus:ring-primary/20"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <EnhancedButton
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg"
                    size="lg"
                    loading={isSubmitting}
                    loadingText="Sending Message..."
                  >
                    Send Message
                  </EnhancedButton>
                </form>
              </CardContent>
            </AnimatedCard>
          </FadeInSection>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <FadeInSection delay={100}>
              <AnimatedCard>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@bones.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Customer service hotline</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9AM - 6PM EST</p>
                      <p className="text-muted-foreground">Saturday: 10AM - 4PM EST</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">123 Fashion Street</p>
                      <p className="text-muted-foreground">New York, NY 10001</p>
                      <p className="text-muted-foreground">United States</p>
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </FadeInSection>

            {/* Social Media */}
            <FadeInSection delay={200}>
              <AnimatedCard>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Follow Us</CardTitle>
                  <p className="text-muted-foreground">
                    Stay connected for the latest updates, style tips, and exclusive offers!
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <EnhancedButton variant="outline" className="flex items-center gap-2 rounded-lg bg-transparent">
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </EnhancedButton>
                    <EnhancedButton variant="outline" className="flex items-center gap-2 rounded-lg bg-transparent">
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </EnhancedButton>
                    <EnhancedButton variant="outline" className="flex items-center gap-2 rounded-lg bg-transparent">
                      <Twitter className="h-4 w-4" />
                      Twitter
                    </EnhancedButton>
                  </div>
                </CardContent>
              </AnimatedCard>
            </FadeInSection>

            {/* FAQ */}
            <FadeInSection delay={300}>
              <AnimatedCard>
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-primary/20 pl-4 hover:border-primary/40 transition-colors">
                    <h4 className="font-semibold text-foreground mb-2">What sizes do you offer?</h4>
                    <p className="text-sm text-muted-foreground">
                      We offer sizes 14-28 in most of our jeans styles, with some styles available in extended sizes.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary/20 pl-4 hover:border-primary/40 transition-colors">
                    <h4 className="font-semibold text-foreground mb-2">What's your return policy?</h4>
                    <p className="text-sm text-muted-foreground">
                      We offer a 30-day return policy for unworn items with tags attached. Free returns on all orders.
                    </p>
                  </div>
                  <div className="border-l-4 border-primary/20 pl-4 hover:border-primary/40 transition-colors">
                    <h4 className="font-semibold text-foreground mb-2">How long does shipping take?</h4>
                    <p className="text-sm text-muted-foreground">
                      Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an
                      additional fee.
                    </p>
                  </div>
                </CardContent>
              </AnimatedCard>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  )
}
