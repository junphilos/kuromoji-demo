const builder = kuromoji.builder({ dicPath: "dict/" });

const processText = (string) => {
  return (err, tokenizer) => {
    if (err) {
      console.error(err);
      return;
    }
    
    const tokens = tokenizer.tokenize(string);
    console.log('tokens', tokens);
    
    // 結果をHTMLに表示
    const resultDiv = document.querySelector('#result');
    if (resultDiv) {
      // 各トークンの情報を表示
      const htmlContent = tokens.map(token => {
        return `
          <div class="token">
            <span class="title bold">${token.surface_form}</span>
            <span class="reading">読み：${token.reading || 'N/A'}</span>
            <span class="pos">品詞：${token.pos}</span>
            <span class="basic_form">基本形：${token.basic_form}</span>
          </div>
        `;
      }).join('');
      
      resultDiv.innerHTML = htmlContent;
    }
  };
};

const textList = [
  "すもももももももものうち",
  "吾輩は猫である。名前はまだ無い。",
  "国境の長いトンネルを抜けると雪国であった。",
  "人間失格。",
  "その日、傘をささずに小供は往来を駈けて行った。",
  "智に働けば角が立つ。情に棹させば流される。",
  "山椒魚は悲しんだ。",
  "銀河鉄道の夜。",
  "風立ちぬ、いざ生きめやも。",
  "すべての過去は、プロローグにすぎない。",
  "月がきれいですね。"
];

function getRandomExcerpt() {
  const randomIndex = Math.floor(Math.random() * textList.length);
  return textList[randomIndex];
}

const initText = getRandomExcerpt();
document.querySelector('#text').value = initText;
builder.build(processText(initText));

// テキストを変更したら1秒後に再処理
document.querySelector('#text').addEventListener('keydown', (e) => {
  setTimeout(() => {
    const text = e.target.value;
    builder.build(processText(text));
  }, 900);
});