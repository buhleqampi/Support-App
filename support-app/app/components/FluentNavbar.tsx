// components/FluentNavbar.tsx

import { INavLink, INavStyles, Nav } from '@fluentui/react';

import { useRouter } from 'next/router';

const navLinks: INavLink[] = [
  { key: 'home', name: 'Home', url: '/', icon: 'Home' },
  { key: 'about', name: 'About', url: '/about', icon: 'Info' },
  // Add more links as needed
];

const navStyles: Partial<INavStyles> = {
  root: {
    width: 200,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};

const FluentNavbar: React.FC = () => {
  const router = useRouter();

  return (
    <Nav
      styles={navStyles}
      groups={[
        {
          links: navLinks.map((link) => ({
            ...link,
            onClick: () => router.push(link.url),
            isCurrent: router.pathname === link.url,
          })),
        },
      ]}
    />
  );
};

export default FluentNavbar;
