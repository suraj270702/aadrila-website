export interface NavLink {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
}

export interface AnimatedLogoProps {
  stage: number;
}

export interface NavbarProps {
  stage: number;
  links: NavLink[];
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export interface MainContentProps {
  stage: number;
}