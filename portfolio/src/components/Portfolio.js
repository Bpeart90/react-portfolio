import React from "react";

function Portfolio() {
    let resumeData = [
        {
            imgurl: "../../images/2020-04-16.png",
            name: "Space",
            description: "On April 11th, 2020, i participated in a group project for my class where we were charged with building a new website. the them of the website was spce and my team created a interactive way for people to learn about space in a fun environment. For this project i was charged with calling APIs that would display fun interesting facts that are displayed on the homepage on the site."
        },
        {
            imgurl: "../../images/2020-04-17.png",
            name: "Astroid Search",
            description: "I also created a secondary page that allowed the user to search by dates. the search would pull results from the API showing the user all the asteroids that were close to the earth."
        },
        {
            imgurl: "../../images/2020-04-17.2.png",
            name: "Schedule",
            description: "One homework for the Bootcamp was to create a schedule that will save the users meeting/ appointments, change the date automatically and change collorss with the time of date."
        },
        {
            imgurl: "../../images/2020-04-19 (2).png",
            name: "Password Generator",
            description: "For this homework assignment for the Bootcamp, i was to create a password Generator that will create the user unique password based on the requirements that the user selected."
        },
        {
            imgurl: "../../images/2020-05-27.png",
            name: "Eat-Da-Burger",
            description: "For this assignment i was tasked with creating a fullstack website, which i was tasked with creating the front end and back end code. the website used a server which i was tasked with pushing to the heroku website that allows the website to host the fully functional site."
        },
        {
            imgurl: "../../images/2020-06-19.png",
            name: "Note-Writer",
            description: "For this assignment i was task with creating an application that allows the user to write, save, edit and delete notes. The application was built useing node.js, express.js, and javascript. I was tasked with creating both the front end and back end code for the website. the website used a server which i was tasked with pushing to the heroku website that allows the website to host the fully functional site."
        },
        {
            imgurl: "../../images/2020-06-15.png",
            name: "Helping Hands",
            description: "For the second project of the bootcamp, my team created a website that is designed to allow organizations to post a volunteer opportunity and the opportunities can be claimed by people looking for the opportunity to volunteer. this project incorporated the use of Node.js, Express.js, Handlebars, and MySQL. for this engagement i was charged with creating the routes, the express models, and helped build the MySQL database."
        }
    ]

    return (
        <section id="portfolio">
            <div className="row">
                <div className="eight columns">
                    <h1>Portfolio</h1>
                    <p>(by clicking on the image, you can visit to the website)</p>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {
                            resumeData.map((item) => {
                                return (
                                    <div className="columns portfolio-item">
                                        <div className="item-wrap">

                                            <img src={`${item.imgurl}`} className="item-img" />
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>{item.name}</h5>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Portfolio;