# frozen_string_literal: true

# Ruby 3.2+ removed File.exists?; jekyll-scholar 5.x still uses it. Loaded via RUBYOPT before Bundler/jekyll.
class << File
  def exists?(path)
    exist?(path)
  end
end
