import github from "@assets/images/github.png";
import { StaticImageData } from "next/image";
import { Key } from "react";

interface NavLink {
  id: string;
  title: string;
}

interface FooterLink {
  external: boolean;
  name: string;
  link: string;
}

interface FooterSection {
  key: Key | null | undefined;
  title: string;
  links: FooterLink[];
}

interface SocialMedia {
  id: string;
  icon: string | StaticImageData;
  link: string;
}

export const navLinks: NavLink[] = [
  {
    id: "#home",
    title: "Home",
  },
  {
    id: "#about",
    title: "Über uns",
  },
  {
    id: "#Schauma",
    title: "Cool",
  },
  {
    id: "#Cool",
    title: "Cool",
  },
];

export const footerLinks: FooterSection[] = [
    {
        title: "Community",
        links: [
            {
                external: true,
                name: "Homepage",
                link: "https://hnee.de",
            },
            {
                external: false,
                name: "Folgt",
                link: "",
            },
        ],
        key: undefined
    },
      {
          title: "LEGAL",
          links: [
              {
                  external: true,
                  name: "Impressum",
                  link: "https://new.hnee.de/impressum",
              },
              {
                  external: true,
                  name: "Datenschutzerklärung",
                  link: "https://new.hnee.de/datenschutzerklaerung",
              },
          ],
          key: undefined
      },
    ];

export const socialMedia: SocialMedia[] = [
  {
    id: "1",
    icon: "",
    link: "f",
  },
  {
    id: "2",
    icon: "",
    link: "g",
  },
  {
    id: "3",
    icon: "",
    link: "h",
  },
  {
    id: "github",
    icon: github,
    link: "https://github.com",
  },
];
