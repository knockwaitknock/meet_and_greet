require 'mina/bundler'
require 'mina/rails'
require 'mina/git'
require 'mina/rbenv'

set :domain, '144.76.183.182'
set :deploy_to, '/home/www/meetandgreet'
set :repository, 'git@github.com:tekmsu/meet_and_greet.git'
set :app_path, "#{deploy_to}/#{current_path}"
set :branch, 'master'
set :keep_releases, 5

set :user, 'www'

set :shared_paths, ['config/database.yml', 'log', 'tmp', 'public/storage', 'public/uploads']

task :environment do
  invoke :'rbenv:load'
end

task :setup => :environment do
  queue! %[mkdir -p "#{deploy_to}/shared/log"]
  queue! %[chmod g+rx,u+rwx "#{deploy_to}/shared/log"]

  queue! %[mkdir -p "#{deploy_to}/shared/tmp"]
  queue! %[chmod g+rx,u+rwx "#{deploy_to}/shared/tmp"]

  queue! %[mkdir -p "#{deploy_to}/shared/tmp/pids"]
  queue! %[chmod g+rx,u+rwx "#{deploy_to}/shared/tmp/pids"]

  queue! %[mkdir -p "#{deploy_to}/shared/config"]
  queue! %[chmod g+rx,u+rwx "#{deploy_to}/shared/config"]

  queue! %[touch "#{deploy_to}/shared/config/database.yml"]
end

desc "Deploys the current version to the server."
task :deploy => :environment do
  deploy do
    invoke :'git:clone'
    invoke :'deploy:link_shared_paths'
    invoke :'bundle:install'
    invoke :'rails:db_migrate'
    invoke :'rails:assets_precompile'
    # invoke :'deploy:cleanup'

    # to :launch do
    #   queue! "cd #{deploy_to}"
    #   queue! 'RAILS_ENV=production bin/pumactl -F config/puma.rb stop'
    #   queue! 'RAILS_ENV=production bin/pumactl -F config/puma.rb start'
    # end
  end
end
