// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-services",
    title: "services",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Explore projects we&#39;re delivering at Mesh-Oriented Solutions and earlier work by our founding team.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-technology",
          title: "technology",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/technology/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Selected publications authored and theses supervised by the founders of Mesh-Oriented Solutions demonstrating advanced applications of MoFEM",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-digital-twins-in-mofem",
      
        title: "Digital Twins in MoFEM",
      
      description: "Concept of digital twins proposed with MoFEM library",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/digital_twins/";
        
      },
    },{id: "post-my-contributions-to-mofem",
      
        title: "My contributions to MoFEM",
      
      description: "A selection of the most important developments and contributions to MoFEM",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/my_contributions/";
        
      },
    },{id: "post-programming-c-with-mofem",
      
        title: "Programming C++ with MoFEM",
      
      description: "Code practices and useful resources for learning to code with MoFEM",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/programming_mofem/";
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-what-mofem-offers",
      
        title: "What MoFEM offers?",
      
      description: "Main features of the MoFEM finite element library",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/what_mofem-offers/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-karol-starts-his-phd-project",
          title: 'Karol starts his PhD project.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details-example",
          title: 'A long announcement with details (example)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-kickstart-the-personal-website-sparkles",
          title: 'Kickstart the personal website! :sparkles:',
          description: "",
          section: "News",},{id: "projects-project-10",
          title: 'project 10',
          description: "A project with an introduction section",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-bone-remodelling-amp-fracture",
          title: 'Bone remodelling &amp;amp; fracture',
          description: "Bone adaptation and fracture risk",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bone_fracture/";
            },},{id: "projects-automotive-bushings",
          title: 'Automotive bushings',
          description: "Suspension noise and vibration",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bushings/";
            },},{id: "projects-sealing-technologies",
          title: 'Sealing technologies',
          description: "Valve seal deformation and contact",
          section: "Projects",handler: () => {
              window.location.href = "/projects/butterfly_valve/";
            },},{id: "projects-cell-engineering",
          title: 'Cell engineering',
          description: "Identifying forces exerted by cells",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cell_engineering/";
            },},{id: "projects-failure-in-composites-and-coatings",
          title: 'Failure in composites and coatings',
          description: "Cracking and interface separation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coatings_indentation/";
            },},{id: "projects-fractures-in-nuclear-graphite",
          title: 'Fractures in nuclear graphite',
          description: "Graphite fracture and reactor safety",
          section: "Projects",handler: () => {
              window.location.href = "/projects/edf_graphite/";
            },},{id: "projects-flow-forming",
          title: 'Flow forming',
          description: "Metal deformation in cold forming",
          section: "Projects",handler: () => {
              window.location.href = "/projects/flow_forming/";
            },},{id: "projects-hpc-tailored-solvers-in-mofem",
          title: 'HPC tailored solvers in MoFEM',
          description: "Scalable solvers for large simulations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hpc_developments/";
            },},{id: "projects-ilizarov-fixator-system",
          title: 'Ilizarov fixator system',
          description: "Bone fixation for limb reconstruction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ilizarov_fixator/";
            },},{id: "projects-mfront-interface",
          title: 'MFront interface',
          description: "Advanced material models in MoFEM",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mfront_interface/";
            },},{id: "projects-orthopaedic-surgery-simulation",
          title: 'Orthopaedic surgery simulation',
          description: "Simulation for surgical planning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/orthopaedic_surgery/";
            },},{id: "projects-topology-optimisation",
          title: 'Topology optimisation',
          description: "Material-efficient structural design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/topology_optimisation/";
            },},{id: "projects-vr-and-ar",
          title: 'VR and AR',
          description: "Immersive simulation visualisation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vr/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
