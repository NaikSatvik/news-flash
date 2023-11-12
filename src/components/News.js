import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Arab Islamic Summit Saudi Arabia On Israel Hamas War Says End Siege For Peace - NDTV",
            "description": "Arab leaders and Iran's president meeting Saturday in the Saudi capital roundly condemned Israel's actions in its war against Hamas in Gaza, as fears mount the conflict could draw in other countries.",
            "url": "https://www.ndtv.com/world-news/arab-islamic-summit-saudi-arabia-on-israel-hamas-war-says-end-siege-for-peace-4567228",
            "urlToImage": "https://c.ndtvimg.com/2023-11/kt44npkg_arab-summit-meet_120x90_11_November_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738",
            "publishedAt": "2023-11-11T13:42:05Z",
            "content": "The Arab and Muslim leaders called for an immediate end to the Gaza war at the summit (AFP)\r\nRiyadh: Arab leaders and Iran's president meeting Saturday in the Saudi capital roundly condemned Israel's… [+4833 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Poulomi Ghosh",
            "title": "'I have come here to apologise': PM Modi in Telangana; consoles Madiga leader - Hindustan Times",
            "description": "PM Modi called Dalit leader Manda Krishna Madiga his brother as he addressed a Madiga community rally in Secunderabad on Saturday.  | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/i-have-come-here-to-apologise-pm-modi-in-telangana-consoles-madiga-leader-on-stage-101699709233411.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/11/11/1600x900/PM_Modi_madiga_1699709250120_1699709257016.JPG",
            "publishedAt": "2023-11-11T13:34:09Z",
            "content": "Prime Minister Narendra Modi on Saturday attended a Madiga rally in Secunderabad in Telangana in a major reach out to the Dalit community in tune with BJP's promise of an OBC chief minister if it com… [+2141 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Free Press Journal"
            },
            "author": "FPJ Web Desk",
            "title": "NASAs Webb Space Telescope Discovers Milky Way-Like Galaxy In Early Universe, Heres What We Know - Free Press Journal",
            "description": "It was believed that barred spiral galaxies like the Milky Way could not be visible until the universe, estimated to be 13.8 billion years old, had reached half its current age.",
            "url": "https://www.freepressjournal.in/science/nasas-webb-space-telescope-discovers-milky-way-like-galaxy-in-early-universe-heres-what-we-know",
            "urlToImage": "https://gumlet.assettype.com/freepressjournal/2023-11/55a00d25-cba8-43c7-ac31-05002f9a24a6/Ce.jpg",
            "publishedAt": "2023-11-11T13:32:46Z",
            "content": "Scientists have spotted the most distant example of a galaxy in the universe that resembles our own galaxy, the Milky Way. Using the James Webb Space Telescope, astronomers have identified the most d… [+1921 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TOI Sports Desk",
            "title": "England end Pakistan hopes, it will be India vs New Zealand in World Cup semis | Cricket News - Times of India - IndiaTimes",
            "description": "Cricket News: Pakistan's slim chances of reaching the World Cup semifinals were extinguished as England set an imposing total of 337/9 at Eden Gardens in Kolkata on",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-world-cup/news/england-end-pakistan-hopes-it-will-be-india-vs-new-zealand-in-world-cup-semis/articleshow/105151922.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-105151938,width-1070,height-580,imgsize-40568,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-11-11T13:28:00Z",
            "content": "ICC World Cup 2023: New Zealand beat Sri Lanka, are almost through to the semifinals"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Gadgets 360 With Technical Guruji: News of the Week - NDTV",
            "description": "Poco launched the Poco C65 earlier this week. The handset runs on MediaTek Helio G85 SoC and is powered by a 5,000mAh battery, similar to its predecessor, th...",
            "url": "https://www.youtube.com/watch?v=cl9lfl1ie0w",
            "urlToImage": "https://i.ytimg.com/vi/cl9lfl1ie0w/maxresdefault.jpg",
            "publishedAt": "2023-11-11T13:00:34Z",
            "content": null
        }
    ]

    constructor() {
        super();
        console.log("Hello, I am a constructor from News component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4">
                            <NewsItem newsUrl={element.url} title={element.title.slice(0, 40)} description={element.description.slice(0, 88)} imgUrl={element.urlToImage} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
