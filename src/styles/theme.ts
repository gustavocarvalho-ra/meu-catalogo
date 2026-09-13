export const theme = {
  colors: {
    primary: '#2563EB',
    danger: '#DC2626',
    background: '#F3F4F6',
    white: '#FFFFFF',
    text: '#1F2937',
    textLight: '#6B7280',
    border: '#E5E7EB',
    success: '#10B981',
  },
  spacing: {
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 6,
    md: 12,
    lg: 20,
  },
  fontSize: {
    sm: 12,
    md: 14,
    lg: 16,
    xl: 20,
    xxl: 24,
  },
} as const;

export type Theme = typeof theme;