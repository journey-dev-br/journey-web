
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

    <div class="box-code">
        <div class="box-text" id="article-text-a0300400001-2">
    class="font-size-14"<br>
    class="outro-css font-size-20"
        </div>
        <div class="box-icon">
            <a onclick="CopyTextCode('article-text-a0300400001-2')">
                <img src="https://journey-dev-br.github.io/journey-api/desenv/icons/content_copy_white_18dp.png" width=18 height=18>
            </a>
        </div>
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
    &#123;   ... {
    &#125;   ... }

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
    '<span class=&#34; text-mono &#34;>' +
        'URL.....: ' + window.location.href + '<br>' +
        'Path....: ' + window.location.pathname + '<br>' +
        'Host....: ' + window.location.host + '<br>' +
        'Hostname: ' + window.location.hostname + '<br>' +
        'Origin..: ' + window.location.origin + '<br>' +
        'Port....: ' + window.location.port + '<br>' +
    '</span>'       
    )"></style>    
