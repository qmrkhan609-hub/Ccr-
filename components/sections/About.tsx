'use client';

import { Leaf, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1542314503-37143f4f6c64?w=600&h=600&fit=crop"
              alt="Country Club Resorts"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Country Club Resorts Balakot, we believe that luxury and nature are not mutually exclusive. Our commitment is to provide world-class amenities while preserving the pristine beauty of our surroundings.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every aspect of our resort is designed with sustainability and elegance in mind. From our hand-crafted stone architecture to our locally-sourced dining options, we celebrate the harmony between modern comfort and natural beauty.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Nature-Focused
                  </h3>
                  <p className="text-gray-600">
                    We prioritize environmental conservation and sustainable practices
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart size={24} className="text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Luxury Experience
                  </h3>
                  <p className="text-gray-600">
                    Premium amenities and personalized service for your comfort
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
