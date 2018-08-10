// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Markdown
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Region推論の話
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            @takemioIO:takeru hayasaka
          </Text>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">目的</Heading>
          <Heading size={2} textColor="secondary">最近流行りのメモリを管理する手法の一つを理解してイケてるやつになる</Heading>
          <Heading size={6} textColor="secondary">（雰囲気が分かればおっけー）</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Image height="600" width="600" src="https://i.imgur.com/bYUbrWA.jpg?size=" />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>TakeruHayasaka</Heading>
          <Heading size={4} textColor="secondary" caps>@takemioIO</Heading>
          <List>
            <ListItem>今年度忙しくてバイトになかなか来れてない奴:bow:</ListItem>
            <ListItem>最近のマイブームはなろう小説を読むことと積ん読を増やすこと</ListItem>
            <ListItem>好きなCS分野はプログラミング意味論とオーバーレイネットワーク</ListItem>
          </List>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>こういうところで</Heading>
          <Image src="https://i.imgur.com/V8QsgXw.jpg" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>こういう奴をいじって</Heading>
          <Image src="https://i.imgur.com/nF0U0Qv.jpg" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>こういう大規模ネットワークの一部をやった</Heading>
          <Image src="https://i.imgur.com/t0aUCU8.jpg" />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>アジェンダ</Heading>
          <List>
            <ListItem>リージョン推論とは？</ListItem>
            <ListItem>推論割り当ての仕組み</ListItem>
            <ListItem>これで嬉しいことや実用の雑多な話</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Quote>リージョン推論とは？</Quote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>リージョン推論</Heading>
          <List>
            <ListItem>メモリの扱いを静的に決定して実行時にできるだけ最適なメモリ割り当てができないだろうかというアプローチ手法</ListItem>
            <ListItem>型システム上で管理するメモリ管理手法(GC)</ListItem>
            <ListItem>Region->名前付きstack領域を示すもの</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>リージョン推論</Heading>
          <List>
            <ListItem>よく名前にはpが使われて，これは整数値・実数値・文字列などの領域を示す</ListItem>
            <ListItem>つまりpはどこで確保されて，どこで解放されるということがわかる</ListItem>
            <ListItem>プログラム全体でこの要素はどこで確保されてどこで解放されるかが明示的に表現される</ListItem>
          </List>
        </Slide>
        
        <Slide transition={["fade"]} bgColor="tertiary">
          <Quote>推論割り当ての仕組み</Quote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>regionの割り当て</Heading>
          <List>
            <ListItem>1.ラムダや整数など保存可能なものに注釈をつける</ListItem>
            <ListItem>e1 at r1</ListItem>
            <ListItem>2.式全体にResion変数を導入してそれの生存範囲を記述する</ListItem>
            <ListItem>letregion r2 in e2 end</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>regionの割り当て</Heading>
          <Image src="https://i.imgur.com/pqF7ofp.png" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>

      </Deck>
    );
  }
}
