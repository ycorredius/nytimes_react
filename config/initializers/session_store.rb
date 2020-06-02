if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_nytimes_react', domain: 'your-frontend-domain'
else
  Rails.application.config.session_store :cookie_store, key: '_nytimes_react' 
end