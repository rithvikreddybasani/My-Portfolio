import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { personalInfo, contactInfo, socialLinks } from '../data/data';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ffb97541-8e1f-4de8-a5ac-e826399bb894",
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        e.currentTarget.reset();
        console.log('Form submitted successfully:', result);
      } else {
        setSubmitStatus('error');
        console.error('Form submission failed:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const iconMap = {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    Globe
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-gold-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  I'm always open to discussing new opportunities, creative projects, or just having a chat about technology. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = iconMap[info.icon as keyof typeof iconMap];
                  return (
                    <div
                      key={info.label}
                      className={`group flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 transform hover:scale-105 ${
                        isVisible ? 'animate-fade-in-right' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-gold-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-white font-medium hover:text-cyan-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-slate-600 transition-all duration-300 transform hover:scale-110 ${social.color} ${
                          isVisible ? 'animate-fade-in-up' : 'opacity-0'
                        }`}
                        style={{ animationDelay: `${300 + (index * 100)}ms` }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    placeholder="email@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    placeholder="Enter Message"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 ${
                    submitStatus === 'success'
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 hover:shadow-green-500/25'
                      : submitStatus === 'error'
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:shadow-red-500/25'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 hover:shadow-cyan-500/25'
                  } ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent Successfully!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Failed to Send - Try Again
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Form
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 text-sm text-center">
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 text-sm text-center">
                      Sorry, there was an error sending your message. Please try again or contact me directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;