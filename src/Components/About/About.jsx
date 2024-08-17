import React from 'react';

const About = () => {
  return (
    <section className="mt-12 p-8 rounded-lg shadow-xl">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800">About Gadgets Show</h1>
      
      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Our Mission</h2>
        <p className="text-xl leading-relaxed text-gray-600">
          At Gadgets Show, our mission is to make it easier for you to discover, compare, and choose the perfect gadget for your needs. 
          We provide detailed information, user reviews, and expert opinions to help you make informed decisions.
        </p>
      </div>

      <div className="offer mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">What We Offer</h2>
        <ul className="list-disc list-inside text-xl leading-relaxed text-gray-600 space-y-3">
          <li><span className="font-bold text-gray-800">Wide Range of Gadgets:</span> From smartphones and smartwatches to accessories and more, we offer a vast selection of gadgets to suit every need and budget.</li>
          <li><span className="font-bold text-gray-800">In-Depth Reviews:</span> Get detailed reviews and ratings on the latest gadgets, helping you choose the best products in the market.</li>
          <li><span className="font-bold text-gray-800">Advanced Search & Filters:</span> Easily find what you're looking for with our powerful search and filtering options. Filter by brand, price, category, and more.</li>
          <li><span className="font-bold text-gray-800">Up-to-Date Information:</span> Stay ahead with the latest news and updates in the world of gadgets, including upcoming releases and technological advancements.</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-xl leading-relaxed text-gray-600 space-y-3">
          <li><span className="font-bold text-gray-800">User-Friendly Interface:</span> Our website is designed to provide a seamless and enjoyable browsing experience.</li>
          <li><span className="font-bold text-gray-800">Reliable Data:</span> We source information from trusted manufacturers and tech experts to ensure accuracy and relevance.</li>
          <li><span className="font-bold text-gray-800">Community-Driven:</span> Join our community of gadget lovers, share your experiences, and get advice from fellow users.</li>
        </ul>
      </div>

     
    </section>
  );
};

export default About;
