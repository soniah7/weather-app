import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";
import './index.scss'

export default class Twitter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstAngleDown: true,
            secondAngleDown: true,
            firstAngleUp: false,
            secondAngleUp: false,
            firstSeeMore: false,
            secondSeeMore: false
        }
    }

    nextPageAnimation = () => {

    }

    componentWillMount() {//不能是did mount
        const location = this.props.location;
        const tweetsData = [
            {
                icon: "https://cdn.imgbin.com/21/5/0/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-JdPkyt0m7ykS2bDNq99AHNXKV.jpg",
                content: "This is a relatively short text."
            },
            {
                icon: "https://cdn.imgbin.com/21/5/0/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-JdPkyt0m7ykS2bDNq99AHNXKV.jpg",
                content: "This is a very long text and definitely need to collapse. However you still need to click on see more and go to the link to see the full text. " + "Lorem ipsum dolor sit amet, omnes graeci feugiat vel eu, sit eu doctus timeam elaboraret. Autem facilisis his cu. Sed delectus oportere mnesarchum eu, purto viris ornatus te sed. Iriure patrioque gubergren no sit, cjlu"

            },
        ];
        this.setState({tweetsData});
    }

    componentDidMount() {
        this.collapse();
    }

    collapse = () => {
        document.querySelectorAll(".twitter__content--tweet").forEach((element, index) => {
            if (element.scrollHeight <= element.offsetHeight + 4) {
                if (index == 0) {
                    this.setState({firstAngleDown: false});
                } else if (index == 1) {
                    this.setState({secondAngleDown: false});
                }
            }
            if (element.scrollHeight > 172) { //为什么不是170？？
                if (index == 0) {
                    this.setState({firstSeeMore: true});
                } else if (index == 1) {
                    this.setState({secondSeeMore: true});
                }
            }
        });
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
                                 style={{backgroundImage: `url(${this.state.tweetsData[0].icon})`}}></div>
                            <div className="twitter__content--tweet">{this.state.tweetsData[0].content}
                                {this.state.firstSeeMore ? <a className="see-more">..See More</a> : ''}
                                {this.state.firstAngleDown? <FontAwesomeIcon icon={faAngleDown}
                                                 className="angle-button"
                                                 onClick={() => {
                                                     this.setState({
                                                         firstTweetOverflow: "visible",
                                                         firstAngleDown: false,
                                                         firstAngleUp: true
                                                     });
                                                     document.querySelectorAll(".twitter__content--tweet")[0].style.height = '160px';
                                                 }}/> : ''}
                                {this.state.firstAngleUp ? <FontAwesomeIcon icon={faAngleUp}
                                                                                            className="angle-button"
                                                                                            onClick={() => {
                                                                                                this.setState({
                                                                                                    firstTweetOverflow: "hidden",
                                                                                                    firstAngleDown: true,
                                                                                                    firstAngleUp: false
                                                                                                });
                                                                                                document.querySelectorAll(".twitter__content--tweet")[0].style.height = '90px'; //注意高度不包括paddingZ！！这里不是'100px';
                                                                                            }}/> : ''}

                            </div>
                        </li>
                        <li key="second-tweet">
                            <div className="twitter__content--icon"
                                 style={{backgroundImage: `url(${this.state.tweetsData[1].icon})`}}></div>
                            <div className="twitter__content--tweet">{this.state.tweetsData[1].content}
                                {this.state.secondSeeMore ? <a className="see-more">..See More</a> : ''}
                                {this.state.secondAngleDown ? <FontAwesomeIcon icon={faAngleDown}
                                                 className="angle-button"
                                                 onClick={() => {
                                                     this.setState({
                                                         secondAngleDown: false,
                                                         secondAngleUp: true
                                                     });
                                                     document.querySelectorAll(".twitter__content--tweet")[1].style.height = '160px';
                                                 }}/> : ''}
                                {this.state.secondAngleUp? <FontAwesomeIcon icon={faAngleUp}
                                                 className="angle-button"
                                                 onClick={() => {
                                                     this.setState({
                                                         secondAngleDown: true,
                                                         secondAngleUp: false
                                                     });
                                                     document.querySelectorAll(".twitter__content--tweet")[1].style.height = '90px';
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
