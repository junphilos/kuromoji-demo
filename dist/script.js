(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/script.js
  var require_script = __commonJS({
    "src/script.js"() {
      var builder = kuromoji.builder({ dicPath: "dict/" });
      var processText = (string) => {
        return (err, tokenizer) => {
          if (err) {
            console.error(err);
            return;
          }
          const tokens = tokenizer.tokenize(string);
          console.log("tokens", tokens);
          const resultDiv = document.querySelector("#result");
          if (resultDiv) {
            const htmlContent = tokens.map((token) => {
              return `
          <div class="token">
            <span class="title bold">${token.surface_form}</span>
            <span class="reading">\u8AAD\u307F\uFF1A${token.reading || "N/A"}</span>
            <span class="pos">\u54C1\u8A5E\uFF1A${token.pos}</span>
            <span class="basic_form">\u57FA\u672C\u5F62\uFF1A${token.basic_form}</span>
          </div>
        `;
            }).join("");
            resultDiv.innerHTML = htmlContent;
          }
        };
      };
      var textList = [
        "\u3059\u3082\u3082\u3082\u3082\u3082\u3082\u3082\u3082\u306E\u3046\u3061",
        "\u543E\u8F29\u306F\u732B\u3067\u3042\u308B\u3002\u540D\u524D\u306F\u307E\u3060\u7121\u3044\u3002",
        "\u56FD\u5883\u306E\u9577\u3044\u30C8\u30F3\u30CD\u30EB\u3092\u629C\u3051\u308B\u3068\u96EA\u56FD\u3067\u3042\u3063\u305F\u3002",
        "\u4EBA\u9593\u5931\u683C\u3002",
        "\u305D\u306E\u65E5\u3001\u5098\u3092\u3055\u3055\u305A\u306B\u5C0F\u4F9B\u306F\u5F80\u6765\u3092\u99C8\u3051\u3066\u884C\u3063\u305F\u3002",
        "\u667A\u306B\u50CD\u3051\u3070\u89D2\u304C\u7ACB\u3064\u3002\u60C5\u306B\u68F9\u3055\u305B\u3070\u6D41\u3055\u308C\u308B\u3002",
        "\u5C71\u6912\u9B5A\u306F\u60B2\u3057\u3093\u3060\u3002",
        "\u9280\u6CB3\u9244\u9053\u306E\u591C\u3002",
        "\u98A8\u7ACB\u3061\u306C\u3001\u3044\u3056\u751F\u304D\u3081\u3084\u3082\u3002",
        "\u3059\u3079\u3066\u306E\u904E\u53BB\u306F\u3001\u30D7\u30ED\u30ED\u30FC\u30B0\u306B\u3059\u304E\u306A\u3044\u3002",
        "\u6708\u304C\u304D\u308C\u3044\u3067\u3059\u306D\u3002"
      ];
      function getRandomExcerpt() {
        const randomIndex = Math.floor(Math.random() * textList.length);
        return textList[randomIndex];
      }
      var initText = getRandomExcerpt();
      document.querySelector("#text").value = initText;
      builder.build(processText(initText));
      document.querySelector("#text").addEventListener("keydown", (e) => {
        setTimeout(() => {
          const text = e.target.value;
          builder.build(processText(text));
        }, 900);
      });
    }
  });
  require_script();
})();
