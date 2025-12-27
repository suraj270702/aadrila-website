export interface Blog {
  title: string
  date: string
  description: string
}

export interface BlogCardProps {
  blog: Blog
  index: number
  showGradients: boolean
  showContent: boolean
}

export interface NavigationButtonProps {
  direction: 'prev' | 'next'
  onClick: () => void
  disabled: boolean
}