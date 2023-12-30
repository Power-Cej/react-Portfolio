// main Images
import payroll from '../../Components/ProjectGallery/payroll.png';
import drawernav from '../../Components/ProjectGallery/drawer.jpg';
import bottomnav from '../../Components/ProjectGallery/bottom.jpg';
import contacttracing from '../../Components/ProjectGallery/contacttracing.jpg';
import certificate from '../../Components/ProjectGallery/certificate.png';


// content Images 
import payroll1 from '../../Components/ProjectGallery/payroll/payroll2.png';
import payroll2 from '../../Components/ProjectGallery/payroll/payroll3.png'
import bottom1 from '../../Components/ProjectGallery/bottom/image1.jpg';
import bottom2 from '../../Components/ProjectGallery/bottom/image3.jpg';
import bottom3 from '../../Components/ProjectGallery/bottom/image4.jpg';
import bottom4 from '../../Components/ProjectGallery/bottom/image5.jpg';
import bottom5 from '../../Components/ProjectGallery/bottom/image6.jpg';
import drawer1 from '../../Components/ProjectGallery/drawer/image2.jpg';
import drawer2 from '../../Components/ProjectGallery/drawer/image3.jpg';
import drawer3 from '../../Components/ProjectGallery/drawer/image4.jpg';
import drawer4 from '../../Components/ProjectGallery/drawer/image5.jpg';
import contact1 from '../../Components/ProjectGallery/contact/image2.jpg';
import contact2 from '../../Components/ProjectGallery/contact/image3.jpg';
import contact3 from '../../Components/ProjectGallery/contact/image4.jpg';

// videos 
import drawerVid from '../../Components/ProjectGallery/Video/drawer.mp4';
import bottomVid from '../../Components/ProjectGallery/Video/bottom.mp4';
import contactVid from '../../Components/ProjectGallery/Video/contact.mp4';

export const projectData = [
    {
      image: [payroll, payroll2, payroll1],
      pageLink: "/projects",
      title: "Payroll Form",
      paragraph: `Payroll forms serve as a foundational component within a comprehensive payroll management system, 
      often complementing other organizational tools to provide users with a versatile and efficient means of handling payroll operations.`,
      projectgit: "https://github.com/Power-Cej/Payroll-Form",
    },

    {
        image: [drawernav, drawer1, drawer2, drawer3, drawer4],
        video: drawerVid,
        pageLink: "/projects",
        title: "Drawer Nav",
        paragraph: `Drawer navigation is often used in conjunction with other navigation patterns,
        such as tabs or bottom navigation, to provide users with a variety of options for navigating an app.
        It is a popular design pattern because it allows users to quickly access important features or content,
        without taking up too much space on the screen.`,
        projectgit: "https://github.com/Power-Cej/DrawerNav",
      },

      {
        image: [bottomnav, bottom1, bottom2, bottom3, bottom4, bottom5],
        video: bottomVid,
        pageLink: "/projects",
        title: "Bottom Nav",
        paragraph: `Bottom Navigation is designed to provide a more efficient and user-friendly way to navigate an app,
        especially for users who are using their phone with one hand.
        By placing the navigation options at the bottom of the screen,
        it's easier for users to reach them with their thumb or fingers,
        without having to adjust their grip on the phone.`,
        projectgit: "https://github.com/Power-Cej/BottomNav",
      },

      {
        image: [contacttracing, contact1, contact2, contact3],
        video: contactVid,
        pageLink: "/projects",
        title: "Contact Tracing",
        paragraph: `Contact tracing is a public health technique used to help identify and contain the spread of infectious diseases,
        such as COVID-19, by identifying and notifying people who may have been in close contact with someone who has tested positive for the disease.`,
        projectgit: "https://github.com/Power-Cej/ContactTracing",
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
