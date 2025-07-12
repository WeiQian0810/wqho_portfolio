import {
  python,
  tensorflow,
  scikit_learn,
  pytorch,
  keras,
  numpy,
  pandas,
  nodejs,
  jupyter,
  sql,
  aws,
  mobile,
  backend,
  creator,
  web,
  sql_query_avatar,
  pap_smear,
  noname,
  sunlife,
  aws_cloud_practitioner,
  aws_restart_graduate,
  aws_educate_gen_ai
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  }
];

const services = [
  {
    title: 'Machine Learning',
    icon: web,
  },
  {
    title: 'Algorithms and Models',
    icon: mobile,
  },
  {
    title: 'Deep Learning Frameworks',
    icon: backend,
  },
  {
    title: 'Neural Networks',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Tensorflow',
    icon: tensorflow,
  },
  {
    name: 'Scikit Learn',
    icon: scikit_learn,
  },
  {
    name: 'PyTorch',
    icon: pytorch,
  },
  {
    name: 'Keras',
    icon: keras,
  },
  {
    name: 'NumPy',
    icon: numpy,
  },
  {
    name: 'Pandas',
    icon: pandas,
  },
  {
    name: 'NodeJS',
    icon: nodejs,
  },
  {
    name: 'Jupyter',
    icon: jupyter,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'AWS',
    icon: aws,
  }
];

const experiences = [
  {
    title: 'Data Analyst Intern',
    company_name: 'Sun Life Malaysia Assurance Berhad',
    icon: sunlife,
    iconBg: '#383E56',
    date: 'Oct 2022 - Jan 2023',
    points: [
      'Developed and deployed a Campaign Management and Client Journey application using Vue JS and Python.',
      'Directed the frontend team in validating UI components and integrating with the backend via REST APIs to ensure seamless end-to-end functionality.'
    ],
  },
  {
    title: 'Data Scientist',
    company_name: 'Sun Life Malaysia Assurance Berhad',
    icon: sunlife,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Current',
    points: [
      'Delivered a multi-module business application (Data Extraction, Client Journey, Campaign Management) to enhance collaboration and information exchange between tech and business users.',
      'Built a production-ready AI Avatar platform using LLMs and NLP to translate natural language into SQL and voice insights, increasing BI adoption by 40%.',
      'Led analytics on insurance product persistency, developing automated dashboards that guided strategic retention efforts and improved KPIs.',
      'Designed an OCR-based IDP pipeline to extract structured tables from scanned PDFs, automating 70% of UAT workflows and extending across multiple business units.',
      'Developed a resume intelligence system for hiring automation, combining NLP and ML to score talent—recognized with a CEO Award nomination for business impact.'
    ],
  }
];

const projects = [
  {
    name: 'SQL Query Avatar',
    description:
      'An AI-powered avatar that translates natural language questions into SQL queries to retrieve relevant data from a database.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'pink-text-gradient',
      },
      {
        name: 'HTML',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'red-text-gradient',
      }
    ],
    image: sql_query_avatar,
    source_code_link: 'https://github.com/WeiQian0810/codeless_sql_query_avatar_backend.git',
  },
  {
    name: 'Pap Smear Cell Imaging Prediction',
    description:
      'Leveraging CNN, developed an end-to-end pipeline for Pap smear image classification.',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Jupyter',
        color: 'green-text-gradient',
      }
    ],
    image: pap_smear,
    source_code_link: 'https://github.com/WeiQian0810/pap-smear-cell-imaging-prediction.git/',
  },
  {
    name: 'NoName',
    description:
      "I developed a 3D action-adventure game built with Unity and scripted in C#, where players traverse through a series of time-warped worlds to restore balance to the timeline.",
    tags: [
      {
        name: 'C#',
        color: 'blue-text-gradient',
      }
    ],
    image: noname,
    source_code_link:
      'https://github.com/WeiQian0810/NoName.git',
  },
];

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    description: "Earned July 2025. Valid for 3 years.",
    image: aws_cloud_practitioner,
    link: "https://www.credly.com/badges/10c6cc11-73e8-49ca-b3bc-137511e08187/public_url",
  },
  {
    title: "AWS Educate Introduction to Generative AI",
    description: "Earned Mar 2025.",
    image: aws_educate_gen_ai,
    link: "https://www.credly.com/badges/609403ca-695e-4586-888a-c4e5444b74fa/public_url",
  },
  {
    title: "AWS re/Start Graduate",
    description: "Graduated from the AWS re/Start program.",
    image: aws_restart_graduate,
    link: "https://www.credly.com/badges/61a233b9-b280-4f53-8957-5ddfc1338529/public_url",
  },
];

export { services, technologies, experiences, projects, certificates };
