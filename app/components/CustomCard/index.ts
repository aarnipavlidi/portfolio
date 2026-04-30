import Project from './project.vue'
import Experience from './experience.vue'

export const CustomCard = { Project, Experience }
export default CustomCard

export interface CustomCardProjectProps {
  title:        string
  description?: string
  techStack?:   string[]
  liveUrl?:     string
  githubUrl?:   string
  image?:       string
  class?:       string
}

export interface CustomCardExperienceProps {
  role: string
  company: string
  startDate: string
  endDate?: string
  location?: string
  class?: string
}
