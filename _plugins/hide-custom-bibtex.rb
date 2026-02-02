module Jekyll
  module HideCustomBibtex
    def hideCustomBibtex(input)
	    keywords = @context.registers[:site].config['filtered_bibtex_keywords']

	    keywords.each do |keyword|
		    input = input.gsub(/^.*\b#{keyword}\b *= *\{.*$\n/, '')
	    end

      # Remove author_html field (custom field, not needed in BibTeX output)
      input = input.gsub(/^.*\bauthor_html\b *= *\{.*$\n/, '')

      return input
    end
  end
end

Liquid::Template.register_filter(Jekyll::HideCustomBibtex)
