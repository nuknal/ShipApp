import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 图标映射函数 - 将配置中的图标名称映射到FontAwesome图标
import {
  faBrain,
  faWandMagicSparkles,
  faCamera,
  faStar,
  faChartLine,
  faHeart,
  faLightbulb,
  faMobile,
  faShield,
  faBolt,
  faUsers,
  faCog,
  faCheck,
  faArrowRight,
  faDownload
} from '@fortawesome/free-solid-svg-icons'

const iconMap = {
  'brain': faBrain,
  'wand-magic-sparkles': faWandMagicSparkles,
  'camera': faCamera,
  'star': faStar,
  'chart-line': faChartLine,
  'heart': faHeart,
  'lightbulb': faLightbulb,
  'mobile': faMobile,
  'shield': faShield,
  'bolt': faBolt,
  'users': faUsers,
  'cog': faCog,
  'check': faCheck,
  'arrow-right': faArrowRight,
  'download': faDownload
}

export function getIcon(iconName: string) {
  return iconMap[iconName as keyof typeof iconMap] || faStar
}

// 颜色类映射函数
export function getColorClasses(color: string) {
  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    primary: {
      bg: 'bg-primary-50 dark:bg-primary-950/20',
      border: 'border-primary-200 dark:border-primary-800',
      text: 'text-primary-600 dark:text-primary-400'
    },
    secondary: {
      bg: 'bg-secondary-50 dark:bg-secondary-950/20',
      border: 'border-secondary-200 dark:border-secondary-800',
      text: 'text-secondary-600 dark:text-secondary-400'
    },
    green: {
      bg: 'bg-green-50 dark:bg-green-950/20',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-600 dark:text-green-400'
    },
    pink: {
      bg: 'bg-pink-50 dark:bg-pink-950/20',
      border: 'border-pink-200 dark:border-pink-800',
      text: 'text-pink-600 dark:text-pink-400'
    },
    orange: {
      bg: 'bg-orange-50 dark:bg-orange-950/20',
      border: 'border-orange-200 dark:border-orange-800',
      text: 'text-orange-600 dark:text-orange-400'
    },
    red: {
      bg: 'bg-red-50 dark:bg-red-950/20',
      border: 'border-red-200 dark:border-red-800',
      text: 'text-red-600 dark:text-red-400'
    },
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-950/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-600 dark:text-blue-400'
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-950/20',
      border: 'border-purple-200 dark:border-purple-800',
      text: 'text-purple-600 dark:text-purple-400'
    }
  }
  
  return colorMap[color] || colorMap.primary
}

// 格式化评分显示
export function formatRating(score: number, total: number) {
  return {
    score: score.toFixed(1),
    total: total.toLocaleString()
  }
}
