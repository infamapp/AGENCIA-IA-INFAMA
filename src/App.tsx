import { useState, useEffect } from 'react';
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
  Linkedin,
  Instagram,
  Menu,
  X,
  Facebook,
  Twitter,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSeoSectionOpen, setIsSeoSectionOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam: si el honeypot tiene contenido, ignoramos el envío
    if (honeypot.trim() !== '') {
      return;
    }

    setIsSending(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    // Simulación de envío
    console.log('Formulario enviado:', formData);

    setTimeout(() => {
      setIsSending(false);
      setSuccessMessage('¡Gracias! Hemos recibido tu mensaje y te contactaremos muy pronto.');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-xl py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <a href="#home" className="flex items-center group">
              <div className="text-2xl font-light tracking-tight">
                <span className="font-['Brush_Script_MT',cursive] text-3xl text-gray-300">The</span>
                <span className="font-black text-white ml-1">INFAMA</span>
                <span className="font-black text-white ml-1 text-3xl">IA</span>
              </div>
            </a>

            <div className="hidden lg:flex items-center space-x-12">
              <a href="#services" className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300">Services</a>
              <a href="#work" className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300">Work</a>
              <a href="#process" className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300">Process</a>
              <a href="#about" className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300">About</a>
              <a href="#contact" className="text-sm uppercase tracking-widest bg-white text-black px-8 py-3 hover:bg-gray-200 transition-all duration-300">
                Contact
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800">
            <div className="flex flex-col space-y-6 px-6 py-8">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest text-gray-400">Services</a>
              <a href="#work" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest text-gray-400">Work</a>
              <a href="#process" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest text-gray-400">Process</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest text-gray-400">About</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest text-white">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-radial from-gray-900/50 via-black to-black"></div>

        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-5xl">
            <div className="inline-block mb-8 text-xs uppercase tracking-[0.3em] text-gray-500 border border-gray-800 px-4 py-2">
              AI-POWERED SOLUTIONS
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-8 tracking-tighter">
              <span className="block text-white">POTENCIAMOS</span>
              <span className="block text-white">TU NEGOCIO</span>
              <span className="block text-gray-400">CON IA REAL</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light">
              Automatización inteligente, contenido estratégico y marketing autónomo.
              Soluciones personalizadas que transforman operaciones y multiplican resultados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center bg-white text-black px-10 py-5 text-sm uppercase tracking-widest font-medium hover:bg-gray-200 transition-all duration-300"
              >
                Agenda Demo Gratuita
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border border-white text-white px-10 py-5 text-sm uppercase tracking-widest font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                Ver Servicios
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-900 py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { number: '300%', label: 'ROI Promedio', desc: 'en automatización' },
              { number: '70%', label: 'Ahorro de Tiempo', desc: 'en procesos manuales' },
              { number: '200+', label: 'Empresas', desc: 'transformadas' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl md:text-7xl font-black mb-4 text-white">{stat.number}</div>
                <div className="text-sm uppercase tracking-widest text-gray-500 mb-2">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-black">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">NUESTROS SERVICIOS</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white max-w-4xl">
              Soluciones de IA diseñadas para impulsar tu negocio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Automatización de Procesos',
                desc: 'Optimiza flujos de trabajo y elimina tareas repetitivas con IA avanzada'
              },
              {
                icon: Target,
                title: 'Marketing Inteligente',
                desc: 'Embudos automatizados y campañas optimizadas con segmentación predictiva'
              },
              {
                icon: Sparkles,
                title: 'Generación de Contenido IA',
                desc: 'Copywriting, guiones y contenido estratégico con inteligencia artificial'
              },
              {
                icon: Bot,
                title: 'Agentes IA Personalizados',
                desc: 'Asistentes inteligentes para ventas y atención al cliente 24/7'
              },
              {
                icon: Code,
                title: 'Desarrollo de Herramientas IA',
                desc: 'APIs, modelos personalizados y soluciones a medida'
              },
              {
                icon: Brain,
                title: 'Consultoría y Formación',
                desc: 'Auditoría de adopción IA y capacitación estratégica'
              }
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-zinc-950 border border-gray-900 p-10 hover:bg-zinc-900 hover:border-gray-800 transition-all duration-500 cursor-pointer"
              >
                <service.icon className="w-12 h-12 text-white mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work / Casos de Éxito */}
      <section id="work" className="py-32 bg-zinc-950">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">CASOS DE ÉXITO</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white max-w-4xl">
              Resultados reales que transforman negocios
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                company: 'E-commerce de Moda',
                industry: 'Retail',
                result: '+450%',
                metric: 'Conversión',
                desc: 'Implementación de asistente IA que personaliza recomendaciones y automatiza atención',
                achievements: [
                  '85% reducción tiempo de respuesta',
                  '3.2x incremento ticket promedio',
                  '92% satisfacción del cliente'
                ]
              },
              {
                company: 'Agencia de Marketing',
                industry: 'Marketing',
                result: '70%',
                metric: 'Ahorro de Tiempo',
                desc: 'Sistema de generación de contenido IA para redes sociales y campañas publicitarias',
                achievements: [
                  '500+ piezas de contenido/mes',
                  '280% aumento en engagement',
                  'ROI de 420% en 6 meses'
                ]
              },
              {
                company: 'Startup SaaS',
                industry: 'Technology',
                result: '+300%',
                metric: 'Leads Calificados',
                desc: 'Embudo automatizado con IA para scoring de leads y seguimiento inteligente',
                achievements: [
                  '45% mejora en tasa de cierre',
                  '80% procesos automatizados',
                  'Escalabilidad sin límites'
                ]
              },
              {
                company: 'Empresa de Servicios',
                industry: 'Services',
                result: '60%',
                metric: 'Reducción de Costos',
                desc: 'Automatización de procesos administrativos y operativos con agentes IA',
                achievements: [
                  '12 horas diarias recuperadas',
                  'Cero errores en facturación',
                  'Equipo enfocado en estrategia'
                ]
              }
            ].map((project, i) => (
              <div key={i} className="group bg-black border border-gray-900 overflow-hidden hover:border-gray-700 transition-all duration-500">
                <div className="p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-3">{project.industry}</div>
                      <h3 className="text-3xl font-bold text-white mb-2">{project.company}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-black text-white">{project.result}</div>
                      <div className="text-xs uppercase tracking-widest text-gray-500">{project.metric}</div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-8 leading-relaxed">{project.desc}</p>

                  <div className="space-y-3">
                    {project.achievements.map((achievement, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
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

      {/* Process Section */}
      <section id="process" className="py-32 bg-black">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">NUESTRO PROCESO</div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white max-w-4xl">
              Un camino claro hacia la transformación
            </h2>
          </div>

          <div className="space-y-px">
            {[
              {
                number: '01',
                title: 'Diagnóstico',
                desc: 'Análisis profundo de procesos y necesidades actuales',
                icon: Brain
              },
              {
                number: '02',
                title: 'Propuesta',
                desc: 'Diseño de solución personalizada con ROI proyectado',
                icon: Target
              },
              {
                number: '03',
                title: 'Implementación',
                desc: 'Desarrollo e integración de IA en tu operación',
                icon: Code
              },
              {
                number: '04',
                title: 'Acompañamiento',
                desc: 'Capacitación y soporte continuo a tu equipo',
                icon: Users
              },
              {
                number: '05',
                title: 'Optimización',
                desc: 'Mejora continua basada en datos y resultados',
                icon: TrendingUp
              }
            ].map((step, i) => (
              <div
                key={i}
                className="group bg-zinc-950 border border-gray-900 p-10 hover:bg-zinc-900 transition-all duration-500 flex items-center gap-10"
              >
                <div className="text-7xl font-black text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-gray-500 text-lg">{step.desc}</p>
                </div>
                <step.icon className="w-12 h-12 text-gray-800 group-hover:text-white transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-zinc-950">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">SOBRE NOSOTROS</div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8">
                Más que tecnología, tu aliado estratégico
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  En <span className="text-white font-bold">The Infama IA</span> fusionamos lo mejor de las agencias
                  más innovadoras: la creatividad de Media.Monks, la estrategia de Intelevo
                  y la precisión técnica de Aikon Agency.
                </p>
                <p>
                  No vendemos software. Co-creamos soluciones de IA que se adaptan a la identidad
                  única de tu marca, potenciando tu equipo humano y escalando tu impacto sin perder tu esencia.
                </p>
              </div>
              <div className="mt-12 space-y-4">
                {[
                  'Enfoque humano + tecnológico',
                  'Soluciones 100% personalizadas',
                  'ROI medible desde el día uno',
                  'Soporte continuo y proactivo'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-white"></div>
                    <span className="text-gray-300 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-zinc-900 border border-gray-800 overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}img/EquipoIA.jpg`}
                  alt="Equipo The Infama IA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">CONTACTO</div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8">
                Comencemos tu transformación con IA
              </h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Agenda una sesión estratégica gratuita y descubre cómo la IA puede revolucionar tu negocio.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-6">
                  <Mail className="w-6 h-6 text-gray-600" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-600 mb-1">Email</div>
                    <div className="text-white text-lg">infamapp@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <Phone className="w-6 h-6 text-gray-600" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-600 mb-1">Teléfono</div>
                    <div className="text-white text-lg">611 257 828</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/infamaproject?igsh=MXBjamowa3c0aXpyZw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/theinfamastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/theinfamastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-zinc-950 border border-gray-900 p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot invisible para bots */}
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
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black border-b border-gray-800 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="Tu nombre"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-3">
                    Email Corporativo
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black border-b border-gray-800 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="tu@empresa.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-3">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black border-b border-gray-800 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="Tu número de contacto"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-3">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-black border-b border-gray-800 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    placeholder="Nombre de tu empresa"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-600 mb-3">
                    Cuéntanos tu Desafío
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-black border-b border-gray-800 py-3 text-white focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="¿Qué proceso quieres automatizar o mejorar con IA?"
                    required
                  />
                </div>
                {successMessage && (
                  <div className="text-green-500 text-sm">
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="text-red-500 text-sm">
                    {errorMessage}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-5 text-sm uppercase tracking-widest font-medium transition-all duration-300 flex items-center justify-center gap-3 mt-4 ${isSending ? 'bg-gray-400 text-black cursor-not-allowed' : 'bg-white text-black hover:bg-gray-200'}`}
                >
                  {isSending ? 'Enviando…' : 'Enviar Solicitud'}
                  {!isSending && <Send className="w-5 h-5" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="border-t border-gray-900 bg-black">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <button
            onClick={() => setIsSeoSectionOpen(!isSeoSectionOpen)}
            className="w-full py-8 flex items-center justify-between text-left hover:bg-gray-900/30 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold text-white">Nuestros Servicios y Procesos Completos</h3>
            {isSeoSectionOpen ? <ChevronUp className="text-gray-400" size={28} /> : <ChevronDown className="text-gray-400" size={28} />}
          </button>

          {isSeoSectionOpen && (
            <div className="pb-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Inteligencia Artificial y Machine Learning</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Desarrollo de soluciones de inteligencia artificial personalizadas, machine learning, deep learning,
                  procesamiento de lenguaje natural (NLP), visión por computadora, análisis predictivo, modelos de IA,
                  algoritmos de aprendizaje automático, redes neuronales, IA generativa, ChatGPT, GPT-4, OpenAI,
                  automatización inteligente, asistentes virtuales con IA, chatbots inteligentes.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Automatización de Procesos (RPA)</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Automatización robótica de procesos (RPA), automatización de flujos de trabajo, automatización empresarial,
                  procesos automatizados, robotic process automation, automatización de tareas repetitivas, optimización de procesos,
                  eficiencia operativa, reducción de costos operativos, automatización de back office, automatización de front office,
                  integración de sistemas, APIs y webhooks.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Desarrollo de Software a Medida</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Desarrollo de aplicaciones web, desarrollo de aplicaciones móviles, software personalizado, desarrollo full stack,
                  frontend development, backend development, React, Node.js, Python, TypeScript, JavaScript, desarrollo ágil,
                  arquitectura de software, microservicios, cloud computing, AWS, Azure, Google Cloud, desarrollo API REST.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Análisis de Datos y Business Intelligence</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Big data, análisis de datos, ciencia de datos, data science, business intelligence, dashboards interactivos,
                  visualización de datos, KPIs, métricas de negocio, data analytics, análisis predictivo, forecasting,
                  minería de datos, ETL, data warehousing, Power BI, Tableau, SQL, bases de datos.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Transformación Digital</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Consultoría en transformación digital, digitalización empresarial, modernización de sistemas legacy,
                  migración a la nube, estrategia digital, innovación tecnológica, cambio organizacional, gestión del cambio,
                  adopción de tecnología, cultura digital, procesos digitales, experiencia del cliente digital (CX).
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Consultoría Estratégica en IA</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Consultoría en inteligencia artificial, estrategia de IA, roadmap tecnológico, auditoría de procesos,
                  identificación de casos de uso, ROI de proyectos de IA, implementación de IA, adopción de IA empresarial,
                  gobierno de IA, ética en IA, IA responsable, capacitación en IA, workshops de IA.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">CRM y Marketing Automation</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sistemas CRM, gestión de relaciones con clientes, automatización de marketing, email marketing automatizado,
                  lead nurturing, segmentación de clientes, campañas automatizadas, marketing digital, inbound marketing,
                  HubSpot, Salesforce, automatización de ventas, funnel de ventas, customer journey.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">E-commerce y Ventas Online</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tiendas online, e-commerce, comercio electrónico, plataformas de venta, Shopify, WooCommerce,
                  pasarelas de pago, sistemas de inventario, gestión de pedidos, fulfillment automatizado,
                  integración con marketplaces, Amazon, eBay, catálogos de productos, carrito de compras.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Integraciones y APIs</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Integración de sistemas, desarrollo de APIs, API REST, GraphQL, webhooks, middleware,
                  integración de ERP, integración CRM, sincronización de datos, automatización de integraciones,
                  Zapier, Make (Integromat), n8n, iPaaS, conectores personalizados, microservicios.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-900 py-12 bg-black">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-light">
              <span className="font-['Brush_Script_MT',cursive] text-2xl text-gray-500">The</span>
              <span className="font-black text-white ml-1">INFAMA</span>
              <span className="font-black text-white ml-1 text-2xl">IA</span>
            </div>
            <div className="text-gray-600 text-sm text-center">
              © 2025 The Infama IA. Transformando negocios con IA real y efectiva.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
