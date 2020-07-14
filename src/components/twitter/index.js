import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons"
import {faCaretRight} from "@fortawesome/free-solid-svg-icons"
import './index.scss'

export default class Twitter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstExpand: false,
            secondExpand: false,
            firstSeeMore: false,
            secondSeeMore: false,
            tweetsData: [
                {
                    icon: "https://cdn.imgbin.com/21/5/0/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-JdPkyt0m7ykS2bDNq99AHNXKV.jpg",
                    content: "This is a relatively short text."
                },
                {
                    icon: "https://cdn.imgbin.com/21/5/0/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-JdPkyt0m7ykS2bDNq99AHNXKV.jpg",
                    content: "This is a very long text and definitely need to collapse. However you still need to click on see more and go to the link to see the full text. Lorem ipsum dolor sit amet, omnes graeci feugiat vel eu, sit eu doctus timeam elaboraret. Autem facilisis his cu. Sed delectus oportere mnesarchum eu, purto viris ornatus te sed. Iriure patrioque gubergren no sit, cjlu"
                },
            ]
        }
        this.tweetRef1 = React.createRef();
        this.tweetRef2 = React.createRef();
    }

    nextPageAnimation = () => {
    }

    componentDidMount() {
        setTimeout(() => this.collapse(), 500);
    }

    collapse = () => {
        const tweetRef1 = this.tweetRef1.current;
        const tweetRef2 = this.tweetRef2.current;
        if (tweetRef1.scrollHeight <= tweetRef1.offsetHeight + 4) this.setState({firstAngleDown: false});
        if (tweetRef2.scrollHeight <= tweetRef2.offsetHeight + 4) this.setState({secondAngleDown: false});
        if (tweetRef1.scrollHeight > 172) this.setState({firstSeeMore: true});
        if (tweetRef2.scrollHeight > 172) this.setState({secondSeeMore: true});
    }


    render() {
        const {city} = this.props.location;

        return (
            <div>
                <div className="twitter__head">
                    <FontAwesomeIcon icon={faTwitter} className="fa-twitter"/>
                    Twitter Feed
                    <div className="hashtag">
                        #{city.toUpperCase()}
                    </div>
                </div>
                <div className="twitter__content">
                    <ul>
                        <li key="first-tweet">
                            <div className="twitter__content--icon"
                                 style={{backgroundImage: `url(${this.state.tweetsData[0].icon})`}}>
                            </div>
                            <div className="twitter__content--tweet"
                                 style={{height: this.state.firstExpand ? '160px' : '90px'}}
                                 ref={this.tweetRef1}>

                                {this.state.tweetsData[0].content}

                                {this.state.firstSeeMore ?
                                    <a href="/#" className="see-more">..See More</a>
                                    : ''}

                                {!this.state.firstExpand ?
                                    <FontAwesomeIcon icon={faAngleDown}
                                                     className="angle-button"
                                                     onClick={() => {
                                                         this.setState({
                                                             firstTweetOverflow: "visible",
                                                             firstExpand: true
                                                         });
                                                         // document.querySelectorAll(".twitter__content--tweet")[0].style.height = '160px';
                                                     }}/>
                                    : ''}

                                {this.state.firstExpand ? <FontAwesomeIcon icon={faAngleUp}
                                                                            className="angle-button"
                                                                            onClick={() => {
                                                                                this.setState({
                                                                                    firstTweetOverflow: "hidden",
                                                                                    // firstAngleDown: true,
                                                                                    firstExpand: false
                                                                                });
                                                                            }}/> : ''}'

                            </div>
                        </li>
                        <li key="second-tweet">
                            <div className="twitter__content--icon"
                                 style={{backgroundImage: `url(${this.state.tweetsData[1].icon})`}}></div>
                            <div className="twitter__content--tweet"
                                 style={{height: this.state.secondExpand ? '160px' : '90px'}}
                                 ref={this.tweetRef2}>{this.state.tweetsData[1].content}
                                {this.state.secondSeeMore ? <a href="/#" className="see-more">..See More</a> : ''}
                                {!this.state.secondExpand ? <FontAwesomeIcon icon={faAngleDown}
                                                                               className="angle-button"
                                                                               onClick={() => {
                                                                                   this.setState({
                                                                                       secondExpand: true
                                                                                   });
                                                                               }}/> : ''}
                                {this.state.secondExpand ? <FontAwesomeIcon icon={faAngleUp}
                                                                             className="angle-button"
                                                                             onClick={() => {
                                                                                 this.setState({
                                                                                     secondExpand: false
                                                                                 });
                                                                             }}/> : ''}
                            </div>

                        </li>
                    </ul>
                </div>

                <div className="next-button"
                     onClick={this.nextPageAnimation}>
                    <div>Next <FontAwesomeIcon icon={faCaretRight}/></div>
                </div>

            </div>
        );
    }
}
