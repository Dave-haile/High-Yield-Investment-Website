import { useEffect } from "react";
import flowingBackground from "/Background/2.png";

const ReferralProgram = () => {
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join our referral program and earn rewards for recommending our services. Incentives for both existing and new customers through word-of-mouth marketing.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Join our referral program and earn rewards for recommending our services. Incentives for both existing and new customers through word-of-mouth marketing.';
      document.head.appendChild(meta);
    }

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', window.location.href);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = window.location.href;
      document.head.appendChild(link);
    }

    // JSON-LD structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Referral Program",
      "description": "Join our referral program and earn rewards for recommending our services",
      "url": window.location.href,
      "isPartOf": {
        "@type": "WebSite",
        "name": "PitchDeck",
        "url": window.location.origin
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="referal" className="min-h-screen bg-gradient-to-br from-background via-background to-muted inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${flowingBackground})`,
    }}>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Referral Program
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </header>

        <main>
          <section className="bg-card rounded-2xl shadow-lg p-8 md:p-12 border border-border">
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Our marketing strategy where our company incentivizes existing customers to recommend their products or services to new customers. This word-of-mouth marketing technique can be a powerful tool for driving growth by leveraging customer advocacy. OUR referral program, offer rewards or incentives to both the referrer (existing customer) and the referred (new customer).
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ReferralProgram;