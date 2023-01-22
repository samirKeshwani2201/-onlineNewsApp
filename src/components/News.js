import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    //


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // Props use karne hai constructor me to hame props lene pade ge 


    const updateNews = async () => {
        props.setProgress(10);

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        // this.setState({ loading: true });
        setLoading(true);

        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        console.log(parsedData);
        props.setProgress(70);


        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults)
        setLoading(false);


        props.setProgress(100);
    }



    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        
        updateNews();
    }, [props.apiKey])

    // async componentDidMount() {
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=8773e89935ac4132a77d62a5402ac40d&page=1&pageSize=${props.pageSize}`;
    //     // this.setState({ loading: true });
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();
    //     // console.log(parsedData);
    //     // this.setState({
    //     //     articles: parsedData.articles,
    //     //     totalResults: parsedData.totalResults,
    //     //     loading: false
    //     // })
    //     this.updateNews();
    // }
    // handlePrevClick = async () => {
    //     // console.log("previous click")
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=8773e89935ac4132a77d62a5402ac40d&page=${this.state.page - 1}&pageSize=${props.pageSize}`
    //     // this.setState({ loading: true });
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();
    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parsedData.articles,
    //     //     loading: false
    //     // })
    //     this.setState({
    //         page: this.state.page - 1

    //     })

    //     this.updateNews();

    // }
    // handleNextClick = async () => {
    //     // if (!Math.ceil(this.state.totalResults / props.pageSize) < this.state.page + 1) {
    //     //     console.log("next click")
    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=8773e89935ac4132a77d62a5402ac40d&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //     //     this.setState({ loading: true });
    //     //     let data = await fetch(url);
    //     //     let parsedData = await data.json();

    //     //     this.setState({
    //     //         page: this.state.page + 1,
    //     //         articles: parsedData.articles,
    //     //         loading: false

    //     //     })
    //     // }

    //     this.setState({
    //         page: this.state.page + 1

    //     })
    //     this.updateNews();    


    // }

    const fetchMoreData = async () => {

        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        // this.setState({ loading: true });

        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
        < >
            <h1 className="text-center " style={{ margin: "25px 0px" ,marginTop:'90px'}}>NewsMonkey-Top    {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div key={element.url} className="col-md-4">
                                <NewsItem title={(element.title)} description={(element.description)} imageUrl={element.urlToImage} newsUrl={element.url}
                                    author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
                    <button disabled={
                        (Math.ceil(this.state.totalResults / props.pageSize) < this.state.page + 1)
                    } type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
        </ >
    )

}


News.defaultProps = {
    country: 'in',
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}


export default News

// 8773e89935ac4132a77d62a5402ac40d   for sk531892
// 7273a85c7aba4f30a85817017b5eefa4 for samirkeshwani07  

