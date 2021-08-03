import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  Button,
  CardMenu,
  IconButton,
  CardText,
  CardActions,
} from "react-mdl";
import Verse from "../../Assets/images/VersEtile.PNG";
import style from "./style.css";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="project-grid" id="Portfolio">
          {/* //  Project 1 */}
          <Card shadow={5} className="projectcard">
            <CardTitle
              style={{
                color: "#fff",
                height: "180px",
                background:
                  "url(https://www.bell-italia.com/blog/wp-content/uploads/2018/08/Le-5-Birre-Italiane-pi%C3%B9-conosciute-allestero-bell-italia-blog.jpg) center / cover",
              }}
            >
              Gentle Drinkers
            </CardTitle>
            <CardText>
              <p>
                Tools: Javascript| Node | Express | handlebars | Sequelize |
                MySQL| Passport | Cloudinary
              </p>
              <p>
                So many different varieties of beers to choose from, where
                should you start? Gentle Drinkers was created for all beer
                drinkers. The site helps the User by educating them about the
                different types of beers and locations of breweries.
              </p>
              <p>
                The User must be over 21 to interact with the website. Once they
                create an account, the member's page will load up. The User then
                will be able to Find a Beer depending on the ABV and flavor. If
                the user chooses another option, the page shows them featured
                Beer and Random beers. When the User completed the search for
                beer, they can log out, and the page will refresh to the main
                page.
              </p>
              <p></p>
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/ETroya/beerapp.git"
                target="_blank"
                colored
              >
                {" "}
                GitHub{" "}
              </Button>
              <Button
                href="https://gentledrinkers.herokuapp.com/"
                target="_blank"
                colored
              >
                Website
              </Button>
              <Button
                href="https://drive.google.com/file/d/1NB9YJZkugLydKt2yd0P0XxSreS-4A-WT/preview"
                target="_blank"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
          {/* //  Project 2 */}
          <Card shadow={5} className="projectcard">
            <CardTitle
              style={{
                color: "#fff",
                height: "180px",
                background:
                  "url(https://t3.ftcdn.net/jpg/00/84/93/10/360_F_84931086_r5YIaUmwGJJHNFWmBFaufKL0CCXNhmFO.jpg) center / cover",
              }}
            >
              B.U.B.B.L.E.S EMS
            </CardTitle>
            <CardText>
              <p>Tools: React | Javascript | Node | Express | MongoDB</p>
              This app will let users and admins log into an employee portal in
              which they can manage their own accounts. All the info is stored
              into databases that is all connected with Bubbles EMS.
              <p>
                Users will login into the web app thus pulling their stroed
                account info from Atlas DB. Now depending if the person will be
                a user or admin, the home screen will only show certain pages
                when logged into the web app.
              </p>
              Admins will have more control with the pages, while users will
              only have certain pages like time, comments and pay to view on the
              app. All of the info is stored into two collections within the
              database, employee DB and message board DB. All of it is being
              saved and all of that information is then being pulled onto the
              website.
              <p></p>
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/ETroya/Portal-Matriarch.git"
                target="_blank"
                colored
              >
                {" "}
                GitHub{" "}
              </Button>
              <Button
                href="https://peaceful-castle-79357.herokuapp.com/"
                target="_blank"
                colored
              >
                Website
              </Button>
              {/* <Button
                href="https://drive.google.com/file/d/1NB9YJZkugLydKt2yd0P0XxSreS-4A-WT/preview"
                target="_blank"
                colored
              >
                Live Demo
              </Button> */}
            </CardActions>
          </Card>

          {/* //  Project 3 */}
          <Card shadow={5} className="projectcard">
            <CardTitle
              style={{
                color: "#fff",
                height: "180px",
                background:
                  "url(https://images.macrumors.com/t/vMbr05RQ60tz7V_zS5UEO9SbGR0=/1600x900/smart/article-new/2018/05/apple-music-note.jpg) center / cover",
              }}
            >
              VersEtile
            </CardTitle>
            <CardText>
              <p>Tools: Javascript | HTML | CSS</p>
              <p>
                The purpose of this app would be that the user would be able to
                search their favorite song lyrics by their favorite artist. The
                bonus feature of this app is that they can translate the lyrics
                to a different language. If you look at other lyric websites
                you'll see that they are missing translations. This would also
                benefit the artist with exposure to their music
              </p>
              <p></p>
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/ETroya/lyrcis-app.git"
                target="_blank"
                colored
              >
                {" "}
                GitHub{" "}
              </Button>
              <Button
                href="https://versetile.netlify.app/"
                target="_blank"
                colored
              >
                Website
              </Button>
              <Button
                href="https://drive.google.com/file/d/11bEbXDShMJJ8zs5oV3RU1xZBk8F9eCol/preview"
                target="_blank"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
          {/* //  Project 4 */}
          <Card shadow={5} className="projectcard">
            <CardTitle
              style={{
                color: "#fff",
                height: "180px",
                background:
                  "url(https://www.lsuhsc.edu/administration/ocp/docs/HIPS/HIPSBU/content/images/Password_Lock.jpg) center / cover",
              }}
            >
              Password-Generator
            </CardTitle>
            <CardText>
              <p>Tools: Javascript | HTML | CSS</p>
              <p>
                Have you ever had your account hacked? This app will ensure that
                this will not happen again.
              </p>
              <p>
                The user will have the ability to pick from a variety of
                passwords depending on how many characters they would like to
                use. If the user is not satisfied they can restart the process.
              </p>
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/ETroya/Generate-Password.git"
                target="_blank"
                colored
              >
                {" "}
                GitHub{" "}
              </Button>
              <Button
                href="https://etroya.github.io/Generate-Password/"
                target="_blank"
                colored
              >
                Website
              </Button>
              <Button
                href="https://drive.google.com/file/d/1Nk3UJr_yu0qcq7sbGn7Kg8GqeOWdrleQ/preview"
                target="_blank"
                colored
              >
                Live Demo
              </Button>
            </CardActions>
          </Card>
          {/* //  Project 4 */}
          <Card shadow={5} className="projectcard">
            <CardTitle
              style={{
                color: "#fff",
                height: "180px",
                background:
                  "url(https://owl.excelsior.edu/wp-content/uploads/sites/2/2018/09/blank-cards-composition-268351.jpg) center / cover",
              }}
            >
              Note-Taker
            </CardTitle>
            <CardText>
              <p>Tools: Javascript | HTML | Express | Node | CSS</p>
              <p>
                I love the idea of being able to write, save, and delete notes
                on an app. A sticky note can get misplaced and lost. With the
                Note-Taker you never have to worry again.
              </p>
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/ETroya/Note-Taker.git"
                target="_blank"
                colored
              >
                {" "}
                GitHub{" "}
              </Button>
              <Button
                href="https://salty-hollows-93620.herokuapp.com/"
                target="_blank"
                colored
              >
                Website
              </Button>
              {/* <Button
                href="https://drive.google.com/file/d/1Nk3UJr_yu0qcq7sbGn7Kg8GqeOWdrleQ/preview"
                target="_blank"
                colored
              >
                Live Demo
              </Button> */}
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Angular</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is VueJS</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MondgoDB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <div className="content-title">
          <h1>Projects</h1>
        {/* <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab className="Header">Projects</Tab>
          <Tab>Project 2</Tab>
          <Tab>Project 3</Tab>
          <Tab>Project 4</Tab>
        </Tabs> */}
        </div>
      <div>
        <Grid>
          <Cell col={12}>
            <div>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
        </div>
      </div>
    );
  }
}
export default Portfolio;
