import { CircleAlert, CircleCheck, Info, TriangleAlert } from 'lucide-react'
export type FeedbackTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger'
export const feedbackTones: FeedbackTone[] = ['neutral', 'info', 'success', 'warning', 'danger']
export const feedbackIcons = { neutral: Info, info: Info, success: CircleCheck, warning: TriangleAlert, danger: CircleAlert }
export const feedbackColors = { neutral: '#6d6d6d', info: '#1119ce', success: '#008942', warning: '#ff6524', danger: '#d60014' }
