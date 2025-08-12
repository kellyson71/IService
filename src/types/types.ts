export interface Reviews {
  id: number
  client_id: number
  provider_id: number
  service_id: number
  rating: number
  comment: string
  comment_answer: string
  review_date: Date
  answer_date: Date
}

export interface Payments {
  id: number
  service_id: number
  cost_total: number
  cost_comission: number
  cost_provider: number
  payment_status: 'set this'
  method: 'set this'
  external_reference: string
  payment_date: Date
  creation_date: Date
}

export interface Services {
  id: number
  client_id: number
  provider_id: number
  service_id: number
  date_hour_schedule: Date
  date_hour_end: Date
  status: 'set this'
  obs: string
  address: string
  postal_code: string
  city: string
  service_cost: number
  total_cost: number
  schedule_code: string
  creation_date: Date
  update_date: Date
}

export interface OferredServices {
  id: number
  provider_id: number
  category_id: number
  service_name: string
  description: string
  extra_cost: number
  duration_aprox_min: number
  active: boolean
  creation_date: Date
}

export interface ProviderProfile {
  id: number
  user_id: number
  description: string
  starting_price: number
  average_rating: number
  total_reviews: number
  city: string
  state: string
  photo_url: string
  status: 'set this'
  available: boolean
  creation_date: Date
  update_date: Date
}

export interface Users {
  id: number
  name: string
  email: string
  password_hash: string
  phone: string
  user_type: 'client' | 'provider'
  active: boolean
  register_date: Date
  update_date: Date
}

export interface Notification {
  id: number
  user_id: number
  type: string
  title: string
  message: string
  readen: boolean
  creation_date: Date
}

export interface ServiceCategory {
  id: number
  name: string
  description: string
  icon: string
  active: boolean
  order: number
}
