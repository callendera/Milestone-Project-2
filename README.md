# Milestone Project 2
## Check out my website [here](https://callendera.github.io/Milestone-Project-2/)
## Objective
My second Milestone Project is a website for a Non-Profit organization founded by myself and fellow LGBTQ+ community member Erin Munoz.
Our Organization is the Fayette County PRIDE Foundation. The organization is in the begining stages, so a website to gain community support and to get people involved is very important.
This project also displays the skills learned in the modules leading up to this project including:
HTML Fundamentals, CSS Fundamentals, User Centric Frontend Developement, JavaScript, and Interactive Frontend Developement.
By adding Javascript and Interactive Frontend Developement to my skill set, I have added to the user interactions within my site. 
Not only does the site have excellent UX, but it allows the user to interact and become involved in our Organization.
## Project Description and UX
The goal of this website is to provide a place where users can:
* Make Donations
* Learn about our organization
* Recieve event updates/See upcomming events
* Get Sponsorship details
* Discover our Social Media pages
* Submit Volunteer Application 
* Print Vendor Application
* Subscribe to our Quarterly News Letter

The site is fully functional on all screen sizes with extensive testing for each feature. The site is meant to have a minimalist aesthetic to give a modern feel.

* User Stories:
    * As someone who is interested in making a donation, I visit the organizations landing page. On that page there is an option to donate in the Navbar. 
    I click on the button and am redirected to the GofundMe page for Fayette County PRIDE where the user can make a donation.
    * I am interested in finding out about the organization and requesting more information. I visit the page and hit the 'About Us' option in the Navbar
    and am directed to the section that gives the organization's background and purpose for work. There is also an option to 'Learn More' that directs the user to the subscription form 
    that allows them to request more information. 
    After the user completes and submits the form they will see a message that says 'Sent!' after receiving the form the user will recieve an email from an organization member acknowledging the receipt of the subscription form and with the information requested. 
    * I am a user trying to check out upcoming events. Upon comming to the landing page I click on the Nav Link for 'Events' and am directed to the timeline that displays the events.
    From there the evnts are listed with dates and addresses. There is also a Google Map API that shows the user exactly where each event is being held. The user can also request event updates through the subsription form.
    * I am interested in becoming a volunteer for an event throught the organization. I come to the landing page and click the volunteer navigation and am directed to the volunteer application. 
    Upon completing and sending the application a message appears that says 'Sent!' upon recieving the form a member of the organization emails a confirmation of receiving the form. 
    Also, on the landing page, when you scroll another option to beome a volunteer is available. This option leads you to the same page, but includes a short snippet of text for the user to give context about volunteering for the organization.
    * I am a user that is interested in becoming a sponsor. After landing on the home page I select the sponsorship option in the Navbar and am directed to the subscription form where the user can request sponsorship information.
    Just like above, the user will fill out the form and send it. The message will appear that confirms the form is sent. The user will recieve an email from an organization member acknowledging the receipt of the subscription form and with the information requested.
    * I am a vendor who woud like to purchase a spot at an upcoming event. After coming to the landing page and scrolling down to the vendor application is available in a pinatble PDF version. A modal pulls up with an option to print the PDF.
    I click on the 'Print PDF' button and the PDF pulls up in the browser in a seperate tab.

### Original Mockup

![Original Mockup](https://raw.githubusercontent.com/callendera/Milestone-Project-2/master/assets/images/WF.jpg)
 
### Revamped Mockup
 
 ![Revamped Mockup](https://raw.githubusercontent.com/callendera/Milestone-Project-2/master/assets/images/WF1.png) 
 ![Revamped Mockup](https://raw.githubusercontent.com/callendera/Milestone-Project-2/master/assets/images/WF2.png)
 ![Revamped Mockup](https://raw.githubusercontent.com/callendera/Milestone-Project-2/master/assets/images/WF3.png)
 ![Revamped Mockup](https://raw.githubusercontent.com/callendera/Milestone-Project-2/master/assets/images/WF4.png)
 
## Features

### Existing Features
* Navbar 
    * Fixed to the top for easy navigation 
    * Organization Logo in left corner
    * Includes: Home|Volunteer|About Us|Events|Sponsorship Each navigates you through the site in decending order
    * Donate button linked to GoFundMe page
    * Navigation links become a toggler in the mobile veiw and smaller screen sizes
* Volunteer, Vendor Application, Donate
    * These sets of divs are to allow the user to scroll through the options they have to get involved.
    * The image provides good UX for each section
    * The div containing the short context and button to "Learn More" either links the user to a PDF(vendor application), a second page within the site(volunteer application), or to the GoFundMe page(donations) 
        * Vendor Application - Available in PDF form only to provide an appropriate screening process for our vendors. Certain, specific, qualifications are very important to screen and need to be adequetly monitored according to the PDF specifications. 
        The form can then be emailed, or returned in person to an Executive Administrator.
        * Volunteer Application - This form can be submitted through the site on the volunteer.html page. Upon filling out the form and submitting it through the site, a confirmation message appears to confirm it is sent.
        * Donate - All donations are made through the GoFundMe page until further skill development has been aquired to do this solely through the site. 
* About Us
    * A short description of who we are as an organization with a group picture
    * Button that links to the subscription/more information jumbotron
* Events
    * This feature gives info about upcoming events
    * Tells when certain event tickets go on sale 
    * Google Map API is located just below that to show the user exactly where the events are being held
* Jumbotron
    * Subscription box to request information, get event updates, sponsorship details, or subsribe to our Quarterly News Letter.
    * After filling out the form and submitting it, a message pops up to confirm the form had been sent. 
    * The user will receive an email with the appropriate information shortly after submitting the form.
* Social links
    * Links to Facebook, Twitter, and Instagram are included that open into seperate tag.
    * Instagram is highlighted in this section to display our instagram photogallery. 
    * each image can be clicked and it will open that image in a fancybox photo gallery.
* Footer
    * This area gives business creditials(501(c)3 non-profit organization), address/phone number, and our social links once again.
    * this encourages a user who is just looking for our contact information to scroll through the entire page and discover something they didn't know they were looking for.

### Features left to Implement 
* Donations
    * A feature i would like to implement after I gain the skill set for it is a way to make donations through the site itself.
* Purchase Event Tickets
    * April 20th, 2020 our tickets for the LGBTQ+ Gala will go on sale, I want to implement a way to purchase the tickets from our site. 

## Tools/Technologies
* [AWS Cloud9](https://c9.io/login)
    * Cloud9 hosted my Workspace for this project
* [Git](https://git-scm.com/)
    * used to push and commit any and all changes to my repository on GitHub
* [Bootstrap](https://getbootstrap.com/)
    * Provided my buttons, modal, carousel, Navbar, and basic grid structure 
* [JQuery](https://jquery.com/)
    * The project uses JQuery for DOM manipulation (Ex: Modal)
* [JavaScript](https://www.javascript.com/)
    * Google Map API, Email.js for form submission, and modal/bootstrap provided javascript
* [Fancybox](http://fancybox.net/)
    * Used for Instagram photogallery

## Testing
### Automated Testing
* Validation Services
    * [W3C Markup Validator](https://validator.w3.org/) was used to validate my HTML code.
    * [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) was used to validate my CSS code.
    * [JS Fiddle](https://jsfiddle.net/api/post/library/pure/) was used to test my Email.js code for both of my forms.

### UX stories testing
* As a user I want to:
    * Make a Donation:
        * After coming to the landing page,
        * click the donation button 
        * perform the action through the GoFundMe page.
        * The page opens in a seperate tab.
        * You can also scroll down the landing page and come to another section with a button to open the GoFundMe.
        * it also opens into a seperate tab.
    * Find more information about the organization:
        * Upon landing on the home page,
        * click the About Us option in the Navbar
        * it takes you to the "Making History, Advocating for Change" section.
        * In that section there is a button
        * button says 'Learn More' which will direct the user to the subscribe form where they can request more specific info.
            * The subscribe form:
                * Has 4 boxes with placeholders that say First Name, Last Name, Email, and What are you looking for?
                * the form is sent to the email address associated with the email.js account
        * after filling out the form and submitting it,
        * the submit button says 'sending...' and then a message displays that says sent, 
        * if the form fails to send it says 'message send failure'
        * The email.js for the form does not fail! everything works perfectly.
        *  a return email is sent to the user telling them the message was received
    * Finding upcoming events
        * Come to the home page, use the events option in the Navbar
        * after being directed to the event timeline, the events are listed in chronological order. 
        * At the bottom of the timeline, there is a google map API that gives 3 markers to highlight where the events are being held
        * there is also an option (in the form of a button) to receive event updates.
        * this directs you to the subscribe form to request the event updates.
        * after filling out the form and submitting it,
        * the submit button says 'sending...' and then a message displays that says sent, 
        * if the form fails to send it says 'message send failure'
        * The email.js for the form does not fail! everything works perfectly.
        *  a return email is sent to the user telling them the message was received
    * Volunteering
        * After comming to the landing page and clicking the volunteer option in the navbar
        * the user is directed to a new page solely for the volunteer application. 
        * The Volunteer Application:
            * Has 8 input spaces for First Name, Last Name, Email, Address, Address 2, city, state, zip, and a Message that says "Why do you want to volunteer for Fayette County PRIDE Foundation? What event are you interested in?"
            * The button says 'Submit Application'
            * after filling out the form and submitting it,
            * the submit button says 'sending...' and then a message displays that says sent, 
            * if the form fails to send it says 'message send failure'
            * The email.js for the form does not fail! everything works perfectly.
            *  a return email is sent to the user telling them the message was received
    * Sponsorship details
        * After landing on the home page, click the sponsorship link in the navbar.
        * the link will direct you to the subscribe jumbotron to request the information you wanted.
        * after filling out the form and submitting it,
            * the submit button says 'sending...' and then a message displays that says sent, 
            * if the form fails to send it says 'message send failure'
            * The email.js for the form does not fail! everything works perfectly.
            * a return email is sent to the user telling them the message was received
    * Vendor Application
        * come to the landing page, scroll down tot the vendors section and click the button that says learn more
        * this opens a modal and the modal has an option to print PDF
        * when you click print PDF a seperate tab opens to present the PDF to be printed.
    * Checking out Social media 
        * After making it to the landing page 
        * scroll down to the social media section
        * there are links to each of our social media accounts.
        * each link opens into a seperate tab.
        * below that I am highlighting our Instagram account in a small photo gallery.
        * Those images are also linked to the individual post on our instagram page. 
        * they open into a seperate tab.

## Manual Testing 

### Desktop, Tablet, and Mobile
All features were tested on Google Chrome, Internet Explorer, and Firefox. Mobile/Tablet features were tested on Apple and Samsung devices. Everything was tested using a wide range of screensizes.
* Navbar
    * Fixed to the top of the page so, to navigate throughout the site 
    * Appears with the intended White background and font style 'Amatic SC, cursive'
    * Displays NavBrand labeled with the organization logo when clicked it links back to the Landing page
    * The NavItems appear in order: Home | Volunteer | About Us | Events | Sponsorship
        * They have the color of a grey white until hovered over, they turn into a darker black to match the NavBrand to let the user know it can be clicked. 
        * When any of the NavItems are clicked they navigate you to the correct place on the page.
            * Home --> Landing Page
            * Volunteer --> Volunteer application page
            * About Us --> "Making History, Advocating for Change" section
            * Events --> Event timeline, Map API
            * Sponsorship --> Subscription page
        * All NavItems displayed appear in a Navbar Toggler starting after 576px
            * The Items listed above are displayed in the same order when the toggler smoothly drops down.
            * After clicking the toggler and selecting the section the user is interested in visiting the toggler remains open until it is closed by clicking the toggler again.
    * On the right of the NavBar a button is displayed that says 'Donate'
        * 'Donate' turns blue when hovered to let the user know it can be clicked.
            * After clicking the 'Donate' button, a new tab opens to the GoFundMe page.
        * This part of the Navbar disapears starting at 768px.
            * Making that disapear makes the navbar look better in the smaller screen sizes.

* Callout
    * This section is just a background image, crowd.jpg, that is in a fixed position for the rest of the webpage to scroll past it.
    
* Involved section
    * This section give 3 option to get involved and help our organization by volunteering, being a vendor at an event, or donations.
    * Each section has 2 boxes, 1 is an image:
        * Volunteer --> rainbow.jpg
        * Vendor Application --> vendors.jpg
        * Donate --> holding.jpg
    * The other box is a blue div that contains a bit of description for each option and a button
        * The button is white and turns blue to match the background of the div.
        * Volunteer --> opens to the volunteer application page.
        * Vendor Application --> opens Modal 
            * Modal: 
                * The Modal is triggered after the button in the Vendor Application is triggered
                * The Modal appears and darkens the screen behind it.
                * The structure is as follows:
                    * Modal Title:'Vendors'
                    * Modal Body: 'Please print Vendor Application PDF'
                    * Dark grey 'close' button, and white 'Print PDF' button that changes to blue when hovered
                * When you click the 'Print PDF' a seperate tab opens with the ability to print the PDF
        * Donate --> opens the GoFundMe page to facilitate the donation
    * Each subsection is arranged in a stairstep position and aligned with the following or preceding section on the browser 1200px and bigger, everynother smaller screensize has them aligned side by side.
    * All images and divs adjust well with screensizes as outlined in my Media Queries
    
* About 
    * This section have a heading "Making History, Advocating for Change" that is underlined by a yellow block divider. 
    * The heading is followed by a short paragraph that gives a breif description of our work.
    * Following is a button that is white and changes to blue when hovered. 
    * That button leads to the subscription form where the user can request further information about the organization.
    
* Events
    * In this section The title 'Upcoming Events' is underlined with a blovk divider
    * Bellow that there is a white button, that when its hovered turns blue, it says "Get Event Updates": this button directs you to the subscription form.
    * The Time Line appears in chronological order.
    * The timeline has with the City and place for each concert. 
    * a small alert is at the end of the LGBTQ Gala to let the user know when the tickets go on sale 
    * All timeline items are centered, except on Mobile view, those are placed to the left for a better UX.
    * The Map API is located below the timeline. It's size adjusts well with each screensize
    
* Jumbotron
    * The Jumbotrons heading says Subscription, it is underlined with a yellow block divider, this encourages the user to request more information for a wide variety of things. 
    * The inputs for the form are: First Name, Last Name, Email, And a Message 'What are you looking for?'
    * The form's inputs are all required, after submitting the form with all feilds appropriately filled out, the button says 'sending...' and then a message appears that says the message is sent. 
    * A return email confirming the message has been received is then sent to the user.
* Social media
    * The 1st heading invites the user to follow us on our social media sites. 
    * A link to our facebook, twitter, and instagram are given just bellow the header.
    * we then wanted to highlight our instagram page by shareing our images in a photogallery.
    * each image can be clicked and opened into a photogallery with options to scroll through images, play slide show or zoom.
* Footer
    * The footer contains our contact information, a small snippet of what type of non-profit we are and our 3 social links once again
### Bugs Discovered
* Solved Bugs:
    * Email.js sending blank emails
        * the inputs of the forms had incorrect id names
        * the {{from email}} was in the To_Email spot
    * Navbar toggler not dissappearing after click on link 
        * Added data-toggle="collapse" data-target=".navbar-collapse.show" to li 

### Further Testing

* Asked fellow students and mentor to look at my webpage on a range of devices to report any bugs found.

## Deployment

1. I logged into my GitHub
2. Navigated to my GitHub repository
3. Clicked on my 'Milestone Project 2' 
4. Beneath the repository name click the 'Settings' button
5. I scrolled down to the 'GitHub Pages' section 
6. I then selected the 'Master Branch' located under the 'Source' section
7. Finally I hit save
8. My site was published at https://callendera.github.io/Milestone-Project-2/

## Credits

### Content
* All text was derived directly from myself and my fellow organization member, Erin Munoz

### Media
* The photos used in my webpage were from Google Images, and my own images


### Acknowledgements
* I recieved inspiration for this project from The Code Institute's Guidlines for Milestone Project 2, and
* Fellow organization member, Erin Munoz 













