import React from 'react'
import { browserHistory, Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import championpage from '../routes/ChampionPage/championpage.js'
import HomeView from '../routes/Home/components/HomeView.js'
import FAQ from "../routes/FAQ/faq.js"
import HowItWorks from "../routes/HowItWorks/howitworks"

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} >
          <Route path="/" component={HomeView} />
            <Route path='/faq' component={FAQ}/>
            <Route path='/how-it-works' component={HowItWorks}/>
            <Route path='/MonkeyKing' component={championpage}/>
<Route path='/Jax' component={championpage}/>
<Route path='/Fiddlesticks' component={championpage}/>
<Route path='/Shaco' component={championpage}/>
<Route path='/Warwick' component={championpage}/>
<Route path='/Xayah' component={championpage}/>
<Route path='/Nidalee' component={championpage}/>
<Route path='/Zyra' component={championpage}/>
<Route path='/Kled' component={championpage}/>
<Route path='/Brand' component={championpage}/>
<Route path='/Rammus' component={championpage}/>
<Route path='/Illaoi' component={championpage}/>
<Route path='/Corki' component={championpage}/>
<Route path='/Braum' component={championpage}/>
<Route path='/Darius' component={championpage}/>
<Route path='/Tryndamere' component={championpage}/>
<Route path='/MissFortune' component={championpage}/>
<Route path='/Yorick' component={championpage}/>
<Route path='/Xerath' component={championpage}/>
<Route path='/Sivir' component={championpage}/>
<Route path='/Riven' component={championpage}/>
<Route path='/Orianna' component={championpage}/>
<Route path='/Gangplank' component={championpage}/>
<Route path='/Malphite' component={championpage}/>
<Route path='/Poppy' component={championpage}/>
<Route path='/Karthus' component={championpage}/>
<Route path='/Jayce' component={championpage}/>
<Route path='/Nunu' component={championpage}/>
<Route path='/Trundle' component={championpage}/>
<Route path='/Graves' component={championpage}/>
<Route path='/Morgana' component={championpage}/>
<Route path='/Gnar' component={championpage}/>
<Route path='/Lux' component={championpage}/>
<Route path='/Shyvana' component={championpage}/>
<Route path='/Renekton' component={championpage}/>
<Route path='/Fiora' component={championpage}/>
<Route path='/Jinx' component={championpage}/>
<Route path='/Kalista' component={championpage}/>
<Route path='/Fizz' component={championpage}/>
<Route path='/Kassadin' component={championpage}/>
<Route path='/Sona' component={championpage}/>
<Route path='/Irelia' component={championpage}/>
<Route path='/Viktor' component={championpage}/>
<Route path='/Rakan' component={championpage}/>
<Route path='/Kindred' component={championpage}/>
<Route path='/Cassiopeia' component={championpage}/>
<Route path='/Maokai' component={championpage}/>
<Route path='/Ornn' component={championpage}/>
<Route path='/Thresh' component={championpage}/>
<Route path='/Kayle' component={championpage}/>
<Route path='/Hecarim' component={championpage}/>
<Route path='/Khazix' component={championpage}/>
<Route path='/Olaf' component={championpage}/>
<Route path='/Ziggs' component={championpage}/>
<Route path='/Syndra' component={championpage}/>
<Route path='/DrMundo' component={championpage}/>
<Route path='/Karma' component={championpage}/>
<Route path='/Annie' component={championpage}/>
<Route path='/Akali' component={championpage}/>
<Route path='/Volibear' component={championpage}/>
<Route path='/Yasuo' component={championpage}/>
<Route path='/Kennen' component={championpage}/>
<Route path='/Rengar' component={championpage}/>
<Route path='/Ryze' component={championpage}/>
<Route path='/Shen' component={championpage}/>
<Route path='/Zac' component={championpage}/>
<Route path='/Talon' component={championpage}/>
<Route path='/Swain' component={championpage}/>
<Route path='/Bard' component={championpage}/>
<Route path='/Sion' component={championpage}/>
<Route path='/Vayne' component={championpage}/>
<Route path='/Nasus' component={championpage}/>
<Route path='/Kayn' component={championpage}/>
<Route path='/TwistedFate' component={championpage}/>
<Route path='/Chogath' component={championpage}/>
<Route path='/Udyr' component={championpage}/>
<Route path='/Lucian' component={championpage}/>
<Route path='/Ivern' component={championpage}/>
<Route path='/Leona' component={championpage}/>
<Route path='/Caitlyn' component={championpage}/>
<Route path='/Sejuani' component={championpage}/>
<Route path='/Nocturne' component={championpage}/>
<Route path='/Zilean' component={championpage}/>
<Route path='/Azir' component={championpage}/>
<Route path='/Rumble' component={championpage}/>
<Route path='/Taliyah' component={championpage}/>
<Route path='/Teemo' component={championpage}/>
<Route path='/Urgot' component={championpage}/>
<Route path='/Amumu' component={championpage}/>
<Route path='/Galio' component={championpage}/>
<Route path='/Heimerdinger' component={championpage}/>
<Route path='/Anivia' component={championpage}/>
<Route path='/Ashe' component={championpage}/>
<Route path='/Velkoz' component={championpage}/>
<Route path='/Singed' component={championpage}/>
<Route path='/Skarner' component={championpage}/>
<Route path='/Varus' component={championpage}/>
<Route path='/Twitch' component={championpage}/>
<Route path='/Garen' component={championpage}/>
<Route path='/Blitzcrank' component={championpage}/>
<Route path='/MasterYi' component={championpage}/>
<Route path='/Elise' component={championpage}/>
<Route path='/Alistar' component={championpage}/>
<Route path='/Katarina' component={championpage}/>
<Route path='/Ekko' component={championpage}/>
<Route path='/Mordekaiser' component={championpage}/>
<Route path='/Lulu' component={championpage}/>
<Route path='/Camille' component={championpage}/>
<Route path='/Aatrox' component={championpage}/>
<Route path='/Draven' component={championpage}/>
<Route path='/TahmKench' component={championpage}/>
<Route path='/Pantheon' component={championpage}/>
<Route path='/XinZhao' component={championpage}/>
<Route path='/AurelionSol' component={championpage}/>
<Route path='/LeeSin' component={championpage}/>
<Route path='/Taric' component={championpage}/>
<Route path='/Malzahar' component={championpage}/>
<Route path='/Lissandra' component={championpage}/>
<Route path='/Diana' component={championpage}/>
<Route path='/Tristana' component={championpage}/>
<Route path='/RekSai' component={championpage}/>
<Route path='/Vladimir' component={championpage}/>
<Route path='/JarvanIV' component={championpage}/>
<Route path='/Nami' component={championpage}/>
<Route path='/Jhin' component={championpage}/>
<Route path='/Soraka' component={championpage}/>
<Route path='/Veigar' component={championpage}/>
<Route path='/Janna' component={championpage}/>
<Route path='/Nautilus' component={championpage}/>
<Route path='/Evelynn' component={championpage}/>
<Route path='/Gragas' component={championpage}/>
<Route path='/Zed' component={championpage}/>
<Route path='/Vi' component={championpage}/>
<Route path='/KogMaw' component={championpage}/>
<Route path='/Ahri' component={championpage}/>
<Route path='/Quinn' component={championpage}/>
<Route path='/Leblanc' component={championpage}/>
<Route path='/Ezreal' component={championpage}/>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
