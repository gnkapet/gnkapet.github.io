// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-σχετικά",
    title: "σχετικά",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-research",
          title: "research",
          description: "In this page you will find my publications, preprints and my theses. Also, a list of my talks and slides of (most of my) talks. I am interested in all aspects of finite fields and their applications. If you are looking for a specific article and have no access to the corresponding journal, feel free to contact me!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Here you can find some basic information about me. For more details click on the PDF above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Here you can find information and links related to my academic teaching activities. &quot;FS&quot; stands for Fall Semester and &quot;SS&quot; for Spring Semester.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-after-a-long-time-i-finally-migrated-to-a-modern-website-based-on-the-al-folio-theme-if-you-see-anything-that-does-not-work-or-is-missing-please-let-me-know",
          title: 'After a long time, I finally migrated to a modern website, based on...',
          description: "",
          section: "News",},{id: "news-about-aca-2025",
          title: 'About ACA 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%6E%6B%61%70%65%74@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/giorgos-kapetanakis-2220b043", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Giorgos-Kapetanakis/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=DL3za1AAAAAJ", "_blank");
        },
      },{
        id: 'social-ams',
        title: 'Ams',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
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
