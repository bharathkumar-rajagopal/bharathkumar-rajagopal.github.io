// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "I am a recent MSc Biotechnology graduate from Amity University, with expertise in toxicity assessments and comprehensive analytical techniques. I am highly motivated to pursue a PhD focused on studying environmental pollutants.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-successfully-defended-my-master-s-thesis-relieved-page-with-curl",
          title: 'Successfully defended my Master’s thesis :relieved: :page_with_curl:',
          description: "",
          section: "News",},{id: "news-i-took-my-english-proficiency-exam-ielts-on-the-18th-of-this-month-and-got-a-cefr-c1-advanced-one-step-closer-to-my-phd-hooray-grin-star2",
          title: 'I took my English Proficiency exam (IELTS) on the 18th of this month...',
          description: "",
          section: "News",},{id: "news-graduated-with-msc-in-biotechnology-smile-mortar-board",
          title: 'Graduated with MSc in Biotechnology :smile: :mortar_board:',
          description: "",
          section: "News",},{id: "projects-msc-thesis-project",
          title: 'MSc. Thesis Project',
          description: "Toxicity Assessment of Nanoplastics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-agnps",
          title: 'Project AgNPs',
          description: "Biogenic synthesis of Silver Nanoparticles using Endophytic bacteria isolated from Andrographis paniculata and its Potential Applications as Anticancer and Antibacterial Agents",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
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
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7922-8467", "_blank");
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
