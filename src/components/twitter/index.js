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
            firstAngleDown: true,
            secondAngleDown: true,
            firstAngleUp: false,
            secondAngleUp: false,
            firstSeeMore: false,
            secondSeeMore: false,
            tweetsData:[
                {
                    icon: "https://cdn.imgbin.com/21/5/0/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-JdPkyt0m7ykS2bDNq99AHNXKV.jpg",
                    content: "This is a relatively short text."
                },
                {
                    icon: "https://cdn.imgbin.com/21/5/0/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-JdPkyt0m7ykS2bDNq99AHNXKV.jpg",
                    content: "This is a very long text and definitely need to collapse. However you still need to click on see more and go to the link to see the full text. Lorem ipsum dolor sit amet, omnes graeci feugiat vel eu, sit eu doctus timeam elaboraret. Autem facilisis his cu. Sed delectus oportere mnesarchum eu, purto viris ornatus te sed. Iriure patrioque gubergren no sit, cjlu"
                    // content: "This is a very long text and definitely need to collapse. However you still need to click on see more and go to the link to see the full text. " + "Lorem ipsum dolor sit amet, omnes graeci feugiat vel eu, sit eu doctus timeam elaboraret. Autem facilisis his cu. Sed delectus oportere mnesarchum eu, purto viris ornatus te sed. Iriure patrioque gubergren no sit, cjlu"
                    //   Line 35:172:  Unexpected string concatenation of literals  no-useless-concat
                },
            ]
        }
        this.tweetRef1 = React.createRef();
        this.tweetRef2 = React.createRef();
    }

    nextPageAnimation = () => {}

    // componentWillMount() {//不能是did mount
    //     const tweetsData = [
    //         {icon: "https://cdn.imgbin.com/21/5/0/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-JdPkyt0m7ykS2bDNq99AHNXKV.jpg",
    //             content: "This is a relatively short text." },
    //         {icon: "https://cdn.imgbin.com/21/5/0/imgbin-computer-icons-avatar-social-media-blog-font-awesome-avatar-JdPkyt0m7ykS2bDNq99AHNXKV.jpg",
    //             content: "This is a very long text and definitely need to collapse. However you still need to click on see more and go to the link to see the full text. Lorem ipsum dolor sit amet, omnes graeci feugiat vel eu, sit eu doctus timeam elaboraret. Autem facilisis his cu. Sed delectus oportere mnesarchum eu, purto viris ornatus te sed. Iriure patrioque gubergren no sit, cjlu"
    //             // content: "This is a very long text and definitely need to collapse. However you still need to click on see more and go to the link to see the full text. " + "Lorem ipsum dolor sit amet, omnes graeci feugiat vel eu, sit eu doctus timeam elaboraret. Autem facilisis his cu. Sed delectus oportere mnesarchum eu, purto viris ornatus te sed. Iriure patrioque gubergren no sit, cjlu"
    //             //   Line 35:172:  Unexpected string concatenation of literals  no-useless-concat
    //         },
    //     ]; this.setState({tweetsData});
    // }

    componentDidMount() {
        setTimeout(()=> this.collapse(), 500); //和location/index.js里面一样的问题，为什么一定要用settimeout???
        //见：https://stackoverflow.com/questions/35522220/react-ref-with-focus-doesnt-work-without-settimeout-my-example
        //如果这里只设置1毫秒的话，容易有时候加载不出来see more？？？！！！！！！ //但如果这里设置成一秒，又有问题！！！用户会看到see more加上来的那瞬间！！所以不能太快也不能太慢，这里为普通性能的电脑设置成500mm？？？？？？
        // 有时候从responsive界面退出f12模式，再按一次see more，然后打开tweet2，发现see more没了？？？但不进入f12模式就是好的？？？？？

        }

    collapse = () => {
        // 这里怎么高效用ref？？？？？？？？
        const tweetRef1 = this.tweetRef1.current;
        const tweetRef2 = this.tweetRef2.current;
        if (tweetRef1.scrollHeight <= tweetRef1.offsetHeight + 4) this.setState({firstAngleDown: false});
        if (tweetRef2.scrollHeight <= tweetRef2.offsetHeight + 4) this.setState({secondAngleDown: false});
        if (tweetRef1.scrollHeight > 172) this.setState({firstSeeMore: true});
        if (tweetRef2.scrollHeight > 172) this.setState({secondSeeMore: true});

        // document.querySelectorAll(".twitter__content--tweet").forEach((element, index) => {
        //     if (element.scrollHeight <= element.offsetHeight + 4) {
        //         if (index == 0) {
        //             this.setState({firstAngleDown: false});
        //         } else if (index == 1) {
        //             this.setState({secondAngleDown: false});
        //         }
        //     }
        //     if (element.scrollHeight > 172) { //为什么不是170？？
        //         if (index == 0) {
        //             this.setState({firstSeeMore: true});
        //         } else if (index == 1) {
        //             this.setState({secondSeeMore: true});
        //         }
        //     }
        // });
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
                            <div className="twitter__content--tweet"
                                style={{height: this.state.firstAngleUp? '160px':'90px'}}
                                 ref={this.tweetRef1}>{this.state.tweetsData[0].content}
                                {this.state.firstSeeMore ? <a href="/" className="see-more">..See More</a> : ''}
                                {this.state.firstAngleDown? <FontAwesomeIcon icon={faAngleDown}
                                                 className="angle-button"
                                                 onClick={() => {
                                                     this.setState({
                                                         firstTweetOverflow: "visible",
                                                         firstAngleDown: false,
                                                         firstAngleUp: true
                                                     });
                                                     // 这样直接操作dom是不是不好？？ 直接在元素上改style={{height: this.state.firstAngleUp? '160px':'90px'}}>是不是更好？？
                                                     // document.querySelectorAll(".twitter__content--tweet")[0].style.height = '160px';
                                                 }}/> : ''}
                                {this.state.firstAngleUp ? <FontAwesomeIcon icon={faAngleUp}
                                                                                            className="angle-button"
                                                                                            onClick={() => {
                                                                                                this.setState({
                                                                                                    firstTweetOverflow: "hidden",
                                                                                                    firstAngleDown: true,
                                                                                                    firstAngleUp: false
                                                                                                });
                                                                                                // 因为前面直接在div上声明了stayle，而这里又改变了this.state.firstAngleUp，所以我们这里删了dom操作后其实什么都不需要做
                                                                                                // document.querySelectorAll(".twitter__content--tweet")[0].style.height = '90px'; //注意高度不包括paddingZ！！这里不是'100px';
                                                                                            }}/> : ''}

                            </div>
                        </li>
                        <li key="second-tweet">
                            <div className="twitter__content--icon"
                                 style={{backgroundImage: `url(${this.state.tweetsData[1].icon})`}}></div>
                            <div className="twitter__content--tweet"
                                 style={{height: this.state.secondAngleUp? '160px':'90px'}}
                                 ref={this.tweetRef2}>{this.state.tweetsData[1].content}
                                {this.state.secondSeeMore ? <a href="/" className="see-more">..See More</a> : ''}
                                {this.state.secondAngleDown ? <FontAwesomeIcon icon={faAngleDown}
                                                 className="angle-button"
                                                 onClick={() => {
                                                     this.setState({
                                                         secondAngleDown: false,
                                                         secondAngleUp: true
                                                     });
                                                     // document.querySelectorAll(".twitter__content--tweet")[1].style.height = '160px';
                                                 }}/> : ''}
                                {this.state.secondAngleUp? <FontAwesomeIcon icon={faAngleUp}
                                                 className="angle-button"
                                                 onClick={() => {
                                                     this.setState({
                                                         secondAngleDown: true,
                                                         secondAngleUp: false
                                                     });
                                                     // document.querySelectorAll(".twitter__content--tweet")[1].style.height = '90px';
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
