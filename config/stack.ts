import { Colors } from './colors';

export enum Stack {
  // Languages
  cpp,
  html,
  javascript,
  python,
  sql,

  // Frontend
  react,
  nextjs,
  tailwind,
  materialui,
  bootstrap,

  // Backend & Frameworks
  node,
  express,
  ansible,
  jenkins,
  sapabap,

  // AI/ML
  tensorflow,
  pytorch,
  pandas,
  numpy,
  sklearn,
  nlp,

  // Database and Cloud
  mongodb,
  mongodbatlas,
  mysql,
  nosql,
  azure,

  // Tools
  git,
  github,
  vscode,
  webpack,
  slack,
  jupyter,
  powerbi,
  tableau,
}

export const WorkStack = [
  Stack.html,
  Stack.javascript,
  Stack.python,
  Stack.react,
  Stack.nextjs,
  Stack.tailwind,
  Stack.node,
  Stack.express,
  Stack.mongodb,
  Stack.mysql,
  Stack.azure,
  Stack.tensorflow,
  Stack.pytorch,
  Stack.numpy,
  Stack.pandas,
  Stack.sklearn,
  Stack.git,
  Stack.github,
  Stack.vscode,
  Stack.jupyter,
  Stack.powerbi,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.cpp]: { value: 'C++', color: Colors.cpp },
  [Stack.html]: { value: 'HTML', color: Colors.html },
  [Stack.javascript]: { value: 'JavaScript', color: Colors.javascript },
  [Stack.python]: { value: 'Python', color: Colors.python },
  [Stack.sql]: { value: 'SQL', color: Colors.sql },
  [Stack.react]: { value: 'React.js', color: Colors.react },
  [Stack.nextjs]: { value: 'Next.js', color: Colors.nextjs },
  [Stack.tailwind]: { value: 'Tailwind CSS', color: Colors.tailwind },
  [Stack.materialui]: { value: 'Material UI', color: Colors.materialui },
  [Stack.bootstrap]: { value: 'Bootstrap', color: Colors.bootstrap },
  [Stack.node]: { value: 'Node.js', color: Colors.node },
  [Stack.express]: { value: 'Express.js', color: Colors.express },
  [Stack.ansible]: { value: 'Ansible', color: Colors.ansible },
  [Stack.jenkins]: { value: 'Jenkins', color: Colors.jenkins },
  [Stack.sapabap]: { value: 'SAP ABAP', color: Colors.sapabap },
  [Stack.tensorflow]: { value: 'TensorFlow', color: Colors.tensorflow },
  [Stack.pytorch]: { value: 'PyTorch', color: Colors.pytorch },
  [Stack.numpy]: { value: 'NumPy', color: Colors.numpy },
  [Stack.pandas]: { value: 'Pandas', color: Colors.pandas },
  [Stack.sklearn]: { value: 'scikit-learn', color: Colors.sklearn },
  [Stack.nlp]: { value: 'NLP', color: Colors.nlp },
  [Stack.mongodb]: { value: 'MongoDB', color: Colors.mongodb },
  [Stack.mongodbatlas]: { value: 'MongoDB Atlas', color: Colors.mongodbatlas },
  [Stack.mysql]: { value: 'MySQL', color: Colors.mysql },
  [Stack.nosql]: { value: 'NoSQL', color: Colors.nosql },
  [Stack.azure]: { value: 'Microsoft Azure', color: Colors.azure },
  [Stack.git]: { value: 'Git', color: Colors.git },
  [Stack.github]: { value: 'GitHub', color: Colors.github },
  [Stack.vscode]: { value: 'VS Code', color: Colors.vscode },
  [Stack.webpack]: { value: 'Webpack', color: Colors.webpack },
  [Stack.slack]: { value: 'Slack', color: Colors.slack },
  [Stack.jupyter]: { value: 'Jupyter Notebook', color: Colors.jupyter },
  [Stack.powerbi]: { value: 'Power BI', color: Colors.powerbi },
  [Stack.tableau]: { value: 'Tableau', color: Colors.tableau },
};
