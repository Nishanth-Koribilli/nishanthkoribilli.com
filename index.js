import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Koribilli Nooka Sai Nishanth</h1>
        <p className="text-lg">CSE Undergrad | AI Enthusiast | Web Developer | Ethical Hacker</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="mailto:nishanthkoribilli@gmail.com"><Mail /></a>
          <a href="https://github.com/Nishanth-Koribilli" target="_blank" rel="noopener noreferrer"><Github /></a>
          <a href="https://www.linkedin.com/in/nishanth-koribilli-335650278" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <Card>
          <CardContent className="p-4">
            <ul className="list-disc list-inside">
              <li>C, C++, Java, Python, HTML, CSS, JavaScript</li>
              <li>Web Development, Ethical Hacking</li>
              <li>Linux, Blender, TinkerCad, LaTeX, MS Office</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: 'Bus Tracking System',
              desc: 'Real-time GPS tracking for buses using mobile/web interface.'
            },
            {
              title: 'Intern Management Portal',
              desc: 'Digitized intern process using PHP, MySQL; deployed on AWS.'
            },
            {
              title: 'IIC Club Website',
              desc: 'Showcases initiatives and events of IIC club.'
            },
            {
              title: 'Home Automation System',
              desc: 'IoT-based smart home project using Tinkercad.'
            },
          ].map((proj, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="font-bold text-xl mb-2">{proj.title}</h3>
                <p>{proj.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <Card>
          <CardContent className="p-4 space-y-2">
            <p><strong>GVP College of Engineering</strong> – BTech CSE – CGPA: 8.9</p>
            <p><strong>Sasi New Gen Jr College</strong> – Intermediate – 96%</p>
            <p><strong>Sasi E.M High School</strong> – Secondary – 91%</p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center mt-12 text-sm opacity-60">
        © 2025 Koribilli Nooka Sai Nishanth
      </footer>
    </div>
  );
}
