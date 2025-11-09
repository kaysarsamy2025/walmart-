import Image from 'next/image';

export default function WalmartWFS() {
  return (
    <section id="walmart-wfs" className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Walmart Fulfillment Services (WFS)</h1>
          <p className="text-lg text-gray-600">
            Streamline your Walmart marketplace operations with our comprehensive WFS management services.
          </p>
        </div>

        {/* Image Section */}
        <div className="text-center mb-8">
          <div className="relative w-full max-w-3xl mx-auto aspect-[732/500] mb-4">
            <Image
              src="https://i.postimg.cc/3JR3py47/walmart-drp.jpg"
              alt="Walmart WFS Services"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <p className="text-sm text-gray-500">Image Title: Walmart Fulfillment Services</p>
        </div>

        {/* Content Description */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* What is Walmart WFS */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Walmart Fulfillment Services (WFS)?</h2>
            <p className="text-gray-600 leading-relaxed">
              Walmart Fulfillment Services (WFS) is Walmart&apos;s comprehensive fulfillment solution that handles storage, picking, packing, shipping, and customer service for your products. Similar to Amazon&apos;s FBA, WFS allows sellers to leverage Walmart&apos;s vast fulfillment network to deliver products quickly and efficiently to customers nationwide.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Walmart WFS</h2>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>Prime-like delivery speeds with 2-day shipping options.</li>
              <li>Access to Walmart&apos;s extensive fulfillment network and customer base.</li>
              <li>Reduced operational costs and simplified logistics management.</li>
              <li>Enhanced customer trust with Walmart-backed fulfillment.</li>
              <li>Competitive pricing and potential for increased sales velocity.</li>
            </ul>
          </div>

          {/* How to Get Started */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Get Started with WFS</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Getting started with Walmart Fulfillment Services is easy with our expert guidance:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>WFS Account Setup:</strong> We help you set up and optimize your WFS account.</li>
              <li><strong>Inventory Preparation:</strong> We guide you through product preparation and labeling requirements.</li>
              <li><strong>Shipping Plan Creation:</strong> We assist in creating efficient shipping plans to Walmart&apos;s fulfillment centers.</li>
              <li><strong>Listing Optimization:</strong> We optimize your product listings for maximum visibility and sales.</li>
            </ol>
          </div>

          {/* Required Documents */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Documents Do You Need?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To get started with WFS, you&apos;ll need the following documents:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>Walmart Seller Central account credentials.</li>
              <li>Business registration documents.</li>
              <li>Product information and inventory details.</li>
              <li>Shipping and handling documentation.</li>
              <li>Tax and compliance documentation.</li>
            </ul>
          </div>

          {/* What We Will Provide */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Will Provide</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our WFS management services include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>WFS Account Management:</strong> Complete setup and ongoing management of your WFS account.</li>
              <li><strong>Inventory Optimization:</strong> Strategic inventory management to maintain optimal stock levels.</li>
              <li><strong>Shipping Coordination:</strong> Efficient coordination of shipments to Walmart&apos;s fulfillment centers.</li>
              <li><strong>Performance Monitoring:</strong> Regular tracking and optimization of your WFS metrics.</li>
              <li><strong>Customer Service Support:</strong> Handling of customer inquiries and returns through WFS.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Choose our WFS management services for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Expert WFS Knowledge:</strong> Deep understanding of Walmart&apos;s fulfillment system and requirements.</li>
              <li><strong>Comprehensive Support:</strong> End-to-end management of your WFS operations.</li>
              <li><strong>Proven Results:</strong> Track record of successful WFS implementation and optimization.</li>
              <li><strong>Dedicated Team:</strong> Experienced professionals focused on your WFS success.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 