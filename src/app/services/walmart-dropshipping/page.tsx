import Image from 'next/image';

export default function WalmartDropshipping() {
  return (
    <section id="walmart-dropshipping" className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Walmart Wholesale Service</h1>
          <p className="text-lg text-gray-600">
            Unlock profitable opportunities by selling branded products on Walmart&apos;s vast marketplace with our wholesale service.
          </p>
        </div>

        {/* Image Section */}
        <div className="text-center mb-8">
          <div className="relative w-full max-w-3xl mx-auto aspect-[732/500] mb-4">
            <Image
              src="https://i.postimg.cc/3JR3py47/walmart-drp.jpg"
              alt="Walmart Dropshipping"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <p className="text-sm text-gray-500">Image Title: Walmart Wholesale Service</p>
        </div>

        {/* Content Description */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* What is Walmart Wholesale */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Walmart Wholesale?</h2>
            <p className="text-gray-600 leading-relaxed">
              Walmart Wholesale involves purchasing branded or high-demand products in bulk from distributors or manufacturers and selling them on Walmart&apos;s online marketplace. With Walmart&apos;s growing eCommerce presence, this business model allows you to tap into millions of shoppers, giving you access to a powerful platform to grow your business.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Walmart Wholesale</h2>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>Reach millions of Walmart&apos;s customers nationwide.</li>
              <li>Low-risk model by leveraging branded products with established demand.</li>
              <li>Walmart handles fulfillment through its WFS (Walmart Fulfillment Services).</li>
              <li>Gain trust with customers who prefer buying from recognized brands on a trusted platform.</li>
              <li>Opportunity to grow your business quickly with bulk buying power and larger margins.</li>
            </ul>
          </div>

          {/* How to Get Started */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Get Started</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Starting your Walmart Wholesale journey is straightforward with our expert team guiding you at every step. Here&apos;s how:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Business Consultation:</strong> We assess your business goals and help you identify the best wholesale products to sell on Walmart.</li>
              <li><strong>Supplier Sourcing:</strong> We source reliable, high-quality suppliers and establish strong relationships with them for bulk purchasing.</li>
              <li><strong>Walmart Seller Setup:</strong> We assist in setting up your Walmart Seller Central account and optimizing your listings.</li>
              <li><strong>Inventory Management & Fulfillment:</strong> We help you send inventory to Walmart&apos;s fulfillment centers for fast, reliable shipping to customers.</li>
            </ol>
          </div>

          {/* Required Documents */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Documents Do You Need to Get Started?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Before launching your Walmart Wholesale business, you&apos;ll need to have the following documents prepared:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>Proof of business registration (LLC, sole proprietorship, etc.).</li>
              <li>Distribution or purchase agreements with authorized suppliers.</li>
              <li>Walmart Seller Central account credentials.</li>
              <li>Bank account details for payment processing.</li>
              <li>Product invoices and brand authorization (if needed).</li>
            </ul>
          </div>

          {/* What We Will Provide */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Will Provide</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We provide a complete end-to-end solution for Walmart Wholesale sellers. Here&apos;s what you can expect:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Wholesale Supplier Research:</strong> We find top-tier suppliers to offer you high-demand products at competitive prices.</li>
              <li><strong>Contract Negotiation:</strong> We negotiate bulk deals and favorable pricing to maximize your profit margins.</li>
              <li><strong>Walmart Listing Optimization:</strong> Our team creates optimized product listings that meet Walmart&apos;s guidelines and rank higher in search results.</li>
              <li><strong>Inventory & Fulfillment Management:</strong> We manage your inventory levels and assist with the logistics of sending stock to Walmart Fulfillment Services (WFS).</li>
              <li><strong>Growth Strategy:</strong> We provide ongoing support and strategies to scale your business and increase profits through Walmart Wholesale.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our Walmart Wholesale service is designed to help you succeed by providing comprehensive support at every stage of your business journey. Here&apos;s why we&apos;re the right choice for your wholesale business:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Expert Guidance:</strong> We know the ins and outs of Walmart&apos;s marketplace and can guide you to success.</li>
              <li><strong>Full-Service Support:</strong> We handle everything from product sourcing to fulfillment, letting you focus on growth.</li>
              <li><strong>Proven Track Record:</strong> Our team has successfully launched and scaled multiple Walmart Wholesale businesses, helping our clients achieve remarkable growth.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 