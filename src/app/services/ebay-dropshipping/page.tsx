import Image from 'next/image';

export default function EBayDropshipping() {
  return (
    <section id="ebay-dropshipping" className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">eBay Dropshipping Services</h1>
          <p className="text-lg text-gray-600">
            Scale your eBay business with our expert dropshipping services for seamless growth.
          </p>
        </div>

        {/* Image Section */}
        <div className="text-center mb-8">
          <div className="relative w-full max-w-3xl mx-auto aspect-[732/500] mb-4">
            <Image
              src="https://i.postimg.cc/Njx69PW5/ebay-dropshipping.jpg"
              alt="eBay Dropshipping Services"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <p className="text-sm text-gray-500">Image Title: Efficient eBay Dropshipping Services</p>
        </div>

        {/* Content Description */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* What is eBay Dropshipping */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What is eBay Dropshipping?</h2>
            <p className="text-gray-600 leading-relaxed">
              eBay dropshipping is a business model where the seller lists products on eBay without holding any inventory. Instead, when a product is sold, the seller purchases the item from a third-party supplier who ships it directly to the buyer. This allows for a low upfront investment and flexibility in product offerings.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of eBay Dropshipping</h2>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>Low Startup Costs: You don&apos;t need to invest in inventory upfront, reducing your financial risk.</li>
              <li>Wide Product Range: List a variety of products without worrying about stock management.</li>
              <li>Scalability: Easily scale your business by adding more products to your store.</li>
              <li>Time-Efficient: Focus on growing your business while the supplier handles the shipping and fulfillment.</li>
            </ul>
          </div>

          {/* How to Get Started */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Get Started</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To get started with eBay dropshipping, you will need to:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Create an eBay Seller Account:</strong> Set up a professional seller account on eBay to list your products.</li>
              <li><strong>Source Reliable Suppliers:</strong> Partner with trusted suppliers who will fulfill orders promptly.</li>
              <li><strong>Optimize Product Listings:</strong> Write clear, SEO-optimized product descriptions and set competitive pricing.</li>
              <li><strong>Monitor Orders and Fulfillment:</strong> Track your orders to ensure timely delivery and customer satisfaction.</li>
            </ol>
          </div>

          {/* Required Documents */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Documents Do You Need to Get Started?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Before starting with eBay dropshipping, ensure you have the following:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>A registered eBay seller account.</li>
              <li>Supplier agreements or contacts for reliable sourcing.</li>
              <li>Product details including images, descriptions, and SKUs.</li>
              <li>Payment processing account (e.g., PayPal) to handle transactions.</li>
            </ul>
          </div>

          {/* What We Will Provide */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Will Provide</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our eBay Dropshipping Services include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Store Setup and Optimization:</strong> We&apos;ll help you create a professional and optimized eBay store.</li>
              <li><strong>Supplier Sourcing:</strong> We find reliable suppliers to fulfill your products efficiently and on time.</li>
              <li><strong>Product Listing Optimization:</strong> We craft SEO-rich titles, descriptions, and images to enhance your visibility on eBay.</li>
              <li><strong>Order Management:</strong> We manage the entire fulfillment process, ensuring that orders are shipped promptly to your customers.</li>
              <li><strong>Performance Tracking:</strong> We monitor your store&apos;s performance and make necessary adjustments to optimize sales.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Here&apos;s why our eBay Dropshipping Services are the right choice for you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Experienced Dropshipping Team:</strong> We have years of experience managing successful eBay dropshipping stores.</li>
              <li><strong>Custom Solutions:</strong> Our services are tailored to meet your business needs, ensuring optimal results.</li>
              <li><strong>Seamless Order Fulfillment:</strong> We ensure timely and accurate order fulfillment, keeping your customers satisfied.</li>
              <li><strong>Data-Driven Approach:</strong> We analyze your store&apos;s data to enhance performance and increase profitability.</li>
              <li><strong>Dedicated Support:</strong> Our team provides ongoing support and guidance to help you grow your eBay business.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 