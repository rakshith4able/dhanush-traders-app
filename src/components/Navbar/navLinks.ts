export interface INavLink {
  linkText: string;
  path: string;
  onclick?: (ref: HTMLElement) => void;
}

const navLinks: INavLink[] = [
  { linkText: 'Home', path: '/' },
  { linkText: 'Products', path: '/products' },
  { linkText: 'Gallery', path: '/gallery' },
  { linkText: 'Services', path: '/services' },
];

export default navLinks;
