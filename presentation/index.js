// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
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
          <Heading size={2} textColor="secondary">最近流行りのメモリを管理する手法の一つを理解してイケメンになる</Heading>
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
            <ListItem>今回は時間と難易度の問題で肝心の推論規則の話などはしません・・・興味のある人は声かけてね！</ListItem>

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
          <Heading size={6} textColor="secondary" caps>let式の例</Heading>
          <Image src="https://i.imgur.com/n4pGFZV.png" />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>regionの割り当て</Heading>
          <Image src="https://i.imgur.com/pqF7ofp.png" />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>🎉🎉🎉🎉</Heading>
          <Heading size={3} textColor="primary" caps>これで無事リージョンが書き込みと読み込み</Heading>
          <Heading size={3} textColor="primary" caps>で働いていることを確認できました！</Heading>

        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>これで嬉しいことや実用の雑多な話</Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>このスライドで話せてなかったこと</Heading>
          <List>
            <ListItem>リージョン推論についての規則までは示していない</ListItem>
            <ListItem>リージョン推論のioを示したが，リージョンのサイズに関する最適化 </ListItem>
            <ListItem>つまりmalloc realloc free相当の機能（適当） </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>嬉しいこと</Heading>
          <List>
            <ListItem>型システム上でメモリを管理ができるので数理的に正しい意味を持ったGCができた</ListItem>
            <ListItem>正しさを持っているので形式的な検証が可能になる</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>実用例</Heading>
          <List>
            <ListItem>Rust lang</ListItem>
            <ListItem>Mozillaが作った言語</ListItem>
            <ListItem>ググりラビリてぃが悪い(rustは錆びなのでライブラリ含め鉄ぽい話が多い）</ListItem>
            <ListItem>リージョンサイズはアフィン型は全てのリソースに対リソースが最大でも1回しか消費されないことを要求する型システムを用いてサイズを求めてる</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>実用例</Heading>
          <List>
            <ListItem>自作OS</ListItem>
            <ListItem>型システム上で絶対正しいのでC++の代わりのようにみんな使ってる．セグフォが出ない</ListItem>
            <ListItem>セグフォが出ない</ListItem>
            <ListItem>最高</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>まとめ</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>まとめ</Heading>
          <List>
            <ListItem>リージョンについて話した</ListItem>
            <ListItem>Rustみんな使いましょう</ListItem>
            <ListItem>セグフォが出ない.最高！！</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
