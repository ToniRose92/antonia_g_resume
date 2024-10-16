import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  /*CalendarIcon,
  FlagIcon,*/
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
/*import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';*/
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
/*import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';*/
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Antonia Garay.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a USA based <strong className="text-stone-100">Data Analyst</strong>, currently working
        towards my <strong className="text-stone-100">Georgia Tech Masters of Science in Analytics</strong> with a passion for uncovering stories hidden in data. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Whether it's diving deep into numbers or getting lost in anime, I love discovering new insights and making the world a little better in the process. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Welcome to my digital space! 
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Hi! I’m Toni Garay, a Data Analyst with a passion for turning raw data into actionable insights. I specialize in solving complex problems through data-driven decisions, and I thrive in collaborative, cross-functional environments. Whether I'm wrangling millions of rows or creating compelling data visualizations, I love making data tell a story.`,
  aboutItems: [
    {label: 'Location', text: 'Missouri, United States', Icon: MapIcon},
    /* {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon}, */
    {label: 'Interests', text: 'Entertainment Media, Art/Drawing, Gaming, Coffee', Icon: SparklesIcon},
    {label: 'Study', text: 'Georgia Institute of Technology', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'On the Hunt for Data-Driven Challenges', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'Python', level: 6},
      {name: 'SQL', level: 8},
      {name: 'R', level: 7},
      {name: 'Markdown', level: 8},
      {name: 'JavaScript', level: 4},
      {name: 'TypeScript', level: 3},
    ],
  },
  {
    name: 'Data Visualization',
    skills: [
      {name: 'Python & R Libraries', level: 8},
      {name: 'DevExpress', level: 7},
      {name: 'Mode', level: 6},
      {name: 'Periscope', level: 6},
      {name: 'Power BI', level: 4},
      {name: 'Tableau', level: 4},
      {name: 'Excel & Power Query', level: 9},
    ],
  },
  {
    name: 'Machine Learning & Data Processing',
    skills: [
      {name: 'Scikit-learn', level: 7},
      {name: 'TensorFlow', level: 6},
      {name: 'Pandas', level: 9},
      {name: 'R Libraries', level: 5},  // Adjust based on your familiarity
    ],
  },
  {
    name: 'Databases & Automation & Cloud',
    skills: [
      {name: 'MySQL', level: 7},
      {name: 'PostgreSQL', level: 8},
      {name: 'Oracle', level: 6},
      {name: 'VBA (Excel)', level: 7},
      {name: 'Sharepoint', level: 6},
      {name: 'AWS', level: 5},
      {name: 'Google Cloud', level: 5},
    ],
  },
  {
    name: 'Collaboration & Project Management',
    skills: [
      {name: 'JIRA', level: 7},
      {name: 'Confluence', level: 7},
      {name: 'Git', level: 4},
      {name: 'Sharepoint', level: 6},
      {name: 'ZenDesk', level: 8},
      {name: 'G Suite (Google Docs, Sheets, etc.)', level: 8},
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      {name: 'Collaboration', level: 9},
      {name: 'Problem-Solving', level: 9},
      {name: 'Cross-functional Teamwork', level: 8},
      {name: 'Communication', level: 8},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Decoding the Influence of Movie Reviews',
    description: 'Analyzed the impact of movie reviews on box office success using NLP and sentiment analysis. Explored the relationship between review sentiment and revenue for actors and directors, utilizing statistical models like GLM and Spearman’s Rank Correlation to draw insights into the influence of public perception on future projects.',
    url: 'https://github.com/ToniRose92/Decoding-the-Influence-of-Movie-Reviews',
    image: porfolioImage1,
  },
 /* {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  }, */
]; 

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'In Progress',
    location: 'Georgia Institute of Technology',
    title: 'M.S. in Analytics',
    content: (
      <p>
        Currently pursuing a Master of Science in Analytics, focusing on data analysis, machine learning, and data visualization techniques. Developing advanced skills in Python, R, and SQL while applying analytical methodologies to solve complex problems in real-world scenarios.
      </p>
    ),
  },
  {
    date: 'Completed: June 2023',
    location: 'Western Governors University',
    title: 'B.S. in Data Management and Analytics',
    content: (
      <p>
        Graduated with a strong foundation in data management, analysis, and database systems. Gained expertise in SQL, 
        Python, and data visualization, alongside practical experience in using ETL processes, and performing statistical 
        analysis on large datasets.
      </p>
    ),
  },
  {
    date: 'Completed: 2016',
    location: 'Shasta Community College',
    title: 'A.A. Degree in University Studies in Social Sciences',
    content: (
      <p>
        Developed strong communication, critical thinking, and research skills, which provided a multidisciplinary 
        perspective useful in data analytics and problem-solving.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
   {
    date: 'July 2023 - September 2024',
    location: 'Momentus Technologies',
    title: 'Insights Data Analyst (Analytics | Process Improvement | Knowledge Management)',
    content: (
      <>  
        <p>
          * Transformed large datasets into <strong className="text-stone-100">actionable insights</strong> using <strong className="text-stone-100">SQL</strong>, <strong className="text-stone-100">Python</strong>, and <strong className="text-stone-100">DevExpress</strong>, driving data-backed decisions for senior leadership and product teams.
        </p>
        <p>
          * Assisted in managing the <strong className="text-stone-100">Insights knowledge base</strong> by developing and maintaining documentation that improved team access to critical analytics processes and tools.
        </p>
        <p>
          * Proposed <strong className="text-stone-100">process</strong> updates to improve data workflows, resulting in streamlined reporting and faster access to critical insights for cross-functional teams.
        </p>
        <p>
          * Collaborated with clients and internal teams to deliver <strong className="text-stone-100">customized analytics solutions</strong>, optimizing business processes and enhancing decision-making capabilities.
        </p>
        <p>
          * Educated clients on SaaS reporting tools, increasing their ability to leverage data for more informed decisions.
        </p>
        <p>
          In my role at Momentus Technologies, I focused on providing high-impact analytics while also driving process improvements and managing the knowledge base for Insights documentation. By streamlining workflows and ensuring data access, I enhanced the overall efficiency of reporting and decision-making across teams.
        </p>
      </>
    ),
  },
  {
    date: 'August 2022 - July 2023',
    location: 'Instacart',
    title: 'Customer Experience Team Lead (Process Improvement | Analytics | Team Management)',
    content: (
      <>
        <p>
          Led key <strong className="text-stone-100">process improvement initiatives</strong> that reduced customer support contacts by <strong className="text-stone-100">42k</strong> and saved approximately <strong className="text-stone-100">$300k</strong> semi-annually.
        </p>
        <p> 
          Proposed and implemented strategic policy and procedural updates that enhanced customer experience and operational efficiency across multiple teams.
        </p>
        <p> 
          Developed and deployed <strong className="text-stone-100">SQL-driven dashboards</strong>, providing actionable insights that helped improve service delivery for high-value clients.
        </p>
        <p> 
          Collaborated with senior management to <strong className="text-stone-100">optimize customer experience processes</strong> through data-backed decisions, ensuring alignment with company goals.
        </p>
        <p> 
          Managed a team of 12, providing **data-driven feedback** and coaching based on KPI analysis, fostering continuous improvement and high performance.
        </p>
        <p>
          As a Customer Experience Team Lead, I focused on process improvements and leveraging analytics to streamline operations. I played a pivotal role in optimizing service delivery, guiding team members with data insights, and implementing key process enhancements that drove efficiency and cost savings.
        </p>
      </>
    ),
  },
  {
    date: 'March 2021 - August 2022',
    location: 'Instacart',
    title: 'Care RX Specialist Agent',
    content: (
      <>
        <p>
          Delivered exceptional support to high-priority clients by using data-driven strategies to solve complex customer issues.
        </p>
        <p>
          Created custom reports and KPIs using <strong className="text-stone-100">SQL</strong>, enabling faster resolutions and improving team efficiency.
        </p>
        <p>
          Provided real-time performance insights to senior leadership, optimizing response times and customer satisfaction.
        </p>
        <p>
          In this specialized role, I used data analytics to enhance support for critical clients, ensuring smooth resolutions and top-tier service quality.
        </p>
      </>
    ),
  },
  {
    date: 'August 2020 - March 2021',
    location: 'Instacart',
    title: 'Specialized Customer Support Agent',
    content: (
      <>
        <p>
          Handled high-priority customer issues, using <strong className="text-stone-100">SQL</strong> and dashboards to track key performance metrics and improve response times.
        </p>
        <p>
          Collaborated with teams to analyze data and enhance customer support strategies, driving better customer outcomes.
        </p>
        <p>
          Resolved complex cases with data-backed insights, improving customer satisfaction for top-tier clients.
        </p>
        <p>
          As a Specialized Customer Support Agent, I leveraged data to resolve complex customer issues, using my analytical skills to improve overall service.
        </p>
      </>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Oliver Beier',
      text: 'It\'s rare to come across someone as motivated and enthusiastic as Antonia Garay. During the time I had the pleasure to work with her, Antonia demonstrated outstanding professionalism, strong work ethic, strong problem-solving abilities, and reliability: she always went above and beyond to ensure delivering high-quality work on time and with great attention to detail. Furthermore, Antonia possesses exceptional teamwork skills, being always willing to support me and other colleagues. Her expertise and guidance were instrumental in my professional growth: she provided valuable insights, pushed me to expand my skills, and always made time to offer support and advice.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Justin Monsewicz',
      content: (
        <>
          <p>
            I worked with Antonia on various projects when we were both at Instacart. Coming from the agent/specialist side, Antonia provided great insights into the inner workings of their day-to-day experience (as well as their team's).
          </p>
          <p>
            With their insights, I was then able to edit or even overhaul the content to make it easier to understand and access.
          </p>
          <p>
            Antonia was always a pleasure to work with and was a great resource with a wealth of knowledge. Additionally, during my interactions with them, it was easy to see how analytical and insightful they were. They were always willing to learn and dig in, and they've continued to do that with their career and education.
          </p>
          <p>
            I would welcome any opportunity to work with Antonia again.
          </p>
        </>
        ),
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Alexander Barkus',
      text: (
        'I had the pleasure of working closely with Antonia during our time together at Instacart, and I can confidently say they are one of the most talented data professionals I have ever encountered. Their technical skills, combined with a natural ability to manage complex projects, make them a standout candidate for any data analytics or project management role.'
        'In addition to their technical expertise, Antonia is also an excellent communicator and leader. They possess the unique skill of breaking down complex concepts into understandable terms, making it easy for both technical and non-technical stakeholders to grasp the full picture. This, coupled with their strong organizational skills, made them a key player in managing cross-functional teams and ensuring the timely delivery of projects.'
        'What truly sets Antonia apart is their genuine passion for data and continuous learning. They are always eager to stay on the cutting edge of industry trends and tools, and this drive for knowledge allows them to adapt quickly in the ever-evolving data landscape.'
        'I wholeheartedly recommend Antonia for any data analytics or project management role. Their combination of technical prowess, leadership ability, and passion for data makes them an invaluable asset to any organization.'
        ),
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out if you’d like to connect! Whether you have a project in mind, a collaboration opportunity, or just want to chat about data science and analytics, I’d love to hear from you. I’m always open to discussing new opportunities and sharing insights. Let’s create something great together!',
  items: [
    {
      type: ContactType.Email,
      text: 'toni.garay4123@gmail.com',
      href: 'mailto:toni.garay4123@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Springfield, MO, USA',
      href: 'https://www.google.com/maps/place/Springfield,+MO/@37.1791045,-93.2963246,12z/',
    },
    {
      type: ContactType.Github,
      text: 'ToniRose92',
      href: 'https://github.com/ToniRose92',
    },
   /* {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },  */
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ToniRose92'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/tonirgaray/'},
  /*{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'}, */
];
