
# TAGS HTML PARA UTILIZAÇÃO NOS ARTIGOS:
# =====================================

    Utilizar a tag:
        <p></p>

    Formatação especial:
        <b></b>         ... Bold
        <i></i>         ... Italic
        <sub></sub>     ... Subscrito
        <sup></sup>     ... Sobrescrito
        <small></small> ... Texto pequeno
        <code></code>   ... Código computador (com fundo)

    Link:
        <a href="https://journey-dev-br.github.io/journey-examples/TipsCssA00001" 
            target="_blank" class="a-link">Exemplo do Artigo</a>

    Style classes:
        class="article-title"       ... titulo do artigo
        class="a-link"              ... para links

# BOX DE CÓDIGO COPIÁVEL - COPY CODE:
# ==================================

# Utilizar o trecho abaixo:
# ------------------------

    <!-- Box Copy Code 1 -->
    <div class="box-code">
        <div class="box-text" id="copy-code-1">
            ng new app-exemplo
        </div>
        <div id="icon-copy-1"><style onload="clickCopyCode('copy-code-1','icon-copy-1')"></style></div>
    </div>  

# Para colorir o código dentro do copy code:
# ----------------------------------------- 

    <span style="color: yellow"></span>
    Cores:
    67cdfe   ... Azul escuro
    e9c46a   ... Amarelo 
    90be6d   ... Verde
    e07a5f   ... Marrom
    ffffff   ... Branco

# Para nova linha: 
# ---------------
    <br>

# Caracteres especiais:
# --------------------
    &nbsp;   ... Espaço
    &#35;    ... #
    &#34;    ... "
    &#39;    ... '
    &#123;   ... {
    &#125;   ... }
    &#60;    ... <
    &#62;    ... >
    &#61;    ... =
    &#91;    ... [
    &#93;    ... ]
    &#92;    ... \
    &#47;    ... /
    &#40;    ... (
    &#41;    ... )

    Exemplo de aplicação no arquivo .html do Artigo:
        import &#123; React &#125; from './react'<br>

# INCLUSÃO DE VIDEO DO YOUTUBE:
# ============================

# Utilizar o trecho abaixo:
# ------------------------

    <p class="article-title">Veja o video deste Artigo</p>
    <div class="article-youtube">
        <iframe src="https://www.youtube.com/embed/_SKQZLvBe_4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

# INCLUSÃO DE TEXTO DINAMICAMENTE:
# ===============================

# Utilizar o trecho abaixo:       (Obs.: Utiliza a função IncludeTextArticle() do index.html)
# ------------------------

    <p id="id-html-include"></p>
    <style onload="IncludeTextArticle(
    '<span class=&#34; box-text &#34;>' +
        'URL.....: ' + window.location.href + '<br>' +
        'Path....: ' + window.location.pathname + '<br>' +
        'Host....: ' + window.location.host + '<br>' +
        'Hostname: ' + window.location.hostname + '<br>' +
        'Origin..: ' + window.location.origin + '<br>' +
        'Port....: ' + window.location.port + '<br>' +
    '</span>'       
    )"></style>    
