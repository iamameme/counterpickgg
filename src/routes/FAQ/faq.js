import React from 'react'
import { IndexLink, Link } from 'react-router'
import background from '../../components/background.jpg'
import WebFont from 'webfontloader'


WebFont.load({
  google: {
    families: ['Monoton', 'EB Garamond', 'Teko:300,400,700', 'sans-serif']
  }
});

var font = 'Roboto';
var font2 = 'EB Garamond';



var page_style = {
  height:'100%',
  width:'100%',
  background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${background})`,
  overflowY: 'scroll',
  backgroundPosition: 'center'
};

var box = {
  height:'54.5%',
  width:'85%',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  margin: '0 auto',
  paddingTop: 22,
  paddingBottom: 8,
  textAlign: 'center'
};

var boxTop = {
  height:'5.5%',
  width:'85%',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  margin: '0 auto',
  marginBottom: '8px',
  paddingTop: 11,
  textAlign: 'center'
};

var boxQuick = {
  height:'600px',
  width:'85%',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  margin: '0 auto',
  marginBottom: '8px',
  paddingTop: 11,
  textAlign: 'center'
};

var boxTop2 = {
  height:'8.5%',
  width:'85%',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  margin: '0 auto',
  marginBottom: '20px',
  marginTop: '5px',
  paddingTop: 14,
  paddingBottom:14,
  textAlign: 'left'
};

var laneBox = {
  height:'100px',
  width:'100%',
  overflowX:'scroll'
};

var title_style = {
  fontFamily: 'Monoton',
  color: 'white',
  textAlign: 'center',
  marginTop: '50px'
};

var h4 = {
  textAlign: 'center',
  color: 'white',
  fontFamily: font
};

var page_style = {
  height:'100%',
  width:'100%',
  background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})`,
  overflowY: 'scroll',
  backgroundPosition: 'center'
};


var champbox = {
  height:'100%',
  width:'80%',
  overflowY:'scroll',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  margin: '0 auto'
};

var title_style = {
  fontFamily: 'Monoton',
  color: 'white',
  textAlign: 'center'
};


class Navbar extends React.Component {
  render() {
    var navStyle = {
      top: 'auto',
      backgroundColor: 'rgba(0,0,0,1)',
      borderBottomWidth: '2px',
      borderBottom: '2px solid #262626',
      fontFamily: font,
      fontSize: '14px',
      textAlign: 'left',
      width: '100%',
      height: '52px',
      zIndex: 99999999999,
      position: 'fixed'
    };
    var contentStyle = {
      textAlign: 'center'
    };
    var aStyle = {
      marginLeft: '12px',
      marginRight: '12px'
    };
    var logoStyle = {
      float: 'left',
      fontSize: '24px',
      verticalAlign: 'center',
      marginLeft: '5px'
    };

    return (
      <div style={navStyle} >
        <div style={contentStyle}>
          <p style={logoStyle} className={'aStyle'} href="/">
            C|P
          </p>
          <a style={aStyle} className={'aStyle'} href="/">
            CHAMPIONS
          </a>
          <a style={aStyle} className={'aStyle'} href="/how-it-works">
            HOW IT WORKS
          </a>
          <a style={aStyle} className={'aStyle aStyleActive'} href="/faq">
            FAQ
          </a>
        </div>
      </div>
    );
  }
}

class CenterText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var centerText = {
      paddingLeft: '12px',
      fontSize: '14px'
    };

    var lineStyle = {
      width: '30%'
    };

    return (
      <h4 style={h4}>
        <span>
          <span>
           <img style={lineStyle} className={'lineImg'} src="https://universe.leagueoflegends.com/images/line.png" />
          </span>
          <span className={'lineBox'}></span>
        </span>
        <span style={centerText}>{this.props.text}</span>
        <span>
          <span className={'lineBox2'}></span>
          <span>
           <img style={lineStyle} className={'lineImg2'} src="https://universe.leagueoflegends.com/images/line.png" />
          </span>
        </span>
      </h4>
    );
  }
}





class MainWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pickedLane: 'none',
      showModal: false
    };
  }


  render() {
    var centertext = {
      marginTop: '0px',
      marginBottom: '12px'
    };

    var frontImgStyle = {
      height: '150px',
      display: 'block',
      margin: '0 auto'
    };

    var p = {
      color: 'white'
    }

    return (
      <div style={page_style}>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <p style={p}>Thanks for stopping by. I greatly appreciate it! This is the pet project of boy named Steven Barsam.</p>
        <p style={p}>I always thought to myself, "Man, I'm not that smart. This build tells me to build Spirit Visage first</p>
        <p style={p}>on my main Aatrox, but I'm going against a Gankplank. Should I still do that?? What do I do??</p>
        <p style={p}>I wish there was a site that just told me what to build for each matchup because I'm too dumb."</p>
        <br/>
        <p style={p}>So I did it</p>
        <p style={p}>PS: Also this is like, pre-alpha build so plz no judge. I know it looks bad. I'm trying to improve but it takes a while haha. One man. One dream.</p>
      </div>
    );
  }
}

export const FAQ = () => (
  <MainWrapper/>

)

export default FAQ

