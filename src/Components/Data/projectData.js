import payroll from '../../Components/ProjectGallery/payroll.png';
import drawernav from '../../Components/ProjectGallery/drawer.jpg';
import bottomnav from '../../Components/ProjectGallery/bottom.jpg';
import contacttracing from '../../Components/ProjectGallery/contacttracing.jpg';
import certificate from '../../Components/ProjectGallery/certificate.png';

export const projectData = [
    {
      image: payroll,
      pageLink: "/payroll",
      title: "Payroll Form",
      paragraph: `Payroll forms serve as a foundational component within a comprehensive payroll management system, 
      often complementing other organizational tools to provide users with a versatile and efficient means of handling payroll operations.`
    },

    {
        image: drawernav,
        pageLink: "#payroll",
        title: "Drawer Nav",
        paragraph: `Drawer navigation is often used in conjunction with other navigation patterns,
        such as tabs or bottom navigation, to provide users with a variety of options for navigating an app.
        It is a popular design pattern because it allows users to quickly access important features or content,
        without taking up too much space on the screen.`
      },

      {
        image: bottomnav,
        pageLink: "#payroll",
        title: "Bottom Nav",
        paragraph: `Bottom Navigation is designed to provide a more efficient and user-friendly way to navigate an app,
        especially for users who are using their phone with one hand.
        By placing the navigation options at the bottom of the screen,
        it's easier for users to reach them with their thumb or fingers,
        without having to adjust their grip on the phone.`
      },

      {
        image: contacttracing,
        pageLink: "#payroll",
        title: "Contact Tracing",
        paragraph: `Contact tracing is a public health technique used to help identify and contain the spread of infectious diseases,
        such as COVID-19, by identifying and notifying people who may have been in close contact with someone who has tested positive for the disease.`
      },
  ];



  export const certificateData = [
    {
        image: certificate,
        pageLink: "https://www.freecodecamp.org/certification/fcc74b38cce-0711-42b5-a2c8-da8b3de9c4f2/responsive-web-design",
        title: "Responsive Web Design",
        paragraph: `Developer Certification from freeCodeCamp on December 9, 2022 representing approximately 300 hours of work`
      },
  ]
