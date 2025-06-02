
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const reviews = [
  {
    id: 1,
    name: "FELIPE SEIA",
    avatar: "/src/assets/felipeseia.png",
    rating: 5,
    date: "2025-04-15",
    title: "Game-changing VR technology",
    content: "reviews.1.content",
    helpful: 24,
    product: "Pro VR Headset",
    role:"Gerente de Marketing de AGN Corp"
  },
  {
    id: 2,
    name: "Alina Nowaczek",
    avatar: "/src/assets/foto alina.png",
    rating: 4,
    date: "2025-04-02",
    title: "Great for work and entertainment",
    content: "reviews.2.content",
    helpful: 18,
    product: "Pro VR Headset",
    role:"CEO Transcontinental Trade Consortium LLC,"
  },
];

const ReviewSection = () => {
  const [sortBy, setSortBy] = useState<"recent" | "helpful">("helpful");
  const { t } = useTranslation();

  // Sort the reviews based on the selected sorting option
  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "recent") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return b.helpful - a.helpful;
    }
  });

  return (
    <section className="py-20 bg-cyber-gradient relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          {t('reviews_title')} <span className="text-vr-neon ">{t('reviews_title_2')}</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
          {t('reviews_subtitle')}
          </p>
        </div>
       {/*
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 text-vr-neon fill-vr-neon" />
              ))}
            </div>
            <span className="text-white font-medium">4.8 out of 5</span>
            <span className="text-gray-400">(128 reviews)</span>
          </div>
          
          <div className="flex items-center">
            <span className="text-gray-400 mr-2">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "recent" | "helpful")}
              className="bg-vr-darker border border-gray-700 text-white rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-vr-neon/50"
            >
              <option value="helpful">Most Helpful</option>
              <option value="recent">Most Recent</option>
            </select>
          </div>
        </div>
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sortedReviews.map((review) => (
            <div key={review.id} className="bg-card-gradient rounded-lg p-6 border border-gray-800">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full border-2 border-vr-neon/30"
                  />
                  <div className="ml-4">
                    <h4 className="text-white font-medium">{review.name}</h4>
                    <p className="text-gray-400 text-sm">{review.role}</p>
                  </div>
                </div>
               {/* <div className="text-gray-400 text-sm">
                  {new Date(review.date).toLocaleDateString()}
                </div>
                */}
              </div>
              {/*}
              <div className="mb-3">
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < review.rating ? 'text-vr-neon fill-vr-neon' : 'text-gray-600'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-300">{review.product}</span>
                </div>
                <h5 className="text-white font-semibold mb-2">{review.title}</h5>
              </div>
              */}
              <p className="text-gray-300 mb-4">{t(review.content)}</p>
              {/*}
              <div className="flex items-center justify-between">
                <button className="text-sm text-gray-400 hover:text-white flex items-center">
                  <span className="mr-1">Helpful ({review.helpful})</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </button>
                <button className="text-sm text-gray-400 hover:text-white">
                  Report
                </button>
              </div>
                */}
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
         {/*} <button className="bg-transparent border border-vr-neon text-vr-neon hover:bg-vr-neon/10 transition-colors py-2 px-6 rounded-md">
            Load More Reviews
          </button>*/}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
