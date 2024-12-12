import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

interface BlogSection {
  heading: string;
  content: string;
  subSections?: {
    subHeading: string;
    content: string;
  }[];
}

interface BlogPost {
  title: string;
  excerpt: string;
  author: {
    name: string;
    bio: string;
    avatar: string;
    socialLinks: {
      twitter: string;
      linkedin: string;
    };
  };
  thumbnail: string;
  thumbnailAlt: string;
  publishDate: string;
  readTime: number;
  category: string;
  subcategories: string[];
  slug: string;
  tags: string[];
  sections: BlogSection[];
  isPublished: boolean;
  isFeatured: boolean;
  viewCount: number;
  likeCount: number;
  schemaType: string;
  keywords: string;
  locale: string;
}

// Utiliser des variables d'environnement pour la clé API
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  throw new Error("The OPENAI_API_KEY environment variable is missing or empty.");
}

const openai = new OpenAI({
  apiKey: apiKey,
});

export async function generateRandomBlogPost(): Promise<BlogPost> {
  try {
    // Reste du code identique à votre version originale
    const topics = [
      "Technology", "Health", "Business", "Science", "Travel", 
      "Food", "Sports", "Arts", "Education", "Environment"
    ];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    
    const sections: BlogSection[] = [];
    const numSections = Math.floor(Math.random() * 3) + 3; 

    for (let i = 0; i < numSections; i++) {
      sections.push({
        heading: `Section ${i + 1}`,
        content: `This is the detailed content for section ${i + 1}. It contains valuable information about ${randomTopic}.`,
        subSections: i === 1 ? [
          {
            subHeading: "Sub-Topic A",
            content: "Detailed exploration of sub-topic A",
          },
          {
            subHeading: "Sub-Topic B",
            content: "In-depth analysis of sub-topic B",
          }
        ] : undefined
      });
    }

    const possibleTags = [
      "trending", "innovation", "research", "guide", "tips",
      "analysis", "future", "development", "insights", "expert"
    ];
    const numTags = Math.floor(Math.random() * 4) + 3; 
    const selectedTags: string[] = [];
    for (let i = 0; i < numTags; i++) {
      const randomTag = possibleTags[Math.floor(Math.random() * possibleTags.length)];
      if (!selectedTags.includes(randomTag)) {
        selectedTags.push(randomTag);
      }
    }

    const readTime = Math.floor(Math.random() * 15) + 5; 

    const blogPost: BlogPost = {
      title: `The Future of ${randomTopic}: Trends and Insights for ${new Date().getFullYear()}`,
      excerpt: `Discover the latest developments and future prospects in ${randomTopic}, including expert analysis and practical insights.`,
      author: {
        name: "AI Content Creator",
        bio: "Expert in " + randomTopic,
        avatar: `/avatars/ai-expert-${Math.floor(Math.random() * 5) + 1}.png`,
        socialLinks: {
          twitter: "https://twitter.com/aiexpert",
          linkedin: "https://linkedin.com/in/aiexpert"
        }
      },
      thumbnail: `/blog/${randomTopic.toLowerCase()}-${Math.floor(Math.random() * 10) + 1}.jpg`,
      thumbnailAlt: `${randomTopic} illustration`,
      publishDate: new Date().toISOString(),
      readTime: readTime,
      category: randomTopic,
      subcategories: [`${randomTopic} Innovation`, `${randomTopic} Research`],
      slug: `future-of-${randomTopic.toLowerCase()}-${new Date().getFullYear()}`,
      tags: selectedTags,
      sections: sections,
      isPublished: Math.random() > 0.5,
      isFeatured: Math.random() > 0.8,
      viewCount: Math.floor(Math.random() * 1000),
      likeCount: Math.floor(Math.random() * 500),
      schemaType: "Article",
      keywords: selectedTags.join(", "),
      locale: "en-US"
    };

    console.log("Generated random blog post:", blogPost);
    return blogPost;
  } catch (error) {
    console.error("Error generating random blog post:", error);
    throw error;
  }
}