import React, {Component} from 'react';
import './index.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";

export default class Twitter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstAngleDownVisible: 'visible',
            secondAngleDownVisible: 'visible',
            firstAngleUpDisplay:'none',
            secondAngleUpDisplay:'none',
            firstSeeMore: false,
            secondSeeMore: false
        }
        // this.firstTweetRef = React.createRef();
        // this.secondTweetRef = React.createRef();
    }

    nextPageAnimation = () => {

    }

    componentWillMount() {
        // TODO make request using value of location instead of hardcoded data
        const location = this.props.location;
        const tweetsData = [
            //所以html/jsx也可以放在js的object里传递？？？？？？
            {icon: "https://cdn.imgbin.com/21/5/0/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-JdPkyt0m7ykS2bDNq99AHNXKV.jpg",
                content: "This is a very long text and definitely need to collapse." + "\n" + "Lorem ipsum dolor sit amet, omnes graeci feugiat vel lectus oportere mnesarchum eu, purto viris ornatus te sed. Iriure patrioque gubergren no sit, cu mei consul detraxit. Mea eu docendi pertinax."
                    + "Lorem ipsum dolor sit amet, omnes graeci feugiat vel eu, sit eu doctus time add add "

            },
            {icon: "https://cdn.imgbin.com/21/5/0/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-JdPkyt0m7ykS2bDNq99AHNXKV.jpg",
                content: "This is a very long text and definitely need to collapse." + "\n" + "Lorem ipsum dolor sit amet, omnes graeci feugiat vel eu, sit eu doctus timeam elaboraret. Autem facilisis his cu. Sed delectus oportere mnesarchum eu, purto viris ornatus te sed. Iriure patrioque gubergren no sit, cu mei consul detraxit. Mea eu docendi pertinax."
                    + "Lorem ipsum dolor sit amet, omnes graeci feugiat vel eu, sit eu doctus timeam elaboraret. Autem facilisis his cu. Sed delectus oportere mnesarchum eu, purto viris ornatus te sed. Iriure patrioque gubergren no sit, cu mei consul detraxit. Mea eu docendi pertinax."
                    + "Lorem ipsum dolor sit amet, omnes graeci feugiat vel eu, sit eu doctus timeam elaboraret. Autem facilisis his cu. Sed delectus oportere mnesarchum eu, purto viris ornatus te sed. Iriure patrioque gubergren no sit, cu mei consul detraxit. Mea eu docendi pertinax."
            },
        ]; //new line的问题：https://stackoverflow.com/questions/43714101/html-new-line-not-working
        this.setState({tweetsData});  //有必要存twitter数据吗？？
    }

    componentDidMount() {
        this.collapse(); //这个不要放在render里面做
    }

    collapse = () => {
        document.querySelectorAll(".twitter__content--tweet").forEach((element, index) => {
            if (element.scrollHeight <= element.offsetHeight + 4) {
                // document.querySelector(".angle-down").style.visibility="hidden"; //用了react就不用这种原生写法了！！！对比一下？？？？？
                if (index == 0) {
                    this.setState({firstAngleDownVisible: "hidden"});
                } else if (index == 1){
                    this.setState({secondAngleDownVisible: "hidden"});
                }
            }
            else {
                if (index == 0) {
                    this.setState({firstAngleUpPosition: element.scrollHeight});
                } else if (index == 1){
                    //mount以后点击了按钮，scrollheight变化，这里的secondAngleUpPosition也会跟着自动变化是吗？？？？？？？？
                    this.setState({secondAngleUpPosition: element.scrollHeight });
                    console.log(element.scrollHeight );
                }
            }
            if (element.scrollHeight>208) {
                if (index == 0) {
                    console.log(element.scrollHeight)
                    this.setState({firstSeeMore: true });
                } else if (index == 1){
                    this.setState({secondSeeMore: true });

                }
            }
        });
    }


    render() {
        const {city} = this.props.location; ///解构赋值一定要用{}

        return (

            <div>
                <div className="twitter__head">
                    <FontAwesomeIcon icon={faTwitter} className="fa-twitter" />
                    Twitter Feed
                    <div className="hashtag">
                        #{city.toUpperCase()}
                    </div>
                </div>
                <div className="twitter__content">
                    <ul>
                    <li>
                        <div className="twitter__content--icon" style={{backgroundImage: `url(${this.state.tweetsData[0].icon})`}}></div>
                        <div className="twitter__content--tweet">{this.state.tweetsData[0].content}
                            { this.state.firstSeeMore ? <a className="see-more">..See More</a> : ''}
                            {/*为什么FontAwesomeIcon不能放在div classnameicon的上面？？？？？？？？？？？？？？？？*/}
                            <FontAwesomeIcon icon={faAngleDown}
                                             className="angle-button"
                                             style={{visibility:this.state.firstAngleDownVisible}}
                                             onClick={() => {
                                                 this.setState({firstTweetOverflow: "visible", firstAngleDownVisible: "hidden", firstAngleUpDisplay: ""});
                                                 //为什么这里可以setState，不会max update exceed？？？因为它是click后才会render？？还是因为它在callback里面？？？？？？？
                                                 //为什么这里就没有location.js里state没有及时被set的问题？？？？？
                                                 document.querySelectorAll(".twitter__content--tweet")[0].style.height = '160px';
                                             }}/>
                                             {/* ref={this.state.firstTweetRef}/>*/}
                            <FontAwesomeIcon icon={faAngleUp}
                                            // style={{width: '13px', position: 'absolute', left: 'calc(100% - 20px)', top: this.state.secondAngleUpPosition, display:this.state.secondAngleUpDisplay}}
                                             className="angle-button"
                                             style={{display:this.state.firstAngleUpDisplay}}
                                             onClick={() => {
                                                 this.setState({firstTweetOverflow: "hidden", firstAngleDownVisible: "visible", firstAngleUpDisplay: "none"});
                                                 document.querySelectorAll(".twitter__content--tweet")[0].style.height = '100px';
                                                 //为什么这里可以setState，不会max update exceed？？？因为它是click后才会render？？还是因为它在callback里面？？？？？？？
                                                 //为什么这里就没有location.js里state没有及时被set的问题？？？？？
                                             }}/>
                                             {/*ref={this.state.secondTweetRef}/>*/}
                        </div>
                    </li>

                        <li>
                            <div className="twitter__content--icon" style={{backgroundImage: `url(${this.state.tweetsData[1].icon})`}}></div>
                            <div className="twitter__content--tweet">{this.state.tweetsData[1].content}
                                { this.state.secondSeeMore ? <a className="see-more">..See More</a> : ''}
                                <FontAwesomeIcon icon={faAngleDown}
                                                 className="angle-button"
                                                 // 体会一下这里设置angle的位置，用的是bottom而不是top的用法！！！！！！！！！！
                                                 style={{visibility:this.state.secondAngleDownVisible}}
                                                 onClick={() => {
                                                 this.setState({ secondAngleDownVisible: "hidden", secondAngleUpDisplay: ""});
                                                 document.querySelectorAll(".twitter__content--tweet")[1].style.height = '160px';
                                             }}/>
                            <FontAwesomeIcon icon={faAngleUp}
                                             className="angle-button"
                                             style={{ display:this.state.secondAngleUpDisplay}}
                                             onClick={() => {
                                                 this.setState({secondAngleDownVisible: "visible", secondAngleUpDisplay: "none"});
                                                 document.querySelectorAll(".twitter__content--tweet")[1].style.height = '100px';
                                             }}/>
                            </div>

                        </li>

                    </ul>
                </div>

                <div className="next-button"
                    onClick={this.nextPageAnimation}>
                    <d
                        iv>Next <FontAwesomeIcon icon={faCaretRight}/></div>
                </div>

            </div>
        );
    }
}
