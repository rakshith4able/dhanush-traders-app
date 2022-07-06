export interface INavLink {
  linkText: string;
  path: string;
  onclick?: (ref: HTMLElement) => void;
}

const scrollTo = (ref: HTMLElement) => {
  ref.scrollIntoView();
};

const navLinks: INavLink[] = [
  { linkText: 'Home', path: '/', onclick: scrollTo },
  { linkText: 'Contact', path: '/contact' },
];

export default navLinks;
