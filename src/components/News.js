import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  articles = [];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading:false,
      page: 1
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=everything&from=2022-09-18&to=2022-09-18&sortBy=popularity&apiKey=96c8717d7770408f912fe9f478a1482a";
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles });
  }

    handleNextClick = async () => {
      console.log("Next");
      if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      }
      else {
          let url = `https://newsapi.org/v2/everything?q=everything&from=2022-09-18&to=2022-09-18&sortBy=popularity&apiKey=96c8717d7770408f912fe9f478a1482a&page=${this.state.page + 1}&pageSize=20`;
          let data = await fetch(url);
          let parsedData = await data.json()
          console.log(parsedData);
          this.setState({
              page: this.state.page + 1,
              articles: parsedData.articles
          })
      }
  }
  
  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/everything?q=everything&from=2022-09-18&to=2022-09-18&sortBy=popularity&apiKey=96c8717d7770408f912fe9f478a1482a&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles
    })
}

  render() {
    return (
      <div className="container my-3">
        <h2>NEWSX : Top News Of The Day</h2>
        <div className="row my-12">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 50) : " "}
                  description={
                    element.description ? element.description.slice(0, 90) : " "
                  }
                  imageURL={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://imgs.search.brave.com/VlZpJq24psV3BDxKtiWrzW-t1QPWmlRN2orUz5NGTpM/rs:fit:398:498:1/g:ce/aHR0cHM6Ly9tZWRp/YTEudGVub3IuY29t/L2ltYWdlcy84OWZm/ZTBmMzFhZDljOGQ2/ZDNiOWYxYWYyZjQy/NzVjNy90ZW5vci5n/aWY_aXRlbWlkPTE4/NTQwOTI2.gif"
                  }
                  nurl={element.url}
                />
               
              </div>
            );
          })}
           
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; </button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>&rarr;</button>
        </div>
      </div>
    );
  }
}
