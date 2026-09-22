import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, User, MessageSquare, Send, CheckCircle2, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SocialLinks } from './SocialLinks';

export const ContactCTA: React.FC = () => {
  const { personal } = portfolioData;
  const rawEmail = personal.socials.rawEmail || "phanidrauddagiri05@gmail.com";
  const whatsappNum = personal.socials.whatsapp || "919441055486";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'whatsapp' | 'email'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 1. WhatsApp Integration Handler
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please fill in your Name and Message before sending.');
      return;
    }

    const messageText =
      `*New Portfolio Contact Message*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `✉️ *Email:* ${formData.email || 'Not provided'}\n` +
      `📞 *Phone:* ${formData.phone || 'Not provided'}\n` +
      `📌 *Subject:* ${formData.subject}\n\n` +
      `💬 *Message:*\n${formData.message}`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedText}`;

    setSubmittedStatus('whatsapp');
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setSubmittedStatus('idle');
    }, 5000);
  };

  // 2. Email Integration Handler (FormSubmit API + Mailto fallback)
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in your Name, Email, and Message.');
      return;
    }

    // Direct mailto link formatted with subject and structured body
    const emailSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject} - ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone/WhatsApp: ${formData.phone || 'N/A'}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n`
    );

    const mailtoUrl = `mailto:${rawEmail}?subject=${emailSubject}&body=${emailBody}`;

    setSubmittedStatus('email');
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmittedStatus('idle');
    }, 5000);
  };

  return (
    <section id="contact" className="relative bg-[#080F1D] py-16 sm:py-24 text-white overflow-hidden border-t border-slate-800">
      {/* Background Abstract Glow Effects */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[250px] sm:h-[350px] bg-blue-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-y-1/2 w-[300px] sm:w-[450px] h-[200px] sm:h-[300px] bg-purple-600/15 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold tracking-wider text-[#60A5FA] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Get In Touch &{' '}
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">
              Build Together
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Have a project in mind, want to collaborate, or have a question? Send me a message directly or reach out via Email or WhatsApp!
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">

          {/* Left Column: Direct Contact Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#0B1220]/80 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5 sm:space-y-6 backdrop-blur-md shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Contact Information
              </h3>

              <div className="space-y-3.5 sm:space-y-5">
                {/* Email Direct Link */}
                <a
                  href={`mailto:${rawEmail}`}
                  className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 transition-all group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 text-[#60A5FA] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Email Address
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mt-0.5 truncate group-hover:text-[#60A5FA] transition-colors">
                      {rawEmail}
                    </div>
                  </div>
                </a>

                {/* WhatsApp Direct Link */}
                <a
                  href={`https://wa.me/${whatsappNum}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-emerald-950/30 hover:bg-emerald-950/60 border border-emerald-500/20 transition-all group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] sm:text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      WhatsApp Chat
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mt-0.5 truncate group-hover:text-emerald-300 transition-colors">
                      {whatsappNum.substring(0, 2)} {whatsappNum.substring(2)}
                    </div>
                  </div>
                </a>

                {/* Location Badge */}
                <div className="flex items-start gap-3.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-slate-800/80">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Location & College
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                      Raghu Engineering College, Visakhapatnam, Andhra Pradesh, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials Row */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Connect On Socials
                </span>
                <SocialLinks className="flex items-center gap-4 text-slate-400" iconClassName="w-4 h-4 sm:w-5 sm:h-5 hover:text-white transition-colors" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Response Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form className="bg-[#0B1220]/90 border border-slate-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-4 sm:space-y-5 backdrop-blur-md shadow-2xl relative">

              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center justify-between">
                <span>Send a Message</span>
                <span className="text-[11px] font-normal text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full">Direct Delivery</span>
              </h3>

              {/* Success Alert Banner */}
              {submittedStatus !== 'idle' && (
                <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 flex items-center gap-2.5 text-xs font-semibold animate-in fade-in duration-200">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>
                    {submittedStatus === 'whatsapp'
                      ? 'WhatsApp chat launched with your pre-filled message! Click send in WhatsApp.'
                      : 'Email client opened with your formatted message to phanidrauddagiri05@gmail.com!'}
                  </span>
                </div>
              )}

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-400" />
                    <span>Your Name *</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Phanindra Uddagiri"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-purple-400" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@domain.com"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>
              </div>

              {/* Phone/WhatsApp & Subject Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {/* Phone / WhatsApp */}
                <div className="space-y-1">
                  <label htmlFor="phone" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp / Phone Number</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 94410 55486"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  />
                </div>

                {/* Subject Selector */}
                <div className="space-y-1">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Subject / Topic</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Full-Stack Web Dev Work">Full-Stack Web Dev Work</option>
                    <option value="Hiring / Internship">Hiring / Internship Opportunity</option>
                    <option value="Other Topic">Other Topic</option>
                  </select>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-pink-400" />
                  <span>Your Message *</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Phanindra, I'd like to discuss a project..."
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                />
              </div>

              {/* Dual Integrated Response Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                {/* 1. Send via WhatsApp (Green) */}
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-200" />
                  <span>Send to WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto sm:ml-0" />
                </button>

                {/* 2. Send via Email (Blue/Purple) */}
                <button
                  type="button"
                  onClick={handleEmailSubmit}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] hover:from-[#3B66FF] hover:to-[#7C3AED] shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-blue-200" />
                  <span>Send to Email</span>
                  <Send className="w-3.5 h-3.5 ml-auto sm:ml-0" />
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};


