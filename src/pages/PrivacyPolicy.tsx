const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-navy-deep text-white">
      <div className="container mx-auto px-4 md:px-8 py-16 max-w-3xl">
        <a href="/" className="text-sm text-gray-400 hover:text-white mb-8 inline-block">← Back to Home</a>

        <h1 className="text-3xl font-bold mb-2">Terms of Service | Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: January 2025</p>

        <div className="space-y-10 text-gray-300 text-sm leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Privacy Policy</h2>
            <p>Liberty Funding ("we", "us", or "our") operates the website libertyfunding.us. This page informs you of our policies regarding the collection, use, and disclosure of personal information we receive from users of our site.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Information We Collect</h2>
            <p>We collect information you provide directly to us when you fill out our funding application form, including your name, email address, phone number, and business information. We may also collect information automatically through cookies and similar tracking technologies.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>To process and evaluate your funding application</li>
              <li>To contact you regarding your application status</li>
              <li>To send you relevant information about our services</li>
              <li>To improve our website and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Cookies</h2>
            <p>Our website uses cookies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect certain features of our website.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Facebook Pixel</h2>
            <p>We use the Facebook Pixel to measure the effectiveness of our advertising. This tool collects data about your activity on our site which may be shared with Facebook. This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 pt-4 border-t border-white/10">Terms of Service</h2>
            <p>By accessing and using libertyfunding.us, you accept and agree to be bound by the following terms and conditions.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Services</h2>
            <p>Liberty Funding provides business funding consulting and facilitation services. We help entrepreneurs access business capital. We do not guarantee approval of any funding application. Results may vary based on individual business qualifications.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">No Guarantee</h2>
            <p>The funding amounts mentioned ($50K–$250K) represent potential amounts based on qualification. Liberty Funding makes no guarantees regarding approval, amounts, or terms. All funding decisions are made by third-party lenders.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Limitation of Liability</h2>
            <p>Liberty Funding shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or website.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
            <p>For questions about this Privacy Policy or Terms of Service, contact us at: <a href="mailto:support@libertyfunding.us" className="text-blue-400 hover:underline">support@libertyfunding.us</a></p>
          </section>

        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
