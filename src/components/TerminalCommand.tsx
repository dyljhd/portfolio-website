import { useState } from 'react';

import {
  ArrowRightIcon,
  BackwardIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ForwardIcon,
  IdentificationIcon,
  RocketLaunchIcon,
  VideoCameraIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { ITerminalCommandLineGroup } from '@/types';

import { cvFile, winkingWithTongueFaceImage } from '@/assets';

import { TerminalIcon } from './TerminalIcon';
import { TerminalLine } from './TerminalLine';
import { TerminalLineGroup } from './TerminalLineGroup';
import { TerminalTag, TerminalTagContainer } from './TerminalTag';

interface ITerminalCommandProps {
  group: ITerminalCommandLineGroup;
}

export const TerminalCommand = ({ group }: ITerminalCommandProps) => {
  const {
    name,
    filePath,
    command,
    argument,
    metadata: { shouldShowCommand },
  } = group;

  const [showHints, setShowHints] = useState(false);

  return (
    <TerminalLineGroup
      filePath={filePath}
      command={command}
      argument={argument}
      shouldShowCommand={shouldShowCommand}
    >
      {name === 'ABOUT' && (
        <>
          <TerminalLine>
            Hello, I'm Dylan Delorie - a 22-year-old from England currently
            residing in Northampton. I've been immersed in the world of
            programming since the age of 12 and have been exploring web
            development for nearly two years now.
          </TerminalLine>
          <TerminalLine>
            With a genuine enthusiasm for full-stack and frontend web
            development, I'm excited about the possibilities that lie ahead in
            expanding my skill set.
          </TerminalLine>
          <TerminalLine>
            Beyond coding, I find pleasure in diverse activities from building
            computers, go-karting, enjoying video games, participating in
            various sports, and simply appreciating the outdoors. Join me as I
            navigate the evolving tech landscape and share a glimpse into my
            varied interests.
          </TerminalLine>
        </>
      )}
      {name === 'EXPERIENCE' && (
        <>
          <figure className="flex flex-col gap-5">
            <TerminalLine as="figcaption">
              This section provides a concise overview of my extensive
              professional experience within the web development industry over
              the years:
            </TerminalLine>
            <ul className="flex flex-col gap-5">
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  Davies Group (DTS) - Frontend Web Developer (April 2022 -
                  Present)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>NextJS</TerminalTag>
                  <TerminalTag>React</TerminalTag>
                  <TerminalTag>Typescript</TerminalTag>
                  <TerminalTag>Javascript</TerminalTag>
                  <TerminalTag>NodeJS</TerminalTag>
                  <TerminalTag>MySQL</TerminalTag>
                  <TerminalTag>Legacy React/Angular</TerminalTag>
                  <TerminalTag>Azure/Jira</TerminalTag>
                  <TerminalTag>AWS</TerminalTag>
                  <TerminalTag>Figma</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  In my inaugural position within a corporate setting, I
                  commenced my professional journey with Contact Partners, a
                  smaller firm specializing in crafting solutions for banks
                  across the United Kingdom to enhance effective communication
                  with their clientele. Subsequently, the company underwent
                  acquisition by the Davies Group (DTS), leading to our
                  integration into a larger, collaborative team. While retaining
                  our legacy applications, this transition provided ample
                  opportunities to engage in contemporary projects.
                </TerminalLine>
                <TerminalLine>
                  Throughout my tenure, I have actively participated in numerous
                  projects, primarily utilizing foundational libraries such as
                  React, albeit with diverse package implementations.
                  Additionally, I assumed responsibility for maintaining legacy
                  products employing class-based React and earlier versions of
                  Angular.
                </TerminalLine>
                <TerminalLine>
                  One noteworthy project involved spearheading the frontend
                  development of a white- label system managing client orders
                  for renowned global beverage brands, spanning nearly a year.
                  The extensive frontend tech stack encompassed NX, NextJS,
                  React, MUI, React Query, React Hook Form, React-i18n, among
                  others. The project featured intricate functionalities,
                  including region selection, product catalogue viewing, cart
                  management, checkout processes, order and address management,
                  user administration, and comprehensive administrative
                  oversight. Working collaboratively within a team comprising a
                  project manager, business analysts, lead developers, and 5-10
                  frontend developers/contractors, I made substantial
                  contributions across various aspects of the system.
                </TerminalLine>
                <TerminalLine>
                  Notably, I played a pivotal role in leading the development of
                  the address management section, a responsibility entrusted to
                  me by the lead developer. My leadership involved overseeing a
                  team of senior developers and contractors, delegating tasks,
                  monitoring progress in team meetings, addressing queries, and
                  maintaining effective communication with lead developers and
                  the project manager, employing tools such as Excel
                  spreadsheets. The successful and timely completion of this
                  section, with minimal defects, was a source of personal pride,
                  fostering a desire to lead teams in future endeavors.
                </TerminalLine>
                <TerminalLine>
                  During the recent bug phase of the project, I emerged as a key
                  contributor, consistently delivering prompt bug fixes. A
                  notable achievement involved resolving a critical issue that
                  rendered the entire application nonfunctional exclusively on
                  the Safari browser. Collaborating with both frontend and
                  backend senior developers, I identified a unique challenge
                  related to the Content-Encoding response header, specifically
                  in Safari's strict interpretation compared to other browsers.
                  My logical problem-solving approach and dedication were
                  instrumental in uncovering a solution that not only rectified
                  the issue but showcased my ability to navigate complex
                  challenges effectively.
                </TerminalLine>
                <TerminalLine>
                  My experience at the Davies Group has been an enriching
                  learning expedition in the commercial realm of web
                  development. Eagerly anticipating many more years of growth
                  and contribution to this dynamic industry, I remain deeply
                  passionate about my work in web development.
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  Deskbooker - Full-Stack Web Developer (September 2021 - April
                  2022)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>React</TerminalTag>
                  <TerminalTag>Javascript</TerminalTag>
                  <TerminalTag>TailwindCSS</TerminalTag>
                  <TerminalTag>HTML Canvas (Konva)</TerminalTag>
                  <TerminalTag>NodeJS</TerminalTag>
                  <TerminalTag>Express</TerminalTag>
                  <TerminalTag>MySQL</TerminalTag>
                  <TerminalTag>ORM</TerminalTag>
                  <TerminalTag>Netlify</TerminalTag>
                  <TerminalTag>Heroku</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  I was presented with an unconventional opportunity through a
                  familial connection and his business partner to transform a
                  desk booking software specification into reality, despite
                  lacking any prior experience in web development.
                </TerminalLine>
                <TerminalLine>
                  Undoubtedly, this undertaking was a significant challenge for
                  someone in my position. Undeterred, I embraced the challenge
                  wholeheartedly, resigning from my role as a Maintenance
                  Technician for BMW MINI to dedicate myself fully to this
                  endeavor, fueled by a profound passion for exploring a career
                  in programming.
                </TerminalLine>
                <TerminalLine>
                  To equip myself for the task at hand, I immersed myself in
                  various courses and tutorials, acquiring proficiency in the
                  latest web development technologies. The chosen stack
                  comprised React and TailwindCSS on the frontend, complemented
                  by NodeJS, Express, and MySQL (with an ORM) on the backend. My
                  selection was guided by a balance of beginner-friendly
                  attributes and the stack's inherent power and scalability.
                </TerminalLine>
                <TerminalLine>
                  Methodically approaching the project, I meticulously analyzed
                  the specification, formulated a strategic plan, organized the
                  initial workload into manageable sprints, and crafted
                  preliminary designs. The journey was marked by substantial
                  progress intertwined with formidable challenges, yet I
                  maintained a positive mindset, successfully navigating through
                  the highs and lows.
                </TerminalLine>
                <TerminalLine>
                  Operating under stringent timelines, I maintained consistent
                  communication with management, providing updates on progress
                  and addressing any concerns that arose during the development
                  process.
                </TerminalLine>
                <TerminalLine>
                  Upon reaching the BETA release milestone, I actively engaged
                  in client discussions, presenting the product alongside
                  management, and incorporating feedback and change requests to
                  enhance its functionality.
                </TerminalLine>
                <TerminalLine>
                  In summation, the project achieved success, attracting
                  multiple clients. Regrettably, the venture had to be
                  discontinued recently due to funding constraints. From my
                  perspective, this experience was an invaluable opportunity
                  that facilitated tremendous personal and professional growth.
                  Undertaking significant responsibility, effectively
                  communicating, and serving as the sole developer, I
                  successfully transformed a basic specification into a
                  fully-functional, production-ready application. I take immense
                  pride in this achievement, considering it a testament to my
                  dedication and capabilities.
                </TerminalLine>
              </li>
            </ul>
          </figure>
        </>
      )}
      {name === 'PROJECTS' && (
        <>
          <figure className="flex flex-col gap-5">
            <TerminalLine as="figcaption">
              Presented here is a concise overview of my primary coding
              projects, showcasing the breadth and depth of my experience
              accumulated over the years:
            </TerminalLine>
            <ul className="flex flex-col gap-5">
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  CodinGame Fall (2023)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>Typescript</TerminalTag>
                  <TerminalTag>Algorithms</TerminalTag>
                  <TerminalTag>Strategy</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  Building on my experience from a prior participation in
                  CodinGame during the Spring, I decided to engage in the latest
                  challenge. The objective of the game was to navigate and
                  control two drones within an underwater environment. The task
                  involved scanning various fish of differing values swimming in
                  the environment, with the primary goal being to efficiently
                  scan and transport them to the water's surface ahead of the
                  opponent. The complexity increased with challenges such as
                  pushing fish out of the environment to render them
                  un-scannable and the presence of deep-sea monsters capable of
                  capturing drones, resulting in the loss of all scanned fish.
                  In response to these challenges, I devised an algorithm that
                  strategically navigated through key locations to maximize fish
                  scanning while avoiding deep-sea creatures. The algorithm
                  dynamically tracked enemy movements and scores, enabling
                  adaptive decision-making to secure victory in each match. The
                  outcome was highly satisfactory, achieving a ranking of 583rd
                  out of 4,669 global competitors and securing the 4th position
                  among 117 participants in the UK.
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  My Portfolio Website (2023)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>React</TerminalTag>
                  <TerminalTag>Typescript</TerminalTag>
                  <TerminalTag>Tailwind</TerminalTag>
                  <TerminalTag>Vite</TerminalTag>
                  <TerminalTag>Netlify</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  What you are seeing right here - a purposefully crafted
                  platform designed to demonstrate my adept skills in web
                  development. This site has been meticulously designed to
                  deliver a compelling, informative, functional, and accessible
                  user experience, allowing visitors to gain insights into my
                  professional background and capabilities.
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  NextJS Discord Clone (2023)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>NextJS</TerminalTag>
                  <TerminalTag>React</TerminalTag>
                  <TerminalTag>Typescript</TerminalTag>
                  <TerminalTag>Socket.io</TerminalTag>
                  <TerminalTag>Prisma</TerminalTag>
                  <TerminalTag>TailwindCSS</TerminalTag>
                  <TerminalTag>Shadcn</TerminalTag>
                  <TerminalTag>MySQL</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  I am enthusiastic about delving into NextJS, and the ongoing
                  project I am undertaking serves as an optimal initiation.
                  Within this endeavor, I am meticulously constructing a
                  visually appealing and fully-functional Discord clone,
                  incorporating an array of features. These features encompass
                  server settings, user roles, server/direct messaging, video
                  calling, database integration, user authentication, and image
                  handling, among others. This undertaking has presented a
                  substantial learning curve across various domains. However, I
                  am approaching it methodically, ensuring comprehensive
                  understanding before progressing to subsequent sections. Above
                  all, I find great enjoyment in this learning journey.
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  My First NPM Package (2023)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>NPM</TerminalTag>
                  <TerminalTag>Typescript</TerminalTag>
                  <TerminalTag>React Testing Library</TerminalTag>
                  <TerminalTag>Project Configuration</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  I successfully developed my inaugural NPM package in response
                  to a workplace bug. The issue was traced back to an
                  implementation utilizing React's useEffect hook, where the
                  triggering dependencies were unclear. Extensive online
                  research led me to a debugging concept for the useEffect hook
                  that proved instrumental in resolving the bug. Recognizing its
                  broader utility, I transformed the debugging code into a
                  comprehensive package. This package, thoroughly refined and
                  enhanced, includes additional features and has undergone
                  rigorous testing with React Testing Library. It is now
                  available on NPM for wider use, providing a reliable solution
                  for troubleshooting issues with the useEffect hook.
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  CodinGame Spring (2023)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>Typescript</TerminalTag>
                  <TerminalTag>Algorithms</TerminalTag>
                  <TerminalTag>Breadth First Search</TerminalTag>
                  <TerminalTag>Strategy</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  During a period of engagement with AlgoExpert, a work
                  colleague recommended a coding game that immediately captured
                  my interest. The objective of the game was to engage in
                  strategic battles against an AI and fellow participants,
                  capturing resources from objectives strategically placed
                  across a dynamic map. The complexity of the game increased
                  with each progression through the leagues, introducing
                  additional challenges that demanded constant strategy updates.
                  In response, I implemented a Breadth-First Search (BFS)
                  algorithm in TypeScript to determine the most efficient paths
                  to map objectives. This algorithm allowed me to prioritize
                  objectives based on real-time game factors and opponents'
                  positions on the map. The experience was both enjoyable and
                  intellectually stimulating, offering valuable insights into
                  algorithmic problem-solving. Achieving a commendable 1,611th
                  place out of 5,290 participants in my inaugural foray into
                  algorithmic challenges was a source of pride.
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  AlgoExpert (2023 - Present)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>Web Development</TerminalTag>
                  <TerminalTag>Programming Principles/Concepts</TerminalTag>
                  <TerminalTag>Algorithms</TerminalTag>
                  <TerminalTag>Big O Notation</TerminalTag>
                  <TerminalTag>Coding Problems/Questions</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  This year, I enrolled in AlgoExpert to partake in both the
                  AlgoExpert and FrontendExpert courses. The AlgoExpert course
                  provided an enlightening video tutorial series on data
                  structures, offering a profound understanding of the
                  intricacies of computer systems. The course explored various
                  data structures and principles, delving into their application
                  and evaluating their performance in terms of space and time
                  complexity. Additionally, the course included a comprehensive
                  set of 200+ coding questions, which I am actively engaging
                  with - a journey that continues to present challenges and
                  opportunities for growth. In parallel, the FrontendExpert
                  course covered foundational aspects of website development,
                  encompassing HTML, CSS, JavaScript, and React, among other
                  essential components.
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  React Native E-commerce App (2022)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>React Native</TerminalTag>
                  <TerminalTag>App Development</TerminalTag>
                  <TerminalTag>Expo</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  My perception of React was initially confined to its
                  application in web development, but my perspective broadened
                  significantly upon discovering its versatility across various
                  platforms. Notably, React's capabilities extend to the
                  creation of desktop applications through Electron and mobile
                  applications via React Native. Intrigued by these
                  possibilities, I transitioned from prior experience in desktop
                  applications with Python to immerse myself in app development.
                  I invested in a course by Programming with Mosh, which guided
                  me through the process of constructing a streamlined
                  e-commerce application using Expo. The application featured
                  user accounts, account settings, product management, product
                  viewing, direct messaging, push notifications, and more. While
                  the application was relatively straightforward, it provided
                  invaluable exposure to the nuances and distinctions inherent
                  in developing React applications across diverse platforms.
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  React Applications (2021)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>React</TerminalTag>
                  <TerminalTag>Web Development</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  This period coincided with my commencement at Deskbooker,
                  where I undertook the role of the sole developer tasked with
                  constructing a desk booking software (details provided in the
                  work experience section). Before embarking on this significant
                  project, I dedicated time to crafting several rudimentary
                  React applications, including a to-do app and a quiz app.
                  These endeavors served both as a practice ground for
                  consolidating my newly acquired knowledge and as a precursor
                  to priming myself for the larger-scale project that lay ahead.
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  Python Tkinter Applications (2019-2020)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>Python</TerminalTag>
                  <TerminalTag>Tkinter</TerminalTag>
                  <TerminalTag>Software Development</TerminalTag>
                  <TerminalTag>Game Development</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  During my tenure as a maintenance technician apprentice at BMW
                  MINI, I developed a diverse array of Python UI applications to
                  complement my professional growth. In an effort to transcend
                  terminal-based applications, I embraced Tkinter, a GUI library
                  integrated into Python, enabling the creation of visually
                  appealing and functional graphical user interfaces, albeit
                  with a touch of Windows 96' aesthetics. This marked the
                  genesis of my keen interest in UI design and UX
                  considerations. Among the applications I crafted were a
                  weather forecast checker, a rock-paper-scissors game, and a
                  calendar, each contributing to an exciting phase of
                  transitioning from terminal-bound coding to witnessing the
                  manifestation of my Python code in dynamic, graphical
                  interfaces. This shift not only liberated me from certain
                  limitations but also fueled a surge of creativity in my
                  development endeavors.
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  Python Terminal Applications (2016-2018)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>Python</TerminalTag>
                  <TerminalTag>Terminal</TerminalTag>
                  <TerminalTag>Software Development</TerminalTag>
                  <TerminalTag>Game Development</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  During the latter part of my secondary school education, I
                  engaged in the development of a variety of Python terminal
                  applications and games, a pursuit cultivated through advanced
                  computer science coursework. This period was marked by the
                  creation of both practical applications and entertaining
                  games, including an adventure game, calculator, hangman, and a
                  contact book, all confined within the terminal environment.
                  Python served as an ideal first programming language for me
                  due to its versatility, conciseness, and readability,
                  providing a solid foundation for my early coding experiences.
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  Scratch Games (2013-2015)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>Scratch</TerminalTag>
                  <TerminalTag>Game Development</TerminalTag>
                  <TerminalTag>Animations</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  During the initial phase of my secondary school education, I
                  cultivated my programming skills by creating a variety of
                  games using Scratch - a platform introduced in ICT lessons. I
                  found immense enjoyment in crafting small games and animations
                  through the intuitive block programming structure that Scratch
                  offers. Its simplicity and ease of understanding not only made
                  the learning process engaging but also encouraged continuous
                  exploration. This initial exposure to programming marked the
                  beginning of my journey in the field, laying a solid
                  foundation for my subsequent endeavors in the world of
                  software development.
                </TerminalLine>
              </li>
            </ul>
          </figure>
        </>
      )}
      {name === 'GOALS' && (
        <>
          <figure className="flex flex-col gap-1.5">
            <TerminalLine as="figcaption">
              I am committed to advancing my career by strategically pursuing
              the following objectives over the next few years:
            </TerminalLine>
            <ol className="flex flex-col gap-1">
              <TerminalLine as="li">
                1. Enhance proficiency and mastery in core technologies,
                including React, TypeScript, JavaScript, and NodeJS.
              </TerminalLine>
              <TerminalLine as="li">
                2. Investigate and integrate emerging technologies such as
                NextJS, Electron, and React Native into my skill set.
              </TerminalLine>
              <TerminalLine as="li">
                3. Aspire to attain a senior developer status and corresponding
                pay-grade, with the goal of assuming a leadership role as a key
                contributor on pivotal company projects.
              </TerminalLine>
              <TerminalLine as="li">
                4. Sustain an unwavering passion for continuous learning,
                ensuring a dynamic and up-to-date knowledge base in web
                development and programming.
              </TerminalLine>
              <TerminalLine as="li">
                5. Contribute meaningfully to the developer community by
                creating solutions that address industry challenges, providing
                intuitive and efficient tools accessible to a broad audience.
              </TerminalLine>
            </ol>
          </figure>
        </>
      )}
      {name === 'CV' && (
        <TerminalLine>
          View my CV by clicking&nbsp;
          <a href={cvFile} target="_blank">
            <u>here</u>
          </a>
          !
        </TerminalLine>
      )}
      {name === 'CONTACT' && (
        <figure className="flex flex-col gap-1.5">
          <TerminalLine as="figcaption">
            You can get in contact with me using the following methods outlined
            below:
          </TerminalLine>
          <ul className="flex flex-col gap-0.5">
            <li>
              <TerminalLine>
                Email Address:&nbsp;
                <a href="mailto:dylandeloriejobs@gmail.com">
                  <u>dylandeloriejobs@gmail.com</u>
                </a>
              </TerminalLine>
            </li>
            <li>
              <TerminalLine>
                Phone Number:&nbsp;
                <a href="tel:+447584851216">
                  <u>+447584851216</u>
                </a>
              </TerminalLine>
            </li>
            <li>
              <TerminalLine>
                LinkedIn:&nbsp;
                <a href="https://linkedin.com/in/dylandelorie" target="_blank">
                  <u>dylandelorie</u>
                </a>
              </TerminalLine>
            </li>
            <li>
              <TerminalLine>
                Github:&nbsp;
                <a href="https://github.com/dyljhd" target="_blank">
                  <u>dyljhd</u>
                </a>
              </TerminalLine>
            </li>
          </ul>
        </figure>
      )}
      {name === 'HELP' && (
        <>
          <TerminalLine>
            Welcome to a unique and interactive experience! This portfolio
            website takes inspiration from the aesthetic of the Windows command
            prompt terminal, often depicted in movies to showcase expert hacking
            scenes - minus the Hollywood dramatization, of course.
          </TerminalLine>
          <figure className="flex flex-col gap-1.5">
            <TerminalLine as="figcaption">
              Feel free to explore more about me by entering commands in this
              terminal-like interface:
            </TerminalLine>
            <ul className="flex flex-col gap-1">
              <TerminalLine as="li">about - learn more about me</TerminalLine>
              <TerminalLine as="li">
                experience - explore my work history
              </TerminalLine>
              <TerminalLine as="li">
                projects - discover details about my personal projects
              </TerminalLine>
              <TerminalLine as="li">
                goals - understand my career aspirations
              </TerminalLine>
              <TerminalLine as="li">
                cv - access my Curriculum Vitae
              </TerminalLine>
              <TerminalLine as="li">
                contact - find various ways to reach out, especially with that
                enticing job offer!
                <TerminalIcon src={winkingWithTongueFaceImage} size="SMALL" />
              </TerminalLine>
            </ul>
          </figure>
          <figure className="flex flex-col gap-1.5">
            <TerminalLine as="figcaption">
              Also, I've incorporated a few additional commands:
            </TerminalLine>
            <ul className="flex flex-col gap-1">
              <TerminalLine as="li">
                clear - wipe the entire terminal (be cautious, as this action is
                irreversible)
              </TerminalLine>
              <TerminalLine as="li">
                help - get the same information as displayed here
              </TerminalLine>
            </ul>
          </figure>
          <TerminalLine>
            When using commands, adhere to the syntax &lt;COMMAND&gt;
            &lt;ARGUMENT&gt;, for instance, foo bar, where foo is the command,
            and bar is the argument.
          </TerminalLine>
          <TerminalLine>
            But that's not all! Elevating the experience, there are achievements
            and easter eggs waiting to be discovered. Type `helloworld` to
            unlock your first easter egg! Keep an eye on the counters in the
            terminal header to track your progress. I'll let you uncover the
            rest. Happy hunting!
          </TerminalLine>
          <button
            onClick={() => setShowHints((prev) => !prev)}
            className="font-console font-medium flex items-center gap-0.5 text-xs border-2 border-green-700 text-gray-900 bg-green-400 hover:bg-green-500 rounded-md p-1.5 w-max focus:outline-dashed outline-offset-2 outline-2 outline-green-700"
            aria-label={`${
              showHints ? 'Hide' : 'Show'
            } easter egg and achievement hints`}
          >
            {showHints ? 'Hide' : 'Show'} hints&nbsp;
            {showHints ? (
              <ChevronUpIcon className="h-5 w-5" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" />
            )}
          </button>
          {showHints && (
            <figure
              className="flex flex-col gap-1.5"
              aria-live="polite"
              aria-atomic={true}
            >
              <TerminalLine as="figcaption">
                In response to your insatiable curiosity for easter eggs and
                achievements, here are the clues that will guide you through the
                captivating journey of discovery:
              </TerminalLine>
              <ol className="flex flex-col gap-1.5">
                <TerminalLine as="li" aria-label="Hint #1: Close">
                  1: <XMarkIcon className="inline-block h-6 w-6" /> (EASY)
                </TerminalLine>
                <TerminalLine as="li" aria-label="Hint #2: Animation">
                  2: <VideoCameraIcon className="inline-block h-6 w-6" /> (EASY)
                </TerminalLine>
                <TerminalLine as="li" aria-label="Hint #3: Going up!">
                  3: <RocketLaunchIcon className="inline-block h-6 w-6" />{' '}
                  (MEDIUM)
                </TerminalLine>
                <TerminalLine as="li" aria-label="Hint #4: All tasks completed">
                  4: <CheckCircleIcon className="inline-block h-6 w-6" />{' '}
                  (MEDIUM)
                </TerminalLine>
                <TerminalLine as="li" aria-label="Hint #5: Changing name">
                  5: <IdentificationIcon className="inline-block h-6 w-6" />
                  <ArrowRightIcon className="inline-block h-6 w-6 ml-1" />
                  <IdentificationIcon className="inline-block h-6 w-6 ml-1" />{' '}
                  (HARD)
                </TerminalLine>
                <TerminalLine
                  as="li"
                  aria-label="Hint #6: Going backwards and forwards"
                >
                  6: <BackwardIcon className="inline-block h-6 w-6" />
                  <ForwardIcon className="inline-block h-6 w-6 ml-1" /> (HARD)
                </TerminalLine>
              </ol>
            </figure>
          )}
        </>
      )}
      {name === 'NOT_RECOGNIZED' && (
        <TerminalLine animation="RED">
          This command was not recognized!
        </TerminalLine>
      )}
    </TerminalLineGroup>
  );
};
