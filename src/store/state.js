export default {
  isSidebarMinimized: false,
  userName: "Vasili S",
  user: null,
  loading: false,
  generalEmailErrors: [],
  companyNameErrors: [],
  emailLinkErrors: [],
  generalPhoneErrors: [],
  templateErrors: [],
  heroBackgroundErrors: [],
  heroCompanyLogoErrors: [],
  newCompanyFormReady: false,
  companyData: {
    template: "",
    companyPhone: { phone: "" },
    companySlogan: "",
    companyName: "",
    companyEmail: {
      email: "",
      link: "",
    },
    companyHero: {
      gallery: [],
      heroBackground: "",
      companyLogo: "",
      galleryNames: [],
    },
    companyLinks: [],
    companyFeaturedServices: [
      {
        icon: { type: "", class: "" },
        title: "",
        description: "",
      },
    ],
    companyAboutInfo: {
      title: "",
      spannedPart: "",
      subTitle: "",
      image: "",
      firstHeader: "",
      firstParagraph: "",
      secondHeader: "",
      secondParagraph: "",
      firstIcon: { type: "", class: "" },
      secondIcon: { type: "", class: "" },
      lastTitle: "",
      secondToLastParagraph: "",
      lastParagraph: "",
    },
    companySkills: [{ name: "", percent: 100 }],
    companyCounts: [
      {
        name: "",
        amount: 548,
        icon: { type: "", class: "" },
      },
    ],
    companyClients: [{ image: "" }],
    companyServices: {
      title: "",
      spannedPart: "",
      subTitle: "",
      services: [
        {
          icon: { type: "", class: "" },
          name: "",
          description: "",
        },
      ],
    },
    companyTeam: {
      title: "",
      spannedPart: "",
      paragraph: "",
      members: [
        {
          image: "",
          social: [
            {
              icon: { type: "", class: "", link: "" },
            },
          ],
          name: "",
          position: "",
        },
      ],
    },
    companyTestimonials: [
      {
        image: "",
        name: "",
        title: "",
        qoute: "",
        icon: {
          type: "",
          class: "",
        },
      },
    ],
    companyPricing: {
      title: "",
      spannedPart: "",
      paragraph: "",
      prices: [
        {
          features: [{ name: "", na: false }],
          name: "",
          button: { content: "", link: "", class: "" },
          price: "",
          period: "",
          featured: false,
          advanced: false,
        },
      ],
    },
    companyFaqs: {
      title: "",
      spannedPart: "",
      paragraph: "",
      questions: [
        {
          question: "",
          answer: "",
          link: "",
          id: "",
        },
      ],
    },
    companyContact: {
      title: "",
      paragraph: "",
      address: {
        icon: { type: "", class: "" },
        content: "",
        title: "",
      },
      email: {
        icon: { type: "", class: "" },
        content: "",
        title: "",
      },
      phone: {
        icon: { type: "", class: "" },
        content: "",
        title: "",
      },
      mapEmbed: "",
    },
    companyFooter: {
      CompanyName: "",
      paragraph: "",
      phone: "",
      address: "",
      city: "",
      zip: "",
      country: "",
      email: "",
      firstLinkHeader: "",
      secondLinkHeader: "",
      thirdLinkHeader: "",
      thirdLinkParagraph: "",
      firstLinks: [{ name: "", link: "" }],
      secondLinks: [{ name: "", link: "" }],
      socialLinks: [
        {
          class: "",
          link: "",
          icon: { type: "", class: "" },
        },
      ],
      developerLink: "",
      developerName: "CliffordCotton",
    },
    companyPortfolio: {
      title: "",
      spannedPart: "",
      paragraph: "",
      filters: [{ dataFilter: "", filterActive: true, name: "" }],
      portfolioItems: [
        {
          filter: "",
          title: "",
          image: "",
          category: "",
        },
      ],
    },
  },
};