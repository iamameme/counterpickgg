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
          <a style={aStyle} className={'aStyle aStyleActive'} href="/how-it-works">
            HOW IT WORKS
          </a>
          <a style={aStyle} className={'aStyle'} href="/faq">
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
        <p style={p}>THIS ISN'T DONE YET IM SORRY I RAN OUT OF TIME IT WILL BE DONE BY ACTUAL RELEASE</p>
        <p style={p}>I'm very tired from all the work I've put in this like the nerd I am :(</p>
        <br/>
        <p style={p}>So, I've been working feverishly on this and realized, I don't have time to actually make this</p>
        <p style={p}>I'm an anime weaboo and I go to conventions like a nerd, and I've been working on this project every day instead of being with people</p>
        <br/>
        <p style={p}>But to get into how it works, let me break it down. (This will change on actual release)</p>
        <br/>
        <p style={p}>All of the data is done through some simple js files through node. One file gets all of the player IDs of every challenger and master player of each region. </p>
        <p style={p}>The next file gets the account IDs of all of the player IDs. After that, it gets the recent matches of all of those players (last 20 games)</p>
        <p style={p}>I then get the Game IDs for all of those. With those Game IDs, I get the data from those games, which, long story short, is structured</p>
        <p style={p}>by getting the champion played, the enemy champion, and all of the build associated with that.</p>
        <p style={p}>Then, all of the data is compiled. It scans through the ~500,000-1,000,000 games in the database that have been imported</p>
        <p style={p}>and precompiles all the winrates, builds, and everything, so that isn't done on request.</p>
        <p style={p}>Then all of it goes into one nice little JSON file.</p>
        <br/>
        <p style={p}>There's a lot more that goes into it (like how it gets the accounts of diamond players as it scans through matches, etc.), </p>
        <p style={p}>but, who wants details. All of that is detailed on github</p>
        <p style={p}>For now, crack a cold one, enjoy yourself, ponder your potential elo gains, and enjoy the new year.</p>
        <p style={p}>Thank you,</p>
        <p style={p}>Steven aka Stevie</p>
      </div>
    );
  }
}

export const HowItWorks = () => (
  <MainWrapper/>

)

export default HowItWorks

