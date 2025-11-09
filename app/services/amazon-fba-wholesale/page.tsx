import Image from 'next/image';

export default function AmazonFBAWholesale() {
  return (
    <section id="amazon-fba-wholesale" className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Amazon FBA Wholesale</h1>
          <p className="text-lg text-gray-600">
            Expand your business with Amazon FBA Wholesale services, and secure profitable, branded products in bulk.
          </p>
        </div>

        {/* Image Section */}
        <div className="text-center mb-8">
          <div className="relative w-full max-w-3xl mx-auto aspect-[732/500] mb-4">
            <Image
              src="https://i.postimg.cc/KY9bpxgB/wholesale-1.jpg"
              alt="Amazon FBA Wholesale"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <p className="text-sm text-gray-500">Image Title: Amazon FBA Wholesale Service</p>
        </div>

        {/* Content Description */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* What is Amazon FBA Wholesale */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Amazon FBA Wholesale?</h2>
            <p className="text-gray-600 leading-relaxed">
              Amazon FBA Wholesale involves purchasing branded products in bulk directly from manufacturers or authorized distributors and reselling them through Amazon&apos;s platform. You leverage well-known brands with existing demand, reducing the risks involved in private label ventures. We streamline the entire process, from sourcing to shipment, allowing you to focus on scaling your business.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Amazon FBA Wholesale</h2>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>Lower risk with established brand names and proven products.</li>
              <li>Amazon handles storage, shipping, and customer service.</li>
              <li>Quicker time to market since no branding or product development is required.</li>
              <li>Scalability through bulk purchasing and larger orders.</li>
              <li>Profit from established brands with consistent customer demand.</li>
            </ul>
          </div>

          {/* How to Get Started */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Get Started</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Getting started with Amazon FBA Wholesale is easy, especially with our expert guidance. Follow these steps to kick-start your wholesale journey:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Consultation & Planning:</strong> We begin by understanding your business goals and target market to find the best wholesale opportunities.</li>
              <li><strong>Supplier Sourcing:</strong> Our team finds reliable suppliers and negotiates bulk deals for branded products that are in demand.</li>
              <li><strong>Amazon Setup:</strong> We guide you in setting up your Amazon Seller Central account, managing inventory, and listing your products.</li>
              <li><strong>Shipping & Fulfillment:</strong> Once your products are in stock, we help you send your inventory to Amazon&apos;s FBA warehouses for seamless order fulfillment.</li>
            </ol>
          </div>

          {/* Required Documents */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Documents Do You Need to Get Started?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Before beginning the Amazon FBA Wholesale process, you&apos;ll need to have the following documents ready:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>Proof of business registration (LLC, sole proprietorship, etc.).</li>
              <li>Purchase agreements or distribution contracts with authorized suppliers.</li>
              <li>Amazon Seller Central account details.</li>
              <li>Bank account details for payment processing.</li>
              <li>Product invoices and brand authorization (if applicable).</li>
            </ul>
          </div>

          {/* What We Will Provide */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Will Provide</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We offer a complete range of services to ensure your Amazon FBA Wholesale business runs smoothly. Here&apos;s what you can expect:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Wholesale Supplier Research:</strong> We provide access to vetted, high-quality suppliers and distributors.</li>
              <li><strong>Negotiation & Pricing:</strong> We handle negotiations to ensure the best pricing and contract terms for bulk purchasing.</li>
              <li><strong>Amazon Listing Creation:</strong> Our team creates optimized listings for your branded products, ensuring they stand out on the platform.</li>
              <li><strong>Inventory Management:</strong> We manage stock levels and help you coordinate shipments to Amazon&apos;s FBA centers to avoid out-of-stock situations.</li>
              <li><strong>Growth Strategy:</strong> Our ongoing support ensures you can scale your business, increase your product range, and boost profitability.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Choosing our Amazon FBA Wholesale service ensures that you get a complete end-to-end solution. Here&apos;s why we&apos;re the right choice for your business:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Comprehensive Service:</strong> We handle everything from sourcing to shipping, leaving you free to focus on scaling your business.</li>
              <li><strong>Market Expertise:</strong> Our team has deep expertise in Amazon FBA and knows how to pick the best products for long-term success.</li>
              <li><strong>Vetted Suppliers:</strong> We work with trusted, reputable suppliers to ensure your wholesale purchases are secure and profitable.</li>
              <li><strong>Proven Success:</strong> We&apos;ve helped many clients build thriving Amazon wholesale businesses that generate consistent profits.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}