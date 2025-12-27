// Types
export interface Feature {
  text: string;
}

export interface Benefit {
  text: string;
}

export interface ProductData {
  buttonText: string;
  title: string;
  features: Feature[];
  benefits: Benefit[];
  imageUrl: string;
  imageAlt: string;
}

export interface ProductSectionProps {
  data: ProductData;
  layout: "image-left" | "image-right";
  backgroundCircleUrl: string;
  showHeader?: boolean;
}