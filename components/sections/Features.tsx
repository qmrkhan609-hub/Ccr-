'use client';

import { Waves, Building2, Wind } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Waves,
      title: 'Riverside Cottages',
      description: 'Wake up to the soothing sounds of pristine riverside living. Our exclusive cottages offer the perfect blend of comfort and nature.',
    },
    {
      icon: Building2,
      title: 'Hand-Laid Stone Architecture',
      description: 'Every stone tells a story. Our structures are built with traditional craftsmanship and modern amenities for your ultimate comfort.',
    },
    {
      icon: Wind,
      title: 'Hot Air Balloon Experience',
      description: 'Soar above the stunning Balakot landscape and witness breathtaking vistas from the sky. An unforgettable adventure awaits.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Signature Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes Country Club Resorts Balakot a destination like no other
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Icon size={32} className="text-amber-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
