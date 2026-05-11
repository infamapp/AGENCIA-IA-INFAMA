import { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Zap,
  Brain,
  Bot,
  Code,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Send,
  Mail,
  Phone,
  Instagram,
  Menu,
  X,
  Facebook,
  Twitter,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Globe,
  ChevronRight,
  Minimize2,
} from 'lucide-react';

type Lang = 'es' | 'en';

const translations = {
  es: {
    nav: {
      services: 'Servicios',
      work: 'Casos de éxito',
      process: 'Proceso',
      about: 'Nosotros',
      contact: 'Contacto',
      collaborate: '¿Quieres colaborar con nosotros?',
    },
    hero: {
      badge: 'SOLUCIONES IA REALES',
      title: ['POTENCIAMOS', 'TU NEGOCIO', 'CON IA REAL'],
      desc: 'Automatización inteligente, contenido estratégico y marketing autónomo. Soluciones personalizadas que transforman operaciones y multiplican resultados.',
      cta: 'Ver Demo',
      ctaSecondary: 'Ver Servicios',
    },
    stats: [
      { number: '300%', label: 'ROI Promedio', desc: 'en automatización' },
      { number: '70%', label: 'Ahorro de Tiempo', desc: 'en procesos manuales' },
      { number: '200+', label: 'Empresas', desc: 'transformadas' },
    ],
    services: {
      label: 'NUESTROS SERVICIOS',
      title: 'Soluciones de IA diseñadas para impulsar tu negocio',
      items: [
        { title: 'Automatización de Procesos', desc: 'Optimiza flujos de trabajo y elimina tareas repetitivas con IA avanzada' },
        { title: 'Marketing Inteligente', desc: 'Embudos automatizados y campañas optimizadas con segmentación predictiva' },
        { title: 'Generación de Contenido IA', desc: 'Copywriting, guiones y contenido estratégico con inteligencia artificial' },
        { title: 'Agentes IA Personalizados', desc: 'Asistentes inteligentes para ventas y atención al cliente 24/7' },
        { title: 'Desarrollo de Herramientas IA', desc: 'APIs, modelos personalizados y soluciones a medida' },
        { title: 'Consultoría y Formación', desc: 'Auditoría de adopción IA y capacitación estratégica' },
      ],
    },
    work: {
      label: 'CASOS DE ÉXITO',
      title: 'Resultados reales que transforman negocios',
      items: [
        {
          company: 'E-commerce de Moda',
          industry: 'Retail',
          result: '+450%',
          metric: 'Conversión',
          desc: 'Implementación de asistente IA que personaliza recomendaciones y automatiza atención',
          achievements: ['85% reducción tiempo de respuesta', '3.2x incremento ticket promedio', '92% satisfacción del cliente'],
        },
        {
          company: 'Agencia de Marketing',
          industry: 'Marketing',
          result: '70%',
          metric: 'Ahorro de Tiempo',
          desc: 'Sistema de generación de contenido IA para redes sociales y campañas publicitarias',
          achievements: ['500+ piezas de contenido/mes', '280% aumento en engagement', 'ROI de 420% en 6 meses'],
        },
        {
          company: 'Startup SaaS',
          industry: 'Technology',
          result: '+300%',
          metric: 'Leads Calificados',
          desc: 'Embudo automatizado con IA para scoring de leads y seguimiento inteligente',
          achievements: ['45% mejora en tasa de cierre', '80% procesos automatizados', 'Escalabilidad sin límites'],
        },
        {
          company: 'Empresa de Servicios',
          industry: 'Services',
          result: '60%',
          metric: 'Reducción de Costos',
          desc: 'Automatización de procesos administrativos y operativos con agentes IA',
          achievements: ['12 horas diarias recuperadas', 'Cero errores en facturación', 'Equipo enfocado en estrategia'],
        },
      ],
    },
    process: {
      label: 'NUESTRO PROCESO',
      title: 'Un camino claro hacia la transformación',
      steps: [
        { number: '01', title: 'Diagnóstico', desc: 'Análisis profundo de procesos y necesidades actuales' },
        { number: '02', title: 'Propuesta', desc: 'Diseño de solución personalizada con ROI proyectado' },
        { number: '03', title: 'Implementación', desc: 'Desarrollo e integración de IA en tu operación' },
        { number: '04', title: 'Acompañamiento', desc: 'Capacitación y soporte continuo a tu equipo' },
        { number: '05', title: 'Optimización', desc: 'Mejora continua basada en datos y resultados' },
      ],
    },
    about: {
      label: 'SOBRE NOSOTROS',
      title: 'Más que tecnología, tu aliado estratégico',
      p1: 'En The Infama IA fusionamos lo mejor de las agencias más innovadoras: la creatividad de Media.Monks, la estrategia de Intelevo y la precisión técnica de Aikon Agency.',
      p2: 'No vendemos software. Co-creamos soluciones de IA que se adaptan a la identidad única de tu marca, potenciando tu equipo humano y escalando tu impacto sin perder tu esencia.',
      features: ['Enfoque humano + tecnológico', 'Soluciones 100% personalizadas', 'ROI medible desde el día uno', 'Soporte continuo y proactivo'],
    },
    contact: {
      label: 'CONTACTO',
      title: 'Comencemos tu transformación con IA',
      desc: 'Agenda una sesión estratégica gratuita y descubre cómo la IA puede revolucionar tu negocio.',
      emailLabel: 'Email',
      phoneLabel: 'Teléfono',
      form: {
        name: 'Nombre Completo',
        namePlaceholder: 'Tu nombre',
        email: 'Email Corporativo',
        emailPlaceholder: 'tu@empresa.com',
        phone: 'Teléfono',
        phonePlaceholder: 'Tu número de contacto',
        company: 'Empresa',
        companyPlaceholder: 'Nombre de tu empresa',
        message: 'Consúltanos cuáles son tus necesidades',
        messagePlaceholder: 'Cuéntanos en qué podemos ayudarte',
        submit: 'Enviar Solicitud',
        sending: 'Enviando…',
        success: '¡Gracias! Hemos recibido tu mensaje y te contactaremos muy pronto.',
      },
    },
    seo: { title: 'Nuestros Servicios y Procesos Completos' },
    footer: { copy: '© 2025 The Infama IA. Transformando negocios con IA real y efectiva.' },
    chatbot: {
      greeting: '¡Hola! Soy el asistente de The Infama IA. ¿En qué puedo ayudarte hoy?',
      faqLabel: 'Preguntas frecuentes',
      qa: [
        { q: '¿Qué servicios ofrecéis?', a: 'Ofrecemos automatización de procesos, marketing inteligente, generación de contenido IA, agentes personalizados, desarrollo de herramientas IA y consultoría estratégica. ¿Te interesa alguno en particular?' },
        { q: '¿Cuánto cuesta implementar IA?', a: 'Cada proyecto es único. Adaptamos los presupuestos a cada empresa, desde automatizaciones puntuales hasta transformaciones completas. ¡Contáctanos para recibir una propuesta personalizada!' },
        { q: '¿Cuánto tarda la implementación?', a: 'Entre 2 semanas para automatizaciones simples y 3 meses para proyectos complejos, siempre con acompañamiento en cada etapa.' },
        { q: '¿Trabajáis con pymes?', a: '¡Por supuesto! Trabajamos con empresas de todos los tamaños. Las soluciones se adaptan a tu presupuesto y necesidades reales.' },
        { q: '¿Cómo puedo ver una demo?', a: 'Haz clic en "Ver Demo" en la página o contáctanos directamente. Preparamos una demo personalizada para tu sector.' },
        { q: '¿Tenéis soporte post-implementación?', a: 'Sí, ofrecemos soporte y acompañamiento continuo. Te capacitamos, resolvemos dudas y optimizamos según los resultados.' },
      ],
    },
  },
  en: {
    nav: {
      services: 'Services',
      work: 'Case Studies',
      process: 'Process',
      about: 'About',
      contact: 'Contact',
      collaborate: 'Want to collaborate?',
    },
    hero: {
      badge: 'REAL AI SOLUTIONS',
      title: ['WE POWER', 'YOUR BUSINESS', 'WITH REAL AI'],
      desc: 'Intelligent automation, strategic content and autonomous marketing. Personalized solutions that transform operations and multiply results.',
      cta: 'See Demo',
      ctaSecondary: 'Our Services',
    },
    stats: [
      { number: '300%', label: 'Average ROI', desc: 'in automation' },
      { number: '70%', label: 'Time Savings', desc: 'in manual processes' },
      { number: '200+', label: 'Companies', desc: 'transformed' },
    ],
    services: {
      label: 'OUR SERVICES',
      title: 'AI solutions designed to drive your business forward',
      items: [
        { title: 'Process Automation', desc: 'Optimize workflows and eliminate repetitive tasks with advanced AI' },
        { title: 'Intelligent Marketing', desc: 'Automated funnels and optimized campaigns with predictive segmentation' },
        { title: 'AI Content Generation', desc: 'Copywriting, scripts and strategic content with artificial intelligence' },
        { title: 'Custom AI Agents', desc: 'Intelligent assistants for sales and customer service 24/7' },
        { title: 'AI Tools Development', desc: 'Custom APIs, models and bespoke solutions' },
        { title: 'Consulting & Training', desc: 'AI adoption audit and strategic training' },
      ],
    },
    work: {
      label: 'SUCCESS STORIES',
      title: 'Real results that transform businesses',
      items: [
        {
          company: 'Fashion E-commerce',
          industry: 'Retail',
          result: '+450%',
          metric: 'Conversion',
          desc: 'AI assistant implementation that personalizes recommendations and automates support',
          achievements: ['85% reduction in response time', '3.2x average ticket increase', '92% customer satisfaction'],
        },
        {
          company: 'Marketing Agency',
          industry: 'Marketing',
          result: '70%',
          metric: 'Time Saved',
          desc: 'AI content generation system for social media and advertising campaigns',
          achievements: ['500+ content pieces/month', '280% engagement increase', '420% ROI in 6 months'],
        },
        {
          company: 'SaaS Startup',
          industry: 'Technology',
          result: '+300%',
          metric: 'Qualified Leads',
          desc: 'AI-powered automated funnel for lead scoring and intelligent follow-up',
          achievements: ['45% improvement in close rate', '80% automated processes', 'Unlimited scalability'],
        },
        {
          company: 'Services Company',
          industry: 'Services',
          result: '60%',
          metric: 'Cost Reduction',
          desc: 'Automation of administrative and operational processes with AI agents',
          achievements: ['12 hours recovered daily', 'Zero billing errors', 'Team focused on strategy'],
        },
      ],
    },
    process: {
      label: 'OUR PROCESS',
      title: 'A clear path to transformation',
      steps: [
        { number: '01', title: 'Diagnosis', desc: 'In-depth analysis of current processes and needs' },
        { number: '02', title: 'Proposal', desc: 'Custom solution design with projected ROI' },
        { number: '03', title: 'Implementation', desc: 'AI development and integration into your operation' },
        { number: '04', title: 'Support', desc: 'Training and continuous support for your team' },
        { number: '05', title: 'Optimization', desc: 'Continuous improvement based on data and results' },
      ],
    },
    about: {
      label: 'ABOUT US',
      title: 'More than technology, your strategic partner',
      p1: "At The Infama IA we merge the best of the most innovative agencies: Media.Monks' creativity, Intelevo's strategy, and Aikon Agency's technical precision.",
      p2: "We don't sell software. We co-create AI solutions that adapt to your brand's unique identity, empowering your human team and scaling your impact without losing your essence.",
      features: ['Human + technological approach', '100% customized solutions', 'Measurable ROI from day one', 'Continuous proactive support'],
    },
    contact: {
      label: 'CONTACT',
      title: "Let's start your AI transformation",
      desc: 'Schedule a free strategic session and discover how AI can revolutionize your business.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      form: {
        name: 'Full Name',
        namePlaceholder: 'Your name',
        email: 'Corporate Email',
        emailPlaceholder: 'you@company.com',
        phone: 'Phone',
        phonePlaceholder: 'Your contact number',
        company: 'Company',
        companyPlaceholder: 'Your company name',
        message: 'Tell us your needs',
        messagePlaceholder: 'Tell us how we can help you',
        submit: 'Send Request',
        sending: 'Sending…',
        success: 'Thank you! We have received your message and will contact you shortly.',
      },
    },
    seo: { title: 'Our Complete Services and Processes' },
    footer: { copy: '© 2025 The Infama IA. Transforming businesses with real and effective AI.' },
    chatbot: {
      greeting: "Hi! I'm The Infama IA assistant. How can I help you today?",
      faqLabel: 'Frequently asked',
      qa: [
        { q: 'What services do you offer?', a: 'We offer process automation, intelligent marketing, AI content generation, custom agents, AI tools development, and strategic consulting. Interested in any specific one?' },
        { q: 'How much does AI implementation cost?', a: 'Every project is unique. We adapt budgets to each company, from specific automations to full transformations. Contact us for a personalized proposal!' },
        { q: 'How long does implementation take?', a: 'Between 2 weeks for simple automations and 3 months for complex projects, always with support at every stage.' },
        { q: 'Do you work with SMBs?', a: 'Absolutely! We work with companies of all sizes. Solutions are adapted to your budget and real needs.' },
        { q: 'How can I see a demo?', a: 'Click "See Demo" on the page or contact us directly. We prepare a personalized demo for your industry.' },
        { q: 'Do you offer post-implementation support?', a: 'Yes, we offer continuous support and follow-up. We train your team, answer questions, and optimize based on results.' },
      ],
    },
  },
};

// ─── Chatbot Component ────────────────────────────────────────────────────────

type Message = { from: 'bot' | 'user'; text: string };

function ChatBot({ lang, t }: { lang: Lang; t: typeof translations['es'] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: t.chatbot.greeting },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ from: 'bot', text: t.chatbot.greeting }]);
  }, [lang, t.chatbot.greeting]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleQuestion = (q: string, a: string) => {
    setMessages((prev) => [...prev, { from: 'user', text: q }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { from: 'bot', text: a }]);
    }, 900 + Math.random() * 600);
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50">
      {isOpen && (
        <div
          className="mb-4 w-[calc(100vw-2rem)] sm:w-96 bg-zinc-950 border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn"
          style={{ height: '480px', maxHeight: 'calc(100vh - 120px)' }}
        >
          {/* Header */}
          <div className="bg-black border-b border-gray-800 px-5 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-green-900 flex-shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}img/infamaIA.jpeg`}
                  alt="Infama IA"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Infama IA</div>
                <div className="text-green-400 text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block"></span>
                  Online
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-white transition-colors p-1"
              aria-label="Minimizar chat"
            >
              <Minimize2 size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? 'bg-white text-black rounded-2xl rounded-br-sm'
                      : 'bg-zinc-900 text-gray-200 rounded-2xl rounded-bl-sm border border-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 border border-gray-800 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions */}
          {!isTyping && (
            <div className="border-t border-gray-800 px-4 py-3 flex-shrink-0">
              <div className="text-xs text-gray-600 uppercase tracking-wider mb-2">
                {t.chatbot.faqLabel}
              </div>
              <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                {t.chatbot.qa.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuestion(item.q, item.a)}
                    className="w-full text-left text-xs text-gray-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-gray-800 hover:border-green-900 px-3 py-2 rounded-lg flex items-center justify-between gap-2 transition-all duration-200"
                  >
                    <span className="truncate">{item.q}</span>
                    <ChevronRight size={12} className="flex-shrink-0 text-green-500" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-white text-black rounded-full shadow-2xl flex items-center justify-center hover:bg-gray-200 transition-all duration-300 hover:scale-110 ml-auto"
        aria-label="Abrir chat"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

const serviceIcons = [Zap, Target, Sparkles, Bot, Code, Brain];
const processIcons = [Brain, Target, Code, Users, TrendingUp];

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSeoSectionOpen, setIsSeoSectionOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const [lang, setLang] = useState<Lang>('es');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot.trim() !== '') return;

    setIsSending(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    setTimeout(() => {
      setIsSending(false);
      setSuccessMessage(t.contact.form.success);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 1500);
  };

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ── Navigation ── */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/95 backdrop-blur-xl py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-5 lg:px-12">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <a href="#home" className="flex items-center group">
              <img
                src={`${import.meta.env.BASE_URL}img/infamaIA.jpeg`}
                alt="The Infama IA"
                className="h-10 w-auto object-contain"
              />
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              <a href="#services" className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300">
                {t.nav.services}
              </a>
              <a href="#work" className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300">
                {t.nav.work}
              </a>
              <a href="#process" className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300">
                {t.nav.process}
              </a>
              <a href="#about" className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300">
                {t.nav.about}
              </a>
              <a
                href="#contact"
                className="text-sm uppercase tracking-widest bg-white text-black px-6 py-3 hover:bg-gray-200 transition-all duration-300 font-medium"
              >
                {t.nav.contact}
              </a>
              <a
                href="#contact"
                className="text-sm uppercase tracking-widest bg-white text-black px-6 py-3 hover:bg-gray-200 transition-all duration-300 font-medium whitespace-nowrap"
              >
                {t.nav.collaborate}
              </a>
              {/* Language toggle */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors duration-300 border border-gray-800 hover:border-gray-600 px-3 py-2 rounded"
                aria-label="Cambiar idioma"
              >
                <Globe size={14} />
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
            </div>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-white transition-colors border border-gray-800 px-2 py-1.5 rounded"
                aria-label="Cambiar idioma"
              >
                <Globe size={12} />
                {lang === 'es' ? 'EN' : 'ES'}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-1"
                aria-label="Menú"
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 animate-fadeIn">
            <div className="flex flex-col space-y-5 px-6 py-7">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                {t.nav.services}
              </a>
              <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                {t.nav.work}
              </a>
              <a href="#process" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                {t.nav.process}
              </a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                {t.nav.about}
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest bg-white text-black px-6 py-3 text-center font-medium hover:bg-gray-200 transition-all">
                {t.nav.contact}
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest bg-white text-black px-6 py-3 text-center font-medium hover:bg-gray-200 transition-all">
                {t.nav.collaborate}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/20 via-black to-black pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 80% 20%, #86efac 0%, transparent 60%)' }}
        ></div>

        <div className="max-w-[1600px] mx-auto px-5 lg:px-12 relative z-10 w-full py-16 md:py-0">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 mb-8 text-xs uppercase tracking-[0.3em] text-green-400/70 border border-green-900/50 px-4 py-2 rounded-sm">
              <Sparkles size={12} />
              {t.hero.badge}
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.88] mb-8 tracking-tighter">
              <span className="block text-white">{t.hero.title[0]}</span>
              <span className="block text-white">{t.hero.title[1]}</span>
              <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #86efac, #4ade80)' }}>
                {t.hero.title[2]}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light">
              {t.hero.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center bg-white text-black px-10 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                {t.hero.cta}
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border border-gray-700 text-gray-300 px-10 py-4 text-sm uppercase tracking-widest font-medium hover:border-green-700 hover:text-white transition-all duration-300"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-gray-900 py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
            {t.stats.map((stat, i) => (
              <div key={i} className="text-center sm:text-left sm:border-l sm:border-gray-900 sm:pl-10 first:border-l-0 first:pl-0">
                <div className="text-5xl md:text-6xl font-black mb-2 text-white" style={{ color: i === 0 ? '#86efac' : 'white' }}>
                  {stat.number}
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500 mb-1">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24 md:py-32 bg-black">
        <div className="max-w-[1600px] mx-auto px-5 lg:px-12">
          <div className="mb-16 md:mb-20">
            <div className="text-xs uppercase tracking-[0.3em] text-green-500/60 mb-5">{t.services.label}</div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white max-w-4xl leading-tight">
              {t.services.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-900">
            {t.services.items.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <div
                  key={i}
                  className="group bg-black p-8 md:p-10 hover:bg-zinc-950 transition-all duration-500 cursor-default"
                >
                  <div className="w-12 h-12 border border-gray-800 group-hover:border-green-900 flex items-center justify-center mb-7 transition-colors duration-500">
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-green-400 transition-colors duration-500" />
                  </div>
                  <div className="text-xs text-gray-700 mb-3 font-mono">0{i + 1}</div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Work / Casos de éxito ── */}
      <section id="work" className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-[1600px] mx-auto px-5 lg:px-12">
          <div className="mb-16 md:mb-20">
            <div className="text-xs uppercase tracking-[0.3em] text-green-500/60 mb-5">{t.work.label}</div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white max-w-4xl leading-tight">
              {t.work.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {t.work.items.map((project, i) => (
              <div
                key={i}
                className="group bg-black border border-gray-900 hover:border-green-950 transition-all duration-500 overflow-hidden"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-6 gap-4">
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-700 mb-2">{project.industry}</div>
                      <h3 className="text-2xl font-bold text-white truncate">{project.company}</h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-3xl md:text-4xl font-black text-green-400">{project.result}</div>
                      <div className="text-xs uppercase tracking-widest text-gray-600">{project.metric}</div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-7 leading-relaxed text-sm md:text-base">{project.desc}</p>

                  <div className="space-y-2.5">
                    {project.achievements.map((achievement, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-900 group-hover:text-green-600 flex-shrink-0 mt-0.5 transition-colors duration-500" />
                        <span className="text-gray-500 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process" className="py-24 md:py-32 bg-black">
        <div className="max-w-[1600px] mx-auto px-5 lg:px-12">
          <div className="mb-16 md:mb-20">
            <div className="text-xs uppercase tracking-[0.3em] text-green-500/60 mb-5">{t.process.label}</div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white max-w-4xl leading-tight">
              {t.process.title}
            </h2>
          </div>

          <div className="space-y-px">
            {t.process.steps.map((step, i) => {
              const Icon = processIcons[i];
              return (
                <div
                  key={i}
                  className="group bg-zinc-950 border-b border-gray-900 last:border-b-0 px-6 md:px-10 py-7 md:py-9 hover:bg-zinc-900 transition-all duration-400 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10"
                >
                  <div className="text-5xl md:text-6xl font-black text-gray-900 group-hover:text-green-950 transition-colors duration-500 select-none w-16 flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5 tracking-tight">{step.title}</h3>
                    <p className="text-gray-500 text-base">{step.desc}</p>
                  </div>
                  <Icon className="w-8 h-8 text-gray-800 group-hover:text-green-700 transition-colors duration-500 flex-shrink-0 hidden sm:block" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 md:py-32 bg-zinc-950">
        <div className="max-w-[1600px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-green-500/60 mb-5">{t.about.label}</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-8 leading-tight">
                {t.about.title}
              </h2>
              <div className="space-y-5 text-gray-400 text-base md:text-lg leading-relaxed">
                <p>
                  {t.about.p1.replace('The Infama IA', '')}
                  <span className="text-white font-bold">The Infama IA</span>
                  {t.about.p1.split('The Infama IA')[1]}
                </p>
                <p>{t.about.p2}</p>
              </div>
              <div className="mt-10 space-y-3">
                {t.about.features.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-zinc-900 border border-gray-800 overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}img/infamaIA.jpeg`}
                  alt="The Infama IA"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-green-900/50 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 md:py-32 bg-black">
        <div className="max-w-[1600px] mx-auto px-5 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-green-500/60 mb-5">{t.contact.label}</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-7 leading-tight">
                {t.contact.title}
              </h2>
              <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                {t.contact.desc}
              </p>

              <div className="space-y-7 mb-12">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 border border-gray-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-600 mb-1">{t.contact.emailLabel}</div>
                    <a href="mailto:infamapp@gmail.com" className="text-white text-base hover:text-green-400 transition-colors">
                      infamapp@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 border border-gray-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-600 mb-1">{t.contact.phoneLabel}</div>
                    <a href="tel:+34611257828" className="text-white text-base hover:text-green-400 transition-colors">
                      611 257 828
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/infamaproject?igsh=MXBjamowa3c0aXpyZw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com/theinfamastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/theinfamastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  aria-label="Twitter/X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-zinc-950 border border-gray-900 p-7 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="hidden"
                />
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-3">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black border-b border-gray-800 py-3 text-white focus:outline-none focus:border-green-700 transition-colors placeholder:text-gray-700"
                    placeholder={t.contact.form.namePlaceholder}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-3">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black border-b border-gray-800 py-3 text-white focus:outline-none focus:border-green-700 transition-colors placeholder:text-gray-700"
                    placeholder={t.contact.form.emailPlaceholder}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-3">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black border-b border-gray-800 py-3 text-white focus:outline-none focus:border-green-700 transition-colors placeholder:text-gray-700"
                    placeholder={t.contact.form.phonePlaceholder}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-3">
                    {t.contact.form.company}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-black border-b border-gray-800 py-3 text-white focus:outline-none focus:border-green-700 transition-colors placeholder:text-gray-700"
                    placeholder={t.contact.form.companyPlaceholder}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-3">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-black border-b border-gray-800 py-3 text-white focus:outline-none focus:border-green-700 transition-colors resize-none placeholder:text-gray-700"
                    placeholder={t.contact.form.messagePlaceholder}
                    required
                  />
                </div>

                {successMessage && (
                  <div className="text-green-400 text-sm border border-green-900/50 bg-green-950/20 px-4 py-3 rounded">
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="text-red-400 text-sm border border-red-900/50 bg-red-950/20 px-4 py-3 rounded">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-4 text-sm uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-3 mt-2 ${
                    isSending
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {isSending ? t.contact.form.sending : t.contact.form.submit}
                  {!isSending && <Send className="w-4 h-4" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO Section ── */}
      <section className="border-t border-gray-900 bg-black">
        <div className="max-w-[1600px] mx-auto px-5 lg:px-12">
          <button
            onClick={() => setIsSeoSectionOpen(!isSeoSectionOpen)}
            className="w-full py-7 flex items-center justify-between text-left hover:bg-gray-900/20 transition-colors duration-300"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white">{t.seo.title}</h3>
            {isSeoSectionOpen
              ? <ChevronUp className="text-gray-500 flex-shrink-0" size={24} />
              : <ChevronDown className="text-gray-500 flex-shrink-0" size={24} />
            }
          </button>

          {isSeoSectionOpen && (
            <div className="pb-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
              {[
                { title: 'Inteligencia Artificial y Machine Learning', body: 'Desarrollo de soluciones de inteligencia artificial personalizadas, machine learning, deep learning, procesamiento de lenguaje natural (NLP), visión por computadora, análisis predictivo, modelos de IA, algoritmos de aprendizaje automático, redes neuronales, IA generativa, ChatGPT, GPT-4, OpenAI, automatización inteligente, asistentes virtuales con IA, chatbots inteligentes.' },
                { title: 'Automatización de Procesos (RPA)', body: 'Automatización robótica de procesos (RPA), automatización de flujos de trabajo, automatización empresarial, procesos automatizados, robotic process automation, automatización de tareas repetitivas, optimización de procesos, eficiencia operativa, reducción de costos operativos, integración de sistemas, APIs y webhooks.' },
                { title: 'Desarrollo de Software a Medida', body: 'Desarrollo de aplicaciones web, desarrollo de aplicaciones móviles, software personalizado, desarrollo full stack, frontend development, backend development, React, Node.js, Python, TypeScript, JavaScript, desarrollo ágil, arquitectura de software, microservicios, cloud computing, AWS, Azure, Google Cloud.' },
                { title: 'Análisis de Datos y Business Intelligence', body: 'Big data, análisis de datos, ciencia de datos, data science, business intelligence, dashboards interactivos, visualización de datos, KPIs, métricas de negocio, data analytics, análisis predictivo, forecasting, minería de datos, ETL, data warehousing, Power BI, Tableau.' },
                { title: 'Transformación Digital', body: 'Consultoría en transformación digital, digitalización empresarial, modernización de sistemas legacy, migración a la nube, estrategia digital, innovación tecnológica, cambio organizacional, gestión del cambio, adopción de tecnología, cultura digital, procesos digitales, experiencia del cliente digital (CX).' },
                { title: 'Consultoría Estratégica en IA', body: 'Consultoría en inteligencia artificial, estrategia de IA, roadmap tecnológico, auditoría de procesos, identificación de casos de uso, ROI de proyectos de IA, implementación de IA, adopción de IA empresarial, gobierno de IA, ética en IA, capacitación en IA, workshops de IA.' },
                { title: 'CRM y Marketing Automation', body: 'Sistemas CRM, gestión de relaciones con clientes, automatización de marketing, email marketing automatizado, lead nurturing, segmentación de clientes, campañas automatizadas, marketing digital, inbound marketing, HubSpot, Salesforce, automatización de ventas, funnel de ventas.' },
                { title: 'E-commerce y Ventas Online', body: 'Tiendas online, e-commerce, comercio electrónico, plataformas de venta, Shopify, WooCommerce, pasarelas de pago, sistemas de inventario, gestión de pedidos, fulfillment automatizado, integración con marketplaces, Amazon, eBay.' },
                { title: 'Integraciones y APIs', body: 'Integración de sistemas, desarrollo de APIs, API REST, GraphQL, webhooks, middleware, integración de ERP, integración CRM, sincronización de datos, automatización de integraciones, Zapier, Make (Integromat), n8n, iPaaS, conectores personalizados.' },
              ].map((block, i) => (
                <div key={i} className="space-y-3">
                  <h4 className="text-base font-bold text-white">{block.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{block.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-900 py-10 bg-black">
        <div className="max-w-[1600px] mx-auto px-5 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <img
              src={`${import.meta.env.BASE_URL}img/infamaIA.jpeg`}
              alt="The Infama IA"
              className="h-8 w-auto object-contain"
            />
            <div className="text-gray-600 text-sm text-center">{t.footer.copy}</div>
          </div>
        </div>
      </footer>

      {/* ── Chatbot ── */}
      <ChatBot lang={lang} t={t} />
    </div>
  );
}

export default App;
