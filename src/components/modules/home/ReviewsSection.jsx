const reviews = [
  {
    name: "Rahim Ahmed",
    role: "Verified Buyer",
    rating: 5,
    comment:
      "Amazing service! The product quality is excellent and delivery was super fast.",
    avatar: "👤",
  },
  {
    name: "Nusrat Jahan",
    role: "Gadget Lover",
    rating: 4,
    comment:
      "Great experience shopping here. Customer support was very helpful.",
    avatar: "👩",
  },
  {
    name: "Sabbir Hossain",
    role: "Gaming Enthusiast",
    rating: 5,
    comment:
      "Bought a gaming monitor and it exceeded my expectations. Highly recommended!",
    avatar: "🎮",
  },
];

const ReviewsSection = () => {
  return (
    <section className="max-w-360 mx-auto px-4 py-14">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
        <p className="opacity-70 mt-2">
          Trusted by tech lovers across the country
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl"
          >
            <div className="card-body">
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{review.avatar}</div>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-xs opacity-70">{review.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>
                    {i < review.rating ? "⭐" : "☆"}
                  </span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm opacity-80">
                “{review.comment}”
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
