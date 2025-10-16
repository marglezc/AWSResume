'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Award,
  Users,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('presentacion')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['presentacion', 'educacion', 'experiencia']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MG</span>
              </div>
              <span className="font-semibold text-gray-900">Portafolio</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'presentacion', label: 'Presentación' },
                { id: 'educacion', label: 'Educación' },
                { id: 'experiencia', label: 'Experiencia' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'presentacion', label: 'Presentación' },
                { id: 'educacion', label: 'Educación' },
                { id: 'experiencia', label: 'Experiencia' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Presentación */}
      <section id="presentacion" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 w-fit">
                  Software Engineering Student
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Mariana Estefanía
                  <br />
                  <span className="text-blue-600">González Canul</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ingeniera de software apasionada por la gestión de proyectos y el desarrollo de soluciones tecnológicas innovadoras. 
                  Con experiencia en coordinación de proyectos educativos y voluntariado tecnológico.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>mgonzalezcanul@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+52 987-100-8570</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Mérida, Yucatán, México</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button 
                  onClick={() => scrollToSection('educacion')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                >
                  Ver Educación
                </Button>
                <Button 
                  onClick={() => scrollToSection('experiencia')}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3"
                >
                  Ver Experiencia
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                  <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                    <img 
                      src="/foto.jpg" 
                      alt="Mariana González Canul"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>Disponible para oportunidades</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <ChevronDown className="w-6 h-6 text-blue-600 mx-auto animate-bounce" />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="educacion" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
              <GraduationCap className="w-4 h-4 mr-2" />
              Formación Académica
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Educación y
              <span className="text-blue-600"> Certificaciones</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mi formación académica y certificaciones profesionales en ingeniería de software y gestión de proyectos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* University Degree */}
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Ingeniería de Software
                      </h3>
                      <p className="text-blue-600 font-medium">
                        Universidad Autónoma de Yucatán
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Ago 2022 - Dic 2026
                      </span>
                      <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        GPA: 88/100
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Módulos Clave:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Fundamentos de Ingeniería de Software
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Aseguramiento de Calidad
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Métricas de Software
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Requisitos de Software
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* IBM Certification */}
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        IT Project Manager
                      </h3>
                      <p className="text-blue-600 font-medium">
                        IBM - Coursera
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Ene 2025 - Abr 2025
                      </span>
                      <span className="bg-green-50 text-green-700 px-2 py-1 rounded">
                        Remoto
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Certificaciones:</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          Project Management Communication, Stakeholders & Leadership
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          Project Lifecycle, Information Sharing, and Risk Management
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          Project Management Foundations, Initiation, and Planning
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Courses */}
            <Card className="border-blue-100 hover:shadow-lg transition-shadow md:col-span-2">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Liderazgo y Gestión
                      </h3>
                      <p className="text-blue-600 font-medium">
                        SoyLider.net
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Junio 2025
                      </span>
                      <span className="bg-green-50 text-green-700 px-2 py-1 rounded">
                        Remoto
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                        Fundamentos de Project Management
                      </Badge>
                      <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                        Fundamentos de Scrum
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
              <Briefcase className="w-4 h-4 mr-2" />
              Trayectoria Profesional
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experiencia y
              <span className="text-blue-600"> Voluntariado</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mi experiencia profesional en coordinación tecnológica y mi compromiso con la comunidad a través del voluntariado.
            </p>
          </div>

          <div className="space-y-8">
            {/* Technology Coordinator */}
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Coordinadora de Tecnología
                      </h3>
                      <p className="text-blue-600 font-medium">
                        PRODEP, State Program 2023 - UADY
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        Oct 2023 - Dic 2023
                      </span>
                      <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        Mérida, Yuc
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <p className="text-gray-700">
                          Apoyé la entrega de un proyecto educativo online con más de 300 participantes gestionando 
                          una plataforma de aprendizaje virtual y proporcionando soporte técnico.
                        </p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <p className="text-gray-700">
                          Adquirí experiencia práctica en administración de plataformas, comunicación con usuarios 
                          y resolución de problemas en un entorno de formación real.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Volunteering Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Government Event */}
              <Card className="border-blue-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Voluntariado - Presupuesto Participativo
                        </h3>
                        <p className="text-blue-600 font-medium">
                          Universidad Autónoma de Yucatán
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Ene 2024
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1">•</span>
                          <p className="text-gray-700 text-sm">
                            Esfuerzos colaborativos que resultaron en 10,000 votos del público.
                          </p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-green-600 mt-1">•</span>
                          <p className="text-gray-700 text-sm">
                            Configuré y desplegué más de 100 dispositivos para pruebas eficientes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Coding Workshop */}
              <Card className="border-blue-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Instructora de Taller de Programación
                        </h3>
                        <p className="text-blue-600 font-medium">
                          FILEY
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Mar 2024
                        </span>
                      </div>
                  <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <p className="text-gray-700 text-sm">
                            Dirigí sesiones interactivas de programación para niños como parte de "The Hour of Code".
                          </p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-purple-600 mt-1">•</span>
                          <p className="text-gray-700 text-sm">
                            Introduje conceptos de programación mediante juegos educativos y actividades prácticas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Block-Based App Development */}
              <Card className="border-blue-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Líder de Actividad - Taller de Apps
                        </h3>
                        <p className="text-blue-600 font-medium">
                          FILEY
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Mar 2024
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <p className="text-gray-700 text-sm">
                            Facilité sesiones prácticas introduciendo conceptos de programación visual.
                          </p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-orange-600 mt-1">•</span>
                          <p className="text-gray-700 text-sm">
                            Ayudé a estudiantes a entender cómo funciona el código de manera visual y atractiva.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Workshop Assistant */}
              <Card className="border-blue-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          Asistente de Taller Técnico
                        </h3>
                        <p className="text-blue-600 font-medium">
                          Texas A&M University - UADY
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          May 2023
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <p className="text-gray-700 text-sm">
                            Asistí a 30 estudiantes visitantes durante actividades de pensamiento algorítmico.
                          </p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-teal-600 mt-1">•</span>
                          <p className="text-gray-700 text-sm">
                            Contribuí a una experiencia de aprendizaje más ágil y efectiva.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Habilidades Técnicas y Blandas
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                    Habilidades Técnicas
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Herramientas de Gestión:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">Moodle</Badge>
                        <Badge variant="outline" className="text-xs">Trello</Badge>
                        <Badge variant="outline" className="text-xs">Microsoft Office</Badge>
                        <Badge variant="outline" className="text-xs">Google Workspace</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Colaboración Virtual:</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">Zoom</Badge>
                        <Badge variant="outline" className="text-xs">Google Meet</Badge>
                        <Badge variant="outline" className="text-xs">Microsoft Teams</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    Habilidades Blandas
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-sm text-gray-700">Comunicación efectiva verbal y escrita</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-sm text-gray-700">Liderazgo y gestión de responsabilidades</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-sm text-gray-700">Manejo del tiempo y priorización</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-sm text-gray-700">Trabajo en equipo colaborativo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-sm text-gray-700">Atención al detalle y precisión</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MG</span>
              </div>
              <span className="font-semibold">Mariana González Canul</span>
            </div>
            <p className="text-gray-400">
              Ingeniera de Software | Gestora de Proyectos | Líder Tecnológica
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>mgonzalezcanul@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+52 987-100-8570</span>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-500">
                © 2024 Mariana González Canul. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}