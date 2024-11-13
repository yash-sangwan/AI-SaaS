export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  newsletter: {
    title: string;
    inputPlaceholder: string;
    disclaimer: string;
    buttonText: string;
  };
  columns: FooterColumn[];
  bottomSection: {
    copyright: string;
    socialMedia: {
      facebook: string;
      instagram: string;
      twitter: string;
      linkedin: string;
      youtube: string;
    };
  };
}

export const footerData: FooterData = {
  newsletter: {
    title: "Subscribe to news updates*",
    inputPlaceholder: "Your email address",
    disclaimer:
      "* By submitting this form, you confirm that you agree to the storing and processing of your personal data as described in our Privacy Notice.",
    buttonText: "SUBSCRIBE",
  },
  columns: [
    {
      title: "Solutions",
      links: [
        { label: "Content Creation", href: "#" },
        { label: "Scheduling Content", href: "#" },
        { label: "AI Analytics", href: "#" },
        { label: "Collaborative Workflow", href: "#" },
        { label: "Automated Workflow", href: "#" },
        { label: "AI Assistant", href: "#" },
        { label: "Post Management", href: "#" },
        { label: "Manage Content form one Place", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Join Community", href: "#" },
        { label: "Documentation", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Security", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact us", href: "#" },
        { label: "Terms & conditions", href: "#" },
        { label: "Privacy notice", href: "#" },
        { label: "Cookie notice", href: "#" },
        { label: "Disclaimer", href: "#" },
      ],
    },
  ],
  bottomSection: {
    copyright: "© 2024 NAME, All rights reserved.",
    socialMedia: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      linkedin: "#",
      youtube: "#",
    },
  },
};
