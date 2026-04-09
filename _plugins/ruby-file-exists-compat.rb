# Compatibility shim: File.exists? was removed in Ruby 3.2+
# jekyll-scholar (and other gems) still call it, so we patch it back.
unless File.respond_to?(:exists?)
  class File
    def self.exists?(path)
      exist?(path)
    end
  end
end
