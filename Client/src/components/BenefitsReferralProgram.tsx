import { useEffect } from "react";
import flowingBackground from "/Background/5.png";

const BenefitsReferralProgram = () => {
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover the key benefits of implementing a referral program for your business. Learn how referral marketing can drive growth, increase customer loyalty, and boost revenue.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Discover the key benefits of implementing a referral program for your business. Learn how referral marketing can drive growth, increase customer loyalty, and boost revenue.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }

    // Canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', window.location.origin + '/benefits-referral-program');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.getElementsByTagName('head')[0].appendChild(canonicalLink);
    }

    // JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Benefits of Referral Programs",
      "description": "Comprehensive guide to the benefits of implementing referral programs for business growth",
      "author": {
        "@type": "Organization",
        "name": "Your Company"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Your Company"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 inset-0 bg-cover bg-center bg-no-repeat " style={{ 
          backgroundImage: `url(${flowingBackground})`,
        }}>      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Benefits of a Referral Program
            </h1>
          </header>

          <div className="space-y-12">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-border transition-colors">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cost-Effective Customer Acquisition</h2>
              <p className="text-muted-foreground leading-relaxed">
                Referral programs significantly reduce customer acquisition costs compared to traditional marketing channels. 
                By leveraging existing customers' networks, businesses can acquire new customers at a fraction of the cost 
                of paid advertising campaigns.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-border transition-colors">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Higher Quality Leads</h2>
              <p className="text-muted-foreground leading-relaxed">
                Customers referred by friends and family are more likely to convert and have higher lifetime values. 
                They come pre-qualified with trust and interest, leading to better conversion rates and stronger 
                customer relationships from the start.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-border transition-colors">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Increased Customer Loyalty</h2>
              <p className="text-muted-foreground leading-relaxed">
                Referral programs strengthen the relationship between your brand and existing customers. 
                When customers actively promote your business, they become more invested in your success, 
                leading to increased retention and loyalty.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-border transition-colors">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Exponential Growth Potential</h2>
              <p className="text-muted-foreground leading-relaxed">
                Successful referral programs can create viral growth loops. Each new customer becomes a potential 
                referrer, creating a self-perpetuating cycle that can lead to exponential business growth without 
                proportional increases in marketing spend.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-border transition-colors">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Enhanced Brand Credibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                Word-of-mouth recommendations carry more weight than traditional advertising. When customers 
                refer your business, they're essentially vouching for your quality and service, which builds 
                trust and credibility with potential new customers.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-border transition-colors">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Measurable ROI</h2>
              <p className="text-muted-foreground leading-relaxed">
                Referral programs provide clear, trackable metrics that allow businesses to measure return on investment 
                accurately. You can track referral sources, conversion rates, and customer lifetime values to optimize 
                your program for maximum effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsReferralProgram;











