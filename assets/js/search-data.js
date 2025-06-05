// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "My publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of some wonderful projects I have been a part of.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "I am a recent MSc Biotechnology graduate from Amity University, with expertise in toxicity assessments and comprehensive analytical techniques. I am highly motivated to pursue a PhD focused on studying environmental pollutants.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "Get in Touch!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-statistics-for-scientific-research",
      
        title: "Statistics for Scientific Research",
      
      description: "Basic statistical guide",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Statistics-for-Scientific-Research/";
        
      },
    },{id: "post-microplastics-in-ovaries-a-silent-threat-to-fertility",
      
        title: "Microplastics in Ovaries: A Silent Threat to Fertility",
      
      description: "First evidence of microplastics in human ovarian follicles sparks alarm over potential impacts on female fertility and reproductive health.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Microplastics-in-Ovaries/";
        
      },
    },{id: "post-tackling-urban-debris-insights-from-australia-s-metropolitan-clean-up-efforts",
      
        title: "Tackling Urban Debris: Insights from Australia’s Metropolitan Clean-Up Efforts",
      
      description: "A continental-scale study reveals how policy changes and community efforts are reducing plastic pollution in Australian cities, but cigarette butts and polystyrene remain stubborn challenges.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Tackling-Urban-Debris/";
        
      },
    },{id: "post-microplastics-in-soil-findings-from-a-two-year-study",
      
        title: "Microplastics in Soil - Findings from a Two-Year Study",
      
      description: "A summary and analysis of a two-year field study on microplastic transport in agricultural soils, exploring minimal vertical movement and negligible impacts on soil structure, with insights for future research.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Microplastics-in-Soil/";
        
      },
    },{id: "post-microplastics-in-the-sky-how-tiny-plastic-particles-might-be-shaping-clouds-and-climate",
      
        title: "Microplastics in the Sky - How Tiny Plastic Particles Might Be Shaping Clouds...",
      
      description: "New research reveals that airborne microplastics could influence cloud formation and global climate patterns - here&#39;s what we know so far.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Microplastics-in-the-Sky/";
        
      },
    },{id: "post-microplastics-are-secretly-breeding-superbugs-here-s-how",
      
        title: "Microplastics Are Secretly Breeding Superbugs – Here’s How",
      
      description: "New research shows bacterial biofilms on plastic waste accelerate the spread of resistant genes – and your water bottle might be part of the problem.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Microplastics-Are-Secretly-Breeding-Superbugs/";
        
      },
    },{id: "post-microplastics-found-in-human-brains-my-take-on-the-groundbreaking-study",
      
        title: "Microplastics Found in Human Brains - My Take on the Groundbreaking Study",
      
      description: "A close look at the methods and findings of the recent Nature Medicine paper that detected plastic particles in human brain tissues – separating facts from media hype.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Microplastics-Found-in-Human-Brains/";
        
      },
    },{id: "post-microplastics-in-the-mediterranean",
      
        title: "Microplastics in the Mediterranean",
      
      description: "New Insights and Unanswered Questions",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/MPs-in-Mediterranean-Sea-blog-post/";
        
      },
    },{id: "news-page-with-curl-successfully-defended-my-master-s-thesis",
          title: ':page_with_curl: Successfully defended my Master’s thesis',
          description: "",
          section: "News",},{id: "news-bow-i-joined-as-an-independent-researcher-under-dr-boobal-rangaswamy",
          title: ':bow: I joined as an independent researcher under Dr. Boobal Rangaswamy.',
          description: "",
          section: "News",},{id: "news-grin-i-took-my-english-proficiency-exam-ielts-on-the-18th-of-this-month-and-got-a-cefr-c1-advanced-one-step-closer-to-my-phd-hooray",
          title: ':grin: I took my English Proficiency exam (IELTS) on the 18th of this...',
          description: "",
          section: "News",},{id: "news-mortar-board-officially-graduated-with-msc-in-biotechnology-received-my-degree-certificate-through-mail",
          title: ':mortar_board: Officially graduated with MSc in Biotechnology - received my degree certificate through...',
          description: "",
          section: "News",},{id: "news-newspaper-preprint-of-our-publication-on-integrating-kinetic-models-gene-circuits-and-biofilm-dynamics-for-enhanced-exopolysaccharide-production-in-nitrifying-bacterial-consortia-is-available-online",
          title: ':newspaper: Preprint of our publication on “Integrating Kinetic Models, Gene Circuits, and Biofilm...',
          description: "",
          section: "News",},{id: "projects-msc-thesis-project",
          title: 'MSc. Thesis Project',
          description: "Toxicity Assessment of Nanoplastics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MSc_Thesis/";
            },},{id: "projects-project-agnps",
          title: 'Project AgNPs',
          description: "Biogenic synthesis of Silver Nanoparticles using Endophytic bacteria isolated from Andrographis paniculata and its Potential Applications as Anticancer and Antibacterial Agents",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Project_AgNPs/";
            },},{id: "projects-empowering-young-minds",
          title: 'Empowering Young Minds',
          description: "My Journey as a Social Work Intern",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Project_NGO/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69.%62%68%61%72%61%74%68@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bharath--r", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/bharath-phd.bsky.social", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/Bharath_PhD", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
