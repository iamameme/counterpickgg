import React from 'react'
import { IndexLink, Link } from 'react-router'
import './HomeView.scss'
import background from './background.jpg'
import WebFont from 'webfontloader'


var Radium = require('radium');
var color = require('color');

var getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

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
          <a style={aStyle} className={'aStyle aStyleActive'} href="/">
            CHAMPIONS
          </a>
          <a style={aStyle} className={'aStyle'} href="/how-it-works">
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



class Champion extends React.Component {
  constructor(props) {
  		super(props);
  		this.championid = this.props.championid;
  		this.championkey = this.props.championkey + ".png";
  		switch (this.championkey) {
  			case "Kayn.png":
  				this.championkey = "https://i.imgur.com/QhlNJWg.png"
  				break
  			case "Ornn.png":
  				this.championkey = "https://i.imgur.com/yk8lBP2.png"
  				break
  			default:
  				this.championkey = "https://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/" + this.championkey;
  		}
  		this.championname = this.props.championkey;
  		switch (this.championname) {
        case 'AurelionSol':
          this.championname = "Aurelion Sol"
              break
        case 'KogMaw':
          this.championname = "Kog'Maw"
              break
        case 'MissFortune':
          this.championname = "Miss Fortune"
              break
        case 'DrMundo':
          this.championname = "Dr. Mundo"
          break
        case 'JarvanIV':
          this.championname = "Jarvan IV"
          break
        case 'XinZhao':
          this.championname = "Xin Zhao"
          break
        case 'MasterYi':
          this.championname = "Master Yi"
          break
        case 'MonkeyKing':
          this.championname = "Wukong"
          break
        case 'TwistedFate':
          this.championname = "Twisted Fate"
          break
      }

  		this.championimg = this.championkey;
	}

  render() {
  	var style = {
      height:60,
      width:60
    };
  	var divStyle = {
      margin: 20,
      display:'inline-block'
    };
  	var textStyle = {
  	  color: 'white',
      paddingTop:'4px',
      fontFamily:'Teko'
    };
    var champ = '/' + this.props.championkey;
    var buttonStyle = {
      border: 'none',
      backgroundColor: 'transparent',
      padding: '0px'
    };

    return (
      <div style={divStyle}>
      <a href={champ}>
        <button style={buttonStyle}>
          <img style={style} src={this.championimg} />
          <p style={textStyle}>{this.championname}</p>
        </button>
      </a>
    </div>);
  }
}

class ChampionContainer extends React.Component {
  constructor(props) {
    super(props);

    var champions = require('../../../../league_data/champions.json')
    this.champWinSort = [];
    for (var i in champions['data']) {
      var champ = champions['data'][i]['key'];
      this.champWinSort.push(<Champion championid={champions['data'][i]['id']} championkey={champ} />)
    }
  }

  render() {
    return (<div>
      <div>{this.champWinSort}</div>
    </div>);
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

    return (
      <div style={page_style}>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <img style={frontImgStyle} src={"https://i.imgur.com/13zKD6w.png"}/>
        <div className={"fadeInUp"}>
          <div style={centertext}>
            <CenterText text={"Pick the Champion You're Playing!"}/>
          </div>
          <div style={champbox} className={["champbox"].join(' ')}>
            <ChampionContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export const HomeView = () => (
  <MainWrapper/>

)

export default HomeView

