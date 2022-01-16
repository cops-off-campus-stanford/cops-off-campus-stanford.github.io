let topTitleDiv = "<h4>Abolish Stanford</h4>";

let titleDiv =
  "<h1>Stanford Campus Mapping</h1>";

let bylineDiv = "<p></p>";

let descriptionDiv =
  '<p>A spatial and temporal look into policing at Stanford. Here we will use Mapbox storytelling template to first, give an overview of the decrease in subway usage around the city, and second, zoom into three different locations that exemplify the diversity of conditions around New York.</p>' +
  '<p>We will use the <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2020/03/25/10_WebmappingTurnstileData.html">previous web map displaying MTA turnstile data</a> as the basis for our story. In this process we will use Mapbox GL JS, as well as Intersection Observer and Scrollama as our main JavaScript libraries.</p>' +
  "<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p>" +
  '<p style="text-align:center">Scroll to continue<br>▼</p>';

let footerDiv =
  '<p>This story is based on data by the <a href="http://web.mta.info/developers/turnstile.html">Metropolitan Transit Authority</a> and reporting by the <a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">New York Times</a>, <a href="https://ny.curbed.com/2020/3/24/21192454/coronavirus-nyc-transportation-subway-citi-bike-covid-19">Curbed</a>, and <a href="https://thecity.nyc/2020/03/subway-ridership-plunge-deepest-at-big-manhattan-stations.html">The City</a>.</p>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a></p>';

let divChapter1 =
  "<h3>Formation of SUDPS</h3>" +
  '<img src="images/image13.png">' +
  '<p class="imageCredit">Image Credit: Abolish Stanford</p>' +
  "<p> The SUDPS isn’t fully private, like Stanford originally wanted it to be, and isn’t fully public. It exists in a hybrid position where they’re partially governed by Stanford, and partially governed by the Santa Clara County Sheriff in accordance with a Memorandum of Understanding (MoU) between Stanford and Santa Clara County. Stanford created a problematic, destructive, and strange agreement with the County, which is what allowed campus security to be deputized to positions where they have about the same training as police officers, and the same enforcement power. The SUDPS has existed in this state since the 1970s, which we will trace the history of now. </p>";

  let divChapter2 =
  "<h3>New Public Safety Building</h3>" +
  '<img src="images/image1.jpg">' +
  '<p class="imageCredit">Image Credit: Abolish Stanford</p>' +
  "<p> In February 2021, Stanford completed the construction of a new $33.5 million Public Safety Building, which had been in the University’s capital plan for over a decade. The building is intended to consolidate Stanford University Department of Public Safety (SUDPS) personnel and functions into a single location on East Campus. The building’s construction has been marked by delays and budgetary expansions, concerns over increased policing and punishment, and uncertainty regarding the building’s functions. </br></br> The Public Safety Building has appeared as a forecasted construction project on the University budget since the 2005-2006 fiscal year. At the time, the project was expected to be completed in 2008 with a cost of $4.4 million. However, year after year, the project was further delayed and the projected cost was increased. By the 2016-2017 fiscal year, the project was expected to be completed in 2019 and the expected cost had risen to $16.6 million. Yet one year later, the expected timeframe remained the same though the expected cost jumped to $31.5 million. The final cost and completion time were a significant departure from initial expectations, and the community was given little transparency regarding the source of the delays and price increases. </br></br> Once construction actually began, members of the community started raising concerns about the purpose of the building given its ties to policing, which many feel undermines public safety. Others expressed concerns about the timing of construction given the budgetary constraints during the COVID-19 pandemic, which the University previously cited as a major force in its decision to stop paying contracted service workers. Finally, the community has been left in the dark regarding the building’s internal functions - SUDPS has avoided releasing a statement about the purpose of the building. Despite the lack of transparency, a project overview from the building’s construction firm states that the building will incorporate “prisoner processing, equipment/evidence storage, women’s locker and shower rooms, spill-over administrative spaces and telephone equipment rooms,” suggesting that the building will be used directly by SUDPS for policing.</p>";

let divChapter3 =
  "<h3>Murder of Pedro Calderon</h3>" +
  '<img src="images/image5.png">' +
  '<p class="imageCredit">Image Credit: </p>' +
  "<p>On March 20, 2002 (during finals week of winter quarter), Pedro Calderon, a 20-year-old resident of East Palo Alto, was shot and killed by police at the base of the Stanford foothills. Calderon, who was a Hispanic man, was initially flagged by a SUDPS community service officer who thought he resembled a suspect in a series of car burglaries on campus. While Calderon attempted to flee the confrontation that ensued, Stanford Police Deputy Jeff Bell and Palo Alto Police Officer Jessica Perryman each fired one shot. Calderon and Perryman were taken to Stanford Hospital; Perryman was treated for cuts and abrasions to her legs, and Calderon was pronounced dead.</p>";

let divChapter4 =
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Overall collapse of subway usage</h3>" +
  '<div style="max-width:1200px; margin-left:auto; margin-right:auto"><img src="images/Chapter_4_Image.jpg"></div>' +
  "<p class='imageCredit' style='max-width:600px; margin-left:auto; margin-right:auto'><a href='https://qri.cloud/nyc-transit-data/turnstile_daily_counts_2020'>NYC Subway Turnstile Counts - 2020 (Qri)</a></p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>As can be seen in the chart above, subway usage collapsed abruptly right after the first COVID-19 case was documented in the city. It was in fact the declaration of a state of emergency, on March 7, 2020, that precipitated this near total drop in subway ridership.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>After a few weeks of the declaration of state of emergency, subway usage in the city reached its lowest point, almost 90% less than the same time period the year before. Since then, the number of people that use the subway has remained drastically low. Even after the city began its re-opening scheme on June 8, 2020, subway usage was still more than 70% below 2019 levels.</p>" +
  '<div style="max-width:600px; margin-left:auto; margin-right:auto"><iframe title="vimeo-player" src="https://player.vimeo.com/video/529512696" width="600" height="277.5" frameborder="0" allowfullscreen></iframe></div>' +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>This difference, however, varies across the city, with some parts of it seeing a much steeper decline and others witnessing a stronger recovery. Nevertheless, even a year after the pandemic first hit New York City, the number of daily subway commuters remains below 2019 levels.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>That being said, other transportation networks have fared differently. For example, after a similar decline right after the state of emergency was declared, Citibike has seen its number of users reach and even surpass 2019 levels. City buses, on the other hand, also remain underutilized compared to their usage pre-pandemic.</p>";

let divChapter5 =
  "<h3>The South Bronx, as Always</h3>" +
  '<img src="images/Chapter_4_Image.jpg">' +
  '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.</p>";

var config = {
  style: "mapbox://styles/jfs2118/ckrc7wznz0mf818qwou9f42gy",
  accessToken:
    "pk.eyJ1IjoiamZzMjExOCIsImEiOiJjazJvdXZ2MnkxN2owM2Rwbm1wNWVpYXptIn0.pT-GXNoNxB7l1SMBh2Yjxg",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "overallMap",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-122.178822, 37.4296781],
        zoom: 14,
        zoomSmall: 5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "incomeUnderlay",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-122.1593416, 337.4282175],
        zoom: 10,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "elmhurstHospital",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-122.1712232, 37.4126636],
        zoom: 16,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "weekdayTrips",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-73.886201, 40.744566],
        zoom: 16,
        zoomSmall: 14,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "southBronx",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-73.918037, 40.816093],
        zoom: 15,
        zoomSmall: 14,
        pitch: 40,
        bearing: 8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "medianIncome",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "medianIncome",
          opacity: 0,
          duration: 300,
        },
      ],
    },
  ],
};
