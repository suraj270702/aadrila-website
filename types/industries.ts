export interface IndustryCard {
  id: number
  title: string
  description: string
  icon: string
}

export interface IndustryCardProps {
  industry: IndustryCard
  index: number
  totalCards: number
  isVisible: boolean
}

export interface BackgroundCircleProps {
  isVisible: boolean
  cardsVisible: boolean
}