const benefits = [
  {
    title: "Save 80% Time",
    description: "What took days now takes minutes with AI-powered negotiations",
    metric: "80%",
    metricLabel: "Time Saved"
  },
  {
    title: "Higher Success Rate",
    description: "AI-driven matching leads to better collaboration outcomes",
    metric: "95%",
    metricLabel: "Deal Success"
  },
  {
    title: "Cost Efficient",
    description: "Reduce operational costs with automated negotiations",
    metric: "60%",
    metricLabel: "Cost Reduction"
  }
]

export default function Benefits() {
  return (
    <div className="bg-gradient-to-br from-pastel-black-800 via-pastel-black-700 to-primary-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Transform Your Influencer Marketing
          </h2>
          <p className="mt-4 text-xl text-pastel-grey-300">
            Real results from brands using InfluencerFlow AI
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-lg p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-pastel-grey-200"
            >
              <div className="text-5xl font-bold text-primary-600">
                {benefit.metric}
              </div>
              <div className="mt-2 text-sm text-pastel-grey-600">
                {benefit.metricLabel}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-pastel-black-900">
                {benefit.title}
              </h3>
              <p className="mt-2 text-pastel-grey-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 