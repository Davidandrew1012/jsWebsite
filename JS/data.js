let portfolioCardData = [
   {
       dataItem: 'web',
       imgSrc: './assets/images/portfolio-1.jpg',
       imgAlt: 'portfolio icon',
       href: '#',
       header: 'Web Development',
       content: 'Food Website',
       dataOpen: 'web-1',
       modalId: 'web-1',
       modalTitle: 'Web Project 1',
       modalDescription: 'My First Awesome Website',
       modalAdditionalInfo1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       modalAdditionalInfo2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.'
   },
   {
       dataItem: 'web',
       imgSrc: './assets/images/portfolio-2.jpg',
       imgAlt: 'portfolio icon',
       href: '#',
       header: 'Web Development',
       content: 'Skating Website',
       dataOpen: 'web-2',
       modalId: 'web-2',
       modalTitle: 'Web Project 2',
       modalDescription: 'My First Awesome Website',
       modalAdditionalInfo1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       modalAdditionalInfo2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.'   },
   {
       dataItem: 'web',
       imgSrc: './assets/images/portfolio-3.jpg',
       imgAlt: 'portfolio icon',
       href: '#',
       header: 'Web Development',
       content: 'Skating Website',
       dataOpen: 'web-3',
       modalId: 'web-3',
       modalTitle: 'Web Project 3',
       modalDescription: 'My First Awesome Website',
       modalAdditionalInfo1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
       modalAdditionalInfo2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.'
   },
   {
      dataItem: 'app',
      imgSrc: '../assets/images/portfolio-4.jpg',
      imgAlt: 'portfolio icon',
      href: '#',
      header: 'App Development',
      content: 'Game App',
      dataOpen: 'app-1',
      modalId: 'app-1',
      modalTitle: 'App Project 1',
      modalDescription: 'My first Awesome App',
      modalAdditionalInfo1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      modalAdditionalInfo2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.'
   },  
   {
      dataItem: 'app',
      imgSrc: '../assets/images/portfolio-5.jpg',
      imgAlt: 'portfolio icon',
      href: '#',
      header: 'App Development',
      content: 'Gambling App',
      dataOpen: 'app-2',
      modalId: 'app-2',
      modalTitle: 'App Project 2',
      modalDescription: 'My Second Cool App',
      modalAdditionalInfo1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      modalAdditionalInfo2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.'
   },  
   {
      dataItem: 'app',
      imgSrc: '../assets/images/portfolio-6.jpg',
      imgAlt: 'portfolio icon',
      href: '#',
      header: 'App Development',
      content: 'Money App',
      dataOpen: 'app-3',
      modalId: 'app-3',
      modalTitle: 'App Project 3',
      modalDescription: '',
      modalAdditionalInfo1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      modalAdditionalInfo2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.'
   },  
   {
      dataItem: 'ui',
      imgSrc: '../assets/images/portfolio-7.jpg',
      imgAlt: 'portfolio icon',
      href: '#',
      header: 'UI design',
      content: 'Cool Design',
      dataOpen: 'ui-1',
      modalId: 'ui-1',
      modalTitle: 'UI Design 1',
      modalDescription: '',
      modalAdditionalInfo1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      modalAdditionalInfo2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.'
   },  
   {
      dataItem: 'ui',
      imgSrc: '../assets/images/portfolio-8.jpg',
      imgAlt: 'portfolio icon',
      href: '#',
      header: 'UI Design',
      content: 'Fantastic Design',
      dataOpen: 'ui-2',
      modalId: 'ui-2',
      modalTitle: 'UI Design 2',
      modalDescription: '',
      modalAdditionalInfo1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      modalAdditionalInfo2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.'
   },
      //  Add more portfolio card data with modal information as needed
   // {
   //    dataItem: 'test',
   //    imgSrc: 'https://static.miraheze.org/nonciclopediawiki/thumb/5/5d/One-Punch_Man_-_Saitama.jpg/330px-One-Punch_Man_-_Saitama.jpg',
   //    imgAlt: 'test', 
   //    href: '#',
   //    header: '...oh hi',
   //    content: 'You Found Me',
   //    dataOpen: 'test-1',
   //    modalId: 'test-1',
   //    modalTitle: '.... Well This is Just a test',
   //    modalDescription: '',
   //    modalAdditionalInfo1: 'I see you, this is only a test, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   //    modalAdditionalInfo2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.'
   // },
];


const generatePortfolioCards = () => {
   const portfolioGrid = document.querySelector('.portfolio-grid');
   portfolioCardData.forEach((item) => {
       const portCard = document.createElement('div');
       portCard.className = "portfolio-card";
       portCard.dataset.item = item.dataItem;
       portCard.dataset.open = item.dataOpen;
       
       const portCardBody = document.createElement('div');
       portCardBody.className = "card-body";
       
       const portImg = document.createElement('img');
       portImg.src = item.imgSrc;
       portImg.alt = item.imgAlt;
       
       const portHover = document.createElement('div');
       portHover.className = 'card-popup-box';
       const portHoverDiv = document.createElement('div');
       portHoverDiv.textContent = item.header;
       const portHoverContent = document.createElement('h3');
       portHoverContent.textContent = item.content;
       
       portfolioGrid.appendChild(portCard);
       portCard.appendChild(portCardBody);
       portCardBody.appendChild(portImg);
       portCardBody.appendChild(portHover);
       portHover.appendChild(portHoverDiv);
       portHover.appendChild(portHoverContent);
   });
};

// Function to generate modals
const generateModals = () => {
   portfolioCardData.forEach((item) => {
       const modalDiv = document.createElement('div');
       modalDiv.id = item.dataOpen;
       modalDiv.className = 'modal';
       modalDiv.setAttribute('data-animation', 'slideInOutTop');

       const modalDialog = document.createElement('div');
       modalDialog.className = 'modal-dialog';
       
       const modalHeader = document.createElement('header');
       modalHeader.className = 'modal-header';
       const modalTitle = document.createElement('h3');
       modalTitle.textContent = item.modalTitle;
       const modalCloseIcon = document.createElement('i');
       modalCloseIcon.className = 'fas fa-times';
       modalCloseIcon.setAttribute('data-close', '');
       modalHeader.appendChild(modalTitle);
       modalHeader.appendChild(modalCloseIcon);

       const modalBody = document.createElement('div');
       modalBody.className = 'modal-body';
       const imgWrapper = document.createElement('div');
       imgWrapper.className = 'img-wrapper';
       const modalImg = document.createElement('img');
       modalImg.src = item.imgSrc;
       modalImg.alt = item.imgAlt;
       imgWrapper.appendChild(modalImg);

       const textWrapper = document.createElement('div');
       textWrapper.className = 'text-wrapper';
       const titleParagraph = document.createElement('p');
       const strongTitle = document.createElement('strong');
       strongTitle.textContent = item.modalDescription;
       titleParagraph.appendChild(strongTitle);

       const additionalInfo1 = document.createElement('p');
       additionalInfo1.textContent = item.modalAdditionalInfo1;

       const additionalInfo2 = document.createElement('p');
       additionalInfo2.textContent = item.modalAdditionalInfo2;

       textWrapper.appendChild(titleParagraph);
       textWrapper.appendChild(additionalInfo1);
       textWrapper.appendChild(additionalInfo2);

       modalBody.appendChild(imgWrapper);
       modalBody.appendChild(textWrapper);

       modalDialog.appendChild(modalHeader);
       modalDialog.appendChild(modalBody);

       modalDiv.appendChild(modalDialog);

       document.body.appendChild(modalDiv);
   });
};

// Call functions to generate portfolio cards and modals
generatePortfolioCards();
generateModals();

// let portfolioCardData = [
//    {
//       dataItem: 'web',
//       imgSrc: '../assets/images/portfolio-1.jpg',
//       imgAlt: 'portfolio icon',
//       href: '#',
//       header: 'Web Development',
//       content: 'Food Website',
//       dataOpen: 'web-1'
      
//    },  
//    {
//       dataItem: 'web',
//       imgSrc: '../assets/images/portfolio-2.jpg',
//       imgAlt: 'portfolio icon',
//       href: '#',
//       header: 'Web Development',
//       content: 'Skating Website',
//       dataOpen: 'web-2'
//    },  
//    {
//       dataItem: 'web',
//       imgSrc: '../assets/images/portfolio-3.jpg',
//       imgAlt: 'portfolio icon',
//       href: '#',
//       header: 'Web Development',
//       content: 'Eating Website',
//       dataOpen: 'web-3'
//    },  
//    {
//       dataItem: 'app',
//       imgSrc: '../assets/images/portfolio-5.jpg',
//       imgAlt: 'portfolio icon',
//       href: '#',
//       header: 'App Development',
//       content: 'Game App',
//       dataOpen: 'app-1'
//    },  
//    {
//       dataItem: 'app',
//       imgSrc: '../assets/images/portfolio-6.jpg',
//       imgAlt: 'portfolio icon',
//       href: '#',
//       header: 'App Development',
//       content: 'Gambling App',
//       dataOpen: 'app-2'
//    },  
//    {
//       dataItem: 'app',
//       imgSrc: '../assets/images/portfolio-7.jpg',
//       imgAlt: 'portfolio icon',
//       href: '#',
//       header: 'App Development',
//       content: 'Money App',
//       dataOpen: 'app-3'
//    },  
//    {
//       dataItem: 'ui',
//       imgSrc: '../assets/images/portfolio-4.jpg',
//       imgAlt: 'portfolio icon',
//       href: '#',
//       header: 'UI design',
//       content: 'Cool Design',
//       dataOpen: 'ui-1'
//    },  
//    {
//       dataItem: 'ui',
//       imgSrc: '../assets/images/portfolio-8.jpg',
//       imgAlt: 'portfolio icon',
//       href: '#',
//       header: 'UI Design',
//       content: 'Fantastic Design',
//       dataOpen: 'ui-2'
//    },  
//    // {
//    //    dataItem: 'test',
//    //    imgSrc: 'https://static.miraheze.org/nonciclopediawiki/thumb/5/5d/One-Punch_Man_-_Saitama.jpg/330px-One-Punch_Man_-_Saitama.jpg',
//    //    imgAlt: 'test', 
//    //    href: '#',
//    //    header: 'Testing a new Card',
//    //    content: 'Just a test, dont activate',
//    // }
// ];

// portfolioCardData.forEach((card) => {
//    const portCard = document.createElement('div');
//    portCard.className = "portfolio-card";
//    const portCardBody = document.createElement('div');
//    portCardBody.className = "card-body";
//    portCard.dataset.item = card.dataItem;
//    portCard.dataset.open = card.dataOpen;
//    const portImg = document.createElement('img');
//    portImg.src = card.imgSrc;
//    portImg.alt = card.imgAlt;
//    const portHover = document.createElement('div');
//    portHover.href = card.href;
//    portHover.className = 'card-popup-box';
//    const portHoverDiv = document.createElement('div');
//    portHoverDiv.innerHTML = card.header;
//    const portHoverContent = document.createElement('h3');
//    portHoverContent.innerHTML = card.content;
//    const portGrid = document.querySelector('.portfolio-grid');

//    portGrid.appendChild(portCard);
//    portCard.appendChild(portCardBody);
//    portCardBody.appendChild(portImg);
//    portCardBody.appendChild(portHover);
//    portHover.appendChild(portHoverDiv);
//    portHover.appendChild(portHoverContent);
// });