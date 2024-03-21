console.log('hi')
let portfolioCardData = [
   {
      dataItem: 'web',
      imgSrc: '../assets/images/portfolio-1.jpg',
      imgAlt: 'portfolio icon',
      href: '#',
      header: 'Web Development',
      content: 'Food Website',
      dataOpen: 'web-1'
   },  
   {
      dataItem: 'web',
      imgSrc: '../assets/images/portfolio-2.jpg',
      imgAlt: 'portfolio icon',
      href: '#',
      header: 'Web Development',
      content: 'Skating Website',
   },  
   {
      dataItem: 'web',
      imgSrc: '../assets/images/portfolio-3.jpg',
      imgAlt: 'portfolio icon',
      href: '#',
      header: 'Web Development',
      content: 'Eating Website',
   },  
   {
      dataItem: 'ui',
      imgSrc: '../assets/images/portfolio-4.jpg',
      imgAlt: 'portfolio icon',
      href: '#',
      header: 'UI design',
      content: 'Cool Design',
   },  
   {
      dataItem: 'app',
      imgSrc: '../assets/images/portfolio-5.jpg',
      imgAlt: 'portfolio icon',
      href: '#',
      header: 'App Development',
      content: 'Game App',
   },  
   {
      dataItem: 'app',
      imgSrc: '../assets/images/portfolio-6.jpg',
      imgAlt: 'portfolio icon',
      href: '#',
      header: 'App Development',
      content: 'Gambling App',
   },  
   {
      dataItem: 'app',
      imgSrc: '../assets/images/portfolio-7.jpg',
      imgAlt: 'portfolio icon',
      href: '#',
      header: 'App Development',
      content: 'Money App',
   },  
   {
      dataItem: 'ui',
      imgSrc: '../assets/images/portfolio-8.jpg',
      imgAlt: 'portfolio icon',
      href: '#',
      header: 'UI Design',
      content: 'Fantastic Design',
   },  
   // {
   //    dataItem: 'test',
   //    imgSrc: 'https://static.miraheze.org/nonciclopediawiki/thumb/5/5d/One-Punch_Man_-_Saitama.jpg/330px-One-Punch_Man_-_Saitama.jpg',
   //    imgAlt: 'test', 
   //    href: '#',
   //    header: 'Testing a new Card',
   //    content: 'Just a test, dont activate',
   // }
];

portfolioCardData.forEach((card) => {
   const portCard = document.createElement('div');
   portCard.className = "portfolio-card";
   const portCardBody = document.createElement('div');
   portCardBody.className = "card-body";
   portCard.dataset.item = card.dataItem;
   portCard.dataset.open = card.dataOpen;
   const portImg = document.createElement('img');
   portImg.src = card.imgSrc;
   portImg.alt = card.imgAlt;
   const portHover = document.createElement('a');
   portHover.href = card.href;
   portHover.className = 'card-popup-box';
   const portHoverDiv = document.createElement('div');
   portHoverDiv.innerHTML = card.header;
   const portHoverContent = document.createElement('h3');
   portHoverContent.innerHTML = card.content;
   const portGrid = document.querySelector('.portfolio-grid');

   portGrid.appendChild(portCard);
   portCard.appendChild(portCardBody);
   portCardBody.appendChild(portImg);
   portCardBody.appendChild(portHover);
   portHover.appendChild(portHoverDiv);
   portHover.appendChild(portHoverContent);
});