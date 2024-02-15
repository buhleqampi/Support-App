
import { INavLink, INavStyles, Nav } from '@fluentui/react';

import { useRouter } from 'next/router';

const navLinks: INavLink[] = [
  { key: 'login', name: 'Login', url: '/'},
  { key: 'dashboard', name: 'Dashboard', url: '/dashboard' },
  { key: 'casedetail', name: 'Casedetail', url: '/casedetial' },
  { key: 'supportcase', name: 'SupportCase', url: '/supportcase' },
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