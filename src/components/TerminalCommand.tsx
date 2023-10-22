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
            Hi, my name is Dylan Delorie. I am from England, and reside in
            Northampton at the moment.
          </TerminalLine>
          <TerminalLine>
            I am 22 years old, have been programming ever since I was 12 years
            old, and been doing web development coming up to 2 years now.
          </TerminalLine>
          <TerminalLine>
            I have a massive passion for full-stack/frontend web development,
            and hope to branch out into more variety in the future.
          </TerminalLine>
          <TerminalLine>
            I enjoy programming (of course!), building computers, go-karting,
            video games, a variety of sports, and being in the outdoors.
          </TerminalLine>
        </>
      )}
      {name === 'EXPERIENCE' && (
        <>
          <figure className="flex flex-col gap-5">
            <TerminalLine as="figcaption">
              This contains a brief overview of all of my work experience in
              this industry throughout the years:
            </TerminalLine>
            <ul className="flex flex-col gap-5">
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  Davies Group (DTS) - Full-Stack Web Developer (April 2022 -
                  Present)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>Full-Stack</TerminalTag>
                  <TerminalTag>Commercial</TerminalTag>
                  <TerminalTag>Teamwork</TerminalTag>
                  <TerminalTag>AGILE</TerminalTag>
                  <TerminalTag>UI/UX</TerminalTag>
                  <TerminalTag>Design</TerminalTag>
                  <TerminalTag>Mobile Responsive</TerminalTag>
                  <TerminalTag>Azure</TerminalTag>
                  <TerminalTag>Jira</TerminalTag>
                  <TerminalTag>AWS</TerminalTag>
                  <TerminalTag>Figma</TerminalTag>
                  <TerminalTag>NextJS</TerminalTag>
                  <TerminalTag>React</TerminalTag>
                  <TerminalTag>Typescript</TerminalTag>
                  <TerminalTag>Javascript</TerminalTag>
                  <TerminalTag>Redux</TerminalTag>
                  <TerminalTag>NX</TerminalTag>
                  <TerminalTag>MUI</TerminalTag>
                  <TerminalTag>React Query</TerminalTag>
                  <TerminalTag>React Hook Form</TerminalTag>
                  <TerminalTag>React-i18</TerminalTag>
                  <TerminalTag>NodeJS</TerminalTag>
                  <TerminalTag>REST</TerminalTag>
                  <TerminalTag>ORMs</TerminalTag>
                  <TerminalTag>MySQL</TerminalTag>
                  <TerminalTag>Legacy React/Angular</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  This is my first job as part of a commercial company. I
                  started for a smaller company named Contact Partners that
                  created solutions for banks across the UK to communicate
                  effectively with their customers. This company was bought by
                  the Davies Group (DTS) and we merged into a larger team. We
                  kept hold of all of our legacy applications, but also had many
                  more opportunities with newer and more up-to-date projects.
                </TerminalLine>
                <TerminalLine>
                  I have worked across a fair few projects at the company now
                  with the majority utilizing the same base libraries such as
                  React but using different packages, so have been exposed to a
                  fair amount of them at this point. Also, I have been involved
                  in maintaining our legacy products which utilize class-based
                  React and Angular legacy versions.
                </TerminalLine>
                <TerminalLine>
                  The most recent project has been working, for nearly a year
                  now, on the frontend of a white-label system that handles
                  client's orders for massive drinks brands across the world.
                  The frontend tech stack includes NX, NextJS, React, MUI, React
                  Query, React Hook Form, React-i18n etc. It has many different
                  complex aspects such as region selection, viewing products in
                  catalogues, a cart, a checkout, order management, address
                  management, user management, admin management for all of these
                  areas, and much more. I worked as part of a team of a project
                  manager, business analysts, lead developers, and about 5-10
                  frontend developers/contractors.
                </TerminalLine>
                <TerminalLine>
                  I have been a massive contribution to the team and the project
                  as a whole. I was heavily involved in many of the main aspects
                  of the system such as the catalogues, cart, checkout, address
                  management, and navigation, moving between them very
                  frequently.
                </TerminalLine>
                <TerminalLine>
                  The most notable aspect that I was involved in was leading the
                  development of the address management section. I was selected
                  and trusted by my lead developer on the project to take on
                  this role. I was leading a team of a few senior developers and
                  contractors by delegating work items, keeping up-to-date with
                  progress on these items in team meetings, assisting with any
                  queries or concerns from my team, and communicating all of
                  this back to my lead developers and project manager by
                  utilizing Excel spreadsheets. This section of the application
                  was built in a great time-frame with minimal bugs or issues. I
                  was proud of my performance whilst undertaking this task and
                  would love to lead a team again in the future.
                </TerminalLine>
                <TerminalLine>
                  I have been a massive contribution to the latest bug phase of
                  the project, having a quick and consistent output on bugfixes.
                  The most notable bugfix I solved was an issue with our entire
                  application not working on only the Safari browser. This was a
                  very evident problem to the client and needed to be fixed
                  ASAP. It had already been looked at by the senior developers
                  on the frontend and backend to no avail, and I volunteered to
                  give it a go. This bug would seem to occur as a result of all
                  of our API requests that contained a data response not seeming
                  to have been decoded correctly. This led to an error state
                  being displayed around the majority of the application as a
                  result of the data not aligning with our expected DTOs,
                  rendering the entire application unusable on Safari. I found
                  that the API was applying a `Content-Encoding` response header
                  of `gzip, gzip`. As a result of this header being involved in
                  the browser's process of decoding the data, which seemed to be
                  the issue at hand, it was a good lead. After some further
                  research, I found that this header should have just been set
                  to `gzip`, and that Safari was a lot stricter on this header
                  compared to other browsers. As a result, lenient browsers
                  ignored the syntax error and decoded the data using the `gzip`
                  method, but Safari would ignore the header entirely and not
                  decode the data. This is what ended up being the cause of the
                  issue. This showcased my logical problem solving ability and
                  dedication to find a solution. It was an awesome feeling when
                  everything just started working on Safari, and I knew that was
                  because of a solution that I found!
                </TerminalLine>
                <TerminalLine>
                  My time as the Davies Group, has been a massive learning
                  experience in the commercial world of web development, and I
                  hope for many more years to come in this industry. I
                  thoroughly enjoy it!
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  Deskbooker - Full-Stack Web Developer (September 2021 - April
                  2022)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>Full-Stack</TerminalTag>
                  <TerminalTag>Startup</TerminalTag>
                  <TerminalTag>Sole Developer</TerminalTag>
                  <TerminalTag>AGILE</TerminalTag>
                  <TerminalTag>UI/UX</TerminalTag>
                  <TerminalTag>Design</TerminalTag>
                  <TerminalTag>Project Management</TerminalTag>
                  <TerminalTag>Presenting</TerminalTag>
                  <TerminalTag>CRUD</TerminalTag>
                  <TerminalTag>Mobile Responsive</TerminalTag>
                  <TerminalTag>User Roles</TerminalTag>
                  <TerminalTag>User Authentication</TerminalTag>
                  <TerminalTag>User Sessions</TerminalTag>
                  <TerminalTag>Date/Time Handling</TerminalTag>
                  <TerminalTag>React</TerminalTag>
                  <TerminalTag>Javascript</TerminalTag>
                  <TerminalTag>TailwindCSS</TerminalTag>
                  <TerminalTag>HTML Canvas</TerminalTag>
                  <TerminalTag>NodeJS</TerminalTag>
                  <TerminalTag>Express</TerminalTag>
                  <TerminalTag>MySQL</TerminalTag>
                  <TerminalTag>ORMs</TerminalTag>
                  <TerminalTag>Netlify</TerminalTag>
                  <TerminalTag>Heroku</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  I was given the unconventional opportunity, by a family member
                  (and his business partner), to bring a desk booking software
                  specification to life with no previous web development
                  experience.
                </TerminalLine>
                <TerminalLine>
                  As it already sounds, this was a monumental task for someone
                  in that scenario, but I stepped up to the challenge, quit my
                  job as a Maintenance technician for BMW MINI, and went to work
                  on this full-time. I was just that passionate to give a career
                  in programming a shot.
                </TerminalLine>
                <TerminalLine>
                  I initially did a lot of courses and tutorials to get up to
                  speed with the latest technologies in web development; this
                  ended up being React and TailwindCSS on the frontend alongside
                  NodeJS, Express, and MySQL (with an ORM) on the backend. I
                  chose this stack as a result of it being beginner-friendly,
                  but still very powerful and scalable.
                </TerminalLine>
                <TerminalLine>
                  I analyzed the specification, planned my approach, split the
                  initial work into manageable sprints, and drew up some initial
                  designs. It was an up-and-down process with great progress,
                  alongside facing huge challenges and problems at times, but I
                  kept a positive mindset and worked through it successfully.
                </TerminalLine>
                <TerminalLine>
                  I had to work to time critical deadlines leading to needing to
                  continuously communicate with the management on current
                  progress and any concerns I had.
                </TerminalLine>
                <TerminalLine>
                  Once we got to a BETA release, I was involved in client
                  discussions, which included presenting the product alongside
                  management, and taking on feedback and change requests to
                  further develop on.
                </TerminalLine>
                <TerminalLine>
                  To summarize, the project was successful and brought on a
                  multiple clients, but ultimately the product had to be shut
                  down fairly recently due to funding for the project.
                </TerminalLine>
                <TerminalLine>
                  From my perspective, this was an incredible opportunity, I
                  learnt so much, took on huge amounts of responsibility,
                  communicated effectively, and ultimately delivered a product
                  from a basic specification to a fully-functional
                  production-ready application as the SOLE developer. I wouldn't
                  change any bit of it; I am really proud of myself for this
                  achievement!
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
              This contains a brief overview of all of my main coding projects
              that I have undertaken throughout the years:
            </TerminalLine>
            <ul className="flex flex-col gap-5">
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
                  What you are looking at right now! My goal with this site has
                  been to showcase my solidified skills in web development to
                  make a fun, informative, functional, and accessible experience
                  for people to find out more about me.
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
                  I have been really excited to get into NextJS and this project
                  has been the best to get started with. I am building a
                  beautiful and fully-functional Discord clone with a multitude
                  of features, such as server settings, user roles,
                  server/direct messaging, video calling, a database, user
                  authentication, and image handling etc. It's been a massive
                  learning experience in a lot of areas, but I am taking it
                  slow, ensuring I completely understand a section before moving
                  on to the next, and most importantly, having fun!
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
                  <TerminalTag>Configuration</TerminalTag>
                  <TerminalTag>Problem Solving</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  I created my very first NPM package. I was trying to solve a
                  bug at work and found the problem to be related to an
                  implementation using React's useEffect hook. I didn't know
                  what dependencies were causing the useEffect to be triggered.
                  After some searching online, I came across a debugger concept
                  for the useEffect hook that ended up helping me solve the bug.
                  Instead of this being a piece of code I had to save locally, I
                  wanted to make it into a package that myself, or my
                  colleagues, or anyone for that matter could use when facing
                  any issues with the useEffect hook. I took the concept code,
                  cleaned it up, added additional features to it, and tested my
                  implementation with React Testing Library. It works a treat
                  and is currently on NPM for you to install and try if you
                  want!
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  Codin Game Spring (2023)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>Typescript</TerminalTag>
                  <TerminalTag>Algorithms</TerminalTag>
                  <TerminalTag>Breadth First Search</TerminalTag>
                  <TerminalTag>Strategy</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  As I had been getting into a bit of AlgoExpert at this time, I
                  was recommended a coding game by one of my work colleagues and
                  jumped at the challenge. The goal of the game was to battle an
                  AI and other participants to capture as many resources from
                  objectives around a map, with a multitude of other factors
                  being added to the game as you would rise through the leagues
                  to make things more challenging. You would have to update and
                  re-think your strategy each time a new factor to the game
                  would be added. I ended up implementing a BFS algorithm in TS,
                  which I used to work out the quickest or most efficient path
                  to objectives that were on the map. From that, I was able to
                  then prioritize these objectives dependant on current game
                  factors and my opponents position on the map. It was really
                  fun, challenging, and I learnt a lot! I ended up finishing
                  1,611th out of 5,290 participants, which I was really proud of
                  considering it was my first dabbling in algorithms.
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
                  I started a subscription with AlgoExpert this year to
                  undertake the AlgoExpert and FrontendExpert courses. The
                  AlgoExpert course included a video tutorial series about data
                  structures, which really opened my eyes to the inner workings
                  of computers, and the different data structures and principles
                  that can be utilized, along with their performance in space
                  and time complexity. Also, it includes 200+ coding questions,
                  that I having been diving into - still a lot left to solve!
                  The FrontendExpert course included all of the fundamentals for
                  website development such as HTML, CSS, JS, and React etc.
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  React Native E-commerce App (2022)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>React</TerminalTag>
                  <TerminalTag>React Native</TerminalTag>
                  <TerminalTag>App Development</TerminalTag>
                  <TerminalTag>Expo</TerminalTag>
                  <TerminalTag>Push Notifications</TerminalTag>
                  <TerminalTag>Mobile Permissions</TerminalTag>
                  <TerminalTag>Navigation</TerminalTag>
                  <TerminalTag>Screens</TerminalTag>
                  <TerminalTag>StyleSheet</TerminalTag>
                  <TerminalTag>Data-Fetching</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  I used to think React could only be used to create web
                  applications, but my understanding shifted when I released
                  that it could create applications on so many different
                  platforms. The ones that spiked my interest were desktop
                  applications (with Electron), and mobile applications (with
                  React Native). As I had been making desktop applications with
                  Python before, I found it more exciting to throw myself into
                  app development for the first time. I bought a course by
                  Programming with Mosh, who walked me through building a
                  simplified e-commerce application with Expo, with features
                  such as user accounts, account settings, adding/editing
                  products, viewing products, direct messaging, push
                  notifications etc. It was a fairly simple application, but it
                  gave me some great exposure to the similarities and
                  differences that there are when creating React applications
                  across two different types of platforms.
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  React Applications (2021)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>React</TerminalTag>
                  <TerminalTag>Web Development</TerminalTag>
                  <TerminalTag>Full-Stack</TerminalTag>
                  <TerminalTag>SPIKE</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  This aligns with when I started at Deskbooker, when I was
                  tasked with being the sole developer to build a desk booking
                  software (explained in the work experience section). Prior to
                  starting this monumental project, I created a few simple React
                  applications, such as a todo and quiz app, to practice my
                  newly gained knowledge, and to SPIKE prior to creating the
                  bigger project at hand.
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
                  <TerminalTag>UI/UX</TerminalTag>
                  <TerminalTag>Polling</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  I made a multitude of Python UI applications whilst working
                  through my apprenticeship as a maintenance technician at BMW
                  MINI. To go beyond terminal applications, I started using a
                  GUI library built into Python called Tkinter, which allowed me
                  to create decent-looking (a bit Windows 96') and functional
                  graphical user interfaces. This was the start of my interest
                  for designing a UI and thinking about the UX. I made
                  applications such as a weather forecast checker,
                  rock-paper-scissors game, and a calendar etc. It was very
                  exiting to start seeing my Python code come to life instead of
                  always being based within the terminal; it definitely lifted a
                  fair amount of limitations and allowed me to get really
                  creative!
                </TerminalLine>
              </li>
              <li className="flex flex-col gap-2">
                <TerminalLine variant="SUBHEADING">
                  Python Terminal Applications (2016-2018)
                </TerminalLine>
                <TerminalTagContainer>
                  <TerminalTag>Python</TerminalTag>
                  <TerminalTag>Terminal</TerminalTag>
                  <TerminalTag>Game Development</TerminalTag>
                  <TerminalTag>Software Development</TerminalTag>
                </TerminalTagContainer>
                <TerminalLine>
                  I made a multitude of Python terminal applications/games
                  whilst in the second-half of secondary school as this was
                  introduced in more advanced computer science lessons. I really
                  enjoyed making helpful apps and fun games such as an adventure
                  game, calculator, hangman, contact book etc. within the
                  terminal. I found it to be a very good first programming
                  language for me as a result of it being versatile, concise,
                  and easy to read.
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
                  I made a multitude of Scratch games whilst in the first-half
                  of secondary school as this was introduced in ICT lessons. I
                  really enjoyed making small games and animations using the
                  block programming structure. It was simple and easy to
                  understand, which made it engaging and kept a beginner like
                  myself coming back for more. This was my first exposure to
                  programming and evidently wasn't my last!
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
              Here are my desired career goals that I would like to work
              towards/potentially accomplish within the next few years:
            </TerminalLine>
            <ol className="flex flex-col gap-1">
              <TerminalLine as="li">
                1. Refine my understanding and skills in my commonly used
                technologies such as React, TS, JS, and NodeJS etc.
              </TerminalLine>
              <TerminalLine as="li">
                2. Explore and experiment with newly introduced technologies
                that I am interested in such as NextJS, Electron, and React
                Native.
              </TerminalLine>
              <TerminalLine as="li">
                3. Work towards a senior developer status and pay-grade, and
                potentially become a 'second in command' on important company
                projects.
              </TerminalLine>
              <TerminalLine as="li">
                4. Always continue to push myself learn new things to help
                ensure that I hold onto my immense passion and enthusiasm for
                web development and programming in general.
              </TerminalLine>
              <TerminalLine as="li">
                5. Make something of use to developers in my industry; solving a
                problem and making a intuitive and efficient solution that is
                accessible to the masses.
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
            You can get in contact with me using the following methods as shown
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
            This website very much mirrors the look and feel of the Windows
            command prompt terminal. If you are not sure what that is, it is the
            thing they show in movies when they are trying to make someone look
            like an expert hacker! Jokes aside, you can write commands in this
            terminal to learn more about me!
          </TerminalLine>
          <figure className="flex flex-col gap-1.5">
            <TerminalLine as="figcaption">
              You can enter the following commands:
            </TerminalLine>
            <ul className="flex flex-col gap-1">
              <TerminalLine as="li">
                `about` - this will tell you more about me
              </TerminalLine>
              <TerminalLine as="li">
                `experience` - this will tell you more about my work experience
              </TerminalLine>
              <TerminalLine as="li">
                `projects` - this will tell you more about my personal projects
              </TerminalLine>
              <TerminalLine as="li">
                `goals` - this will tell you more about my desired outcomes and
                goals for my career
              </TerminalLine>
              <TerminalLine as="li">
                `cv` - this will give you a link to view my CV
              </TerminalLine>
              <TerminalLine as="li">
                `contact` - this will tell you all of the ways you can get in
                contact with me (with that job offer)
                <TerminalIcon src={winkingWithTongueFaceImage} size="SMALL" />
              </TerminalLine>
            </ul>
          </figure>
          <TerminalLine>
            I must add that you can input commands into the terminal using the
            following syntax: {'`<COMMAND> <ARGUMENT>`'}. For example, `foo
            bar`, where `foo` is the command, and `bar` is the argument.
          </TerminalLine>
          <TerminalLine>
            That is the main aspect of this portfolio website or it would be a
            pretty bad one, but I have also added a few extra bits to make
            things more fun and exciting!
          </TerminalLine>
          <figure className="flex flex-col gap-1.5">
            <TerminalLine as="figcaption">
              I have added a few extra helpful commands (not the 'fun and
              exciting' part):
            </TerminalLine>
            <ul className="flex flex-col gap-1">
              <TerminalLine as="li">
                `clear` - this will clear the entire terminal (this cannot be
                undone)
              </TerminalLine>
              <TerminalLine as="li">
                `help` - this will show the same output as being shown now
              </TerminalLine>
            </ul>
          </figure>
          <TerminalLine>
            Lastly, there are some achievements and easter eggs that can be
            found by writing certain commands or interacting with the website in
            certain ways. As an example, type `helloworld` into the terminal to
            find your first easter egg! You will see that the counters shown in
            the terminal header will let you know your progress with both of
            these. I'll leave it to you to find the rest. Happy hunting!
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
                As requested by the little cheater you are, here are the hints
                for the rest of the easter eggs and achievements:
              </TerminalLine>
              <ol className="flex flex-col gap-1.5">
                <TerminalLine as="li" aria-label="Hint #1: Close">
                  1: <XMarkIcon className="inline-block h-6 w-6" />
                </TerminalLine>
                <TerminalLine as="li" aria-label="Hint #2: Going up!">
                  2: <RocketLaunchIcon className="inline-block h-6 w-6" />
                </TerminalLine>
                <TerminalLine as="li" aria-label="Hint #3: All tasks completed">
                  3: <CheckCircleIcon className="inline-block h-6 w-6" />
                </TerminalLine>
                <TerminalLine as="li" aria-label="Hint #4: Animation">
                  4: <VideoCameraIcon className="inline-block h-6 w-6" />
                </TerminalLine>
                <TerminalLine as="li" aria-label="Hint #5: Changing name">
                  5: <IdentificationIcon className="inline-block h-6 w-6" />
                  <ArrowRightIcon className="inline-block h-6 w-6 ml-1" />
                  <IdentificationIcon className="inline-block h-6 w-6 ml-1" />
                </TerminalLine>
                <TerminalLine
                  as="li"
                  aria-label="Hint #6: Going backwards and forwards"
                >
                  6: <BackwardIcon className="inline-block h-6 w-6" />
                  <ForwardIcon className="inline-block h-6 w-6 ml-1" />
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
