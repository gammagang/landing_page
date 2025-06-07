export default function CTASection() {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-pastel-black-800" id="waitlist">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-pastel-black-900 to-primary-900 rounded-2xl shadow-xl overflow-hidden border border-pastel-grey-300">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                <span className="block">Ready to transform your</span>
                <span className="block">influencer marketing?</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-pastel-grey-300">
                Join our waitlist to be among the first to experience AI-powered influencer negotiations.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfGgbqm9hsa9BwxJUJqz2nL4KgY5z2HV-uZZGjgm_plrhGang/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-pastel-black-900 bg-white hover:bg-pastel-grey-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:shadow-xl transition-all duration-300"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 