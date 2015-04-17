#!/usr/bin/env puma

require 'pathname'

app_root = Pathname.new(Dir.pwd)
# app_root = Pathname.new('/home/app/artguide/current')

daemonize
workers 1

directory app_root.to_s
rackup app_root.join('config.ru').to_s

environment 'production'

pidfile    app_root.join('tmp/pids/puma.pid').to_s
state_path app_root.join('tmp/pids/puma.state').to_s

stdout_redirect app_root.join('log/puma.stdout.log').to_s, app_root.join('log/puma.sterr.log').to_s, true

bind 'tcp://0.0.0.0:9008'

on_restart do
  ENV['BUNDLE_GEMFILE'] = app_root.join('Gemfile').to_s
end
