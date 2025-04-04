'use client';

import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const AboutPage = () => {
    const [backgroundRef, backgroundInView] = useInView({ threshold: 0.2 });
    const [interestsRef, interestsInView] = useInView({ threshold: 0.2 });
    const [skillsRef, skillsInView] = useInView({ threshold: 0.2 });
    const [resumeRef, resumeInView] = useInView({ threshold: 0.2 });

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            {/* Navigation for desktop */}
            <nav className="hidden md:block sticky top-20 float-right w-48 ml-8">
                <ul className="space-y-4">
                    <li>
                        <Link
                            href="#background"
                            className={`block p-2 rounded transition-colors ${backgroundInView ? 'bg-accent text-accent-foreground' : ''
                                }`}
                        >
                            Background
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#interests"
                            className={`block p-2 rounded transition-colors ${interestsInView ? 'bg-accent text-accent-foreground' : ''
                                }`}
                        >
                            Interests
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#skills"
                            className={`block p-2 rounded transition-colors ${skillsInView ? 'bg-accent text-accent-foreground' : ''
                                }`}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#resume"
                            className={`block p-2 rounded transition-colors ${resumeInView ? 'bg-accent text-accent-foreground' : ''
                                }`}
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Main content */}
            <div className="max-w-3xl">
                <section
                    id="background"
                    ref={backgroundRef}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold mb-6">Background</h2>
                    <div className="prose dark:prose-invert">
                        <p>
                            I&apos;m Weston Cadena, a Computer Science and Engineering enthusiast with a strong focus on high-performance computing,
                            machine learning, and cutting-edge software development. Currently pursuing my Master&apos;s in Computer Science at Texas A&M University,
                            I&apos;ve had the opportunity to work with national laboratories like Lawrence Livermore and Los Alamos,
                            where I&apos;ve contributed to cutting-edge research and development in supercomputing environments.
                        </p>
                        <p>
                            My academic journey has been marked by a strong GPA of 3.97, with coursework focusing on Deep Learning,
                            Parallel Computing, Machine Learning, and Computer Architecture. Beyond my technical skills,
                            I value collaboration, problem-solving, and continuous learning.
                        </p>
                    </div>
                </section>

                <section
                    id="interests"
                    ref={interestsRef}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold mb-6">Personal Interests</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-accent p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">Adventure & Exploration</h3>
                            <ul className="space-y-2 list-disc pl-5">
                                <li>Avid traveler who has visited over 20 countries, seeking authentic cultural experiences</li>
                                <li>Passionate about pure, raw adventure and exploring the unknown</li>
                                <li>PADI (scuba) certified and currently working on skydiving licenses</li>
                            </ul>
                        </div>

                        <div className="bg-accent p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-3">Outdoor Activities</h3>
                            <ul className="space-y-2 list-disc pl-5">
                                <li>Enthusiastic fisherman who enjoys the peace and challenge of the sport</li>
                                <li>Marathon runner with 4 completed races and a personal best of 3 hours and 20 minutes</li>
                                <li>Maintain a koi pond and care for a beta fish imported from Thailand</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section
                    id="skills"
                    ref={skillsRef}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold mb-6">Skills</h2>

                    <div className="space-y-8">
                        {/* Programming Languages */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">C++</div>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">Python</div>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">JavaScript/TypeScript</div>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">SQL</div>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">HTML/CSS</div>
                                </div>
                            </div>
                        </div>

                        {/* Web Technologies */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Web Technologies</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">React</div>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">Next.js</div>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">Node.js</div>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">TailwindCSS</div>
                                </div>
                            </div>
                        </div>

                        {/* Tools & Technologies */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">Git</div>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">Linux</div>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">MPI</div>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">NumPy</div>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">Docker/Buildah</div>
                                </div>
                            </div>
                        </div>

                        {/* Core CS Knowledge */}
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Core Computer Science</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">High Performance Computing</div>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">Machine Learning</div>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">Parallel Computing</div>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">Computer Architecture</div>
                                </div>
                                <div className="flex items-center space-x-2 bg-accent p-3 rounded-lg">
                                    <div className="font-medium">Algorithms & Data Structures</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="resume"
                    ref={resumeRef}
                    className="mb-16"
                >
                    <h2 className="text-2xl font-bold mb-6">Resume</h2>

                    {/* Resume Preview */}
                    <div className="mb-8 aspect-[8.5/11] w-full">
                        <iframe
                            src="/Weston-Cadena-Resume.pdf#view=FitH"
                            className="h-full w-full rounded-lg border border-border min-h-[500px] md:min-h-[1056px]"
                            title="Resume Preview"
                        />
                    </div>

                    {/* Download Options */}
                    <div className="flex gap-4">
                        <Button onClick={() => window.open('/Weston-Cadena-Resume.pdf', '_blank')}>
                            <FileText className="mr-2 h-4 w-4" />
                            View Full Resume
                        </Button>

                        <Button variant="outline" asChild>
                            <a href="/Weston-Cadena-Resume.pdf" download="WestonCadena_Resume.pdf">
                                <Download className="mr-2 h-4 w-4" />
                                Download PDF
                            </a>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage; 