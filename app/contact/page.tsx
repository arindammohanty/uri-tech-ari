"use client";

import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Linkedin, Twitter, Facebook, CheckCircle, ChevronDown
} from 'lucide-react';

const FAQS = [
  { q: "How can I get started with URI Technologies?", a: "Reach out to us via our Business Inquiry form, and our solutions architect team will guide you through our onboarding and discovery process." },
  { q: "What industries do you specialize in?", a: "We cater to various sectors including the Public Sector, Energy & Utility, Industrial, IT & SaaS, Automotive, Healthcare, and Startups." },
  { q: "Do you offer post-deployment support?", a: "Yes, we provide 24/7 post-deployment support, infrastructure monitoring, and continuous optimization for all our enterprise software rollouts." },
  { q: "What cloud platforms do you support?", a: "We hold deep expertise across AWS, Microsoft Azure, and Google Cloud, building secure and compliant multi-cloud and hybrid environments." },
  { q: "How long does a digital transformation audit take?", a: "Initial enterprise risk assessments and capability audits typically run between 2 to 4 weeks depending on the scale of your current infrastructure." }
];

export default function ContactPage() {
  const [formType, setFormType] = useState<'business' | 'career'>('business');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      
      <section className="relative pt-20 pb-16 border-b border-slate-100 bg-slate-50/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center text-sm font-medium text-slate-500 mb-4">
            <span>Home</span>
            <span className="mx-2 text-slate-300">{'>'}</span>
            <span className="text-orange-500">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">Get In Touch</h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed">
            Whether you&apos;re looking to transform your enterprise infrastructure or join our engineering team, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Let&apos;s Connect</h2>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              Reach out to our architects. We respond to all technical inquiries within one business day.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-50 p-3 rounded-full text-orange-500 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Phone</h3>
                  <p className="text-slate-500 mt-1">+91 674 6066050</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-50 p-3 rounded-full text-orange-500 mt-1">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Email</h3>
                  <p className="text-slate-500 mt-1">info@uritechnologies.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-50 p-3 rounded-full text-orange-500 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Address</h3>
                  <p className="text-slate-500 mt-1 leading-relaxed">
                    B-36, 2nd Floor, Rupali Street, Sahid Nagar,<br/>Bhubaneswar - 751007, Odisha
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-xl relative overflow-hidden">
            {isSubmitted && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-lg text-slate-500">Thank you. We will be in touch shortly.</p>
              </div>
            )}

            <div className="flex bg-slate-100 p-1.5 rounded-xl mb-10">
              <button 
                onClick={() => setFormType('business')}
                className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${formType === 'business' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Business Inquiry
              </button>
              <button 
                onClick={() => setFormType('career')}
                className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${formType === 'career' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Careers
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Full Name <span className="text-red-500">*</span></label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
              </div>

              {formType === 'business' && (
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Company Name <span className="text-red-500">*</span></label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">{formType === 'business' ? 'Work Email' : 'Email Address'} <span className="text-red-500">*</span></label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
              </div>

              {formType === 'business' ? (
                <>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Project Details <span className="text-red-500">*</span></label>
                    <textarea required rows={4} placeholder="Tell us about the digital transformation objectives..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"></textarea>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Target Job Role <span className="text-red-500">*</span></label>
                    <input required type="text" placeholder="e.g. ServiceNow Developer" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">LinkedIn Profile URL</label>
                    <input type="url" placeholder="https://linkedin.com/in/..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
                  </div>
                </>
              )}
              
              <button type="submit" className="w-full py-4 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 mt-4">
                {formType === 'business' ? 'Submit Inquiry' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-slate-200 pb-4">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-slate-900 pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180 text-orange-500' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-600 leading-relaxed pt-2 pr-8">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
