module Jekyll
  class BibliographyPostsTag < Liquid::Tag
    def render(context)
      site = context.registers[:site]
      scholar = site.find_converter_instance(Jekyll::Scholar::Scholar)
      scholar.render_bibliography(context, 'papers.bib', cited: true)
    end
  end
end

Liquid::Template.register_tag('bibliography_posts', Jekyll::BibliographyPostsTag)