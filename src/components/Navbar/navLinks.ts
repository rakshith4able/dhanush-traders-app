export interface INavLink {
  linkText: string;
  path: string;
}

const navLinks: INavLink[] = [
  { linkText: 'Home', path: '/' },
  { linkText: 'Contact', path: '/contact' },
];

export default navLinks;
