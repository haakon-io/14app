export interface NewsPost {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  jetpack_featured_media_url: string;
  parsely: {
    version: string;
    meta: [];
    rendered: string;
  };
  shortlink: string;
  rapidData: {
    pt: string;
    pct: string;
  };
  premiumContent: boolean;
  premiumCutoffPercent: number;
  featured: boolean;
  subtitle: string;
  editorialContentProvider: string;
  tc_cb_mapping: [];
  associatedEvent: boolean;
  event: string | null;
  authors: [number, number];
  hide_featured_image: boolean;
  canonical_url: string;
  _links: {
    self: [
      {
        href: string;
      }
    ];
    collection: [
      {
        href: string;
      }
    ];
    about: [
      {
        href: string;
      }
    ];
    replies: [
      {
        embeddable: true;
        href: string;
      }
    ];
    authors: [
      {
        embeddable: true;
        href: string;
      }
    ];
    author: [
      {
        embeddable: boolean;
        href: string;
      }
    ];
    curies: [
      {
        name: string;
        href: string;
        templated: boolean;
      }
    ];
  };
}

export function compareNewsPosts(p1: NewsPost, p2: NewsPost) {
  const compare = p1.id - p2.id;

  if (compare > 0) {
    return 1;
  } else if (compare < 0) {
    return -1;
  } else return 0;
}
