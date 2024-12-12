export interface BlogPost {
    title: string;
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
    
    excerpt: string;
    content?: string;
    author: {
        name: string;
        bio?: string;
        avatar?: string;
        socialLinks?: {
            twitter?: string;
            linkedin?: string;
            github?: string;
        }
    };
    
    thumbnail: string;
    thumbnailAlt?: string;
    featuredImage?: string;
    images?: {
        url: string;
        alt: string;
        caption?: string;
    }[];
    
    publishDate: string;
    modifiedDate?: string;
    readTime: number;
    category: string;
    subcategories?: string[];
    slug: string;
    tags: string[];
    
    sections: BlogSection[];
    
    isPublished?: boolean;
    isFeatured?: boolean;
    viewCount?: number;
    likeCount?: number;
    
    schemaType?: 'BlogPosting' | 'Article' | 'NewsArticle';
    keywords?: string;
    locale?: string;
}

export interface BlogSection {
    heading: string;
    headingId?: string;
    content: string;
    subSections?: BlogSubSection[];
    media?: {
        type: 'image' | 'video';
        url: string;
        alt?: string;
        caption?: string;
    }[];
}

export interface BlogSubSection {
    subHeading: string;
    headingId?: string;
    content: string;
    callToAction?: {
        text: string;
        url: string;
    };
}
