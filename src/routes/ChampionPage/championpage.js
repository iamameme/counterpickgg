import React from 'react'
import { IndexLink, Link } from 'react-router'
import background from '../../components/background.jpg'
import WebFont from 'webfontloader'
import './championpage.scss'
import '../../styles/bootstrap/dist/css/bootstrap.min.scss';
import precisionBackground from '../../../league_data/runesReforged/perkBackgrounds/8000.jpg';
import dominationBackground from '../../../league_data/runesReforged/perkBackgrounds/8100.jpg';
import sorceryBackground from '../../../league_data/runesReforged/perkBackgrounds/8200.jpg';
import inspirationBackground from '../../../league_data/runesReforged/perkBackgrounds/8300.jpg';
import resolveBackground from '../../../league_data/runesReforged/perkBackgrounds/8400.jpg';


var mainRuneImages = {
  "8000": {
    "left": require('../../../league_data/runesReforged/backgrounds/precisionLeft.png'),
    "right": require('../../../league_data/runesReforged/backgrounds/precisionRight.png'),
    "topIcon": require('../../../league_data/runesReforged/perkStyle/8000.png')
  },
  "8100": {
    "left": require('../../../league_data/runesReforged/backgrounds/dominationLeft.png'),
    "right": require('../../../league_data/runesReforged/backgrounds/dominationRight.png'),
    "topIcon": require('../../../league_data/runesReforged/perkStyle/8100.png')
  },
  "8200": {
    "left": require('../../../league_data/runesReforged/backgrounds/sorceryleft.png'),
    "right": require('../../../league_data/runesReforged/backgrounds/sorceryRight.png'),
    "topIcon": require('../../../league_data/runesReforged/perkStyle/8200.png')
  },
  "8300": {
    "left": require('../../../league_data/runesReforged/backgrounds/inspirationLeft.png'),
    "right": require('../../../league_data/runesReforged/backgrounds/inspirationRight.png'),
    "topIcon": require('../../../league_data/runesReforged/perkStyle/8300.png')
  },
  "8400": {
    "left": require('../../../league_data/runesReforged/backgrounds/resolveLeft.png'),
    "right": require('../../../league_data/runesReforged/backgrounds/resolveRight.png'),
    "topIcon": require('../../../league_data/runesReforged/perkStyle/8400.png')
  }
};

var runeImages = {
  "8005": require('../../../league_data/runesReforged/perk/8005.png'),
  "8008": require('../../../league_data/runesReforged/perk/8008.png'),
  "8014": require('../../../league_data/runesReforged/perk/8014.png'),
  "8017": require('../../../league_data/runesReforged/perk/8017.png'),
  "8021": require('../../../league_data/runesReforged/perk/8021.png'),
  "8105": require('../../../league_data/runesReforged/perk/8105.png'),
  "8112": require('../../../league_data/runesReforged/perk/8112.png'),
  "8120": require('../../../league_data/runesReforged/perk/8120.png'),
  "8124": require('../../../league_data/runesReforged/perk/8124.png'),
  "8126": require('../../../league_data/runesReforged/perk/8126.png'),
  "8128": require('../../../league_data/runesReforged/perk/8128.png'),
  "8134": require('../../../league_data/runesReforged/perk/8134.png'),
  "8135": require('../../../league_data/runesReforged/perk/8135.png'),
  "8136": require('../../../league_data/runesReforged/perk/8136.png'),
  "8138": require('../../../league_data/runesReforged/perk/8138.png'),
  "8139": require('../../../league_data/runesReforged/perk/8139.png'),
  "8143": require('../../../league_data/runesReforged/perk/8143.png'),
  "8210": require('../../../league_data/runesReforged/perk/8210.png'),
  "8214": require('../../../league_data/runesReforged/perk/8214.png'),
  "8224": require('../../../league_data/runesReforged/perk/8224.png'),
  "8226": require('../../../league_data/runesReforged/perk/8226.png'),
  "8229": require('../../../league_data/runesReforged/perk/8229.png'),
  "8230": require('../../../league_data/runesReforged/perk/8230.png'),
  "8232": require('../../../league_data/runesReforged/perk/8232.png'),
  "8233": require('../../../league_data/runesReforged/perk/8233.png'),
  "8234": require('../../../league_data/runesReforged/perk/8234.png'),
  "8236": require('../../../league_data/runesReforged/perk/8236.png'),
  "8237": require('../../../league_data/runesReforged/perk/8237.png'),
  "8242": require('../../../league_data/runesReforged/perk/8242.png'),
  "8243": require('../../../league_data/runesReforged/perk/8243.png'),
  "8299": require('../../../league_data/runesReforged/perk/8299.png'),
  "8304": require('../../../league_data/runesReforged/perk/8304.png'),
  "8306": require('../../../league_data/runesReforged/perk/8306.png'),
  "8313": require('../../../league_data/runesReforged/perk/8313.png'),
  "8316": require('../../../league_data/runesReforged/perk/8316.png'),
  "8321": require('../../../league_data/runesReforged/perk/8321.png'),
  "8326": require('../../../league_data/runesReforged/perk/8326.png'),
  "8339": require('../../../league_data/runesReforged/perk/8339.png'),
  "8345": require('../../../league_data/runesReforged/perk/8345.png'),
  "8347": require('../../../league_data/runesReforged/perk/8347.png'),
  "8351": require('../../../league_data/runesReforged/perk/8351.png'),
  "8359": require('../../../league_data/runesReforged/perk/8359.png'),
  "8410": require('../../../league_data/runesReforged/perk/8410.png'),
  "8429": require('../../../league_data/runesReforged/perk/8429.png'),
  "8430": require('../../../league_data/runesReforged/perk/8430.png'),
  "8435": require('../../../league_data/runesReforged/perk/8435.png'),
  "8437": require('../../../league_data/runesReforged/perk/8437.png'),
  "8439": require('../../../league_data/runesReforged/perk/8439.png'),
  "8444": require('../../../league_data/runesReforged/perk/8444.png'),
  "8446": require('../../../league_data/runesReforged/perk/8446.png'),
  "8451": require('../../../league_data/runesReforged/perk/8451.png'),
  "8453": require('../../../league_data/runesReforged/perk/8453.png'),
  "8463": require('../../../league_data/runesReforged/perk/8463.png'),
  "8465": require('../../../league_data/runesReforged/perk/8465.png'),
  "9101": require('../../../league_data/runesReforged/perk/9101.png'),
  "9103": require('../../../league_data/runesReforged/perk/9103.png'),
  "9104": require('../../../league_data/runesReforged/perk/9104.png'),
  "9105": require('../../../league_data/runesReforged/perk/9105.png'),
  "9111": require('../../../league_data/runesReforged/perk/9111.png')
};

var summonerSpells = {
  "1" : require('../../../league_data/summonerSpells/1.png'),
  "3" : require('../../../league_data/summonerSpells/3.png'),
  "4" : require('../../../league_data/summonerSpells/4.png'),
  "6" : require('../../../league_data/summonerSpells/6.png'),
  "7" : require('../../../league_data/summonerSpells/7.png'),
  "11" : require('../../../league_data/summonerSpells/11.png'),
  "12" : require('../../../league_data/summonerSpells/12.png'),
  "13" : require('../../../league_data/summonerSpells/13.png'),
  "14" : require('../../../league_data/summonerSpells/14.png'),
  "21" : require('../../../league_data/summonerSpells/21.png')
};



var champions = require('../../../league_data/champions.json');
var runeJSON = require('../../../league_data/runes.json');

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

getJSON('http://localhost:3000/api' + window.location.pathname + '/enemywinrates',
  function(err, data) {
    if (err !== null) {
      console.log('Something went wrong: ' + err);
    } else {
      champWinRateData = data;
      console.log(data);
    }
  });

WebFont.load({
  google: {
    families: ['Monoton', 'EB Garamond', 'Teko:300,400,700', 'sans-serif']
  }
});

var font = 'Roboto';
var font2 = 'Teko:700';

var champWinRateData;

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
      height:50,
      width:50
    };
    var divStyle = {
      margin: 10,
      display:'inline-block'
    };
    var textStyle = {
      color: 'white',
      paddingTop:'4px',
      fontFamily:'Teko',
      fontSize: '.9em'
    };

    var winrate;
    var winrateText = this.props.extraText + '%';
    if (this.props.extraText > 49.99) {
      winrate = {
        color: 'green',
        textAlign: 'center'
      };
    } else {
      winrate = {
        color: 'red',
        textAlign: 'center'
      };
    }
    if (this.props.extraText == null) {
      winrateText = '0.00%';
    }

    var champ = '/' + this.props.championkey;
    return (
      <div style={divStyle} onClick={() => this.props.championClick(this.props.championkey)} className={"championInTable"}>
          <img style={style} src={this.championimg} />
          <p style={textStyle}>
            {this.championname}
            <span style={winrate}><br />{winrateText}</span>
          </p>
      </div>);
  }
}

class LaneButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var style = {
      backgroundColor : this.props.backgroundColor
    };
    var active;
    if (this.props.backgroundColor == "#7f7f7f") {
      if (this.props.clicked == true) {
        active = 'lanebutton-act';
      } else {
        active = '';
      }
    } else if (this.props.backgroundColor == 0) {
        active = ''
      if (this.props.pickedLast == true) {
        active = 'lanebutton-act'
      }
    } else {
        active = 'lanebutton-notact'
      }

    var classes = 'leagueButton' + ' ' + active;
    return (
        <button className={classes}>{this.props.lane}</button>
    );
  }
}

class LaneContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickMain = this.props.handleClickMain;

    this.state = {
      picked : [false,false,false,false,false],
      clicked : false,
      backgroundColor : [0,0,0,0,0],
      pickedLast : [false,false,false,false,false]
    };
  }

  handleClick(e) {
    if (e.target.innerHTML !== "Mid" && e.target.innerHTML !== "Top" && e.target.innerHTML !== "Jungle" && e.target.innerHTML !== "Marksman" && e.target.innerHTML !== "Support") {
      return;
    }
    var picked1 = [];
    var backgroundColor1 = [];
    var pickedLast = [];
    for (var i in this.state.picked) {
      picked1.push(false);
      if (this.state.clicked == false) {
        pickedLast.push(false);
      } else {
        pickedLast.push(false);
      }
      backgroundColor1.push(0);
    }

    var laneFinal = "Error";
    switch(e.target.innerHTML) {
      case "Mid":
        picked1[0] = true;
        backgroundColor1[0] = "#f9f9f9";
        laneFinal = "middle";
        break;
      case "Top":
        picked1[1] = true;
        backgroundColor1[1] = "#f9f9f9";
        laneFinal = "top";
        break;
      case "Jungle":
        picked1[2] = true;
        backgroundColor1[2] = "#f9f9f9";
        laneFinal = "jungle";
        break;
      case "Marksman":
        picked1[3] = true;
        backgroundColor1[3] = "#f9f9f9";
        laneFinal = "bottom";
        break;
      case "Support":
        picked1[4] = true;
        backgroundColor1[4] = "#f9f9f9";
        laneFinal = "support";
        break;
    }
    pickedLast[this.state.backgroundColor.indexOf("#f9f9f9")] = true;
    this.setState({
      clicked: true,
      picked : picked1,
      backgroundColor : backgroundColor1,
      pickedLast : pickedLast
    });

    this.handleClickMain(laneFinal);
  }

  render() {
    this.laneButtons = [];
    this.laneButtons.push(<LaneButton key={"Mid"} lane={"Mid"} clicked={this.state.clicked}  pickedLast={this.state.pickedLast[0]} backgroundColor={this.state.backgroundColor[0]}/>)
    this.laneButtons.push(<LaneButton key={"Top"} lane={"Top"} clicked={this.state.clicked} pickedLast={this.state.pickedLast[1]} backgroundColor={this.state.backgroundColor[1]}/>)
    this.laneButtons.push(<LaneButton key={"Jungle"} lane={"Jungle"} clicked={this.state.clicked} pickedLast={this.state.pickedLast[2]} backgroundColor={this.state.backgroundColor[2]} />)
    this.laneButtons.push(<LaneButton key={"Marksman"} lane={"Marksman"} clicked={this.state.clicked} pickedLast={this.state.pickedLast[3]} backgroundColor={this.state.backgroundColor[3]} />)
    this.laneButtons.push(<LaneButton key={"Support"} lane={"Support"} clicked={this.state.clicked} pickedLast={this.state.pickedLast[4]} backgroundColor={this.state.backgroundColor[4]} />)

    return (
      <div onClick={this.handleClick.bind(this)}>{this.laneButtons}</div>
      );
  }
}


var champion = window.location.pathname.substr(1,window.location.pathname.length);
var championkey = champion + ".png";
switch (championkey) {
  case "Kayn.png":
    championkey = "https://i.imgur.com/QhlNJWg.png";
    break;
  case "Ornn.png":
    championkey = "https://i.imgur.com/yk8lBP2.png";
    break;
  case "Wukong.png":
    championkey = "https://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/MonkeyKing.png";
  default:
    championkey = "https://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/" + championkey;
}
var description, championId;
for (var i in champions["data"]) {
  if (champions["data"][i]["key"] == champion) {
    description = champions["data"][i]["title"];
    championId = champions["data"][i]["id"];
  }
}

class TopContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      championWinRate: 0
    };

    let url = 'http://localhost:3000/api/' + championId;
    var me = this;
    getJSON(url,
      function(err, data) {
        if (err !== null) {
          //console.log('Something went wrong: ' + err);
        } else {
          me.setState({championWinRate: (data["winrate"] * 100).toFixed(2)})
        }
      });
  }

  render() {
    var winRateStyle;
    if (this.state.championWinRate > 50) {
      winRateStyle = {
        color: 'green'
      }
    } else {
      winRateStyle = {
        color: 'red'
      }
    }
    var winStyle = {
      fontSize: '1.5em',
      fontFamily: font,
      textAlign: 'right',
      verticalAlign: 'middle',
      marginLeft: 'auto',
      marginBottom: 0
    };

    var topBoxContainer = {
      display : 'flex',
      alignItems : 'center',
      height: '100%',
      width: '100%'
    };
    var champImg = {
      height: '128%',
      paddingLeft: 45,
      float: 'left',
      paddingRight: 15
    };

    var champTextTitle = {
      fontFamily: font,
      fontSize: '1.8em',
      marginBottom: 3
    };

    var champTextDescription = {
      fontFamily: font,
      fontSize: '.75em',
      color: "#a0a0a0",
      marginBottom: 0
    };
    return (<div style={topBoxContainer}>
      <img style={champImg} src={championkey} />
      <div>
        <h4 style={champTextTitle}>{champion}</h4>
        <p style={champTextDescription}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{description}</p>
      </div>
      <h5 style={winStyle}>Win Rate: <span style={winRateStyle}>{this.state.championWinRate}%</span></h5>
    </div>);
  }
}

class LineSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var container = {
      position: 'relative',
      left: this.props.left,
      top: this.props.top
    };

    return (
      <span style={container}>
        <span className={'lineBoxVertical'}></span>
        <span>
          <img className={'lineImgVertical'} src="https://universe.leagueoflegends.com/images/line.png" />
        </span>
      </span>
    );
  }
}

@Radium
class ChampionContainerSplit extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    this.champWinSort = [], this.champLossSort = [], this.champAll = [];

    var lane = this.props.lane.toLowerCase();
    if (lane === 'mid') {
      lane = 'middle';
    }

    if (champWinRateData["winrates"][lane] === undefined) {
      return <p>:( No Data Found :(</p>;
    }

    var champByWinRate = champWinRateData["winrates"][lane].map(function(x) {
      return x;
    });

    champByWinRate.sort(function(a, b) {
      return a.winrate - b.winrate;
    });
    var champByLossRate = [];
    for (var i = 0; i < champByWinRate.length; i++) {
      //console.log(champByWinRate[i]["champion"] + "----" + champByWinRate[i]["total"]);
      if ('/' + champByWinRate[i]["champion"] == window.location.pathname) {
        champByWinRate.splice(i, 1);
        i--;
      } else {
          if (champByWinRate[i]["total"] < 15) {
            // REMOVE FAKE THRESHOLD
            champByWinRate.splice(i, 1);
            i--;
          } else {
            champByLossRate.push(champByWinRate[i]);
          }
        }
      }


    champByWinRate.reverse().splice(12);
    champByLossRate.splice(12);

    for (var i in champWinRateData["winrates"][lane]) {
      var champ = champWinRateData["winrates"][lane][i]["champion"];
      var winrate = champWinRateData["winrates"][lane][i]["winrate"];
      if (winrate != null) {
        winrate = (winrate * 100).toFixed(2);
      }

      this.champAll.push(<Champion key={i} championid={0} championkey={champ} extraText={winrate} championClick={this.props.championClick} />)
    }

    for (var i in champByWinRate) {
      var champ = champByWinRate[i]["champion"];
      var winrate = champByWinRate[i]["winrate"];
      if (winrate != null) {
        winrate = (winrate * 100).toFixed(2);
      }

      this.champWinSort.push(<Champion key={i} championid={0} championkey={champ} extraText={winrate}  championClick={this.props.championClick} />)
    }

    for (var i in champByLossRate) {
      var champ = champByLossRate[i]["champion"];
      var winrate = champByLossRate[i]["winrate"];
      if (winrate != null) {
        winrate = (winrate * 100).toFixed(2);
      }

      this.champLossSort.push(<Champion key={i} championid={0} championkey={champ} extraText={winrate}  championClick={this.props.championClick} />)
    }

    var champBoxLeft = {
      width: '33%',
      height: '100%',
      overflowY: 'scroll',
      float: 'left'
    };

    var champBoxMiddle = {
      width: '33%',
      height: '100%',
      overflowY: 'scroll',
      marginRight: '0px',
      float: 'left'
    };

    var champBoxRight = {
      width: '33%',
      height: '100%',
      overflowY: 'scroll',
      float: 'left'
    };

    var outerDiv = {
      height: '100%',
      width: '100%'
    };

    var upperTextBox = {
      width: '100%',
      height: '7%'
    };

    var champTextLeft = {
      width: '33%',
      height: '100%',
      float: 'left'
    };

    var text = {
      fontFamily: 'Teko',
      fontWeight: 400,
      fontSize: '1.7em'
    };

    if (this.champWinSort.length === 0) {
      this.champWinSort = ":( Not Enough Data :("
    }

    if (this.champLossSort.length === 0 ) {
      this.champLossSort = ":( Not Enough Data :("
    }


    return (
      <div style={outerDiv}>

        <div style={upperTextBox}>
          <div style={champTextLeft}>
            <span style={text}>Best Vs.</span>
          </div>
          <div style={champTextLeft} className={"counterbox"}>
            <span style={text}>Worst Vs. (Counter)</span>
          </div>
          <div style={champTextLeft}>
            <span style={text}>All Champions</span>
          </div>
        </div>
        <div style={champBoxLeft}>{this.champWinSort}</div>
        <div style={champBoxMiddle}>{this.champLossSort}</div>
        <div style={champBoxRight}>{this.champAll}</div>

    </div>);
  }
}

var page_style = {
  height:'100%',
  width:'100%',
  background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${background})`,
  overflowY: 'scroll',
  backgroundPosition: 'center'
};

var boxTop = {
  height:'5.5%',
  width:'85%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  margin: '0 auto',
  marginBottom: '8px',
  paddingTop: 11,
  textAlign: 'center'
};


var boxTop2 = {
  height:'8.5%',
  width:'85%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
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

class BottomContainer extends React.Component {
  constructor(props) {
    super(props);

    this.afterl = {
      opacity: 0,
      height:'100%',
      width:'100%'
    };

    this.loadingContainer = {
      opacity: 1,
      height:'54.5%',
      width:'85%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      margin: '0 auto 40px',
      paddingTop: 22,
      paddingBottom: 8,
      textAlign: 'center',
      display: 'none'
    };

    this.spinner = {
      width: '100%',
      opacity: 0
    };

    this.loadingText = "Loading...";
  }

  render() {
    if (this.props.show === false) {
      return false;
    }

    this.spinner2 = {
      position: 'relative',
      marginTop: '12%'
    };

    var champBox;
    if (this.props.lane != 'none' && this.props.lane != 'loading') {
      champBox = <ChampionContainerSplit lane={this.props.lane} championClick={this.props.championClick} />
    }

    var loadingText = {
      color: 'white',
      top:'200%',
      left: '30%',
      fontFamily:'Teko',
      fontSize: '2em',
      position: 'absolute',
      animation: 'pulse 1.0s alternate infinite'
    };

    if (this.props.lane == 'loading') {
      this.loadingText = 'Loading...';
      this.loadingContainer = {
        opacity: 1,
        height:'54.5%',
        width:'85%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        margin: '0 auto 40px',
        paddingTop: 22,
        paddingBottom: 8,
        textAlign: 'center'
      };

      if (this.afterl.animation == 'fadeIn 0.75s forwards' ) {
        this.afterl = {
          animation: 'fadeOutSoft 0.5s forwards'
        };

      }
      this.spinner = {
        animationDelay: '0.5s',
        animation: 'fadeInSoft .5s forwards'
      };

      setTimeout(function() {
        this.loadingText = "Loaded!";
        this.loadingContainer = {
          opacity: 1,
          height:'54.5%',
          width:'85%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          margin: '0 auto 30px',
          paddingTop: 22,
          paddingBottom: 8,
          textAlign: 'center',
          animation: 'fadeOutIn 0.85s'
        };

        this.afterl = {
          opacity: 0,
          height:'100%',
          width:'100%',
          animation: 'fadeIn 0.75s forwards'
        };

        this.spinner = {
          animationDelay: '0s',
          animation: 'fadeOutSoft 1.50s forwards'
        };
      }.bind(this),700);
    }

    return (<div style={this.loadingContainer} className={"champbox"}>
      <div style={this.spinner}>
        <div id="cssload-contain" style={this.spinner2}>
          <div className="cssload-wrap" id="cssload-wrap1">
            <div className="cssload-ball" id="cssload-ball1"></div>
          </div>

          <div className="cssload-wrap" id="cssload-wrap2">
            <div className="cssload-ball" id="cssload-ball2"></div>
          </div>

          <div className="cssload-wrap" id="cssload-wrap3">
            <div className="cssload-ball" id="cssload-ball3"></div>
          </div>

          <div className="cssload-wrap" id="cssload-wrap4">
            <div className="cssload-ball" id="cssload-ball4"></div>
          </div>
          <h4 style={loadingText} className={loadingText}>{this.loadingText}</h4>
        </div>

      </div>
      <div style={this.afterl}>
        {champBox}
      </div>

    </div>);
  }
}

import PropTypes from 'prop-types';

class Modal extends React.Component {
  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  render() {
    // Render nothing if the "show" prop is false
    var classNames = ["backdrop"].join(' ');
    var backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0, 0.88)',
      padding: 0,
      zIndex: 40000
    };

    if(!this.props.show) {
      classNames = "";
      var animationDur = '0s';
      if (this.props.clickedChamp !== undefined) {
        animationDur = '.75s';
      }
      backdropStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0, 0.88)',
        padding: 0,
        zIndex: 40000,
        animationName: 'fadeOut',
        animationDuration: animationDur,
        animationFillMode: 'forwards'
      };
    }

    // The modal "window"
    const modalStyle = {
      backgroundColor: 'rgba(0,0,0,0.8)',
      minWidth: '100%',
      padding: 30,
      position: 'absolute',
      zIndex: 40000,
      top: '25%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      minHeight: '33vh',
      height: '20vh',
      borderTop: '2px solid #785b28',
      borderBottom: '2px solid #785b28',
      animationName: 'fadeInU',
      animationDuration: '.6s'
    };

    var topImg = {
      top: '23.4%',
      left: (window.innerWidth - 640)/2 + 'px',
      height: '50px',
      position: 'relative',
      zIndex: '9999999999'
    };

    return (
      <div className={classNames} style={backdropStyle} >
        <img src={'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-go-noobs/en_US/57757f26946d4584aa6ff5623dd84445b516c35e/assets/img/divider.png'}
         style={topImg} />
        <div style={modalStyle}>

          {this.props.children}

          <div className="footer">
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.node
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
      paddingLeft: '12px'
    };

    var imgStyle = {
      width: '20%'
    };

    return (
      <h4 style={h4}>
        <span>
          <span>
           <img style={imgStyle} className={'lineImg'} src="https://universe.leagueoflegends.com/images/line.png" />
          </span>
          <span className={'lineBox'}></span>
        </span>
        <span style={centerText}>{this.props.text}</span>
        <span>
          <span className={'lineBox2'}></span>
          <span>
           <img style={imgStyle} className={'lineImg2'} src="https://universe.leagueoflegends.com/images/line.png" />
          </span>
        </span>
      </h4>
    );
  }
}

@Radium
class LeagueButton extends React.Component {
  render() {

    var button = {
      color: this.props.color,
      //borderColor: this.props.borderColor,
      width: this.props.width,
      fontSize: '22px',
      fontFamily: 'Teko',
      padding: '6px',
      border: '2px solid transparent',
      borderColor: '#0596aa',
      borderImage: 'linear-gradient(to bottom,#0596aa 0,#005a82 100%)',
      backgroundColor: this.props.backgroundColor,
      borderImageSlice: 1,
      letterSpacing: 1.2,
      verticalAling: 'center',
      ':hover': {
        backgroundColor: '#0074d9'
      },
      lineHeight: '1.2em'
    };

    var aStyle = {
      color : "inherit"
    };

    var disabled;
    if (this.props.disabled === true) {
      disabled = true;
    } else {
      disabled = false;
    }

    return (
      <div>
      <a href={this.props.href} style={aStyle}>
      <button disabled={disabled} style={button} onClick={()=>this.props.passclick(this.props.champion,this.props.echampion)}>
         {this.props.text}
          {this.props.children}
      </button>
      </a>
      </div>
    );
  }
}

class QuickBuild extends React.Component {
  constructor(props) {
    super(props);
    var me = this;
    /*
    getJSON('http://localhost:3000/api' + window.location.pathname + '/enemywinrates',
      function(err, data) {
        if (err !== null) {
          console.log('Something went wrong: ' + err);
        } else {
          me.champWinRateData = data;
          champWinRateData = data;
          me.forceUpdate();
        }
      });
      */
  }

  handleClick(e) {

  }

  render() {
    //console.log(this.champWinRateData);
    var toptext = "Pick a Lane to Get Counters and Builds!";
    if (this.props.lane != 'none' && this.props.lane != 'loading') {
      toptext = "Quick Build for " + this.props.lane;
    }

    return (
      // onClick={this.handleClick.bind(this)}
        <div className="container">
          <h2>{toptext}</h2>

          <ul className="nav nav-tabs">
            <li><a data-toggle="pill" href="#home">Build #1</a></li>
            <li><a data-toggle="pill" href="#menu1">Build #2</a></li>
            <li><a data-toggle="pill" href="#menu2">Build #3</a></li>
            <li><a data-toggle="pill" href="#menu3">Build #4</a></li>
            <li><a data-toggle="pill" href="#menu3">Build #5</a></li>
          </ul>

          <div className="tab-content">

          </div>
        </div>
    );
  }
}

class ModalChampion extends React.Component {
  render() {
    var divLeft = {
      float: 'left',
      width: '35%',
      height: '100%',
      color: 'white',
      textAlign: 'center'
    };

    var divRight = {
      float: 'right',
      width: '35%',
      height: '100%',
      color: 'white',
      textAlign: 'center'
    };

    var echampName, champName, champKey;
    for (var i in champions["data"]) {
      if (champions["data"][i]["key"] === this.props.clickedChamp) {
        echampName = champions["data"][i]["name"];
      }
      if (champions["data"][i]["id"] === championId) {
        champName = champions["data"][i]["name"];
        champKey = champions["data"][i]["key"];
      }
    }

    var pStyle = {
      fontFamily: 'Timeless',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: '#d8cfbd',
      fontSize: '1.35em',
      margin: '0 0 2px'
    };

    var vsStyle = {
      fontFamily: 'Timeless',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: '#d8cfbd',
      fontSize: '.85em',
      margin: '0 0 2px'
    };

    var textbox = {
      padding: '2px',
      border: '2px solid #785b28',
      boxShadow: '0 0 80px #000',
      zIndex: 0,
      position: 'relative',
      width: '100%',
      background: '#16181d'
    };

    return (
      <Modal show={this.props.show} clickedChamp={echampName}>
        <div style={divLeft}>
          <div style={textbox}>
            <p style={pStyle}>{champName} Build</p>
            <p style={vsStyle}> vs </p>
            <p style={pStyle}>{echampName}</p>
          </div>
          <br/>
          <LeagueButton text={"GET BUILD!"} color={'#b2d9db'} width={'300px'} backgroundColor={'#1e2328'} passclick={this.props.passclick} champion={champKey} echampion={this.props.clickedChamp} />
        </div>
        <div style={divRight}>
          <div style={textbox}>
            <p style={pStyle}>{echampName} Build</p>
            <p style={vsStyle}> vs </p>
            <p style={pStyle}>{champName}</p>
            <p style={pStyle}>COMING SOON!</p>
          </div>
          <br/>
          <LeagueButton text={"GET BUILD!"} color={'#b2d9db'} width={'300px'} backgroundColor={'#1e2328'} passclick={this.props.passclick} champion={this.props.clickedChamp} echampion={champKey} disabled={true} />
        </div>
      </Modal>
    );
  }
}

function getRuneType(rune) {
  var runeMain = rune.toString().substr(0,2) + "00";
  switch (rune.toString()) {
    case '9101':
    case '9111':
    case '9104':
    case '9105':
    case '9103':
    case '8299':
      runeMain = "8000";
      break;
    case '8242':
      runeMain = "8400";
      break;
    default:
      break;
  }
  return runeMain;
}

class BuildContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.forceUpdate();
  }

  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  render() {
    if (this.props.notshow === true) {
      return false;
    }

    this.loadingContainer = {
      opacity: 1,
      height:'130%',
      width:'85%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      margin: '0 auto 30px',
      paddingTop: 22,
      paddingBottom: 8,
      textAlign: 'center',
      animation: 'fadeOutIn 0.85s'
    };

    this.afterl = {
      opacity: 0,
      height:'65%',
      width:'100%',
      animation: 'fadeIn 0.75s forwards'
    };

    function getPercentages(arr) {
      var total = 0;
      var newArr = arr;
      for (var p in arr) {
        if (arr[p][1] !== undefined) {
          total += arr[p][1];
        }
      }
      for (var p in arr) {
        if (arr[p][1] !== undefined) {
          newArr[p][2] = (((arr[p][1]) / total) * 100);
        }
      }
      return newArr;
    }

    function getRuneDescription(rune) {
      var runeMain = rune.toString().substr(0,2) + "00";
      switch (rune.toString()) {
        case '9101':
        case '9111':
        case '9104':
        case '9105':
        case '9103':
        case '8299':
          runeMain = "8000";
          break;
        case '8242':
          runeMain = "8400";
          break;
        default:
          break;

        }

      for (var i = 0; i < runeJSON.length; i++) {
        if (runeJSON[i]["id"].toString() === runeMain) {
          for (var h = 0; h < runeJSON[i]["slots"].length; h++) {
            for (var j = 0; j < runeJSON[i]["slots"][h]["runes"].length; j++) {
              if (runeJSON[i]["slots"][h]["runes"][j]["id"].toString() === rune.toString()) {
                return runeJSON[i]["slots"][h]["runes"][j]["summary"];
              }
            }
          }
        }
      }
    }

    var data = champWinRateData["winrates"][this.props.lane.toLowerCase()];
    var items, runes, summoners, totalEntries;

    for (var i in data) {
      if (data[i]["champion"] === this.props.echamp) {
        // Items
        items = getPercentages(data[i]["data"]["allItems"]);
        totalEntries = data[i]["data"]["total"];

        var totalSummoners = [];
        for (var p = 0; p < data[i]["data"]["summoner1"].length; p++) {
          totalSummoners[data[i]["data"]["summoner1"][p][0]] = data[i]["data"]["summoner1"][p][1];
        }
        for (var p = 0; p < data[i]["data"]["summoner2"].length; p++) {
          if (totalSummoners[data[i]["data"]["summoner2"][p][0]] !== undefined) {
            totalSummoners[data[i]["data"]["summoner2"][p][0]] += data[i]["data"]["summoner2"][p][1];
          } else {
            totalSummoners[data[i]["data"]["summoner2"][p][0]] = data[i]["data"]["summoner2"][p][1];
          }
        }
        summoners = totalSummoners;

        var runeData = [];
        for (var p = 0; p < data[i]["data"]["runeBuilds"].length; p++) {
          if (data[i]["data"]["runeBuilds"][p]["keystone"] === "0") {
            continue;
          }

          var total = 0;
          for (var h = 0; h < data[i]["data"]["runeBuilds"][p]["runesMain"].length; h++) {
            total += data[i]["data"]["runeBuilds"][p]["runesMain"][h][1];
          }
          var rune = {
            "keystone": data[i]["data"]["runeBuilds"][p]["keystone"],
            "runesMain": data[i]["data"]["runeBuilds"][p]["runesMain"],
            "runesSub": data[i]["data"]["runeBuilds"][p]["runesSub"],
            "total" : total
          };
          runeData.push(rune);
        }

        runeData.sort(function(a, b){
          return a.total < b.total;
        });

        for (var j = 0; j < runeData.length; j++) {
          var firstSubRune = runeData[j]["runesSub"][0][0], secondSubRune;

          for (var h = 1; h < runeData[j]["runesSub"].length; h++) {
            if (getRuneType(firstSubRune) === getRuneType(runeData[j]["runesSub"][h][0])) {
              secondSubRune = runeData[j]["runesSub"][h][0];
              break;
            }
          }
          var firstMainRune = runeData[j]["runesMain"][0][0], secondMainRune, thirdMainRune;

          for (var h = 1; h < runeData[j]["runesMain"].length; h++) {
            if (thirdMainRune === undefined) {
              if (getRuneType(firstMainRune) === getRuneType(runeData[j]["runesMain"][h][0])) {
                secondMainRune = runeData[j]["runesMain"][h][0];
              }
            } else {
              if (getRuneType(firstMainRune) === getRuneType(runeData[j]["runesMain"][h][0])) {
                thirdMainRune = runeData[j]["runesMain"][h][0];
                break;
              }
            }
          }

          runeData[j]["description"] = getRuneDescription(runeData[j]["keystone"]) + " - " + getRuneDescription(firstSubRune) + " - " + getRuneDescription(secondSubRune);
        }
        runes = runeData;
      }
    }

    var titleStyle = {
      fontSize: '1.5vw',
      textDecoration: 'underline',
      color: '#dbfbfc'
    };

    var descriptionStyle = {
      fontSize: '.7em',
      textAlign: 'center',
      lineHeight: '.7em',
      letterSpacing: 'initial',
    };

    var liStyle = {
      padding: '5px',
      display: 'list-item'
    };

    var build1 = <Build runes={runes[0]} items={items} summoners={getPercentages(summoners)} totalEntries={totalEntries} />;
    var build2 = <Build runes={runes[1]} items={items} summoners={getPercentages(summoners)} totalEntries={totalEntries} />;
    var build3 = <Build runes={runes[2]} items={items} summoners={getPercentages(summoners)} totalEntries={totalEntries} />;
    var chosenBuild;

    var buildButton1 = <li key={1} style={liStyle}><LeagueButton color={'#b2d9db'} width={'220px'} backgroundColor={'#1e2328'} passclick={this.handleClick} href={"#build1"}><span style={titleStyle}>Most Popular Build</span>  <br/><span style={descriptionStyle}>{runes[0]["description"]}</span></LeagueButton></li>;
    var buildButton2 = <li key={2} style={liStyle}><LeagueButton color={'#b2d9db'} width={'220px'} backgroundColor={'#1e2328'} passclick={this.handleClick} href={"#build2"}><span style={titleStyle}>2nd Build</span>  <br/><span style={descriptionStyle}>{runes[0]["description"]}</span></LeagueButton></li>;
    var buildButton3 = <li key={3} style={liStyle}><LeagueButton color={'#b2d9db'} width={'220px'} backgroundColor={'#1e2328'} passclick={this.handleClick} href={"#build3"}><span style={titleStyle}>3rd Build</span>  <br/><span style={descriptionStyle}>{runes[2]["description"]}</span></LeagueButton></li>;

    var tab = window.location.hash.substr(1);
    switch (tab) {
      case "":
      case "build1":
        chosenBuild = build1;
        buildButton1 = <li key={1} style={liStyle}><LeagueButton color={'#b2d9db'} width={'220px'} backgroundColor={'#627487'} passclick={this.handleClick} href={"#build1"}><span style={titleStyle}>Best Build</span>  <br/><span style={descriptionStyle}>{runes[0]["description"]}</span></LeagueButton></li>;
        break;
      case "build2":
        chosenBuild = build2;
        buildButton2 = <li key={2} style={liStyle}><LeagueButton color={'#b2d9db'} width={'220px'} backgroundColor={'#627487'} passclick={this.handleClick} href={"#build2"}><span style={titleStyle}>2nd Build</span>  <br/><span style={descriptionStyle}>{runes[0]["description"]}</span></LeagueButton></li>;
        break;
      case "build3":
        chosenBuild = build3;
        buildButton3 = <li key={3} style={liStyle}><LeagueButton color={'#b2d9db'} width={'220px'} backgroundColor={'#627487'} passclick={this.handleClick} href={"#build3"}><span style={titleStyle}>3rd Build</span>  <br/><span style={descriptionStyle}>{runes[2]["description"]}</span></LeagueButton></li>;
        break;
      default:
        chosenBuild = build1;
        break;
    }

    var tabContent = {
      width: '100%',
      height: '100%'
    };

    var nav = {
      borderBottom: '0px',
      textAlign: 'center',
      display: 'flex',
      listStyleType: 'none',
      justifyContent: 'center'
    };

    var buildButtons = [];
    buildButtons.push(buildButton1);
    buildButtons.push(buildButton2);
    buildButtons.push(buildButton3);


    return (
      <div style={this.loadingContainer} className={"champbox"}>
      <div style={this.afterl}>
          <ul style={nav} className="nav nav-tabs">
            {buildButtons}
          </ul>

          <div style={tabContent}>
            {chosenBuild}
          </div>
          <BuildBottom items={items} summoners={summoners} />
      </div>

    </div>);
  }
}

class Build extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    var runes = this.props.runes;

    var runeOuterFrame = {
      padding: '2px',
      margin: '2em 0 1em',
      background: 'linear-gradient(0deg, #6c5021 0%, #ab8f57 100%)',
      boxShadow: '0 0 80px #000',
      zIndex: 0,
      position: 'relative',
      width: '100%',
      height: '105%'
    };
    var runeInnerFrame = {
      display: 'flex',
      flexDirection: 'column',
      padding: '30px 20px',
      backgroundPosition: 'right center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '115%',
      position: 'relative',
      width: '100%',
      height: '100%'
    };
    var background = {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: '-2',
      pointerEvents: 'none',
      userSelect: 'none',
      willChange: 'transform',
      transition: '0.3s',
      opacity: 1,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '120%'
    };

    var keystone = this.props.runes["keystone"];
    var leftBackground, rightBackground, topIcon;
    var titleFillMain, titleFillSub;

    switch(getRuneType(keystone)) {
      case "8000":
        background["backgroundImage"] = 'url(' + precisionBackground + ')';
        leftBackground = mainRuneImages["8000"]["left"];
        topIcon = mainRuneImages["8000"]["topIcon"];
        titleFillMain = '#c8aa6e';
        break;
      case "8100":
        background["backgroundImage"] = 'url(' + dominationBackground + ')';
        leftBackground = mainRuneImages["8100"]["left"];
        topIcon = mainRuneImages["8100"]["topIcon"];
        titleFillMain = '#d44242';
        break;
      case '8200':
        background["backgroundImage"] = 'url(' + sorceryBackground + ')';
        leftBackground = mainRuneImages["8200"]["left"];
        topIcon = mainRuneImages["8200"]["topIcon"];
        titleFillMain = '#9faafc';
        break;
      case '8300':
        background["backgroundImage"] = 'url(' + inspirationBackground + ')';
        leftBackground = mainRuneImages["8300"]["left"];
        topIcon = mainRuneImages["8300"]["topIcon"];
        titleFillMain = '#49aab9';
        break;
      case '8400':
        background["backgroundImage"] = 'url(' + resolveBackground + ')';
        leftBackground = mainRuneImages["8400"]["left"];
        topIcon = mainRuneImages["8400"]["topIcon"];
        titleFillMain = '#a1d586';
        break;
    }

    function ifRuneInSameTree(runeMain, firstRune, secondRune, thirdRune) {

      for (var i = 0; i < runeJSON.length; i++) {
        if (runeJSON[i]["id"].toString() === runeMain) {
          for (var h = 0; h < runeJSON[i]["slots"].length; h++) {
            for (var j = 0; j < runeJSON[i]["slots"][h]["runes"].length; j++) {
              if (runeJSON[i]["slots"][h]["runes"][j]["id"].toString() === firstRune.toString()) {
                for (var z = 0; z < runeJSON[i]["slots"][h]["runes"].length; z++) {
                  if (runeJSON[i]["slots"][h]["runes"][j]["id"].toString() === secondRune.toString()) {
                    return true;
                  }
                }
              }
            }
          }
        }
      }

      if (thirdRune !== "") {
        for (var i = 0; i < runeJSON.length; i++) {
          if (runeJSON[i]["id"].toString() === runeMain) {
            for (var h = 0; h < runeJSON[i]["slots"].length; h++) {
              for (var j = 0; j < runeJSON[i]["slots"][h]["runes"].length; j++) {
                if (runeJSON[i]["slots"][h]["runes"][j]["id"].toString() === firstRune.toString()) {
                  for (var z = 0; z < runeJSON[i]["slots"][h]["runes"].length; z++) {
                    if (runeJSON[i]["slots"][h]["runes"][j]["id"].toString() === thirdRune.toString()) {
                      return true;
                    }
                  }
                }
              }
              for (var j = 0; j < runeJSON[i]["slots"][h]["runes"].length; j++) {
                if (runeJSON[i]["slots"][h]["runes"][j]["id"].toString() === secondRune.toString()) {
                  for (var z = 0; z < runeJSON[i]["slots"][h]["runes"].length; z++) {
                    if (runeJSON[i]["slots"][h]["runes"][j]["id"].toString() === thirdRune.toString()) {
                      return true;
                    }
                  }
                }
              }
            }
          }
        }
      }

      return false;
    }


    function getValidRuneBuild(runes, type) {
      var firstRune = runes[0], secondRune = runes[1];

      var runeMain = firstRune.toString().substr(0,2) + "00";
      switch (firstRune.toString()) {
        case '9101':
        case '9111':
        case '9104':
        case '9105':
        case '9103':
        case '8299':
          runeMain = "8000";
          break;
        case '8242':
          runeMain = "8400";
          break;
        default:
          break;

      }

      var counter = 1;
      while (ifRuneInSameTree(runeMain,firstRune,secondRune, "") === true) {
        counter += 1;
        secondRune = runes[counter];
      }

      if (type === "main") {

        var thirdRune = runes[2];

        counter = 2;
        while (ifRuneInSameTree(runeMain,firstRune,secondRune, thirdRune) === true) {
          counter += 1;
          thirdRune = runes[counter];
        }
        var runeBuild = [firstRune,secondRune,thirdRune];
        return runeBuild;

      } else {
        var runeBuild = [firstRune,secondRune];
        return runeBuild;
      }
    }

    var mainRunes = [], subRunes = [];
    for (var i in runes["runesMain"]) {
      mainRunes.push(runes["runesMain"][i][0]);
    }
    for (var i in runes["runesSub"]) {
      subRunes.push(runes["runesSub"][i][0]);
    }

    mainRunes = getValidRuneBuild(mainRunes, "main");
    subRunes = getValidRuneBuild(subRunes, "sub");

    var mainRuneDescriptions = [], subRuneDescriptions = [], mainRuneTitles = [], subRuneTitles = [], topIcon2, keystoneDescription, keystoneTitle;
    for (var z = 0; z < mainRunes.length; z++) {
      for (var i = 0; i < runeJSON.length; i++) {
        if (runeJSON[i]["id"].toString() === getRuneType(mainRunes[z])) {
          for (var h = 0; h < runeJSON[i]["slots"].length; h++) {
            for (var j = 0; j < runeJSON[i]["slots"][h]["runes"].length; j++) {
              if (runeJSON[i]["slots"][h]["runes"][j]["id"].toString() === mainRunes[z].toString()) {
                mainRuneDescriptions.push(runeJSON[i]["slots"][h]["runes"][j]["shortDesc"]);
                mainRuneTitles.push(runeJSON[i]["slots"][h]["runes"][j]["name"]);
              }
            }
          }
        }
      }
    }

    for (var z = 0; z < subRunes.length; z++) {
      for (var i = 0; i < runeJSON.length; i++) {
        if (runeJSON[i]["id"].toString() === getRuneType(subRunes[z])) {
          for (var h = 0; h < runeJSON[i]["slots"].length; h++) {
            for (var j = 0; j < runeJSON[i]["slots"][h]["runes"].length; j++) {
              if (runeJSON[i]["slots"][h]["runes"][j]["id"].toString() === subRunes[z].toString()) {
                subRuneDescriptions.push(runeJSON[i]["slots"][h]["runes"][j]["shortDesc"]);
                subRuneTitles.push(runeJSON[i]["slots"][h]["runes"][j]["name"]);
              }
            }
          }
        }
      }
    }

    for (var i = 0; i < runeJSON.length; i++) {
      if (runeJSON[i]["id"].toString() === getRuneType(keystone)) {
        for (var h = 0; h < runeJSON[i]["slots"].length; h++) {
          for (var j = 0; j < runeJSON[i]["slots"][h]["runes"].length; j++) {
            if (runeJSON[i]["slots"][h]["runes"][j]["id"].toString() === keystone.toString()) {
              keystoneDescription = runeJSON[i]["slots"][h]["runes"][j]["shortDesc"];
              keystoneTitle = runeJSON[i]["slots"][h]["runes"][j]["name"];
            }
          }
        }
      }
    }

    switch(getRuneType(subRunes[0])) {
      case "8000":
        rightBackground = mainRuneImages["8000"]["right"];
        topIcon2 = mainRuneImages["8000"]["topIcon"];
        titleFillSub = '#c8aa6e';
        break;
      case "8100":
        rightBackground = mainRuneImages["8100"]["right"];
        topIcon2 = mainRuneImages["8100"]["topIcon"];
        titleFillSub = '#d44242';
        break;
      case '8200':
        rightBackground = mainRuneImages["8200"]["right"];
        topIcon2 = mainRuneImages["8200"]["topIcon"];
        titleFillSub = '#9faafc';
        break;
      case '8300':
        rightBackground = mainRuneImages["8300"]["right"];
        topIcon2 = mainRuneImages["8300"]["topIcon"];
        titleFillSub = '#49aab9';
        break;
      case '8400':
        rightBackground = mainRuneImages["8400"]["right"];
        topIcon2 = mainRuneImages["8400"]["topIcon"];
        titleFillSub = '#a1d586';
        break;
    }

    var svg1 = {
      marginLeft: '5%',
      marginTop: '5%',
      height: (window.innerWidth * .4),
      float: 'left'
    };

    var svg2 = {
      height: (window.innerWidth * .27),
      float: 'left',
      marginLeft: '5%',
      marginTop: '5%'
    };

    var temp = {
      fontSize: '30px',
      fontFamily: 'Timeless-Light',
      lineHeight: '30px',
      letterSpacing: '1px',
      color: '#a09b8c'
    };

    return (
        <div style={runeOuterFrame}>
          <div style={runeInnerFrame}>
            <div style={background}>
              <div className={"runeBuild"}>
                <svg style={svg1} viewBox="0 0 800 1200">
                  <image x="0" y="0" height={"1200px"} xlinkHref={leftBackground} />
                  <image x="45" y="40" xlinkHref={topIcon} />
                  <image x="-42" y="228" xlinkHref={runeImages[runes["keystone"]]} />
                    <text fill={titleFillMain} fontSize="45" fontFamily="Verdana" x="210" y="296">{keystoneTitle}</text>
                    <foreignObject x="230" y="316" width="520" height="220">
                      <p style={temp}>{keystoneDescription}</p>
                    </foreignObject>
                  <image x="32" y="580" xlinkHref={runeImages[mainRunes[0]]} />
                    <text fill={titleFillMain} fontSize="45" fontFamily="Verdana" x="210" y="610">{mainRuneTitles[0]}</text>
                    <foreignObject x="230" y="630" width="520" height="220">
                      <p style={temp} >{mainRuneDescriptions[0]}</p>
                    </foreignObject>
                  <image x="32" y="834" xlinkHref={runeImages[mainRunes[1]]} />
                    <text fill={titleFillMain} fontSize="45" fontFamily="Verdana" x="210" y="870">{mainRuneTitles[1]}</text>
                    <foreignObject x="230" y="890" width="520" height="220">
                      <p style={temp} >{mainRuneDescriptions[1]}</p>
                    </foreignObject>
                  <image x="32" y="1085" xlinkHref={runeImages[mainRunes[2]]} />
                    <text fill={titleFillMain} fontSize="45" fontFamily="Verdana" x="210" y="1120">{mainRuneTitles[2]}</text>
                    <foreignObject x="230" y="1140" width="520" height="220">
                      <p style={temp} >{mainRuneDescriptions[2]}</p>
                    </foreignObject>
                </svg>
                <svg style={svg2} viewBox="0 0 800 800">
                  <image x="0" y="0" height={"680px"} xlinkHref={rightBackground} />
                  <image x="42" y="40" xlinkHref={topIcon2} />
                  <image x="32" y="296" xlinkHref={runeImages[subRunes[0]]} />
                    <text fill={titleFillSub} fontSize="45" fontFamily="Verdana" x="210" y="316">{subRuneTitles[0]}</text>
                    <foreignObject x="230" y="336" width="520" height="220">
                      <p style={temp}>{subRuneDescriptions[0]}</p>
                    </foreignObject>
                  <image x="32" y="568" xlinkHref={runeImages[subRunes[1]]} />
                    <text fill={titleFillSub} fontSize="45" fontFamily="Verdana" x="210" y="590">{subRuneTitles[1]}</text>
                    <foreignObject x="230" y="610" width="520" height="220">
                      <p style={temp}>{subRuneDescriptions[1]}</p>
                    </foreignObject>
                </svg>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

class BuildBottom extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    function filterItems(items) {
      var newItems = items, finalItems = [], ifBoots = false;
      for (var i = 0; i < newItems.length; i++) {
        var firstTwo = newItems[i][0].substr(0,2);
        if (firstTwo === "10" || firstTwo === "0" || newItems[i][0] === "2003" || newItems[i][0] === "2032" || newItems[i][0] === "2031") {
        } else {
          var boot = false;
          switch (newItems[i]) {
            case "3006":
            case "3047":
            case "3117":
            case "3009":
            case "3020":
            case "3111":
              boot = true;
              break;
            default:
              break;
          }
          if (ifBoots === false) {
            finalItems.push(newItems[i]);
            if (boot === true) {
              ifBoots = true;
            }
          } else {
            if (boot === false) {
              finalItems.push(newItems[i]);
            }
          }
        }
      }

      return finalItems;
    }

    var runeOuterFrame = {
      padding: '2px',
      margin: '2em 0 1em',
      background: 'linear-gradient(0deg, #6c5021 0%, #ab8f57 100%)',
      boxShadow: '0 0 80px #000',
      zIndex: 0,
      position: 'relative',
      width: '100%',
      height: '20%',
      marginTop: '5%',
      marginBottom: '5%'
    };
    var runeInnerFrame = {
      display: 'flex',
      flexDirection: 'column',
      padding: '30px 20px',
      backgroundPosition: 'right center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      width: '100%',
      height: '100%'
    };
    var background = {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: '-2',
      pointerEvents: 'none',
      userSelect: 'none',
      willChange: 'transform',
      transition: '0.3s',
      opacity: 1,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: 'black'
    };

    var itemBox = {
      width: "50%",
      height: '100%',
      float: 'left',
      verticalAlign: 'middle'
    };

    var itemContainer = {
      margin: '0 auto',
      width: '100%'
    };

    var itemText = {
      fontFamily: 'Timeless',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: '#d8cfbd',
      fontSize: '1.5vw'
    };

    var items = filterItems(this.props.items);
    var summonerView = [], total = 0, newSummonerArray = [];

    for (var i = 0; i < this.props.summoners.length; i++) {
      if (this.props.summoners[i] > 0) {
        total += this.props.summoners[i];
        newSummonerArray.push([i,this.props.summoners[i]]);
      }
    }

    newSummonerArray.sort(function(a, b){
      return b[1] - a[1]
    });

    for (var i = 0; i < newSummonerArray.length; i++) {
        var tempPercent = ((newSummonerArray[i][1] / total) * 100);
        summonerView.push(<ImageBox key={i} width={window.innerHeight * 0.0625} height={window.innerHeight * 0.0625} item={""} summoner={[parseInt(newSummonerArray[i][0]),tempPercent]}  />);
    }

    /*for (var i = 0; i < this.props.summoners.length; i++) {
      if (this.props.summoners[i] > 0) {
        this.props.summoners[i] = ((this.props.summoners[i] / total) * 100);
        summonerView.push(<ImageBox key={i} width={window.innerHeight * 0.0625} height={window.innerHeight * 0.0625} item={""} summoner={[i,this.props.summoners[i]]}  />);
      }
    }*/

    return (
      <div style={runeOuterFrame}>
        <div style={runeInnerFrame}>
          <div style={background}>
            <div style={itemBox}>
              <h3 style={itemText}>MOST BUILT ITEMS</h3>
                <div style={itemContainer}>
                    <ImageBox width={window.innerHeight * 0.0625} height={window.innerHeight * 0.0625} item={items[0][0]} />
                    <ImageBox width={window.innerHeight * 0.0625} height={window.innerHeight * 0.0625} item={items[1][0]} />
                    <ImageBox width={window.innerHeight * 0.0625} height={window.innerHeight * 0.0625} item={items[2][0]} />
                    <ImageBox width={window.innerHeight * 0.0625} height={window.innerHeight * 0.0625} item={items[3][0]} />
                    <ImageBox width={window.innerHeight * 0.0625} height={window.innerHeight * 0.0625} item={items[4][0]} />
                    <ImageBox width={window.innerHeight * 0.0625} height={window.innerHeight * 0.0625} item={items[5][0]} />
                 </div>
            </div>
            <div style={itemBox}>
              <h3 style={itemText}>MOST POPULAR SUMMONERS</h3>
              <div style={itemContainer}>
                {summonerView}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ImageBox extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    var runeOuterFrame = {
      padding: '1px',
      marginLeft: '1%',
      marginRight: '1%',
      background: 'linear-gradient(0deg, #6c5021 0%, #ab8f57 100%)',
      boxShadow: '0 0 80px #000',
      zIndex: 0,
      position: 'relative',
      width: this.props.width,
      height: this.props.height,
      display: 'inline-block'
    };
    var runeInnerFrame = {
      display: 'flex',
      flexDirection: 'column',
      backgroundPosition: 'right center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      width: '100%',
      height: '100%'
    };
    var background = {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: '-2',
      pointerEvents: 'none',
      userSelect: 'none',
      willChange: 'transform',
      transition: '0.3s',
      opacity: 1,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: 'black'
    };

    var percentageText = {
      position: 'absolute',
      top: '120%',
      fontFamily: 'Timeless',
      color: '#d8cfbd',
      fontSize: '1vw',
      left: '10%'
    };

    var text;
    if (this.props.item !== "") {
      background["backgroundImage"] = 'url(http://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/' + this.props.item + '.png)';
    } else {
      background["backgroundImage"] = 'url(' + summonerSpells[this.props.summoner[0]] + ')';
      text = <p style={percentageText}>{this.props.summoner[1].toFixed(2) + "%"}</p>;
    }

    return (
      <div style={runeOuterFrame}>
        <div style={runeInnerFrame}>
          <div style={background}>
            {text}
          </div>
        </div>
      </div>
    );
  }
}

class MainWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pickedLane: 'none',
      showModal: false,
      clickedChamp: "",
      showChampList: true,
      champ: "",
      echamp: ""
    };
    this.handleClickMain = this.handleClickMain.bind(this);
    this.handleClickChampion = this.handleClickChampion.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleClickMain(passedLane) {
    this.setState({
      pickedLane: 'loading',
      showChampList: true
    });

    setTimeout(function() {
      this.setState({
        pickedLane: passedLane
      });
    }.bind(this),2000);
  }

  handleClickChampion(champ) {
    this.setState({
      showModal: true,
      clickedChamp: champ
    });
  }

  handleModalClose(champ,echamp) {
    this.setState({
      showModal: false,
      showChampList: false,
      champ: champ,
      echamp: echamp
    });
  }

  render() {
    var centertext = {
      marginTop: '30px',
      marginBottom: '12px'
    };

    return (
      <div style={page_style}>
        <Navbar/>
        <br/>
        <ModalChampion show={this.state.showModal} passclick={this.handleModalClose} clickedChamp={this.state.clickedChamp} />

        <h1 style={title_style}>counterpick.gg</h1>
      <div style={boxTop2} className={"champbox"}>
        <TopContainer/>
      </div>
        <div style={centertext}>
          <CenterText text={"Pick Lane to Get Counter Builds"}/>
        </div>
      <div style={boxTop} className={"champbox"}>
        <div style={laneBox}>
          <LaneContainer handleClickMain={this.handleClickMain} />
        </div>
        </div>
        <BottomContainer show={this.state.showChampList} lane={this.state.pickedLane} championClick={this.handleClickChampion} />
        <BuildContainer notshow={this.state.showChampList} lane={this.state.pickedLane} champ={this.state.champ} echamp={this.state.echamp} />
      </div>
    );
  }
}

/*  Quick Build Stuffs DONT DELETE
<div style={centertext}>
          <CenterText text={"Quick Build!"}/>
        </div>
        <div style={boxQuick} className={"champbox"}>
          <QuickBuild lane={this.state.pickedLane} />
        </div> */

export const championpage = () => (
    <MainWrapper/>

)

export default Radium(championpage)
