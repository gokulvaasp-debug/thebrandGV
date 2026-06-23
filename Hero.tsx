export interface Show {
  id: string;
  title: string;
  logoText: string;
  logoStyleClass: string;
  category: string;
  description: string;
  hasCustomImg?: boolean;
  imgUrl?: string;
  accentColor: string;
  episodeSample: {
    title: string;
    hook: string;
    takeaway: string;
  };
}

export interface Thought {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  snippet: string;
  content: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  tags: string[];
  role: string;
  year: string;
  summary: string;
  challenge: string;
  decoding: string;
  impact: string;
  image: string; // fallback or generated mock matching aesthetic
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface Inquiry {
  name: string;
  email: string;
  brandName: string;
  stage: string;
  objective: string;
  challenge: string;
}
