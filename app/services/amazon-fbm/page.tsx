import Image from 'next/image';

export default function AmazonFBM() {
  return (
    <section id="amazon-fbm" className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Amazon FBM Services</h1>
          <p className="text-lg text-gray-600">
            Manage your Amazon business with our expert Fulfilled by Merchant (FBM) services.
          </p>
        </div>

        {/* Image Section */}
        <div className="text-center mb-8">
          <div className="relative w-full max-w-3xl mx-auto aspect-[732/500] mb-4">
            <Image
              src="https://i.postimg.cc/8s8Nd4fY/amazon-fbm.jpg"
              alt="Amazon FBM Services"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <p className="text-sm text-gray-500">Image Title: Efficient Amazon FBM Management</p>
        </div>

        {/* Content Description */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* What is Amazon FBM */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Amazon FBM?</h2>
            <p className="text-gray-600 leading-relaxed">
              Amazon FBM (Fulfilled by Merchant) is a fulfillment method where the seller is responsible for managing their inventory, packing orders, and shipping them directly to customers. Unlike FBA (Fulfilled by Amazon), FBM allows greater control over shipping processes, costs, and customer service management.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Amazon FBM</h2>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>Control Over Fulfillment: You handle the shipping, allowing for more flexibility and customization.</li>
              <li>Lower Fees: FBM can be cost-effective by reducing Amazon storage and fulfillment fees.</li>
              <li>Direct Customer Interaction: Improve customer service by managing your own communications and returns.</li>
              <li>Faster Fulfillment for Local Orders: FBM can help you fulfill local or regional orders more quickly than FBA.</li>
            </ul>
          </div>

          {/* How to Get Started */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How to Get Started</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To get started with Amazon FBM, follow these steps:
            </p>
            <ol className="list-decimal pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Account Setup:</strong> You&apos;ll need a professional Amazon Seller Account.</li>
              <li><strong>Inventory Management:</strong> Organize your inventory for easy access and order fulfillment.</li>
              <li><strong>Shipping Solutions:</strong> Set up cost-effective and reliable shipping services for your orders.</li>
              <li><strong>Customer Service Plan:</strong> Establish a customer service process for handling inquiries and returns.</li>
            </ol>
          </div>

          {/* Required Documents */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Documents Do You Need to Get Started?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              To get started with our Amazon FBM services, you&apos;ll need:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li>Your Amazon Seller Account login credentials.</li>
              <li>Inventory and product information, including SKU and barcode details.</li>
              <li>Shipping carrier account details and preferences.</li>
              <li>Customer service plan, including returns and refunds procedures.</li>
            </ul>
          </div>

          {/* What We Will Provide */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Will Provide</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our Amazon FBM services include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Account Setup and Optimization:</strong> We&apos;ll help you create and optimize your Amazon Seller Account.</li>
              <li><strong>Inventory Management Solutions:</strong> We assist with efficient inventory control to streamline the fulfillment process.</li>
              <li><strong>Shipping and Logistics:</strong> We&apos;ll help you set up shipping methods, negotiate with carriers, and manage order fulfillment.</li>
              <li><strong>Customer Service Support:</strong> We provide templates and processes for handling customer inquiries, returns, and refunds efficiently.</li>
              <li><strong>Performance Tracking:</strong> Regular tracking and optimization of your FBM performance metrics to improve sales.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Here&apos;s why you should trust us with your Amazon FBM services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
              <li><strong>Expert FBM Management:</strong> Our team has years of experience managing Amazon FBM businesses.</li>
              <li><strong>Custom Solutions:</strong> We tailor our services to your specific business needs, ensuring the best results.</li>
              <li><strong>Proven Track Record:</strong> We have helped numerous sellers boost their FBM sales and improve fulfillment efficiency.</li>
              <li><strong>Transparent Pricing:</strong> We offer clear, transparent pricing with no hidden fees.</li>
              <li><strong>Dedicated Support:</strong> Get dedicated support from our team, available to guide you at every step.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 