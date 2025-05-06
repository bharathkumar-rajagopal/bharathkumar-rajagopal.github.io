---
layout: page
title: Contact
permalink: /contact/
nav: true
nav_order: 9
social: true
---

`Get in Touch!` I'd love to hear from you! Whether you'd like to discuss my projects, collaborate, chat about my blog posts, or simply connect, please feel free to reach out. Although I'm active on all the social media platforms listed below, I prefer using email for initial communication as I can respond more promptly.

<br>

<!-- Include social media icons -->

{% if page.social %}

  <div class="social">
    <div class="contact-icons">
      {% include social.liquid %}
    </div>
    <div class="contact-note">{{ site.contact_note }}</div>
  </div>
{% endif %}
