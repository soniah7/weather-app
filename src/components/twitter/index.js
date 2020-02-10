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
            firstAngleDownVisible: 'visible',
            secondAngleDownVisible: 'visible',
            firstAngleUpDisplay: 'none',
            secondAngleUpDisplay: 'none',
            firstSeeMore: false,
            secondSeeMore: false
        }
    }

    nextPageAnimation = () => {

    }

    componentWillMount() {
        const location = this.props.location;
        const tweetsData = [
            {
                icon: "https://cdn.imgbin.com/21/5/0/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-JdPkyt0m7ykS2bDNq99AHNXKV.jpg",
                content: "This is a very long text and definitely need to collapse." + "\n" + "Lorem ipsum dolor sit amet, omnes graeci feugiat vel lectus oportere mnesarchum eu, purto viris ornatus te sed. Iriure patrioque gubergren no sit, cu mei consul detraxit. Mea eu docendi pertinax."
                    + "Lorem ipsum dolor sit amet, omnes graeci feugiat vel eu, sit eu doctus time add add "

            },
            {
                icon: "https://cdn.imgbin.com/21/5/0/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-JdPkyt0m7ykS2bDNq99AHNXKV.jpg",
                content: "This is a very long text and definitely need to collapse." + "\n" + "Lorem ipsum dolor sit amet, omnes graeci feugiat vel eu, sit eu doctus timeam elaboraret. Autem facilisis his cu. Sed delectus oportere mnesarchum eu, purto viris ornatus te sed. Iriure patrioque gubergren no sit, cu mei consul detraxit. Mea eu docendi pertinax."
                    + "Lorem ipsum dolor sit amet, omnes graeci feugiat vel eu, sit eu doctus timeam elaboraret. Autem facilisis his cu. Sed delectus oportere mnesarchum eu, purto viris ornatus te sed. Iriure patrioque gubergren no sit, cu mei consul detraxit. Mea eu docendi pertinax."
                    + "Lorem ipsum dolor sit amet, omnes graeci feugiat vel eu, sit eu doctus timeam elaboraret. Autem facilisis his cu. Sed delectus oportere mnesarchum eu, purto viris ornatus te sed. Iriure patrioque gubergren no sit, cu mei consul detraxit. Mea eu docendi pertinax."
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
                    this.setState({firstAngleDownVisible: "hidden"});
                } else if (index == 1) {
                    this.setState({secondAngleDownVisible: "hidden"});
                }
            } else {
                if (index == 0) {
                    this.setState({firstAngleUpPosition: element.scrollHeight});
                } else if (index == 1) {
                    this.setState({secondAngleUpPosition: element.scrollHeight});
                    console.log(element.scrollHeight);
                }
            }
            if (element.scrollHeight > 208) {
                if (index == 0) {
                    console.log(element.scrollHeight)
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
                        <li>
                            <div className="twitter__content--icon"
                                 style={{backgroundImage: `url(${this.state.tweetsData[0].icon})`}}></div>
                            <div className="twitter__content--tweet">{this.state.tweetsData[0].content}
                                {this.state.firstSeeMore ? <a className="see-more">..See More</a> : ''}
                                <FontAwesomeIcon icon={faAngleDown}
                                                 className="angle-button"
                                                 style={{visibility: this.state.firstAngleDownVisible}}
                                                 onClick={() => {
                                                     this.setState({
                                                         firstTweetOverflow: "visible",
                                                         firstAngleDownVisible: "hidden",
                                                         firstAngleUpDisplay: ""
                                                     });
                                                     document.querySelectorAll(".twitter__content--tweet")[0].style.height = '160px';
                                                 }}/>
                                <FontAwesomeIcon icon={faAngleUp}
                                                 className="angle-button"
                                                 style={{display: this.state.firstAngleUpDisplay}}
                                                 onClick={() => {
                                                     this.setState({
                                                         firstTweetOverflow: "hidden",
                                                         firstAngleDownVisible: "visible",
                                                         firstAngleUpDisplay: "none"
                                                     });
                                                     document.querySelectorAll(".twitter__content--tweet")[0].style.height = '100px';
                                                 }}/>
                            </div>
                        </li>

                        <li>
                            <div className="twitter__content--icon"
                                 style={{backgroundImage: `url(${this.state.tweetsData[1].icon})`}}></div>
                            <div className="twitter__content--tweet">{this.state.tweetsData[1].content}
                                {this.state.secondSeeMore ? <a className="see-more">..See More</a> : ''}
                                <FontAwesomeIcon icon={faAngleDown}
                                                 className="angle-button"
                                                 style={{visibility: this.state.secondAngleDownVisible}}
                                                 onClick={() => {
                                                     this.setState({
                                                         secondAngleDownVisible: "hidden",
                                                         secondAngleUpDisplay: ""
                                                     });
                                                     document.querySelectorAll(".twitter__content--tweet")[1].style.height = '160px';
                                                 }}/>
                                <FontAwesomeIcon icon={faAngleUp}
                                                 className="angle-button"
                                                 style={{display: this.state.secondAngleUpDisplay}}
                                                 onClick={() => {
                                                     this.setState({
                                                         secondAngleDownVisible: "visible",
                                                         secondAngleUpDisplay: "none"
                                                     });
                                                     document.querySelectorAll(".twitter__content--tweet")[1].style.height = '100px';
                                                 }}/>
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
