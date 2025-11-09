import Image from 'next/image';

export default function AmazonFBAPrivateLabel() {
  return (
    <section id="amazon-fba-private-label" className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Amazon FBA Private Label</h1>
          <p className="text-lg text-gray-600">
            Turn your business idea into a successful private label brand on Amazon with our expert guidance.
          </p>
        </div>

        {/* Image Section */}
        <div className="text-center mb-8">
          <div className="relative w-full max-w-3xl mx-auto aspect-[732/500] mb-4">
            <Image
              src="https://i.postimg.cc/9Xp6JxPj/amazon-1.jpg"
              alt="Amazon FBA Private Label"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <p className="text-sm text-gray-500">Image Title: Amazon FBA Private Label Service</p>
        </div>

        {/* Content Description */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* What is Amazon FBA Private Label */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Amazon FBA Private Label?</h2>
            <p className="text-gray-600 leading-relaxed">
              Amazon FBA Private Label is a business model where you create and sell products under your own brand name through Amazon&apos;s fulfillment network. By sourcing products directly from manufacturers and rebranding them, you can create a unique presence on Amazon, benefiting from Amazon&apos;s logistics and customer base. Our service helps you every step of the way, from product research to brand creation and product launch.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Amazon FBA Private Label</h2>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>Complete control over branding and pricing.</li>
              <li>Higher profit margins compared to wholesale or reselling.</li>
              <li>Amazon handles shipping, customer service, and fulfillment.</li>
              <li>Scalable business model with global reach.</li>
              <li>Potential to build a long-term, sellable brand.</li>
            </ul>
          </div>

          {/* How to Get Started */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Get Started</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Getting started with Amazon FBA Private Label is easy when you have the right team guiding you. Here&apos;s how we help you kick-start your private label business:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Consultation & Strategy:</strong> We begin with a comprehensive consultation to understand your business goals, niche, and target market.</li>
              <li><strong>Product Research:</strong> We conduct in-depth market research to identify high-demand, low-competition products that align with your vision.</li>
              <li><strong>Supplier Sourcing:</strong> We connect you with reliable manufacturers who can produce high-quality products at competitive prices.</li>
              <li><strong>Brand Creation:</strong> We help you design your brand logo, packaging, and overall brand identity to stand out in the marketplace.</li>
              <li><strong>Amazon Listing & Launch:</strong> We create optimized product listings, with professional images, bullet points, and descriptions to attract potential customers.</li>
              <li><strong>Inventory Management & Fulfillment:</strong> Once your products are ready, we assist in sending your inventory to Amazon&apos;s fulfillment centers and monitor inventory levels.</li>
            </ol>
          </div>

          {/* Required Documents */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Documents Do You Need to Get Started?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Before we start your Amazon FBA Private Label journey, you will need to provide the following documents:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>Proof of business registration (LLC, sole proprietorship, etc.).</li>
              <li>Product sourcing agreements or manufacturer contracts.</li>
              <li>Brand trademarks (if applicable) or proof of trademark application.</li>
              <li>Bank account details for Amazon Seller Central registration.</li>
              <li>Government-issued ID for Amazon verification purposes.</li>
            </ul>
          </div>

          {/* What We Will Provide */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Will Provide</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We offer a comprehensive package of services to ensure your Amazon FBA Private Label venture is successful. Here&apos;s what you can expect from us:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>In-depth Market Research:</strong> We provide data-backed product research to identify profitable niches.</li>
              <li><strong>Supplier Sourcing & Negotiation:</strong> We connect you with vetted manufacturers and negotiate terms to secure the best prices.</li>
              <li><strong>Branding & Packaging Design:</strong> Our creative team designs your brand identity, logo, and product packaging to ensure it resonates with your target audience.</li>
              <li><strong>Listing Optimization:</strong> We create highly optimized Amazon listings with keyword-rich descriptions, bullet points, and backend SEO.</li>
              <li><strong>Launch Strategy:</strong> We develop a customized product launch strategy, including PPC campaigns and marketing tactics, to generate early sales and reviews.</li>
              <li><strong>Ongoing Support:</strong> We provide ongoing support to help you scale and manage your business effectively.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Choosing the right partner for your Amazon FBA Private Label business is crucial. Here&apos;s why our clients trust us to deliver results:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Proven Track Record:</strong> We&apos;ve helped numerous brands launch and scale successful private label businesses on Amazon.</li>
              <li><strong>End-to-End Service:</strong> We offer a complete solution, from product research to brand development, so you don&apos;t need to worry about any aspect of the process.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 