Rails.application.routes.draw do
  resources :superheros
  root 'home#index'
end
