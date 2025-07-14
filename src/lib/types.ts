export interface GlobalData {
    metadata: {
        site_title: string;
        site_tag: string;
    };
}

export interface Post {
    id: string;
    slug: string;
    title: string;
    metadata: {
        published_date: string;
        content: string;
        hero?: {
            imgix_url?: string;
        };
        author?: {
            id: string;
            slug?: string;
            title?: string;
            metadata: {
                image?: {
                    imgix_url?: string;
                };
            };
        };
        teaser: string;
        categories: {
            title: string;
        }[];
    };
}

export interface Author {
    id: string;
    slug: string;
    title: string;
    metadata: {
        image?: {
            imgix_url?: string;
        };
    };
}

export interface PortfolioImage {
    src: string;           // Optimized thumbnail for gallery
    fullSrc: string;       // Optimized full-size for lightbox
    width: number;
    height: number;
    alt: string;
    orientation: 'horizontal' | 'vertical';
}

export interface CloudinaryResource {
    public_id: string;
    secure_url: string;
    width: number;
    height: number;
    format: string;
}