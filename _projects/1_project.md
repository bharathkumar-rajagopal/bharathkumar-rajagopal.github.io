---
layout: page
title: MSc. Thesis Project
description: Toxicity Assessment of Nanoplastics
img: assets/img/project1_description.jpg
importance: 1
category: work
related_publications: true
---
Nanoplastics, including polystyrene nanoplastics (PS NPs), are pervasive environmental contaminants with potential adverse effects on biological systems. These miniature plastic particles, measuring less than 1000 nanometers in diameter, have gained significant attention due to their widespread distribution in the environment and their potential to enter various ecosystems, including freshwater and marine environments, as well as terrestrial habitats. Despite their ubiquitous presence, our understanding of the cellular toxicity mechanisms of nanoplastics remains limited. This study aimed to address this gap by investigating the effects of PS NPs on Chinese hamster lung fibroblast cells (V-
79) and exploring the underlying toxicity.
<!-- Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width. -->

<!-- To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/Project1_description_picture.jpg
    --- -->

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1_pic1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1_pic2.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1_pic3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">

    The sources, formation, and impact pathways of microplastics and nanoplastics on living organisms {% cite Lv2024%}.

<!-- Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles. -->

The existing problem lies in the lack of comprehensive studies focusing on the cytotoxic and genotoxic effects of nanoplastics in mammalian cell line, particularly PS NPs, which are commonly used in various consumer products such as personal care products, and medical devices and majority of the nanoplastics found in environment are results of withered away from plastics and microplastics dumped in environment. While considerable attention has been directed towards understanding the environmental fate and transport of microplastics, limited research has been devoted to nanaoplastics and their effects on cellular health.

</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/project1_pic4.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>
 This gap in knowledge hinders our ability to assess the potential risks associated with nanoplastics exposure and develop effective mitigation strategies. To overcome this limitation, we employed a multi-faceted approach, combining dynamic light scattering (DLS), nanoparticle tracking analysis (NTA), and standard cellular assays to comprehensively evaluate the toxicity of PS NPs in V-79 cells. DLS and NTA were utilized to characterize the physicochemical properties of PS NPs, including size distribution and stability, in Milli-Q and biological media. Our results revealed significant variations in PS NPs size and polydispersity depending on the surrounding medium, suggesting dynamic interactions with biological environments. Additionally, zeta potential measurements shows particles are more stable and remains colloidal due to high repulsive force between each other. Moving beyond characterization, our study investigated the effects of PS NPs on cellular morphology and viability using standard cellular assays. Exposure to PS NPs induced concentration-dependent changes in cellular morphology, with V-79 cells exhibiting irregular shapes at higher nanoparticle concentrations, indicative of cellular stress or perturbation. This finding is consistent with previous studies suggesting that nanoplastics can induce structural alterations in cellular architecture, potentially compromising cellular function and viability.

<!-- You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images. -->

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project1_pic5.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

Further, the MTT assay demonstrated a biphasic response, with cell viability initially decreasing up to a certain concentration threshold (100 μg/ml) before increasing at higher concentrations, suggesting the activation of compensatory mechanisms or adaptive responses at higher PS NP concentrations. Despite ROS generation, cell viability paradoxically increased at higher PS NP concentrations, indicating the involvement of alternative protective mechanisms or alternative toxicity pathways. Additionally, our evaluation of genotoxicity using the single-cell gel electrophoresis assay confirmed the concentration-dependent toxicity of PS NPs and further supported the notion that PS NPs may induce DNA damage in a dose-dependent manner. These findings collectively underscore the complex interplay between PS NP concentration, cellular responses, and toxicity mechanisms, necessitating further investigation to explain the underlying pathways driving nanoplastics-induced cytotoxicity and genotoxicity.

<!-- The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
``` -->

{% endraw %}
