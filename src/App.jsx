import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { 
  Coffee, 
  Receipt, 
  BarChart3, 
  Smartphone, 
  ShieldCheck, 
  Clock, 
  Zap, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  Phone,
  LayoutDashboard,
  Users,
  CreditCard,
  Lock,
  Globe,
  FileText,
  MousePointer2
} from "lucide-react";

// Image Imports
import heroImg from "./assets/hero.png";
import inventoryImg from "./assets/inventory.png";
import salesImg from "./assets/sales.png";
import secureImg from "./assets/secure.png";
import interfaceImg from "./assets/interface.png";
import logoImg from "./assets/logo.png";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

// Components
const Navbar = () => (
  <nav className="navbar">
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <img src={logoImg} alt="LEKA CAFE Logo" style={{ height: '40px', borderRadius: '4px' }} />
        <span style={{ fontWeight: 900 }}>LEKA CAFE</span>
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/#features" className="nav-link">Features</Link>
        <Link to="/pricing" className="nav-link">Pricing</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/contact" className="btn btn-primary" style={{ marginLeft: '1rem' }}>Get Started</Link>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer>
    <div className="container footer-grid">
      <div>
        <h3 className="logo" style={{ color: 'white' }}>LEKA CAFE</h3>
        <p className="mb-2" style={{ color: '#94a3b8' }}>Modernizing cafe operations with fast billing, secure payments, and intuitive branch management.</p>
      </div>
      <div>
        <h3>Solutions</h3>
        <ul className="footer-links">
          <li><Link to="/#features">Fast Billing</Link></li>
          <li><Link to="/#features">Secure Payments</Link></li>
          <li><Link to="/#features">Multi-branch Control</Link></li>
          <li><Link to="/#features">User-Friendly App</Link></li>
        </ul>
      </div>
      <div>
        <h3>Legal</h3>
        <ul className="footer-links">
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Support</Link></li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul className="footer-links">
          <li>hello@lekacafe.com</li>
          <li>+91 98765 43210</li>
          <li>Hyderabad, India</li>
        </ul>
      </div>
    </div>
    <div className="container footer-bottom">
      <p style={{ color: '#475569' }}>&copy; 2026 LEKA CAFE. Designed for speed and reliability. Compliance with DPDPA 2023.</p>
    </div>
  </footer>
);

// Pages
const Home = () => (
  <>
    {/* Hero Section */}
    <header className="section" style={{ background: '#f1f5f9', padding: '8rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '6rem' }}>
        <div className="reveal">
          <div style={{ display: 'inline-block', background: '#5c6bc020', color: 'var(--primary)', padding: '0.4rem 1rem', borderRadius: '20px', fontWeight: 600, fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            🚀 FASTEST BILLING SYSTEM
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-2px' }}>Faster Billing. <br/>Smarter Cafe.</h1>
          <p className="mb-2" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', fontWeight: 400 }}>
            LEKA CAFE is India's most advanced billing app, designed to streamline your business with secure payments and global multi-branch control.
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', marginTop: '2rem' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Start Free Trial</Link>
            <Link to="/about" className="btn btn-outline" style={{ padding: '1rem 2.2rem' }}>How it Works</Link>
          </div>
        </div>
        <div className="reveal delay-1" style={{ position: 'relative' }}>
          <img src={heroImg} alt="App Interface" style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} />
          <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', background: 'white', padding: '2rem', borderRadius: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--accent)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap size={20} />
                </div>
                <div>
                   <div style={{ fontWeight: 'bold' }}>Ultra Fine UI</div>
                   <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Ease of Use, Accelerated</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </header>

    {/* Pillars Content */}
    <section id="features" className="section text-center" style={{ background: 'white' }}>
       <div className="container">
          <h2 style={{ fontSize: '3rem', fontWeight: 900 }} className="mb-4">The Four Pillars of LEKA CAFE</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
             <div className="reveal">
                <div style={{ background: '#5c6bc015', width: '80px', height: '80px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                   <Clock size={40} color="var(--primary)" />
                </div>
                <h3>Fast Billing</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Optimized checkout paths designed to move queues as fast as coffee flows.</p>
             </div>
             <div className="reveal delay-1">
                <div style={{ background: '#10b98115', width: '80px', height: '80px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                   <ShieldCheck size={40} color="var(--accent)" />
                </div>
                <h3>Secure Payment</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Fully encrypted payment reconciliations and tamper-proof billing records.</p>
             </div>
             <div className="reveal delay-2">
                <div style={{ background: '#f59e0b15', width: '80px', height: '80px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                   <Globe size={40} color="#f59e0b" />
                </div>
                <h3>Multi-Branch Management</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Centralized control of menu, pricing, and stock across all your locations.</p>
             </div>
             <div className="reveal delay-3">
                <div style={{ background: '#6366f115', width: '80px', height: '80px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                   <MousePointer2 size={40} color="#6366f1" />
                </div>
                <h3>User Friendly App</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Zero-learning curve interface. Your staff will be experts in under 5 minutes.</p>
             </div>
          </div>
       </div>
    </section>

    {/* Media Deep Dives */}
    <section className="section" style={{ background: '#f8fafc' }}>
       <div className="container">
          {/* Secure Payment */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center', marginBottom: '10rem' }}>
             <img src={secureImg} alt="Secure Payments" style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} className="reveal" />
             <div className="reveal delay-1">
                <h2 style={{ fontSize: '3rem', fontWeight: 900 }} className="mb-2">Payment Integrity</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }} className="mb-2">
                   Rest easy with a billing system designed for security. Every transaction is logged with immutable audit trails to prevent loss and error.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                   <div>
                      <CheckCircle2 color="var(--accent)" className="mb-1" />
                      <h4 style={{ margin: 0 }}>End-to-End Encryption</h4>
                   </div>
                   <div>
                      <CheckCircle2 color="var(--accent)" className="mb-1" />
                      <h4 style={{ margin: 0 }}>Fraud Detection</h4>
                   </div>
                </div>
             </div>
          </div>

          {/* User Friendly App */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
             <div className="reveal">
                <h2 style={{ fontSize: '3rem', fontWeight: 900 }} className="mb-2">Intuitive by Design</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }} className="mb-2">
                   Our app is built for the high-pressure cafe environment. Large touch-targets, smart search, and predictive ordering make it effortless.
                </p>
                <ul style={{ listStyle: 'none' }}>
                   <li className="mb-1" style={{ display: 'flex', gap: '0.8rem' }}><CheckCircle2 color="var(--accent)" /> Dark Mode Optimized</li>
                   <li className="mb-1" style={{ display: 'flex', gap: '0.8rem' }}><CheckCircle2 color="var(--accent)" /> Offline Billing Support</li>
                   <li style={{ display: 'flex', gap: '0.8rem' }}><CheckCircle2 color="var(--accent)" /> Quick-tap Categories</li>
                </ul>
             </div>
             <img src={interfaceImg} alt="App Interface" style={{ width: '100%', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' }} className="reveal delay-1" />
          </div>
       </div>
    </section>

    {/* Multi Branch Showcase */}
    <section className="section" style={{ background: 'white' }}>
       <div className="container" style={{ textAlign: 'center' }}>
           <h2 style={{ fontSize: '3rem', fontWeight: 900 }} className="mb-2">One App, Multiple Locations</h2>
           <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
              Scale your business from one cafe to a powerhouse chain. Monitor live sales, swap out menus, and track staff performance across the country.
           </p>
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
               <div className="card">
                   <h1 style={{ color: 'var(--primary)', fontSize: '3rem' }}>10+</h1>
                   <p>Outlets supported per account</p>
               </div>
               <div className="card">
                   <h1 style={{ color: 'var(--accent)', fontSize: '3rem' }}>100%</h1>
                   <p>Cloud synchronization speed</p>
               </div>
               <div className="card">
                   <h1 style={{ color: '#f59e0b', fontSize: '3rem' }}>Global</h1>
                   <p>Menu price updates in 1 click</p>
               </div>
           </div>
       </div>
    </section>

    {/* CTA Banner */}
    <section className="section" style={{ background: 'var(--primary)', color: 'white' }}>
       <div className="container text-center">
          <h2 style={{ fontSize: '3.5rem', color: 'white', fontWeight: 900 }} className="mb-2">Ready to Upgrade?</h2>
          <p className="mb-4" style={{ fontSize: '1.2rem', opacity: 0.9 }}>Transform your cafe operations today. 14-day free trial on all plans.</p>
          <Link to="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '1.2rem 3rem', fontSize: '1.2rem' }}>Get Started Free</Link>
       </div>
    </section>
  </>
);

const About = () => (
  <div className="section">
    <div className="container" style={{ maxWidth: '900px' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 900 }} className="mb-2">Precision at Scale</h1>
      <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        LEKA CAFE was built with a simple goal: to make cafe operations effortless. We believe that technology should be intuitive, fast, and secure.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
        <div className="card">
          <h3 className="mb-1">Operational Speed</h3>
          <p>We optimize every pixel and process to ensure your staff spends more time with customers and less time at the terminal.</p>
        </div>
        <div className="card">
          <h3 className="mb-1">Unmatched Security</h3>
          <p>Your business data is your most valuable asset. We protect it with banking-grade security protocols.</p>
        </div>
      </div>

      <img src={heroImg} alt="App Philosophy" style={{ width: '100%', borderRadius: '24px', marginBottom: '4rem' }} />

      <h2 style={{ fontSize: '2.5rem' }} className="mb-2">Our Vision</h2>
      <p className="mb-2">
        We are building the future of hospitality tools. From independent stands to national chains, LEKA CAFE provides the digital foundation for your success.
      </p>
    </div>
  </div>
);

const Pricing = () => (
    <section className="section" style={{ background: '#f8fafc' }}>
      <div className="container text-center">
        <h1 style={{ fontSize: '4rem', fontWeight: 900 }} className="mb-1">Scale Your Way</h1>
        <p className="mb-4" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Subscription-based pricing with no hidden surprises.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', maxWidth: '1100px', margin: '0 auto' }}>
          <div className="card reveal">
             <h3 className="mb-1" style={{ color: 'var(--primary)' }}>Kiosk Lite</h3>
             <div style={{ fontSize: '3rem', fontWeight: 900 }} className="mb-1">₹1,499<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/mo</span></div>
             <p className="mb-2">For single-counter cafe stands.</p>
             <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2.5rem' }} className="footer-links">
                <li className="mb-1"><CheckCircle2 size={18} color="var(--accent)" /> Fast Billing UI</li>
                <li className="mb-1"><CheckCircle2 size={18} color="var(--accent)" /> Standard Support</li>
                <li className="mb-1"><CheckCircle2 size={18} color="var(--accent)" /> Daily Sales Reports</li>
             </ul>
             <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>Choose Lite</Link>
          </div>
          
          <div className="card card-featured reveal delay-1" style={{ transform: 'scale(1.05)' }}>
             <h3 className="mb-1" style={{ color: 'var(--primary)' }}>Cafe Pro</h3>
             <div style={{ fontSize: '3rem', fontWeight: 900 }} className="mb-1">₹3,499<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/mo</span></div>
             <p className="mb-2">The ultimate choice for growing cafes.</p>
             <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2.5rem' }} className="footer-links">
                <li className="mb-1"><CheckCircle2 size={18} color="var(--accent)" /> Multi-Outlet Support</li>
                <li className="mb-1"><CheckCircle2 size={18} color="var(--accent)" /> Secure Inventory Tracking</li>
                <li className="mb-1"><CheckCircle2 size={18} color="var(--accent)" /> Advanced Mobile Interface</li>
                <li className="mb-1"><CheckCircle2 size={18} color="var(--accent)" /> Priority Support</li>
             </ul>
             <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>Upgrade to Pro</Link>
          </div>

          <div className="card reveal delay-2">
             <h3 className="mb-1" style={{ color: 'var(--primary)' }}>Enterprise</h3>
             <div style={{ fontSize: '2rem', fontWeight: 900 }} className="mb-1">Custom</div>
             <p className="mb-2">For national cafe networks.</p>
             <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2.5rem' }} className="footer-links">
                <li className="mb-1"><CheckCircle2 size={18} color="var(--accent)" /> White-label Options</li>
                <li className="mb-1"><CheckCircle2 size={18} color="var(--accent)" /> Custom API Access</li>
                <li className="mb-1"><CheckCircle2 size={18} color="var(--accent)" /> 24/7 Dedicated Team</li>
             </ul>
             <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>Contact Sales</Link>
          </div>
        </div>
      </div>
    </section>
);

const Contact = () => (
  <div className="section">
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
      <div>
        <h1 style={{ fontSize: '4rem', fontWeight: 900 }} className="mb-2">Connect with Us.</h1>
        <p className="mb-4" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Ready to streamline your billing? Our experts are here to help you set up.</p>
        
        <div style={{ display: 'grid', gap: '2rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '12px' }}><Mail /></div>
            <div>
              <div style={{ fontWeight: 'bold' }}>Business Inquiries</div>
              <div style={{ color: 'var(--text-secondary)' }}>hello@lekacafe.com</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '12px' }}><Phone /></div>
            <div>
              <div style={{ fontWeight: 'bold' }}>Support Line</div>
              <div style={{ color: 'var(--text-secondary)' }}>+91 98765 43210</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '12px' }}><MapPin /></div>
            <div>
              <div style={{ fontWeight: 'bold' }}>Hyderabad Office</div>
              <div style={{ color: 'var(--text-secondary)' }}>Road No 36, Jubilee Hills, 500033</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <h3 className="mb-2">Inquiry Form</h3>
        <form style={{ display: 'grid', gap: '1.5rem' }}>
           <input type="text" placeholder="Cafe/Brand Name" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none' }} />
           <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none' }} />
           <input type="email" placeholder="Business Email" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none' }} />
           <button type="submit" className="btn btn-primary" style={{ padding: '1rem' }}>Request Demo</button>
        </form>
      </div>
    </div>
  </div>
);

const Privacy = () => (
  <div className="section">
    <div className="container" style={{ maxWidth: '850px' }}>
      <div style={{ background: '#f1f5f9', padding: '2rem', borderRadius: '16px', marginBottom: '3rem' }}>
        <h1 className="mb-1" style={{ fontSize: '3rem', fontWeight: 900 }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Compliant with the Information Technology Act, 2000 & Information Technology Rules, 2011.</p>
        <p className="mt-1">Last Updated: March 23, 2026</p>
      </div>
      
      <section className="mb-4">
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
          <ShieldCheck color="var(--primary)" size={32} />
          <h2 style={{ fontSize: '1.8rem', margin: 0 }}>Data Protection Statement</h2>
        </div>
        <p>LEKA CAFE (GamaNext Projects) is dedicated to protecting the sensitive operational and financial data of our cafe partners. We serve as a **Data Custodian** for all billing and transaction records.</p>
      </section>

      <section className="mb-4">
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
          <FileText color="var(--primary)" size={32} />
          <h2 style={{ fontSize: '1.8rem', margin: 0 }}>1. Scope of Data Collection</h2>
        </div>
        <p>Your privacy is central to our design. We collect:</p>
        <ul className="legal-list">
           <li>**Business Profile**: Name, Logo, Tax ID (GSTIN) for bill generation.</li>
           <li>**Transactional Data**: Value and items in each bill to generate reports.</li>
           <li>**Operational Data**: Staff login times and branch performance logs.</li>
           <li>**Payment Logs**: Metadata of digital payments (UPI Transaction IDs) for reconciliation. We do not store financial passwords or secrets.</li>
        </ul>
      </section>

      <section className="mb-4">
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
          <Lock color="var(--primary)" size={32} />
          <h2 style={{ fontSize: '1.8rem', margin: 0 }}>2. Information Security</h2>
        </div>
        <p>We implement a robust security framework to protect against loss or unauthorized access:</p>
        <ul className="legal-list">
           <li>**Data Residency**: All data is securely stored within high-compliance data centers in India.</li>
           <li>**Access Control**: Only authorized users with valid credentials can access sensitive branch data.</li>
           <li>**Encrypted Transit**: Every byte sent to our servers is protected by modern SSL/TLS encryption.</li>
        </ul>
      </section>

      <section className="mb-4">
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
          <Users color="var(--primary)" size={32} />
          <h2 style={{ fontSize: '1.8rem', margin: 0 }}>3. Information Sharing</h2>
        </div>
        <p>We **strictly do not** share or sell your billing information to third-party advertisers. Data is exclusively used to provide you with the LEKA CAFE service.</p>
      </section>

      <section className="mb-4" style={{ background: '#fffbeb', padding: '2rem', borderRadius: '12px', border: '1px solid #fef3c7' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
          <Globe color="#d97706" size={32} />
          <h2 style={{ fontSize: '1.8rem', margin: 0, color: '#92400e' }}>Contact Regulatory Desk</h2>
        </div>
        <p>For any data-related queries, please write to our Grievance Desk:</p>
        <p className="mt-1">**Attention**: Privacy Compliance Officer<br/>
        **Email**: privacy@lekacafe.com<br/>
        **Office**: GamaNext Projects HQ, Jubilee Hills, Hyderabad.</p>
      </section>
    </div>
  </div>
);

const Terms = () => (
  <div className="section">
    <div className="container" style={{ maxWidth: '850px' }}>
      <h1 className="mb-1" style={{ fontSize: '3.5rem', fontWeight: 900 }}>Usage Agreement</h1>
      <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>Effective from: March 23, 2026</p>

      <section className="mb-4">
        <h2>1. Service Overview</h2>
        <p>LEKA CAFE provides software for billing and operational management. The accuracy of bills and taxes is the responsibility of the user. Users must ensure that their items are compliant with local taxation laws.</p>
      </section>

      <section className="mb-4">
        <h2>2. Data Accuracy</h2>
        <p>LEKA CAFE relies on the inputs provided by the user. We are not liable for any discrepancies caused by incorrect item pricing or tax configuration in the dashboard.</p>
      </section>

      <section className="mb-4">
        <h2>3. Payments and UPI</h2>
        <p>While LEKA CAFE allows recording of UPI payments, actual settlement of funds happens via your banking partner. Always verify successful payment on your bank app/notification before completing a bill on LEKA.</p>
      </section>

      <section className="mb-4">
        <h2>4. Modifications</h2>
        <p>We reserve the right to update the app interface and features to improve performance without prior notice. Subscription charges are subject to change with a 30-day notice.</p>
      </section>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
